const GLEAN_IMG = "https://app.glean.com/images";

const PROCORE = { letter: "P", color: "#F15A29" };

export const flows = [
  /* ═══════════════════════════════════════════════════════
   * FLOW 0 — IT / Service Desk
   * ═══════════════════════════════════════════════════════ */
  {
    id: "it",
    persona: {
      title: "IT / Service Desk",
      subtitle: "Director of IT Services",
    },
    greeting: "Good afternoon",
    userQuery:
      "A new field superintendent starts Monday on our Phoenix data center project. What access, devices, and software should we provision, who needs to approve it, and what can we automate right now?",

    aiResponse: `Here's your **new hire provisioning overview** for the Phoenix Data Center project field superintendent starting Monday:

**1. Required Access & Software**
Based on the Field Superintendent role profile and Phoenix DC project configuration, the following should be provisioned on Day 1:
- **M365** (Exchange, Teams, OneDrive) — standard company license
- **Procore** — project-level access for Phoenix DC Campus; recommended role is "Project Manager" to allow RFI and submittal review¹
- **Bluebeam Revu** — confirm whether standard or Studio license is needed for external subcontractor collaboration
- **VPN (GlobalProtect)** — required for remote SharePoint and ServiceNow access from the field
- **Procore Safety** — mandatory for all field personnel on active job sites; auto-enrollment can be triggered via ServiceNow workflow²

**2. Approvals Required**
| Access | Approver | SLA |
|--------|----------|-----|
| Procore Admin Rights | Project Executive | 1 business day |
| Device Exception (non-standard laptop) | IT Manager | 2 business days |
| Elevated External Sharing | Information Security | 3 business days |
| VPN + M365 License | Helpdesk auto-approval | Same-day |³

**3. Known Blockers**
- **Laptop lead time**: The standard field configuration (Dell Latitude 5540 ruggedized) currently has a 5-business-day lead time from IT supply — this request should go in immediately if not already in flight
- **Cost-code access**: Phoenix DC has non-standard cost codes due to its joint-venture structure; Procore cost-code access requires manual configuration by the project controls team
- **No standard template for field hires**: Existing ServiceNow provisioning templates are scoped to office roles; a Field Superintendent profile does not yet exist in the request catalog³

**4. Recommended Next Step**
Generating a consolidated ServiceNow request bundle with pre-populated approvers would collapse the current 3-ticket manual process and reduce average provisioning time from 4.2 days to same-day for standard access items. The bundle can also trigger an Okta group assignment for the "Construction Field" role automatically.⁴

Would you like me to draft the ServiceNow request bundle and approval checklist now?`,

    sources: [
      {
        id: 1,
        title: "Field New Hire Provisioning SOP",
        subtitle: "ServiceNow · IT Service Desk",
        iconUrl: `${GLEAN_IMG}/logos/servicenow.svg`,
        iconFallback: null,
        author: "Raj Patel",
        excerpt:
          "Procore project-level access for Phoenix DC should be provisioned at the 'Project Manager' role. Auto-enrollment in Procore Safety is triggered via ServiceNow workflow for all field personnel on active sites.",
      },
      {
        id: 2,
        title: "Construction Roles Access Matrix",
        subtitle: "Okta · Identity & Access",
        iconUrl: `${GLEAN_IMG}/logos/okta.svg`,
        iconFallback: null,
        author: "Dana Marsh",
        excerpt:
          "Field Superintendent maps to the 'Construction Field' Okta group. Provisioning this group grants M365, VPN, and Procore Safety access automatically. Procore Admin Rights require a separate Project Executive approval.",
      },
      {
        id: 3,
        title: "Superintendent Day 1 Checklist — Phoenix DC",
        subtitle: "SharePoint · Project Ops",
        iconUrl: `${GLEAN_IMG}/logos/sharepoint.svg`,
        iconFallback: null,
        author: "Kelsey Monroe",
        excerpt:
          "Known blockers for Phoenix DC field hires: laptop lead time 5 business days, non-standard cost codes requiring manual Procore config, no standard ServiceNow template for field superintendent role.",
      },
      {
        id: 4,
        title: "Phoenix DC Onboarding Thread",
        subtitle: "Teams · Phoenix DC Project",
        iconUrl: `${GLEAN_IMG}/logos/microsoft-teams.svg`,
        iconFallback: null,
        author: "Marcus Liu",
        excerpt:
          "Current 3-ticket provisioning process averages 4.2 days. A consolidated ServiceNow bundle with pre-populated approvers could reduce this to same-day for standard access items and trigger Okta group assignment automatically.",
      },
    ],

    followUpQuery:
      "Generate a draft ServiceNow request bundle and approval checklist for the Phoenix DC superintendent onboarding",

    chatHistory: {
      today: ["New Hire Provisioning — Phoenix DC..."],
      recent: [
        "Password Reset Trends — Q1...",
        "Laptop Replacement Policy...",
        "M365 Access Matrix...",
        "VPN Troubleshooting Guide...",
        "Software Approval Workflow...",
        "Okta Group Audit — Field...",
      ],
    },

    showWork: {
      searchQuery:
        "field superintendent onboarding provisioning Phoenix approvals",
      searching: [
        {
          icon: `${GLEAN_IMG}/logos/servicenow.svg`,
          iconFallback: null,
          label: "Field New Hire Provisioning SOP...",
        },
        {
          icon: `${GLEAN_IMG}/logos/okta.svg`,
          iconFallback: null,
          label: "Construction Roles Access Matrix...",
        },
        { icon: null, iconFallback: null, label: "+8 more" },
      ],
      reading: [
        {
          icon: `${GLEAN_IMG}/logos/servicenow.svg`,
          iconFallback: null,
          label: "Field New Hire Provisioning SOP...",
        },
        {
          icon: `${GLEAN_IMG}/logos/sharepoint.svg`,
          iconFallback: null,
          label: "Superintendent Day 1 Checklist...",
        },
        {
          icon: `${GLEAN_IMG}/logos/microsoft-teams.svg`,
          iconFallback: null,
          label: "Phoenix DC Onboarding Thread...",
        },
      ],
      synthesizing: {
        icon: `${GLEAN_IMG}/logos/servicenow.svg`,
        iconFallback: null,
        label: "Provisioning Summary",
        note: "Cross-referencing 4 primary sources across ServiceNow, Okta, SharePoint, and Teams to compile a complete provisioning and approval overview.",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════
   * FLOW 1 — Project / Field Ops
   * ═══════════════════════════════════════════════════════ */
  {
    id: "project",
    persona: {
      title: "Project / Field Ops",
      subtitle: "Project Manager / Superintendent",
    },
    greeting: "Good afternoon",
    userQuery:
      "For Project Atlas, summarize the top schedule risks, open RFIs and submittals, and any recent field issues that could impact next week's owner update.",

    aiResponse: `Here's your **Project Atlas risk summary** ahead of next week's owner update:

**Top 3 Schedule Risks**

**1. Switchgear Submittal Lag — Critical Path Impact**
The main switchgear submittal (ITO-E-0041) has been open for 47 days — 12 days past the contractual review cycle. Vendor Eaton has flagged a revised shop drawing resubmission date of March 21, putting energization of the Level 3 electrical room at risk by 18–22 days. This is the highest-priority item for owner discussion.¹²

**2. Unresolved Structural Penetration RFIs**
Three RFIs (RFI-0187, RFI-0188, RFI-0193) on the Level 4 mechanical deck are awaiting A/E response at 9, 11, and 14 days respectively. Mechanical subcontractor Limbach has flagged that the Level 4 slab pour cannot proceed until RFI-0188 is resolved. Estimated schedule impact: 5–8 days if not addressed by Friday.¹

**3. Weather-Driven Concrete Resequencing**
Forecasted precipitation the week of March 17 conflicts with the planned Level 5 deck pour. The superintendent has requested resequencing to pour Level 3 south bay first — but this requires a temporary crane relocation not yet approved by the project executive.³

**What Needs a Decision This Week**
- Release the alternate penetration detail for RFI-0188 (A/E action)
- Approve the temporary crane resequencing plan (Project Executive action)
- Escalate the Eaton switchgear commitment date to procurement (PM action)²

**Owner-Ready Summary**
The project remains on schedule overall with three items requiring near-term resolution. The team is actively managing switchgear delivery coordination, structural detail clarifications, and weather contingency planning. No change orders are anticipated at this time, and the current substantial completion date of October 14 is intact pending this week's decisions.¹²

Would you like me to draft the owner update email based on this summary?`,

    sources: [
      {
        id: 1,
        title: "Project Atlas — RFI Log",
        subtitle: "Procore · Project Atlas",
        iconUrl: null,
        iconFallback: PROCORE,
        author: "Procore · Field Ops",
        excerpt:
          "RFI-0187, RFI-0188, RFI-0193 open on Level 4 mechanical deck at 9, 11, and 14 days. Limbach flagged Level 4 slab pour cannot proceed until RFI-0188 is resolved. Estimated impact: 5–8 days.",
      },
      {
        id: 2,
        title: "Project Atlas — Submittal Register",
        subtitle: "Procore · Project Atlas",
        iconUrl: null,
        iconFallback: PROCORE,
        author: "Procore · Field Ops",
        excerpt:
          "Switchgear submittal ITO-E-0041 open 47 days, 12 days past contractual cycle. Eaton resubmission date revised to March 21. Level 3 electrical room energization at risk by 18–22 days.",
      },
      {
        id: 3,
        title: "Atlas OAC Coordination Thread",
        subtitle: "Teams · Atlas Project Team",
        iconUrl: `${GLEAN_IMG}/logos/microsoft-teams.svg`,
        iconFallback: null,
        author: "Sarah Okonkwo",
        excerpt:
          "Superintendent requested resequencing to Level 3 south bay pour due to March 17 weather forecast. Temporary crane relocation required — project executive approval pending.",
      },
      {
        id: 4,
        title: "Owner Update Notes — March 6",
        subtitle: "Outlook · Project Atlas",
        iconUrl: `${GLEAN_IMG}/logos/outlook.svg`,
        iconFallback: null,
        author: "James Whitfield",
        excerpt:
          "Substantial completion date October 14 remains intact. No change orders anticipated at this time. Switchgear, RFI-0188, and crane resequencing are the three items requiring owner awareness this cycle.",
      },
    ],

    followUpQuery:
      "Draft the owner update email for the Project Atlas OAC meeting next Thursday",

    chatHistory: {
      today: ["Project Atlas Risk Summary..."],
      recent: [
        "Open RFIs — Level 3 Mech...",
        "Submittal Delays — Switchgear...",
        "Safety Walk Notes — Week 10...",
        "Owner Update Draft...",
        "Concrete Pour Issues...",
        "Lakeview Compute — Schedule...",
      ],
    },

    showWork: {
      searchQuery:
        "Project Atlas schedule risks RFI submittal field issues",
      searching: [
        {
          icon: null,
          iconFallback: PROCORE,
          label: "Project Atlas — RFI Log...",
        },
        {
          icon: null,
          iconFallback: PROCORE,
          label: "Project Atlas — Submittal Register...",
        },
        { icon: null, iconFallback: null, label: "+7 more" },
      ],
      reading: [
        {
          icon: null,
          iconFallback: PROCORE,
          label: "Project Atlas — RFI Log...",
        },
        {
          icon: null,
          iconFallback: PROCORE,
          label: "Project Atlas — Submittal Register...",
        },
        {
          icon: `${GLEAN_IMG}/logos/microsoft-teams.svg`,
          iconFallback: null,
          label: "Atlas OAC Coordination Thread...",
        },
      ],
      synthesizing: {
        icon: null,
        iconFallback: PROCORE,
        label: "Project Risk Summary",
        note: "Cross-referencing 4 primary sources across Procore, Teams, and Outlook to compile a complete project risk and owner update brief.",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════
   * FLOW 2 — Preconstruction / Business Development
   * ═══════════════════════════════════════════════════════ */
  {
    id: "preconstruction",
    persona: {
      title: "Preconstruction / Biz Dev",
      subtitle: "Pursuit Lead / Preconstruction Director",
    },
    greeting: "Good afternoon",
    userQuery:
      "Help me prepare for a pursuit review on a new hyperscale data center opportunity: summarize the client, similar Clayco projects, likely differentiators, and the biggest proposal risks.",

    aiResponse: `Here's your **pursuit brief** for the hyperscale data center opportunity:

**Client Snapshot**
The client is a Tier 1 hyperscale operator expanding their US compute footprint with three new campuses planned over 36 months. They are evaluating design-build contractors with demonstrated speed-to-power capability and mission-critical self-perform MEP. The RFP emphasizes schedule certainty above cost, and the client has explicitly referenced a competitor's cost overruns on a prior campus as a key disqualifying factor in their evaluation criteria.¹²

**Most Relevant Prior Clayco Work**
- **Lakeview Compute Center** (240 MW, delivered 2023) — 14 months from GMP to energization, beat schedule by 22 days. Key proof point: self-perform electrical reduced switchgear coordination risk and eliminated one layer of subcontractor interface.³
- **Phoenix DC Campus** (currently active, 180 MW) — demonstrates live hyperscale execution capacity and familiarity with phased commissioning and utility coordination at scale.
- **Project Nova** (comparable MEP complexity, 2022) — structural steel self-perform reduced schedule by 6 weeks vs. a traditional sub model on a similar footprint.¹

**Likely Differentiators**
- **Speed-to-site**: The Clayco Compute business unit provides dedicated preconstruction and procurement resources not available through traditional general contractors
- **Integrated delivery**: Design-build structure eliminates A/E coordination lag that adds 4–8 weeks on comparable pursuits
- **Self-perform MEP**: Reduces subcontractor dependency on long-lead electrical gear — the #1 schedule driver for hyperscale
- **Mission-critical portfolio**: Six active or recently delivered data center campuses across the Midwest and Southwest¹

**Biggest Proposal Risks**
- **Utility coordination**: Campus power delivery is contingent on a utility substation upgrade with a timeline not yet confirmed; GMP assumptions should explicitly address this risk²
- **Procurement long-leads**: Switchgear and transformer lead times are currently 52–65 weeks — early procurement language and cost escalation clauses are essential
- **Schedule guarantee language**: The client is sensitized to missed commitments; any schedule guarantee requires executive sign-off before proposal submission
- **Labor assumptions**: The Phoenix/Chandler market has tightening craft availability for electricians and ironworkers entering 2026²⁴

Would you like me to build an exec prep one-pager for the pursuit review meeting?`,

    sources: [
      {
        id: 1,
        title: "Mission Critical Pursuit Archive",
        subtitle: "SharePoint · Preconstruction",
        iconUrl: `${GLEAN_IMG}/logos/sharepoint.svg`,
        iconFallback: null,
        author: "Tara Nguyen",
        excerpt:
          "Lakeview Compute Center: 240 MW delivered 2023, beat schedule by 22 days. Self-perform electrical eliminated one subcontractor interface layer. Project Nova: self-perform structural steel saved 6 weeks vs. sub model.",
      },
      {
        id: 2,
        title: "Similar Delivered Projects — Data Center",
        subtitle: "Procore · Portfolio",
        iconUrl: null,
        iconFallback: PROCORE,
        author: "Procore · Preconstruction",
        excerpt:
          "Phoenix DC Campus active at 180 MW. Lakeview Compute Center closed 2023. Client evaluation criteria emphasize schedule certainty; competitor cost overruns on prior campus are an explicit disqualifier in RFP scoring.",
      },
      {
        id: 3,
        title: "Compute Pursuit War Room",
        subtitle: "Teams · Clayco Compute",
        iconUrl: `${GLEAN_IMG}/logos/microsoft-teams.svg`,
        iconFallback: null,
        author: "Derek Solano",
        excerpt:
          "Biggest proposal risks flagged by preconstruction: utility substation upgrade timeline unconfirmed, switchgear lead times 52–65 weeks, Phoenix craft labor tightening. Schedule guarantee language needs exec review.",
      },
      {
        id: 4,
        title: "Hyperscale Market Update — Q1 2026",
        subtitle: "Web · Market Research",
        iconUrl: `${GLEAN_IMG}/feather/globe.svg`,
        iconFallback: null,
        author: "Web Search",
        excerpt:
          "Tier 1 hyperscale operators are accelerating US data center build-out in 2026, driven by AI compute demand. Speed-to-power and self-perform MEP are the top contractor selection criteria across recent procurements.",
      },
    ],

    followUpQuery:
      "Build an exec prep one-pager for the hyperscale data center pursuit review",

    chatHistory: {
      today: ["Hyperscale Pursuit Brief..."],
      recent: [
        "Similar Wins — Mission Critical...",
        "Proposal Boilerplate — Data Center...",
        "Competitive Intel — DPR / Turner...",
        "Client Meeting Notes...",
        "Past GMP Lessons Learned...",
        "Lakeview Compute — Final RFP...",
      ],
    },

    showWork: {
      searchQuery:
        "hyperscale data center pursuit similar projects differentiators risks",
      searching: [
        {
          icon: `${GLEAN_IMG}/logos/sharepoint.svg`,
          iconFallback: null,
          label: "Mission Critical Pursuit Archive...",
        },
        {
          icon: null,
          iconFallback: PROCORE,
          label: "Similar Delivered Projects — DC...",
        },
        { icon: null, iconFallback: null, label: "+5 more" },
      ],
      reading: [
        {
          icon: `${GLEAN_IMG}/logos/sharepoint.svg`,
          iconFallback: null,
          label: "Mission Critical Pursuit Archive...",
        },
        {
          icon: null,
          iconFallback: PROCORE,
          label: "Similar Delivered Projects — DC...",
        },
        {
          icon: `${GLEAN_IMG}/feather/globe.svg`,
          iconFallback: null,
          label: "Hyperscale Market Update — Q1...",
        },
      ],
      synthesizing: {
        icon: `${GLEAN_IMG}/logos/sharepoint.svg`,
        iconFallback: null,
        label: "Pursuit Brief",
        note: "Cross-referencing 4 primary sources across SharePoint, Procore, Teams, and web search to compile a pursuit brief with client context, comparable projects, and risk flags.",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════
   * FLOW 3 — Executive / Innovation
   * ═══════════════════════════════════════════════════════ */
  {
    id: "executive",
    persona: {
      title: "Executive / Innovation",
      subtitle: "CIO / VP Innovation",
    },
    greeting: "Good afternoon",
    userQuery:
      "Across IT and project delivery, where are we losing the most time today, and what are the first three Glean agents we should launch in the next 30 days to create visible wins?",

    aiResponse: `Here's your **cross-functional AI opportunity analysis** across IT and project delivery:

**Where Clayco Is Losing the Most Time Today**

**1. L1 IT Questions & Ticket Volume**
ServiceNow analytics show 1,847 tickets in the past 90 days were resolvable with a documented SOP — 62% of total L1 volume. Average resolution time is 4.1 hours despite existing documentation. Top categories: password resets (23%), software access requests (19%), VPN troubleshooting (14%), and new hire provisioning (11%). None of these require human judgment to resolve.¹

**2. Fragmented Project Knowledge**
Across the active portfolio, project managers report spending an average of 2.3 hours per week reconstructing context that already exists in Procore, Teams, and Outlook — primarily for owner update prep, RFI and submittal status, and risk identification. There is no aggregation layer; every PM rebuilds their own summary manually each cycle.²

**3. Repetitive Owner & Proposal Drafting**
Preconstruction and field teams are rewriting versions of the same 4–5 document types (owner update emails, GMP letters, RFP response boilerplate, daily field reports) from scratch on every project. SharePoint analysis shows 80%+ content overlap between documents of the same type across projects.³

**First 3 Glean Agents to Launch**

| Agent | Target User | Est. Time Saved | Launch Window |
|-------|-------------|-----------------|---------------|
| IT Provisioning Copilot | Helpdesk / IT Director | 12–18 hrs/week | Week 1–2 |
| Project Risk Recap Copilot | Project Managers | 8–12 hrs/week | Week 3–4 |
| Pursuit Brief Copilot | Preconstruction / BD | 6–10 hrs/week | Week 5–6 |

**Rollout Plan**
IT first — fastest ROI, lowest change management lift, and visible ticket deflection metrics within 2 weeks. PM pilot second — 3 project teams, measure hours saved on owner update prep and RFI status aggregation. Exec recap third — positions Glean as the operating system for leadership visibility across the portfolio.⁴

**Success Measures**
- Ticket deflection rate: target 40% L1 resolution without human intervention within 60 days
- PM context-building time: target 50% reduction by end of PM pilot
- Proposal reuse rate: target 3× increase in boilerplate reuse within first quarter¹⁴

Would you like me to draft the Glean pilot launch plan and 30-day success scorecard?`,

    sources: [
      {
        id: 1,
        title: "Ticket Theme Dashboard — Q1 2026",
        subtitle: "ServiceNow · IT Analytics",
        iconUrl: `${GLEAN_IMG}/logos/servicenow.svg`,
        iconFallback: null,
        author: "Operations Analytics",
        excerpt:
          "1,847 L1 tickets in 90 days resolvable via SOP (62% of total). Average resolution: 4.1 hours. Top categories: password resets 23%, software access 19%, VPN 14%, new hire provisioning 11%.",
      },
      {
        id: 2,
        title: "Portfolio Issue Summary — Active Projects",
        subtitle: "Procore · Portfolio View",
        iconUrl: null,
        iconFallback: PROCORE,
        author: "Procore · Analytics",
        excerpt:
          "PMs average 2.3 hours/week reconstructing context from Procore, Teams, and Outlook for owner updates and risk identification. No aggregation layer exists; every PM rebuilds manually each cycle.",
      },
      {
        id: 3,
        title: "AI Steering Committee Notes — Feb 2026",
        subtitle: "Teams · AI Steering Committee",
        iconUrl: `${GLEAN_IMG}/logos/microsoft-teams.svg`,
        iconFallback: null,
        author: "CIO Office",
        excerpt:
          "Preconstruction and field teams rewrite the same 4–5 document types from scratch on every project. SharePoint analysis shows 80%+ content overlap across same-type documents. Three pilot agents proposed: IT provisioning, project risk recap, pursuit brief.",
      },
      {
        id: 4,
        title: "Onboarding & SOP Collection — All Depts",
        subtitle: "SharePoint · Knowledge Management",
        iconUrl: `${GLEAN_IMG}/logos/sharepoint.svg`,
        iconFallback: null,
        author: "Kelsey Monroe",
        excerpt:
          "Target success measures: 40% L1 deflection within 60 days, 50% reduction in PM context-building time, 3× increase in proposal boilerplate reuse within Q1 of rollout.",
      },
    ],

    followUpQuery:
      "Draft the Glean pilot launch plan and 30-day success scorecard",

    chatHistory: {
      today: ["30-Day AI Wins..."],
      recent: [
        "Ticket Theme Analysis...",
        "Project Delivery Friction Points...",
        "Meeting Recap — AI Steering...",
        "New Hire Ramp Issues...",
        "Knowledge Gaps by Department...",
        "Clayco Compute — AI Strategy...",
      ],
    },

    showWork: {
      searchQuery:
        "time loss IT project delivery repetitive work pilot 30 day wins",
      searching: [
        {
          icon: `${GLEAN_IMG}/logos/servicenow.svg`,
          iconFallback: null,
          label: "Ticket Theme Dashboard — Q1...",
        },
        {
          icon: null,
          iconFallback: PROCORE,
          label: "Portfolio Issue Summary — Active...",
        },
        { icon: null, iconFallback: null, label: "+7 more" },
      ],
      reading: [
        {
          icon: `${GLEAN_IMG}/logos/servicenow.svg`,
          iconFallback: null,
          label: "Ticket Theme Dashboard — Q1...",
        },
        {
          icon: null,
          iconFallback: PROCORE,
          label: "Portfolio Issue Summary — Active...",
        },
        {
          icon: `${GLEAN_IMG}/logos/microsoft-teams.svg`,
          iconFallback: null,
          label: "AI Steering Committee Notes...",
        },
      ],
      synthesizing: {
        icon: `${GLEAN_IMG}/logos/servicenow.svg`,
        iconFallback: null,
        label: "Executive Rollout Recommendation",
        note: "Cross-referencing 4 primary sources across ServiceNow, Procore, Teams, and SharePoint to compile a cross-functional time-loss analysis and agent prioritization recommendation.",
      },
    },
  },
];
