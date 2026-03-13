const GLEAN_IMG = "https://app.glean.com/images";

const CONFLUENCE_ICON = `${GLEAN_IMG}/logos/confluence.svg`;
const SHAREPOINT_ICON = `${GLEAN_IMG}/logos/sharepoint.svg`;
const JIRA_ICON = `${GLEAN_IMG}/logos/jira.svg`;
const GLOBE_ICON = `${GLEAN_IMG}/feather/globe.svg`;

const PPT_FALLBACK = { letter: "P", color: "#D83B01" };
const TABLEAU_FALLBACK = { letter: "T", color: "#E97627" };
const SALESFORCE_FALLBACK = { letter: "S", color: "#00A1E0" };
const GONG_FALLBACK = { letter: "G", color: "#9B51E0" };
const LMS_FALLBACK = { letter: "L", color: "#1A6EAD" };
const GRC_FALLBACK = { letter: "G", color: "#CC0000" };

export const flows = [
  /* ═══════════════════════════════════════════════════════
   * FLOW 0 — AI Platform & Business Prioritization
   * ═══════════════════════════════════════════════════════ */
  {
    id: "ai-platform",
    persona: {
      title: "AI Platform & Business Prioritization",
      subtitle: "OneTru AI Assist leadership (Jonathan & Bharat)",
    },
    greeting: "Good afternoon",
    userQuery:
      "Give me a recommendation for the 3 business use cases we should prioritize next for OneTru AI Assist. Base it on current pilot learnings, business impact, governance complexity, and fit with TransUnion's 2026 priorities. For each, summarize who benefits, why it matters now, the expected outcome, and what makes it a good early win.",

    aiResponse: `Here are the **3 highest-priority next use cases** for OneTru AI Assist.

**1. Governed analytics copilot for fraud and credit teams**
- **Why this should come first:** it aligns directly with TransUnion's public push toward auditable, explainable, governed analytics and builds on the same momentum as the new Analytics Orchestrator Agent.⁴
- **Who benefits:** fraud analysts, risk analysts, product managers, and analytics leaders.
- **Expected outcome:** faster investigation cycles, less dependency on specialist data science support, and better reuse of internal analytic know-how.¹
- **Why it's an early win:** high strategic value, clear executive story, and strong fit with TransUnion's public narrative around governed AI and credit intelligence.²

**2. Revenue and enablement assistant for sellers and solutions consultants**
- **Why this should come second:** internal discovery already showed strong interest from enablement teams that need better synthesis across product docs, training, proposals, and call recordings.¹
- **Who benefits:** solutions consultants, sellers, proposal teams, and new hires.
- **Expected outcome:** faster ramp, stronger consistency, better meeting prep, and fewer "where do I find that?" bottlenecks.
- **Why it's an early win:** the pain is concrete, the content already exists, and the demo value is immediately obvious.¹³

**3. Security and policy copilot for AI governance and sensitive-data expansion**
- **Why this should come third:** sensitive data access is a gating issue for Salesforce, finance, and other higher-value domains — so governance acceleration unlocks the rest of the roadmap.³
- **Who benefits:** security, compliance, architecture, and AI governance stakeholders.
- **Expected outcome:** faster reviews, clearer approval paths, and more confidence expanding AI into sensitive workflows.
- **Why it's an early win:** it supports the entire program, not just one department.³

| Use Case | Primary Beneficiaries | Strategic Fit | Governance Complexity |
|----------|----------------------|---------------|-----------------------|
| Governed analytics copilot | Fraud / credit / risk teams | ★★★★★ | Medium | 
| Revenue & enablement assistant | SCs / sellers / new hires | ★★★★☆ | Low |
| Security / policy copilot | Security, compliance, architecture | ★★★★☆ | High — but unlocks everything else |

**Bottom line:** this framing lets the program tell a stronger story than "here is how we onboard tools." It says: here is where OneTru AI Assist creates measurable leverage next.²³`,

    sources: [
      {
        id: 1,
        title: "OneTru AI Assist — Pilot Feedback",
        subtitle: "Confluence · AI Platform Team",
        iconUrl: CONFLUENCE_ICON,
        iconFallback: null,
        author: "Jonathan Soto",
        excerpt:
          "Pilot feedback highlights two areas of strongest demand: (1) fraud and analytics teams want faster, governed synthesis across model docs and attribute catalogs; (2) enablement and field teams want a single place to pull training, proposals, and call recordings. Governance complexity rated low-to-medium for both.",
      },
      {
        id: 2,
        title: "2026 AI Strategy Readout",
        subtitle: "Strategy · Executive Review",
        iconUrl: null,
        iconFallback: PPT_FALLBACK,
        author: "Bharat Kandanoor",
        excerpt:
          "2026 priorities: governed analytics and explainable AI outputs, structural cost savings through operational automation, and accelerated innovation via OneTru platform. All three recommended use cases map directly to these strategic pillars. Executive buy-in strongest for fraud/analytics and governance copilot.",
      },
      {
        id: 3,
        title: "AI Governance Decision Matrix",
        subtitle: "Confluence · Security / Architecture",
        iconUrl: CONFLUENCE_ICON,
        iconFallback: null,
        author: "Security Architecture",
        excerpt:
          "Governance matrix ranks use cases by data sensitivity, regulatory exposure, and approval complexity. Fraud/analytics and enablement score lowest on governance friction. Sensitive-domain expansion (Salesforce, finance, HR) requires classification coverage and SIEM integration prerequisites to be met first.",
      },
      {
        id: 4,
        title: "TransUnion Advances AI-Driven Credit Intelligence with Google Cloud",
        subtitle: "Public · OneTru / TruIQ",
        iconUrl: GLOBE_ICON,
        iconFallback: null,
        author: "TransUnion Newsroom",
        excerpt:
          "TransUnion's public launch of its AI Analytics Orchestrator Agent on Google Cloud positions OneTru as the platform for governed, explainable analytics across Credit, Marketing, Fraud, and Consumer Solutions. Governed analytics copilot directly extends this public narrative.",
      },
    ],

    followUpQuery:
      "Turn this into a prioritization one-pager for the executive review",

    chatHistory: {
      today: ["2026 AI Use Case Prioritization..."],
      recent: [
        "OneTru AI Assist — Pilot Feedback...",
        "2026 AI Strategy Readout...",
        "Use Case Intake — HR / Finance / Fraud...",
        "AI Governance Decision Matrix...",
        "Commercial Enablement Pain Points...",
        "Analytics Orchestrator Agent — Roadmap...",
      ],
    },

    showWork: {
      searchQuery:
        "oneTru AI assist use case prioritization pilot feedback governance business impact 2026",
      searching: [
        {
          icon: CONFLUENCE_ICON,
          iconFallback: null,
          label: "OneTru AI Assist — Pilot Feedback...",
        },
        {
          icon: null,
          iconFallback: PPT_FALLBACK,
          label: "2026 AI Strategy Readout...",
        },
        { icon: null, iconFallback: null, label: "+6 more" },
      ],
      reading: [
        {
          icon: CONFLUENCE_ICON,
          iconFallback: null,
          label: "OneTru AI Assist — Pilot Feedback...",
        },
        {
          icon: null,
          iconFallback: PPT_FALLBACK,
          label: "2026 AI Strategy Readout...",
        },
        {
          icon: CONFLUENCE_ICON,
          iconFallback: null,
          label: "AI Governance Decision Matrix...",
        },
      ],
      synthesizing: {
        icon: CONFLUENCE_ICON,
        iconFallback: null,
        label: "OneTru AI Prioritization Memo",
        note: "Cross-referencing internal pilot feedback and governance materials with TransUnion's public AI priorities to recommend the next 3 business use cases.",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════
   * FLOW 1 — Fraud, Risk & Analytics
   * ═══════════════════════════════════════════════════════ */
  {
    id: "fraud",
    persona: {
      title: "Fraud, Risk & Analytics",
      subtitle: "TruIQ / fraud analytics / product strategy",
    },
    greeting: "Good afternoon",
    userQuery:
      "A lender partner is seeing rising first-payment default and possible synthetic identity risk in near-prime auto originations. Pull together the relevant model notes, attribute definitions, partner escalations, and governance guidance, then recommend the most likely drivers, the first 3 analyses we should run, and the first interventions we should test.",

    aiResponse: `Here's a **focused working brief** for the near-prime auto risk spike.

**1. Most likely drivers**
- Drift in a small set of identity consistency and thin-file behavioral attributes — the pattern in Q1 feature performance data shows degradation concentrated in 3–4 synthetic-risk signals.¹²
- A higher share of applications entering from partner/channel combinations with historically noisier applicant profiles, as flagged in partner escalations.³
- Recent policy tuning likely improved conversion but may have widened the range of applicants entering manual review or approval bands.¹

**2. First 3 analyses to run**

1. **Attribute drift analysis** on the top synthetic-risk features for the last 30–60 days — compare PSI and feature stability against the Q1 baseline in the attribute catalog.¹²
2. **Channel / partner decomposition** to isolate whether the spike is concentrated in a narrow acquisition cohort rather than a broad portfolio shift.³
3. **Adverse-action / explainability review** to confirm any intervention can be defended clearly to internal governance and customer teams.³⁴

**3. First interventions to test**
- Tighten review thresholds for the highest-risk synthetic indicators in the affected segment, using the escalation cohort as the starting population.²
- Add a targeted step-up identity check only for the riskiest cohort, rather than applying broad friction that degrades approval rates.³
- Package the workflow into a reusable analyst playbook so future teams can run the same investigation faster.⁴

**4. Governance guardrails**
The Risk Committee explainability standards require any model or threshold change to be documented with a clear rationale before production deployment.³ Running this as a monitored A/B test with defined rollback criteria is the recommended path.

I can also help draft the analyst playbook or pull the relevant governance checklist for threshold changes.`,

    sources: [
      {
        id: 1,
        title: "Fraud Feature Performance — Q1",
        subtitle: "Tableau · Fraud Analytics",
        iconUrl: null,
        iconFallback: TABLEAU_FALLBACK,
        author: "Fraud Analytics Team",
        excerpt:
          "Q1 feature performance shows PSI degradation on 3–4 synthetic-risk signals for near-prime auto segment. Thin-file behavioral attributes showing largest drift. Identity consistency features stable at portfolio level but degraded in affected origination cohort. Baseline comparison period: Q4 prior year.",
      },
      {
        id: 2,
        title: "Attribute Catalog — Synthetic Risk Signals",
        subtitle: "Confluence · Data Science",
        iconUrl: CONFLUENCE_ICON,
        iconFallback: null,
        author: "Data Science",
        excerpt:
          "Synthetic identity signal set covers identity consistency, thin-file behavioral indicators, and application velocity patterns. Recommended PSI threshold for flagging material drift: >0.1. Attribute definitions, approved usage scope, and model version mapping documented for governance compliance.",
      },
      {
        id: 3,
        title: "Partner Escalations — Auto Lending",
        subtitle: "CRM · Client Delivery",
        iconUrl: null,
        iconFallback: SALESFORCE_FALLBACK,
        author: "Client Delivery",
        excerpt:
          "Escalation log shows elevated first-payment default concerns from 2 partner relationships in near-prime auto. Partner feedback attributes spike to recent origination channel mix shift. Recommended response: channel decomposition analysis and targeted review threshold adjustment before broad policy change.",
      },
      {
        id: 4,
        title: "Risk Committee Notes — Explainability Standards",
        subtitle: "SharePoint · Risk Governance",
        iconUrl: SHAREPOINT_ICON,
        iconFallback: null,
        author: "Risk Governance",
        excerpt:
          "All model and threshold changes require documented rationale, explainability evidence, and A/B test design with rollback criteria before production deployment. Analyst playbooks should be filed in the workflow library for reuse. Adverse-action documentation must be prepared for any population-level intervention.",
      },
    ],

    followUpQuery:
      "Draft the analyst playbook for this synthetic identity investigation",

    chatHistory: {
      today: ["Near-Prime Auto Risk — Synthetic Identity Review..."],
      recent: [
        "Analytics Orchestrator Agent — Reusable Workflows...",
        "Partner Escalations — Auto Originations...",
        "Fraud Feature Performance — Q1...",
        "Attribute Catalog — Synthetic Risk Signals...",
        "Risk Committee Notes — Explainability...",
        "TruIQ Product Strategy — Self-Service Analytics...",
      ],
    },

    showWork: {
      searchQuery:
        "synthetic identity auto originations first payment default attribute drift explainability",
      searching: [
        {
          icon: null,
          iconFallback: TABLEAU_FALLBACK,
          label: "Fraud Feature Performance — Q1...",
        },
        {
          icon: CONFLUENCE_ICON,
          iconFallback: null,
          label: "Attribute Catalog — Synthetic Risk Signals...",
        },
        { icon: null, iconFallback: null, label: "+5 more" },
      ],
      reading: [
        {
          icon: null,
          iconFallback: TABLEAU_FALLBACK,
          label: "Fraud Feature Performance — Q1...",
        },
        {
          icon: CONFLUENCE_ICON,
          iconFallback: null,
          label: "Attribute Catalog — Synthetic Risk Signals...",
        },
        {
          icon: SHAREPOINT_ICON,
          iconFallback: null,
          label: "Risk Committee Notes — Explainability Standards...",
        },
      ],
      synthesizing: {
        icon: CONFLUENCE_ICON,
        iconFallback: null,
        label: "Auto Lending Risk Analysis Brief",
        note: "Cross-referencing model context, partner feedback, and governance standards to propose a governed next-step analysis plan.",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════
   * FLOW 2 — Security, Risk & Compliance
   * ═══════════════════════════════════════════════════════ */
  {
    id: "security",
    persona: {
      title: "Security, Risk & Compliance",
      subtitle: "Security strategy, governance, and data controls",
    },
    greeting: "Good afternoon",
    userQuery:
      "Prepare a concise briefing on what must be true before we expand OneTru AI Assist into more sensitive domains like Salesforce, finance, and broader HR data. Summarize required controls, current gaps, decision gates for approval, and 3 actions for the next AI Governance Steering Committee.",

    aiResponse: `Here's the **readiness brief** for expanding OneTru AI Assist into more sensitive domains.

**Required controls**
- Confirmed classification coverage on all target repositories¹²
- Permission-aware access mirrored from source systems — no user sees content they can't already access¹
- Audited prompt / answer logging with agreed retention and access policy²
- Clear approval path for any workflow touching regulated or high-sensitivity data³
- Explainability standards for any analytics-derived outputs used in decisions⁴

**Current gaps**
- Uneven classification coverage on some legacy repositories slated for future ingestion¹²
- Incomplete agreement on what "approved" AI use looks like by business function — shadow tooling is filling the vacuum¹
- Unresolved logging / SIEM integration questions that block broader expansion sign-off³

**Recommended decision gates**

| Gate | Condition |
|------|-----------|
| 1 | No expansion until targeted repositories meet classification-readiness threshold |
| 2 | No sensitive-domain rollout without agreed monitoring / logging pattern |
| 3 | No business launch without named owner for governance, incident response, and exception handling |

**3 actions for the next Steering Committee**
1. **Approve a formal expansion rubric** for sensitive systems — define what "ready" means with specific, measurable criteria.²³
2. **Finalize AI acceptable-use standards** by function, with explicit guidance distinguishing internal from external tools and approved patterns for customer-facing use.¹
3. **Standardize logging and anomaly-detection expectations** for approved AI vendors and internal agents — then require all approved vendors (including Glean) to meet the standard before sensitive-domain access is granted.³⁴

Clearing these three gates would also accelerate the governed analytics and enablement use cases already identified as highest priority.`,

    sources: [
      {
        id: 1,
        title: "AI Risk Assessment — OneTru AI Assist",
        subtitle: "SharePoint · Security Strategy",
        iconUrl: SHAREPOINT_ICON,
        iconFallback: null,
        author: "Security Strategy",
        excerpt:
          "Risk assessment confirms pilot access is appropriately scoped but flags: incomplete classification on legacy repositories, lack of formal AI acceptable-use policy, and shadow tooling proliferating across business teams. All three identified as high-severity prerequisites for sensitive-domain expansion.",
      },
      {
        id: 2,
        title: "Data Classification & Handling Policy v3.2",
        subtitle: "Confluence · InfoSec",
        iconUrl: CONFLUENCE_ICON,
        iconFallback: null,
        author: "InfoSec",
        excerpt:
          "PCI and consumer credit file content explicitly excluded from current AI pilot scope. Classification coverage gaps on legacy repositories are a blocking condition for expanding OneTru AI Assist to Salesforce, finance, and broader HR data. Coverage must reach defined threshold before expansion approval.",
      },
      {
        id: 3,
        title: "Vendor Security Review — Glean",
        subtitle: "SharePoint · Vendor Risk",
        iconUrl: SHAREPOINT_ICON,
        iconFallback: null,
        author: "Vendor Risk Management",
        excerpt:
          "Glean review confirmed: SOC 2 controls, encryption in transit/at rest, SSO integration, permission mirroring per source system. Open items blocking sensitive-domain expansion: SIEM log integration not yet configured, EU and India data residency mapping not finalized.",
      },
      {
        id: 4,
        title: "Security Exceptions — Q4 2025",
        subtitle: "GRC · Risk & Compliance",
        iconUrl: null,
        iconFallback: GRC_FALLBACK,
        author: "Risk & Compliance",
        excerpt:
          "Q4 exceptions flagged as high-severity: no centralized incident response procedure for AI-related data exposure events; prompt/answer audit logs stored outside standard data warehouse. Both must be resolved before Steering Committee can approve expansion into Salesforce or finance domains.",
      },
    ],

    followUpQuery:
      "Convert this into a 2-slide summary for the Steering Committee deck",

    chatHistory: {
      today: ["AI Expansion Controls — Sensitive Data Readiness..."],
      recent: [
        "AI Risk Assessment — Draft...",
        "Data Classification Policy — Updated...",
        "Vendor Evaluation — Glean vs Others...",
        "PCI / Consumer Data Obligations Matrix...",
        "Security Exceptions — Q4 Review...",
        "Steering Committee Deck — AI & Data Governance...",
      ],
    },

    showWork: {
      searchQuery:
        "AI governance sensitive data salesforce finance HR controls decision gates",
      searching: [
        {
          icon: SHAREPOINT_ICON,
          iconFallback: null,
          label: "AI Risk Assessment — OneTru AI Assist...",
        },
        {
          icon: CONFLUENCE_ICON,
          iconFallback: null,
          label: "Data Classification & Handling Policy v3.2...",
        },
        { icon: null, iconFallback: null, label: "+5 more" },
      ],
      reading: [
        {
          icon: SHAREPOINT_ICON,
          iconFallback: null,
          label: "AI Risk Assessment — OneTru AI Assist...",
        },
        {
          icon: CONFLUENCE_ICON,
          iconFallback: null,
          label: "Data Classification & Handling Policy v3.2...",
        },
        {
          icon: SHAREPOINT_ICON,
          iconFallback: null,
          label: "Vendor Security Review — Glean...",
        },
      ],
      synthesizing: {
        icon: CONFLUENCE_ICON,
        iconFallback: null,
        label: "Sensitive Data Expansion Brief",
        note: "Cross-referencing security, policy, and governance materials to define what \"ready for expansion\" should mean.",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════
   * FLOW 3 — Revenue & Enablement
   * ═══════════════════════════════════════════════════════ */
  {
    id: "enablement",
    persona: {
      title: "Revenue & Enablement",
      subtitle: "Commercial University / solutions consulting / field teams",
    },
    greeting: "Good afternoon",
    userQuery:
      "I'm preparing for a meeting with a regional bank that cares about fraud prevention, identity, and credit risk. Build me a concise seller and solutions consultant call brief that pulls from approved messaging, relevant training content, past Gong calls, proposal snippets, and competitive intel. Include the best value story, 3 proof points to use, likely objections, and the best follow-up asset to send.",

    aiResponse: `Here's the **call brief** for your regional bank meeting.

**Best value story**
TransUnion wins when it helps customers make better risk decisions with more confidence and less friction. Position the conversation around:
- faster, more explainable decisions¹
- stronger fraud and identity confidence backed by trusted data assets²
- practical operational lift for analysts and client teams³

Frame OneTru as the way TransUnion scales reusable intelligence across teams and use cases — not just a product, but a platform advantage.¹²

**3 proof points to use**

1. **Data + analytics + governed AI, combined** — TransUnion's strength comes from the combination of trusted data assets, deep analytics expertise, and governed AI — not any single component alone.¹
2. **Transparency and explainability, not just speed** — regulated customers care that outputs can be defended. Lead with explainability as a feature, not a disclaimer.³
3. **OneTru scales reusable intelligence** — frame it as the way TU consistently delivers across fraud, credit, marketing, and consumer solutions — not a one-off project.¹²

**Likely objections**

| Objection | Suggested response |
|-----------|-------------------|
| "How is this different from a generic AI tool?" | TU's advantage is the combination of proprietary data, domain analytics expertise, and governed delivery — no generic tool has that. |
| "How do we keep outputs explainable for regulated decisions?" | Explainability is built into the delivery model — not bolted on afterward. |
| "How do we avoid adding more tool sprawl for field teams?" | OneTru consolidates, it doesn't add. The goal is fewer tools, not more. |

**Best follow-up asset to send**
Send the most concise, approved fraud and identity value one-pager plus one proof-heavy case example that reinforces governed analytics and business outcomes. Avoid decks with more than 5 slides for a first follow-up.⁴

Would you like me to pull the specific one-pager and case example from the proposal library?`,

    sources: [
      {
        id: 1,
        title: "Fraud & Identity Messaging Framework",
        subtitle: "Confluence · Solutions Enablement",
        iconUrl: CONFLUENCE_ICON,
        iconFallback: null,
        author: "Solutions Enablement",
        excerpt:
          "Approved value story for fraud/identity: lead with data + analytics + governed AI combination. Three core proof points: TU data breadth and quality, explainability-first delivery, OneTru as a scalable intelligence platform. Avoid framing as speed-only — regulated customers require defensibility.",
      },
      {
        id: 2,
        title: "Commercial University — Core Curriculum",
        subtitle: "LMS · TU Commercial University",
        iconUrl: null,
        iconFallback: LMS_FALLBACK,
        author: "Commercial University",
        excerpt:
          "Core SC curriculum covers TU value story, product positioning for fraud/identity/credit, and OneTru AI Assist field enablement. Required framing: data advantage + governed AI. Certified messaging for regional bank segment emphasizes explainability and operational lift for analyst teams.",
      },
      {
        id: 3,
        title: "Gong Playlist — Fraud / Credit Calls",
        subtitle: "Gong · Field Enablement",
        iconUrl: null,
        iconFallback: GONG_FALLBACK,
        author: "Field Enablement",
        excerpt:
          "Top-performing calls use explainability as a lead, not a qualifier. Best objection handling: 'How do we avoid tool sprawl?' — answered by positioning OneTru as consolidation, not addition. Most effective proof moments: demos of governed workflow reuse across segments.",
      },
      {
        id: 4,
        title: "Proposal Library — Financial Services",
        subtitle: "SharePoint · Revenue Content",
        iconUrl: SHAREPOINT_ICON,
        iconFallback: null,
        author: "Revenue Content",
        excerpt:
          "Approved proposal templates for banking/lending segment. Best follow-up asset: fraud/identity one-pager (2 pages, approved Q1 2026) plus one proof example from regional bank cohort. Competitive positioning vs. Experian and Equifax: lead on data governance and explainability, not price.",
      },
    ],

    followUpQuery:
      "Pull the approved fraud and identity one-pager and best case example to send as follow-up",

    chatHistory: {
      today: ["Regional Bank Call Brief — Fraud & Identity..."],
      recent: [
        "Commercial University — Core Curriculum...",
        "Fraud & Identity Messaging Framework...",
        "Approved Proposal Library — Financial Services...",
        "Gong Playlist — Top Fraud / Credit Calls...",
        "Competitive Intel — Experian & Equifax...",
        "OneTru Enablement FAQ...",
      ],
    },

    showWork: {
      searchQuery:
        "fraud identity credit risk seller brief proposal training gong competitive intel",
      searching: [
        {
          icon: CONFLUENCE_ICON,
          iconFallback: null,
          label: "Fraud & Identity Messaging Framework...",
        },
        {
          icon: null,
          iconFallback: LMS_FALLBACK,
          label: "Commercial University — Core Curriculum...",
        },
        { icon: null, iconFallback: null, label: "+5 more" },
      ],
      reading: [
        {
          icon: CONFLUENCE_ICON,
          iconFallback: null,
          label: "Fraud & Identity Messaging Framework...",
        },
        {
          icon: null,
          iconFallback: LMS_FALLBACK,
          label: "Commercial University — Core Curriculum...",
        },
        {
          icon: null,
          iconFallback: GONG_FALLBACK,
          label: "Gong Playlist — Fraud / Credit Calls...",
        },
      ],
      synthesizing: {
        icon: CONFLUENCE_ICON,
        iconFallback: null,
        label: "Regional Bank Call Brief — Fraud & Identity",
        note: "Cross-referencing training, messaging, call history, and proposal content to build a field-ready brief.",
      },
    },
  },
];
