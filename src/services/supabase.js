import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fpdrinmhrxjbicqmulwp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwZHJpbm1ocnhqYmljcW11bHdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1NDE5MzAsImV4cCI6MjA1NzExNzkzMH0.cZJaJu8DN0izwLuxoVhJTDBgA5egO95qyt_8PBfLTR0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
