import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://yvowfjitgoevxzenreqk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2b3dmaml0Z29ldnh6ZW5yZXFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5MzQ3OTIsImV4cCI6MjA1NTUxMDc5Mn0.LlthelBU8CWWJ6Ymow5Sd2nvfAT92e_lzXi8ngm5piY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
