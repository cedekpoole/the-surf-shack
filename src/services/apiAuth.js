import supabase from "./supabase";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error);
    throw new Error("Login failed");
  }

  return data;
}

export async function getCurrentUser() {
  const { data: session, error: sessionError } =
    await supabase.auth.getSession();
  if (sessionError) throw new Error(sessionError.message);
  if (!session?.session) return null;
  const { data: user, error: userError } = await supabase.auth.getUser();
  if (userError) throw new Error(userError.message);
  return user?.user;
}

export async function logout() {
  let { error } = await supabase.auth.signOut();
  if (error) throw new Error("Logout failed");
}
