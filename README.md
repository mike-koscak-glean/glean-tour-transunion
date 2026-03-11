# Glean × Clayco — Vision Demo

A personalized, scripted demo that simulates the Glean AI Assistant experience tailored for Clayco's CIO and innovation leadership team.

## What It Does

This app walks viewers through four construction-specific personas, each with a pre-loaded query, an animated AI response with inline citations, a collapsible "Show work" trace, and source cards — demonstrating how Glean would work across Clayco's real systems.

## Personas

| Persona | Role | Key Systems |
|---------|------|------------|
| **IT / Service Desk** | Director of IT Services | ServiceNow, Okta, SharePoint, Teams |
| **Project / Field Ops** | Project Manager / Superintendent | Procore, Teams, Outlook |
| **Preconstruction / Biz Dev** | Pursuit Lead / Preconstruction Director | SharePoint, Procore, Teams, Web |
| **Executive / Innovation** | CIO / VP Innovation | ServiceNow, Procore, Teams, SharePoint |

## Deep Links

Each persona has a direct URL:

- `/it` — IT / Service Desk
- `/project` — Project / Field Ops
- `/preconstruction` — Preconstruction / Biz Dev
- `/executive` — Executive / Innovation

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Deploy

Deployed on Vercel. Push to `main` to trigger a new deployment.

```bash
npm run build
```

---

*Prepared for Clayco by the Glean team*
