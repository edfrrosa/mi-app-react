import { supabase } from "./supabaseClient";
import { Item } from "../Type/items"

export async function getFrutas(): Promise<Item[]> {
  const { data, error } = await supabase
    .from("Frutas")
    .select("id, Nombre");
    console.log("Respuesta Supabase:", { data, error });

  if (error) {
    console.error("Error al traer frutas:", error);
    return [];
  }
  return data || [];
}