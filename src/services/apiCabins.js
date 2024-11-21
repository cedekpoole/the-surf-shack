import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export async function createCabin(cabin) {
  const imageName = `${Math.random()}.jpg-${cabin.image.name}`.replaceAll(
    "/",
    ""
  );

  // https://ebzzdomqsbizhnkdjxva.supabase.co/storage/v1/object/public/cabin-images/cabin-003.jpg

  //1. create the cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([cabin])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2. upload the image

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
