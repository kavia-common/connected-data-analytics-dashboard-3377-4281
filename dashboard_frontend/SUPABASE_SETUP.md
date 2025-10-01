IMPORTANT: Supabase Configuration Required

1. Dashboard Settings
- Authentication > URL Configuration
  - Site URL: set to your domain or http://localhost:3000
  - Redirect URLs:
    * http://localhost:3000/**
    * https://yourapp.com/**
- Realtime:
  - Enable Realtime for tables: metrics, events

2. Environment Variables (CRA)
- REACT_APP_SUPABASE_URL=<your-project-url>
- REACT_APP_SUPABASE_KEY=<your-anon-or-service-role-key>
- REACT_APP_SITE_URL=<http://localhost:3000 or your domain>

3. Frontend Integration
- Supabase client: src/utils/supabaseClient.js
- URL utility: src/utils/getURL.js
- Auth helpers: src/utils/auth.js
- Auth callback route: /auth/callback via src/components/AuthCallback.js
- Realtime subscription example is provided in App.js (commented)

4. Schema SQL (run in Supabase SQL editor)
- See assets/supabase.md for full schema, RLS policies, and indexes.

5. Tooling Note
- If you wish to enable our automation to run SQL via RPC, create a safe RPC function as described in assets/supabase.md (run_sql_ro).
