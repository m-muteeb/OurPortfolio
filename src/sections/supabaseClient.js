import { createClient } from '@supabase/supabase-js'

// Get the URL and Anon key from the environment variables
const supabaseUrl = "https://nedkdesgmhoxxntmwacl.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lZGtkZXNnbWhveHhudG13YWNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwNDI1NDUsImV4cCI6MjA2OTYxODU0NX0.tLgybzSItsl8FPb_5rnp1r0DxQ9UbUkgOr0zIQMxAI8"

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);