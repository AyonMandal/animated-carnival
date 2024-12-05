import { supabase } from "@/lib/supabase";

export const getUserData = async (userId: string) => {
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("id", userId);
  if (error) {
    throw error;
  }
  console.log(data);
  return data;
};
