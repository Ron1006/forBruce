import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://gcxlxcsvsbbixrjxboxb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjeGx4Y3N2c2JiaXhyanhib3hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0NTQxNTgsImV4cCI6MjAzMzAzMDE1OH0.xGKYkaXkfK3mpN4EJGziiZXH320Hd-_njdo6db5d0XQ';

const supabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabaseClient;