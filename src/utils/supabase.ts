import { createClient } from '@supabase/supabase-js';
import { Database } from '../database.types';

export const supabase = createClient<Database>(
  'https://cnyvbsnuszemjyrkveua.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNueXZic251c3plbWp5cmt2ZXVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxNTUzMDAsImV4cCI6MjAyOTczMTMwMH0.XmCeB572qr1oKyEY1-kDIEWy4LB4OMj-cPfPwZPZ0RE'
);
