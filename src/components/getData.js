import { supabase } from "../client.js";
export default async function getData() {
  const { data } = await supabase
    .from("creators")
    .select()
    .order("id", { ascending: false });
  return data;
}
