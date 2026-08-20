// ============================================================
// Supabase-configuratie voor Carmi
// ============================================================
// 1. Maak een gratis project op https://supabase.com
// 2. Ga naar: Project Settings > API
// 3. Kopieer "Project URL" en "anon public" key hieronder
// 4. Draai de SQL (die je apart hebt gekregen) in de SQL Editor van Supabase
//
// Deze twee waarden zijn OK om zichtbaar te staan in je frontend-code —
// de "anon" key mag altijd publiek zijn bij Supabase, de rechten worden
// geregeld via de RLS-policies in de SQL.
// ------------------------------------------------------------
const SUPABASE_URL = 'https://JOUW-PROJECT.supabase.co';
const SUPABASE_ANON_KEY = 'JOUW-ANON-KEY';
// ------------------------------------------------------------

window.sb = null;
try {
  if (!SUPABASE_URL.includes('JOUW-PROJECT') && !SUPABASE_ANON_KEY.includes('JOUW-ANON-KEY') && window.supabase) {
    window.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
} catch (e) {
  console.error('Supabase kon niet gestart worden:', e);
}

if (!window.sb) {
  console.warn(
    'Supabase is nog niet ingesteld (zie supabase-config.js) — ' +
    'projecten worden voorlopig alleen lokaal op dit toestel bewaard.'
  );
}
