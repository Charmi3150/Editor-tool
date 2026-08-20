# Carmi Editor

Beginscherm (`index.html`) met tegeltjes naar de 4 tools:

- `stikker.html` — stopmotion camera
- `kronkellijn.html` — tekst op een golvende lijn (synct via Supabase, zie hieronder)
- `stack-reel.html` — video's stapelen
- `scrapt.html` — post studio

## Op je telefoon als app-icoon zetten

Open `index.html` in Safari (iPhone) of Chrome (Android) → deel-knop → **"Zet op beginscherm"**.
Je krijgt dan één teal "C"-icoontje op je thuisscherm dat de hele tool opent.

## Deployen via GitHub + Vercel

1. Zet deze map in een nieuwe GitHub-repository (gewoon alle bestanden committen, geen buildstap nodig).
2. Ga naar [vercel.com](https://vercel.com) → **New Project** → kies je repository.
3. Framework preset: **Other** (het is gewoon een statische site). Build command en output directory mag je leeg laten.
4. Deploy. Je krijgt een `https://...vercel.app` link die op telefoon én computer werkt.

## Supabase instellen (zodat projecten meesynchen tussen je apparaten)

1. Maak een gratis project op [supabase.com](https://supabase.com).
2. Ga naar **SQL Editor** en plak de volledige SQL die je apart hebt gekregen — run die in één keer.
3. Ga naar **Project Settings → API**, kopieer de **Project URL** en de **anon public key**.
4. Open `supabase-config.js` in deze map en vul die twee waarden in.
5. Commit + push (of upload opnieuw naar Vercel).

Wat er dan gebeurt per tool:

- **Kronkellijn** — projecten (tekst/instellingen) worden automatisch bij elke "Opslaan" ook naar Supabase weggeschreven. Werkt meteen op elk apparaat.
- **Scrapt** — nieuwe knop "Projecten" in de bovenbalk: naam geven, opslaan, en het staat op al je apparaten.
- **Stikker** — foto's/video's zijn te groot voor een gewone tabel, die gaan naar Supabase **Storage** (bucket `stikker-media`, wordt door de SQL aangemaakt). Synchroniseren gebeurt **niet automatisch** na elke foto (te zwaar tijdens het filmen) — druk op het ☁-icoontje op een projectkaart om dat project naar de cloud te sturen. Open je Stikker op een ander toestel, dan verschijnt dat project met een ⬇-download-knop.

Zonder deze stap werkt alles gewoon door zoals voorheen (projecten blijven dan lokaal op dat ene toestel bewaard).
