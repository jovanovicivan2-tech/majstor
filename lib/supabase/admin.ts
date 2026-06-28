import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types'

/**
 * Admin klijent — SAMO za server-side i webhook handlere.
 * NIKAD ne uvoziti u client kod!
 */
export function createAdminClient() {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY nije definisan')
  }
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  )
}
