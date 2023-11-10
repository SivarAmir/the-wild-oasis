import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lhkuboufqxrqeifinwrc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxoa3Vib3VmcXhycWVpZmlud3JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyOTc1NTQsImV4cCI6MjAxNDg3MzU1NH0.0yU8AB_aeforOErXlTow1fg0fkvWmnO_5nYhQCiLZrI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
