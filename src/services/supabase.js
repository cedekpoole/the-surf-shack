import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ebzzdomqsbizhnkdjxva.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVienpkb21xc2Jpemhua2RqeHZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzMjUxMTIsImV4cCI6MjA0NjkwMTExMn0.QjfJ7hEvhSLmIXAebu_ZF6Pu27qGXCQeQH77asvpQTA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
