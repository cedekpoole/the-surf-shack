import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .order("created_at", { ascending: true });
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export async function createEditCabin(cabin, id) {
  const hasImagePath = cabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}.jpg-${cabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? cabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // https://ebzzdomqsbizhnkdjxva.supabase.co/storage/v1/object/public/cabin-images/cabin-003.jpg

  //1. create/edit cabin
  let query = supabase.from("cabins");

  //a) CREATE cabin
  if (!id) {
    query = query.insert([{ ...cabin, image: imagePath }]);
  }

  //b) EDIT cabin
  if (id) {
    query = query.update({ ...cabin, image: imagePath }).eq("id", id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2. upload the image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabin.image);

  //3. delete cabin if there was an error uploading the image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data[0].id);
    throw new Error("Image could not be uploaded - the cabin was not created");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
