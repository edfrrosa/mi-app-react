import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kfwkfjhazqpgqvqqxojl.supabase.co";
const supabaseKey = "sb_publishable_gDwXzQfKa6g_rvpEVSwnRg_ZigUdXle";

export const supabase = createClient(supabaseUrl, supabaseKey);
console.log("Supabase client creado:", supabase);