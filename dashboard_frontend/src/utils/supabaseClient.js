import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  // eslint-disable-next-line no-console
  console.warn('Supabase env vars missing: REACT_APP_SUPABASE_URL or REACT_APP_SUPABASE_KEY');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
