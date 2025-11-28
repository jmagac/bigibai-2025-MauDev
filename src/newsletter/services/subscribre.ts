import { supabase } from "@/supabase";

const ERROR_CODE_ALREADY_EXISTS = "23505";

export const saveNewsletterEmail = async (email: string) => {
  const { data, error } = await supabase.from("newsletter").insert({ email });

  if (error?.code === ERROR_CODE_ALREADY_EXISTS) {
    return {
      duplicated: true,
      success: true,
      error: null,
    };
  }

  if (error) {
    return {
      duplicated: false,
      success: false,
      error: "Error al guardar el email en la newsletter",
    };
  }

  return {
    duplicated: false,
    success: true,
    error: null,
  };
};
