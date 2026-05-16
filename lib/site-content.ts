export type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "text";
};

export type Visual = {
  id: string;
  title: string;
  summary: string;
  kind?: "mockup" | "flow" | "motif" | "cards" | "trust";
};

export type Section = {
  id?: string;
  eyebrow?: string;
  title: string;
  body?: string;
  bullets?: string[];
  items?: { title: string; body: string; meta?: string }[];
  flow?: string[];
  ctas?: Cta[];
  visual?: Visual;
  variant?: "hero" | "split" | "cards" | "pricing" | "faq" | "cta" | "form" | "quiet";
};

export type PageContent = {
  slug: string;
  title: string;
  description: string;
  sections: Section[];
};

export const navItems = [
  { label: "Platform", href: "/platform" },
  { label: "AI", href: "/ai" },
  { label: "Growth Center", href: "/growth-center" },
  { label: "Language Store", href: "/language-store" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "https://docs.wizfield.com/" },
];

export const primaryCta: Cta = { label: "Start Trial", href: "/pricing", variant: "primary" };
export const contactCta: Cta = { label: "Contact Sales", href: "/contact", variant: "secondary" };

const finalCta = (title = "Operate smarter. Grow further.", visualId = "wf-home-final-cta-w-motif"): Section => ({
  eyebrow: "Ready for Operational Clarity?",
  title,
  body: "Bring calls, jobs, customers, estimates, invoices, communication, intelligence, growth workflows, and workspace control into one field-service operating system.",
  ctas: [primaryCta, { label: "View Pricing", href: "/pricing", variant: "secondary" }],
  visual: {
    id: visualId,
    title: "Final CTA W Intelligence Motif",
    summary: "Subtle connected-node W graph background for a bright conversion panel.",
    kind: "motif",
  },
  variant: "cta",
});

export const homePage: PageContent = {
  slug: "/",
  title: "Field-Service Operating System",
  description: "Run your field-service business from one intelligent operating system.",
  sections: [
    {
      eyebrow: "Field-Service Operating System",
      title: "Run your field-service business from one intelligent operating system.",
      body: "WIZFIELD helps service owners manage calls, leads, jobs, estimates, invoices, communication, customer workflows, intelligence, and growth from one premium system built for real field work.",
      ctas: [primaryCta, { label: "See How It Works", href: "#platform-thesis", variant: "secondary" }],
      flow: ["Operations", "Intelligence", "Growth", "Multi-Business Control"],
      visual: {
        id: "wf-home-hero-operating-system-composite",
        title: "Hero Operating System Composite",
        summary: "Central WIZFIELD product shell with dashboard, Business Brain, Copilot draft, Growth cue, and explicit workspace switcher.",
        kind: "mockup",
      },
      variant: "hero",
    },
    {
      eyebrow: "The Fragmentation Problem",
      title: "Your business is not disorganized. Your tools are.",
      body: "Field-service work moves fast. Calls come in, estimates wait, jobs shift, invoices age, customers ask for updates, and follow-ups depend on someone remembering. When every workflow lives in a different place, the business starts carrying the weight.",
      bullets: [
        "Calls and customer context get separated.",
        "Jobs, estimates, and invoices stop telling one story.",
        "Follow-ups depend on memory instead of a system.",
        "Marketing gets detached from what is actually happening in the field.",
        "Team complexity grows faster than the tools supporting it.",
      ],
      visual: {
        id: "wf-home-fragmentation-to-system-visual",
        title: "Fragmentation-to-System Visual",
        summary: "Disconnected workflow cards moving into one WIZFIELD operating system.",
        kind: "flow",
      },
      variant: "split",
    },
    {
      eyebrow: "One Operating System",
      title: "Every field-service workflow connected in one place.",
      body: "WIZFIELD connects the daily operating core of a service business: intake, customers, jobs, estimates, invoices, communication, reports, customer access, growth workflows, and workspace control.",
      items: [
        { title: "Calls & Intake", body: "Capture the first signal and keep it connected to the customer record." },
        { title: "Customers & Leads", body: "Keep customer history, lead context, and follow-up in one operating view." },
        { title: "Jobs & Scheduling", body: "Move work from intake to job flow without losing context." },
        { title: "Estimates & Invoices", body: "Carry the financial workflow from quote to payment-ready records." },
        { title: "Growth Center", body: "Turn operational signals into marketing opportunities and drafts." },
        { title: "Workspace Control", body: "Switch between separated business workspaces with clear context." },
      ],
      ctas: [{ label: "See How It Works", href: "/platform", variant: "secondary" }],
      visual: {
        id: "wf-home-platform-system-map",
        title: "Platform System Map",
        summary: "Central WIZFIELD hub connected to the core operating modules.",
        kind: "flow",
      },
      variant: "cards",
    },
    {
      eyebrow: "Product Preview",
      title: "Built for the daily reality of field operations.",
      body: "From the home dashboard to customer records, job flow, estimates, invoices, calls, and follow-up, WIZFIELD keeps the work visible inside one operating environment.",
      bullets: [
        "See the operating picture from the home dashboard.",
        "Track customers, jobs, estimates, invoices, and communication in context.",
        "Keep field work and office follow-through connected.",
        "Surface the next actions operators need to review.",
      ],
      ctas: [primaryCta],
      visual: {
        id: "wf-home-product-dashboard-preview",
        title: "Product Dashboard Preview",
        summary: "Realistic WIZFIELD dashboard shell with readable operational cards.",
        kind: "mockup",
      },
      variant: "split",
    },
    {
      eyebrow: "Intelligent Assistance",
      title: "AI that helps operators see, decide, and follow through.",
      body: "WIZFIELD AI is anchored in your workspace's operational records and designed to support human operators with signals, drafts, and controlled workflows.",
      items: [
        { title: "Business Brain", body: "Highlights important operating signals so your team knows what needs review.", meta: "Workspace-scoped signals. Human action remains in control." },
        { title: "Operator Copilot", body: "Helps create customer SMS follow-up drafts from call context.", meta: "Draft, review, send. No silent outbound messaging." },
        { title: "Voice Intake Intelligence — Pilot", body: "A bounded voice intake pilot for guided call handling, clarification, and human escalation paths.", meta: "Pilot program. No guaranteed price, time, or booking commitments." },
      ],
      ctas: [{ label: "Explore WIZFIELD AI", href: "/ai", variant: "secondary" }],
      visual: {
        id: "wf-home-ai-business-brain-preview-card",
        title: "AI Preview Cards",
        summary: "Business Brain, Operator Copilot draft, and Voice Intake Pilot capsules with review/control labels.",
        kind: "cards",
      },
      variant: "cards",
    },
    {
      eyebrow: "Growth Center",
      title: "Turn operational signals into marketing momentum.",
      body: "Growth Center connects marketing work to what is already happening inside the business: opportunities, drafts, campaigns, channel targets, explicit publishing jobs, and internal analytics.",
      flow: ["Signal", "Opportunity", "Draft", "Campaign", "Publish Job", "Internal Analytics"],
      bullets: [
        "Surface CRM-derived marketing opportunities.",
        "Compose multi-platform drafts and variants.",
        "Publish intentionally through explicit publish-now or scheduled publish jobs.",
        "Review internal funnel analytics without pretending to be an ad ROI dashboard.",
      ],
      ctas: [{ label: "Explore Growth Center", href: "/growth-center", variant: "secondary" }],
      visual: {
        id: "wf-home-growth-center-flow-visual",
        title: "Growth Center Flow Visual",
        summary: "Signal -> Opportunity -> Draft -> Campaign -> Publish Job -> Internal Analytics.",
        kind: "flow",
      },
      variant: "split",
    },
    {
      eyebrow: "Language Store",
      title: "Let your team work in their language. Keep customer-facing output professional.",
      body: "Language Store helps organizations enable worker languages, lets each user choose a preferred language per workspace, and supports reviewed English customer-facing output for specific estimate and invoice line flows.",
      bullets: [
        "Enable worker languages at the organization level.",
        "Let each user choose a preferred language for each active organization.",
        "Generate English customer-output drafts for supported estimate and invoice line-item text.",
        "Review and approve the final English output before it becomes customer-facing.",
      ],
      ctas: [{ label: "Explore Language Store", href: "/language-store", variant: "secondary" }],
      visual: {
        id: "wf-home-language-store-split-flow",
        title: "Language Store Split Flow",
        summary: "Worker source text -> English draft -> reviewed final output.",
        kind: "flow",
      },
      variant: "split",
    },
    {
      eyebrow: "Multi-Business Control",
      title: "Run one business — or several — without losing context.",
      body: "WIZFIELD supports owners who operate multiple service businesses through explicit workspace switching, separated organization context, and shared billing architecture designed for scale.",
      bullets: [
        "One user identity can access multiple business workspaces.",
        "Switch organizations through an explicit workspace switcher.",
        "Keep business data separated by organization.",
        "Support plan structures built for one or more businesses.",
      ],
      ctas: [{ label: "Explore Multi-Business", href: "/multi-business", variant: "secondary" }],
      visual: {
        id: "wf-home-multibusiness-workspace-switcher",
        title: "Multi-Business Workspace Switcher",
        summary: "Explicit workspace switching with separated active context.",
        kind: "mockup",
      },
      variant: "split",
    },
    {
      eyebrow: "Operational Journey",
      title: "From first call to paid invoice — without losing the thread.",
      body: "WIZFIELD keeps the operating context connected as work moves from intake to customer record, job, estimate, approval, invoice, follow-up, and growth opportunity.",
      flow: ["Call / Lead", "Customer", "Job", "Estimate", "Approval", "Invoice", "Follow-up", "Growth Opportunity"],
      visual: {
        id: "wf-home-operational-journey-rail",
        title: "Operational Journey Rail",
        summary: "Call/lead through growth opportunity lifecycle.",
        kind: "flow",
      },
      variant: "quiet",
    },
    {
      eyebrow: "Field Credibility",
      title: "Built from real field operations. Designed for modern service businesses.",
      body: "WIZFIELD was shaped by the daily pressure of service work: calls, customers, jobs, estimates, invoices, follow-up, scheduling, communication, documents, and growth. That field reality becomes a broader operating system for owners who want clarity now and scale later.",
      bullets: [
        "Grounded in real service-business workflows.",
        "Designed for broad field-service operations, not a narrow single-trade tool.",
        "Structured for owners who want professional systems before complexity takes over.",
      ],
      variant: "cards",
    },
    {
      eyebrow: "Pricing Preview",
      title: "Plans that scale with how you operate.",
      body: "Start with the operating system your business needs today, then scale into more workspaces, advanced structure, and sales-assisted support as your operation grows.",
      visual: {
        id: "wf-home-pricing-preview-card-set",
        title: "Pricing Preview Card Set",
        summary: "Starter, Pro, Business Contact Sales.",
        kind: "cards",
      },
      variant: "pricing",
    },
    {
      eyebrow: "Product Confidence",
      title: "Built like a real platform. Documented like one.",
      body: "WIZFIELD includes product documentation so serious buyers and operators can understand the system, its workflows, and its operating boundaries clearly.",
      ctas: [{ label: "Explore Docs", href: "https://docs.wizfield.com/", variant: "secondary" }, primaryCta],
      visual: {
        id: "wf-home-docs-preview-card",
        title: "Docs Preview Card",
        summary: "Calm product documentation surface for product maturity.",
        kind: "trust",
      },
      variant: "split",
    },
    finalCta(),
  ],
};

const platformSections: Section[] = [
  {
    eyebrow: "Platform",
    title: "A field-service operating system, not another disconnected tool.",
    body: "WIZFIELD connects intake, customers, jobs, estimates, invoices, communication, reports, customer access, growth workflows, and workspace control into one coordinated operating environment.",
    flow: ["Operations", "Customer Workflows", "Intelligence Layers", "Multi-Business Control"],
    ctas: [primaryCta, { label: "View Features", href: "/features", variant: "secondary" }],
    visual: { id: "wf-platform-hero-operating-core", title: "Platform Hero Operating Core", summary: "WIZFIELD core with operational cards and connected energy.", kind: "mockup" },
    variant: "hero",
  },
  {
    eyebrow: "Connected Operating Core",
    title: "One system for the work your business runs every day.",
    body: "WIZFIELD is organized around the actual flow of field-service work: leads become customers, jobs move forward, estimates and invoices stay connected, and follow-up stays visible.",
    flow: ["Calls & Intake", "Customers & Leads", "Jobs & Scheduling", "Estimates & Invoices", "Messaging", "Reports", "Portal", "Growth Center", "Workspace Control"],
    visual: { id: "wf-platform-central-system-map", title: "Central Platform System Map", summary: "Hub-and-spoke operating core.", kind: "flow" },
    variant: "quiet",
  },
  {
    eyebrow: "Operating Areas",
    title: "The daily work, organized by the way service businesses actually run.",
    body: "WIZFIELD gives owners and teams one place to manage the core records, workflows, and follow-through that keep field work moving.",
    items: [
      { title: "Calls & Intake", body: "Capture call and lead context where the work begins." },
      { title: "Customers & Leads", body: "Keep customer history, lead details, and follow-up in one place." },
      { title: "Jobs & Scheduling", body: "Move work from intake to scheduled field activity with context intact." },
      { title: "Estimates & Invoices", body: "Carry financial workflows forward from quote to invoice." },
      { title: "Messaging & Follow-up", body: "Keep customer communication tied to the record it belongs to." },
      { title: "Reports & Documents", body: "Keep operational documents organized and available." },
    ],
    variant: "cards",
  },
  {
    eyebrow: "Workflow Continuity",
    title: "From first call to follow-up, the context should move with the work.",
    body: "Field-service teams lose time when every step starts from scratch. WIZFIELD keeps the operating thread connected across the customer lifecycle.",
    flow: ["Call / Lead", "Customer", "Job", "Estimate", "Approval", "Invoice", "Follow-up", "Growth Opportunity"],
    visual: { id: "wf-platform-workflow-continuity-rail", title: "Workflow Continuity Rail", summary: "Customer lifecycle flow with context preserved.", kind: "flow" },
    variant: "quiet",
  },
  {
    eyebrow: "Real Product",
    title: "Built to be worked in, not just looked at.",
    body: "WIZFIELD product surfaces should feel premium, but the priority is operational clarity: readable records, clear actions, visible status, and a calm system your team can use all day.",
    bullets: ["Dashboard visibility for daily operating context.", "Records connected across customers, jobs, estimates, invoices, and communication.", "Intelligent signals presented for review, not automatic action."],
    visual: { id: "wf-platform-product-discipline-dashboard", title: "Product Discipline Dashboard Visual", summary: "Readable WIZFIELD dashboard with realistic navigation.", kind: "mockup" },
    ctas: [primaryCta],
    variant: "split",
  },
  {
    eyebrow: "Workspace Control",
    title: "Built for one business — and structured for more.",
    body: "WIZFIELD supports owners who operate multiple businesses through explicit workspace switching and separated business context.",
    bullets: ["One user identity can access multiple workspaces.", "The active workspace controls the operating view.", "Business data stays separated by organization."],
    visual: { id: "wf-platform-multibusiness-awareness-visual", title: "Multi-Business Awareness Visual", summary: "Workspace switcher changing active dashboard context.", kind: "mockup" },
    ctas: [{ label: "Explore Multi-Business", href: "/multi-business", variant: "secondary" }],
    variant: "split",
  },
  {
    eyebrow: "Intelligence Layers",
    title: "Intelligence, growth, and language support built around the operating core.",
    body: "WIZFIELD extends the operating system with bounded intelligence, operationally connected marketing, and language support for multilingual teams.",
    items: [
      { title: "WIZFIELD AI", body: "Surfaces operating signals, prepares drafts for review, supports controlled customer follow-up, and includes Voice Intake Intelligence as a bounded pilot." },
      { title: "Growth Center", body: "Turns operational signals into opportunities, drafts, campaigns, explicit publish jobs, and internal analytics." },
      { title: "Language Store", body: "Supports worker language preferences and reviewed English customer-output generation for specific estimate and invoice line flows." },
    ],
    visual: { id: "wf-platform-intelligence-layers-triple-card", title: "Intelligence Layers Triple Card", summary: "AI, Growth Center, and Language Store cards.", kind: "cards" },
    variant: "cards",
  },
  finalCta("Run the daily work from one operating system.", "wf-platform-final-cta-product-motif"),
];

const aiSections: Section[] = [
  {
    eyebrow: "WIZFIELD AI",
    title: "Intelligence that supports the operator.",
    body: "WIZFIELD AI helps operators review workspace-scoped signals, prepare customer follow-up drafts, confirm controlled sends, observe replies, and explore bounded voice intake without pretending to run the business for you.",
    flow: ["Human review stays in control", "Voice is a pilot", "No silent outbound messaging"],
    ctas: [primaryCta, { label: "Explore Platform", href: "/platform", variant: "secondary" }],
    visual: { id: "wf-ai-hero-intelligence-surface", title: "AI Hero Intelligence Surface", summary: "Business Brain, Operator Copilot, and Voice Intake Intelligence — Pilot.", kind: "mockup" },
    variant: "hero",
  },
  {
    eyebrow: "Grounded Intelligence",
    title: "AI built around operational records, not a pasted-in chat box.",
    body: "WIZFIELD AI is anchored in tenant-scoped operational records and existing permissions. It works around calls, jobs, estimates, invoices, and messages inside the active workspace.",
    bullets: ["Workspace-scoped context.", "Permission-aware surfaces.", "Human review before customer-facing action.", "No cross-business intelligence claims."],
    visual: { id: "wf-ai-workspace-records-to-ai-diagram", title: "Workspace Records to AI Diagram", summary: "Workspace records -> bounded AI surfaces -> human review.", kind: "flow" },
    variant: "split",
  },
  {
    eyebrow: "Business Brain",
    title: "Operating signals your team can review.",
    body: "Business Brain highlights important home experience signals so operators can see records that may need attention.",
    bullets: ["Unpaid invoice focus: Based on invoices marked unpaid in your WIZFIELD workspace.", "Stale estimate focus: Based on estimate status and timing.", "Follow-up reminders: Highlights records by status so the next action is visible."],
    visual: { id: "wf-ai-business-brain-home-brief", title: "Business Brain Home Brief Mockup", summary: "Reviewable signal card, not instructions or guaranteed recovery.", kind: "cards" },
    variant: "split",
  },
  {
    eyebrow: "Operator Copilot",
    title: "Customer follow-up drafts, prepared for review.",
    body: "Operator Copilot helps create SMS follow-up drafts from call context so your team can review, edit, dismiss, or continue the customer conversation deliberately.",
    bullets: ["Uses call context from the active workspace.", "Creates drafts for operator review.", "Does not send silently."],
    visual: { id: "wf-ai-operator-copilot-sms-draft", title: "Operator Copilot SMS Draft Mockup", summary: "Calls screen with generated draft and edit state.", kind: "mockup" },
    variant: "split",
  },
  {
    eyebrow: "Controlled Send",
    title: "Customer messages require an explicit human action.",
    body: "When guarded send is enabled, Copilot-supported SMS follow-up still requires human confirmation before it becomes an outbound customer message.",
    flow: ["Draft generated", "Operator reviews", "Operator edits or dismisses", "Operator confirms send", "Message sends"],
    visual: { id: "wf-ai-guarded-send-flow", title: "Guarded Send Flow", summary: "Draft -> review/edit -> explicit send confirmation -> sent message anchor.", kind: "flow" },
    variant: "quiet",
  },
  {
    eyebrow: "Reply Observation",
    title: "See whether a customer replied in the same thread.",
    body: "Copilot can show whether an inbound SMS arrived in the same conversation after your sent message. This is observation only, not causal attribution or self-learning.",
    bullets: ["Anchored to the sent message.", "Looks for a later inbound reply in the same thread.", "Does not mutate CRM records from the outcome."],
    visual: { id: "wf-ai-reply-observation-timeline", title: "Reply Observation Timeline", summary: "Sent message anchor and later inbound reply marker.", kind: "flow" },
    variant: "split",
  },
  {
    eyebrow: "Voice Intake Intelligence — Pilot",
    title: "A bounded voice intake pilot for guided call handling.",
    body: "Voice Intake Intelligence is a pilot capability for guided call handling, clarification, and escalation. It is not a full phone staff replacement.",
    bullets: ["Pilot program.", "Script-bound handling.", "Human escalation path.", "No guaranteed price, time, or booking commitments."],
    visual: { id: "wf-ai-voice-intake-pilot-call-capsule", title: "Voice Intake Intelligence — Pilot Call Capsule", summary: "Inbound call capsule, script boundary, escalation path.", kind: "cards" },
    variant: "split",
  },
  {
    eyebrow: "AI Boundaries",
    title: "Helpful intelligence. Clear limits.",
    body: "WIZFIELD AI is designed to support human operators, not replace them. It respects workspace scope, existing permissions, human confirmation, and product truth.",
    bullets: ["No automatic business operation.", "No autonomous dispatch.", "No customer messages without review.", "No guaranteed revenue or lead volume."],
    visual: { id: "wf-ai-boundaries-trust-panel", title: "AI Boundaries / Trust Panel", summary: "Human review, no silent outbound, Pilot, workspace-scoped.", kind: "trust" },
    variant: "cards",
  },
  finalCta("Add intelligence around the work without giving up control.", "wf-ai-final-cta-motif"),
];

const growthSections: Section[] = [
  {
    eyebrow: "Growth Center",
    title: "Marketing operations connected to the work your business already does.",
    body: "Growth Center turns business activity into marketing opportunities, drafts, campaigns, explicit publish jobs, and internal analytics inside WIZFIELD.",
    flow: ["Operational signals", "Opportunities", "Drafts", "Campaigns", "Publish jobs", "Internal analytics"],
    ctas: [primaryCta, { label: "Explore Platform", href: "/platform", variant: "secondary" }],
    visual: { id: "wf-growth-hero-dashboard", title: "Growth Center Hero Dashboard", summary: "Opportunities, drafts, campaigns, publish jobs, and analytics pulse.", kind: "mockup" },
    variant: "hero",
  },
  {
    eyebrow: "Operational Marketing",
    title: "The best marketing ideas often start inside the business.",
    body: "Jobs, inspections, service activity, customer needs, and field work create signals your marketing process can use. Growth Center keeps those signals connected to a controlled workflow.",
    bullets: ["Use real business activity as marketing input.", "Move from opportunity to draft without leaving WIZFIELD.", "Keep publishing intentional."],
    visual: { id: "wf-growth-operations-to-marketing-diagram", title: "Operations-to-Marketing Thesis Diagram", summary: "Operational signals feeding marketing opportunities.", kind: "flow" },
    variant: "split",
  },
  {
    eyebrow: "Marketing Foundation",
    title: "Set the profile and channel context before publishing work begins.",
    body: "Growth Center gives each organization a marketing profile and connected channel targets so drafts, campaigns, and publishing work have a clear operating foundation.",
    items: [
      { title: "Marketing Profile", body: "Keep organization-specific marketing details in one place." },
      { title: "Channel Targets", body: "Connect supported Google and Meta channel targets for publishing workflows." },
    ],
    visual: { id: "wf-growth-marketing-profile-panel", title: "Marketing Profile Panel", summary: "Profile and channel readiness cards.", kind: "mockup" },
    variant: "cards",
  },
  {
    eyebrow: "Opportunity Flow",
    title: "Turn operational signals into reviewable marketing opportunities.",
    body: "Growth Center surfaces CRM-derived opportunities and lets publisher roles convert them into drafts when the idea is worth developing.",
    flow: ["Operational signal", "Marketing opportunity", "Review or dismiss", "Convert to draft", "Content Studio"],
    visual: { id: "wf-growth-opportunity-to-draft-flow", title: "Opportunity-to-Draft Flow", summary: "Opportunity list, opportunity detail, convert-to-draft cue.", kind: "flow" },
    variant: "quiet",
  },
  {
    eyebrow: "Content Studio",
    title: "Compose drafts and variants in the same operating system.",
    body: "Content Studio helps your team prepare marketing drafts and platform variants without separating marketing work from the operational context that inspired it.",
    bullets: ["Create and edit drafts.", "Prepare platform-specific variants.", "Use calendar metadata for planning context."],
    visual: { id: "wf-growth-content-studio-draft-variant-mockup", title: "Content Studio Draft / Variant Mockup", summary: "Draft composer with platform variants.", kind: "mockup" },
    variant: "split",
  },
  {
    eyebrow: "Campaigns",
    title: "Organize drafts into campaigns with structure.",
    body: "Campaigns help teams plan groups of drafts, attach content to campaign slots, and keep marketing work organized around a clear initiative.",
    bullets: ["Campaign shells.", "Campaign items.", "Draft attachment.", "Slot coverage.", "Terminal status rules."],
    visual: { id: "wf-growth-campaign-board-mockup", title: "Campaign Board Mockup", summary: "Campaign card with attached draft items.", kind: "mockup" },
    variant: "split",
  },
  {
    eyebrow: "Publishing Control",
    title: "Publishing is always explicit.",
    body: "Growth Center uses publish-now and scheduled publish jobs. Draft scheduling metadata never silently posts content on its own.",
    flow: ["Draft prepared", "Review complete", "Publish-now or schedule selected", "Publish job created", "Attempt status recorded"],
    visual: { id: "wf-growth-explicit-publish-job-flow", title: "Explicit Publish Job Flow", summary: "Draft -> approve -> publish-now/schedule -> publish job -> attempt status.", kind: "flow" },
    variant: "quiet",
  },
  {
    eyebrow: "Automations V1",
    title: "Automation support without autopilot claims.",
    body: "Growth Center Automations V1 can support suggest-only or draft-creation workflows from opportunities. It does not auto-publish content.",
    bullets: ["Rule setup.", "Preview before use.", "Opportunity-triggered runs.", "Draft-created outcomes.", "Publishing remains explicit."],
    visual: { id: "wf-growth-automations-v1-rule-run-card", title: "Automations V1 Rule / Run Card", summary: "Rule, preview, and draft_created outcome.", kind: "cards" },
    variant: "split",
  },
  {
    eyebrow: "Internal Analytics",
    title: "See the internal funnel without pretending it is an ad dashboard.",
    body: "Growth Center analytics summarize internal activity across opportunities, drafts, campaigns, and publish jobs. They do not claim provider engagement, ad performance, or ROI attribution.",
    bullets: ["Bounded-window summaries.", "Internal funnel signals.", "Approximate ratios where labeled.", "No reach, impressions, clicks, or ad ROI unless separately implemented."],
    visual: { id: "wf-growth-internal-analytics-panel", title: "Internal Analytics Panel", summary: "Internal summary metrics with approximate funnel labels.", kind: "mockup" },
    variant: "split",
  },
  finalCta("Build marketing work from real business activity.", "wf-growth-final-cta-motif"),
];

const languageSections: Section[] = [
  {
    eyebrow: "Language Store",
    title: "Let your team work in their language while customer output stays professional.",
    body: "Language Store helps multilingual field-service teams work with preferred language support while keeping supported customer-facing estimate and invoice output in reviewed English.",
    flow: ["Worker language preferences", "Reviewed English output", "Snapshot-safe history"],
    ctas: [primaryCta, { label: "View Pricing", href: "/pricing", variant: "secondary" }],
    visual: { id: "wf-language-hero-split-view", title: "Language Store Hero Split View", summary: "Worker source text, English draft, and reviewed final output.", kind: "flow" },
    variant: "hero",
  },
  {
    eyebrow: "The Team Language Gap",
    title: "Internal clarity should not create customer-facing uncertainty.",
    body: "Field teams may work best in different languages, but customer-facing business output still needs to be clear, professional, and stable after approval.",
    bullets: ["Teams need language support inside the workspace.", "Customers need professional output they can understand.", "Document history should not change because settings changed later."],
    visual: { id: "wf-language-multilingual-team-problem-visual", title: "Multilingual Team Problem Visual", summary: "Internal worker preference boundary and customer-facing output boundary.", kind: "trust" },
    variant: "split",
  },
  {
    eyebrow: "Workspace Language Layer",
    title: "Enable worker languages by organization.",
    body: "Organization owners and admins manage which worker languages are active. Each user chooses a preferred language within the active organization.",
    bullets: ["Organization-level language activation.", "Per-user, per-organization preference.", "English always available.", "Safe fallback if a language is disabled."],
    visual: { id: "wf-language-organization-settings-mockup", title: "Organization Language Settings Mockup", summary: "Enabled worker languages at organization level.", kind: "mockup" },
    variant: "split",
  },
  {
    eyebrow: "Customer English Output",
    title: "Turn supported source text into reviewed English customer output.",
    body: "A worker may enter supported customer-facing dynamic content in an enabled non-English language. WIZFIELD generates an English output draft for review inside the supported workflow.",
    flow: ["Worker enters source text", "English draft is generated", "User reviews the English output", "Final chosen English is saved"],
    visual: { id: "wf-language-customer-english-output-flow", title: "Customer English Output Flow", summary: "Source input -> English draft -> review -> final chosen English.", kind: "flow" },
    variant: "quiet",
  },
  {
    eyebrow: "Supported V1 Surfaces",
    title: "Focused first on estimate and invoice line flows.",
    body: "Language Store V1 supports English customer-output generation for specific estimate and invoice line-item text, including customer-facing names, descriptions, and manual line text that becomes customer-facing snapshot text.",
    bullets: ["Estimate line-item customer-facing names.", "Estimate line-item customer-facing descriptions.", "Invoice line-item customer-facing names.", "Invoice line-item customer-facing descriptions.", "Manual line text in estimate and invoice composition flows."],
    visual: { id: "wf-language-estimate-invoice-line-editor", title: "Estimate / Invoice Line Item Editor Mockup", summary: "Supported estimate and invoice line-item text only.", kind: "mockup" },
    variant: "split",
  },
  {
    eyebrow: "Human Review",
    title: "The generated draft is not the final customer-facing text until it is reviewed.",
    body: "WIZFIELD distinguishes between the generated English draft and the final chosen English output. Your team can accept the draft or save a reviewed English edit before it becomes customer-facing.",
    bullets: ["Generated English draft retained for auditability.", "User-reviewed English can be edited before finalization.", "Final chosen English is the customer-facing output."],
    visual: { id: "wf-language-review-final-english-panel", title: "Review vs Final Chosen English Panel", summary: "Generated draft and final chosen English review panel.", kind: "mockup" },
    variant: "split",
  },
  {
    eyebrow: "Snapshot-Safe History",
    title: "Approved customer-facing output should not change later by surprise.",
    body: "Once a quote or invoice reaches the snapshot-safe point, the chosen English customer-facing output becomes historical document truth. Later changes to languages, preferences, prompts, providers, or translation quality do not rewrite that customer document.",
    visual: { id: "wf-language-snapshot-safe-document-marker", title: "Snapshot-Safe Document Marker", summary: "Approved customer-facing output stays stable after approval or send.", kind: "trust" },
    variant: "split",
  },
  {
    eyebrow: "Availability",
    title: "Language Store fits inside the WIZFIELD billing relationship.",
    body: "Starter is English only by default. Pro and Business include Language Store capacity. Additional Language Store capacity can be handled through recurring add-ons inside the same WIZFIELD subscription relationship.",
    ctas: [{ label: "View Pricing", href: "/pricing", variant: "secondary" }],
    visual: { id: "wf-language-plan-availability-card", title: "Plan Availability Card", summary: "Starter English only, Pro/Business include capacity, add-ons in the same billing relationship.", kind: "cards" },
    variant: "split",
  },
  finalCta("Give your team language flexibility while protecting customer clarity.", "wf-language-final-cta-motif"),
];

const multiSections: Section[] = [
  {
    eyebrow: "Multi-Business Control",
    title: "One owner identity. Multiple business workspaces. Clear separation.",
    body: "WIZFIELD supports owners who operate one or more service businesses through explicit workspace switching, separated organization context, and shared billing structure.",
    flow: ["Switch workspaces deliberately", "Keep business context separated"],
    ctas: [primaryCta, { label: "View Pricing", href: "/pricing", variant: "secondary" }],
    visual: { id: "wf-multibusiness-hero-workspace-switcher", title: "Multi-Business Hero Workspace Switcher", summary: "Workspace switcher and active dashboard context.", kind: "mockup" },
    variant: "hero",
  },
  {
    eyebrow: "Built for Structured Operators",
    title: "For owners whose operations do not fit inside one simple workspace forever.",
    body: "Multi-Business Control is for owners with multiple service brands, regions, entities, or growth plans who need one user identity with clear workspace boundaries.",
    items: [
      { title: "Multiple Brands", body: "Operate distinct service brands without blending their records." },
      { title: "Regional Operations", body: "Keep local business context clear as operations expand." },
      { title: "Growth-Minded Owners", body: "Start with one business and keep the structure ready for more." },
    ],
    variant: "cards",
  },
  {
    eyebrow: "Explicit Switching",
    title: "Change workspaces by deliberate action, not hidden state.",
    body: "Users switch organizations through the supported workspace switcher. The active organization comes from the authenticated session and changes the full operating context.",
    flow: ["Current workspace shown", "User chooses another workspace", "WIZFIELD switches active organization", "Operating view refreshes"],
    visual: { id: "wf-multibusiness-explicit-switcher-flow", title: "Explicit Switcher Flow", summary: "Current workspace -> choose workspace -> full navigation/context switch.", kind: "flow" },
    variant: "quiet",
  },
  {
    eyebrow: "Active Workspace Context",
    title: "When the workspace changes, the operating view changes with it.",
    body: "Dashboard, customers, leads, jobs, estimates, invoices, settings, search, calls, messaging, reports, booking, and portal-adjacent context change with the active organization.",
    bullets: ["Business-specific dashboard.", "Business-specific customers and jobs.", "Business-specific communication and records.", "Business-specific settings and document context."],
    visual: { id: "wf-multibusiness-active-context-dashboard", title: "Before / After Active Context Dashboard", summary: "Business A and Business B dashboard states without blended data.", kind: "mockup" },
    variant: "split",
  },
  {
    eyebrow: "Separation Builds Trust",
    title: "Clear boundaries keep operations clean.",
    body: "Each organization is the tenant boundary for business data. That separation protects customer records, permissions, communication ownership, reporting context, and operational clarity.",
    bullets: ["Organization-owned business records.", "Membership-scoped roles and permissions.", "Organization-scoped communication records.", "No regular tenant user cross-organization inbox."],
    visual: { id: "wf-multibusiness-separated-workspace-trust-diagram", title: "Separated Workspace Trust Diagram", summary: "One identity connected to separated workspace containers.", kind: "trust" },
    variant: "split",
  },
  {
    eyebrow: "Shared Billing Structure",
    title: "One billing relationship can cover multiple workspaces.",
    body: "WIZFIELD uses a shared billing account model. A single billing account may cover multiple organizations under one entitlement, while business records and CRM invoices remain separate by organization.",
    visual: { id: "wf-multibusiness-shared-billing-account-diagram", title: "Shared Billing Account Diagram", summary: "Billing account covering organizations while business records stay separated.", kind: "flow" },
    ctas: [{ label: "View Pricing", href: "/pricing", variant: "secondary" }],
    variant: "split",
  },
  {
    eyebrow: "Plan Fit",
    title: "Choose the structure that matches how you operate.",
    items: [
      { title: "Starter", body: "For one service business.", meta: "1 business" },
      { title: "Pro", body: "For growing operators with more workspace room.", meta: "Up to 3 businesses" },
      { title: "Business", body: "For larger or more complex operators that need expanded, sales-assisted structure.", meta: "Contact Sales" },
    ],
    visual: { id: "wf-multibusiness-plan-fit-structure", title: "Plan Fit Structure Visual", summary: "Starter, Pro, Business structure cards.", kind: "cards" },
    variant: "cards",
  },
  finalCta("Run one business — or several — without losing context.", "wf-multibusiness-final-cta-motif"),
];

const pricingSections: Section[] = [
  {
    eyebrow: "Pricing",
    title: "Choose the operating system plan that fits how your service business runs.",
    body: "Start with the structure your business needs today. Starter and Pro support self-serve trial paths. Business is designed for larger or more complex operators that need sales-assisted structure.",
    flow: ["Prices: [PRICE TBD — OWNER INPUT REQUIRED]"],
    ctas: [{ label: "Start Trial", href: "#plans", variant: "primary" }, contactCta],
    visual: { id: "wf-pricing-hero-plan-structure-cue", title: "Pricing Hero Plan Structure Cue", summary: "Clean Starter, Pro, Business plan structure cue.", kind: "cards" },
    variant: "hero",
  },
  {
    id: "plans",
    eyebrow: "Plans",
    title: "Starter, Pro, and Business.",
    body: "Compare by operating need, workspace structure, and sales path.",
    items: [
      { title: "Starter", body: "For one service business getting organized in one operating system.", meta: "1 business | [PRICE TBD — OWNER INPUT REQUIRED]" },
      { title: "Pro", body: "For growing operators who need more room, more capability, and up to three businesses.", meta: "Recommended for growing teams | [PRICE TBD — OWNER INPUT REQUIRED]" },
      { title: "Business", body: "For larger or more complex operators that need expanded structure and sales-assisted setup.", meta: "Contact Sales" },
    ],
    visual: { id: "wf-pricing-starter-pro-business-card-set", title: "Starter / Pro / Business Pricing Card Set", summary: "Pro recommended treatment with safe placeholders.", kind: "cards" },
    variant: "pricing",
  },
  {
    eyebrow: "Plan Fit",
    title: "Start simple. Scale with structure.",
    body: "Starter is the clean entry point for one business. Pro is recommended for growing operators that need more workspace room. Business is the right path when your structure needs a sales-assisted conversation.",
    visual: { id: "wf-pricing-pro-recommended-badge", title: "Pro Recommended Badge Treatment", summary: "Recommended for growing teams badge.", kind: "cards" },
    variant: "split",
  },
  {
    eyebrow: "Compare Plans",
    title: "Compare by operating need, not just feature count.",
    body: "The pricing page should compare the operational core, workspace structure, intelligence layers, growth workflows, Language Store availability, support path, and Business fit.",
    items: [
      { title: "Operational Core", body: "Customers, leads, jobs, estimates, invoices, communication, reports, and customer workflows." },
      { title: "Workspace Structure", body: "Starter supports 1 business. Pro supports up to 3 businesses. Business supports expanded sales-assisted structure." },
      { title: "Language Store", body: "Include concise availability/add-on language unless owner approves a full entitlement matrix." },
    ],
    visual: { id: "wf-pricing-feature-comparison-structure", title: "Feature Comparison Structure Visual", summary: "Comparison cards by operating category.", kind: "cards" },
    variant: "cards",
  },
  {
    eyebrow: "Multi-Business Structure",
    title: "Plans are built around how many businesses you operate.",
    body: "WIZFIELD supports owners through an active-organization model with separated business context. Starter is for one business. Pro supports up to three. Business is sales-assisted for expanded or more complex structures.",
    visual: { id: "wf-pricing-multibusiness-plan-model-card", title: "Multi-Business Plan Model Card", summary: "Starter one workspace, Pro up to three, Business expanded sales-assisted.", kind: "cards" },
    variant: "split",
  },
  {
    eyebrow: "Language Store Availability",
    title: "Language support fits inside the WIZFIELD subscription relationship.",
    body: "Starter is English only by default. Pro and Business include Language Store capacity. Additional Language Store capacity can be handled through recurring add-ons inside the same WIZFIELD billing relationship.",
    visual: { id: "wf-pricing-language-store-availability-card", title: "Language Store Availability / Add-On Card", summary: "English only, Language Store capacity, and add-ons in one billing relationship.", kind: "cards" },
    variant: "split",
  },
  {
    eyebrow: "Billing Confidence",
    title: "One WIZFIELD billing relationship for the plan you choose.",
    body: "WIZFIELD's SaaS billing is separate from the invoices and payments your business manages inside the product. Plan coverage is tied to the WIZFIELD subscription relationship, not to customer invoices in your workspace.",
    bullets: ["Starter and Pro use the self-serve trial path.", "Business uses Contact Sales.", "Add-ons, when used, stay inside the WIZFIELD billing relationship."],
    visual: { id: "wf-pricing-billing-confidence-visual", title: "Billing Confidence Visual", summary: "Subscription relationship separate from CRM invoices.", kind: "trust" },
    variant: "split",
  },
  {
    eyebrow: "FAQ",
    title: "Common pricing questions.",
    items: [
      { title: "Who is Starter for?", body: "Starter is for one service business that wants to get operations organized in one WIZFIELD workspace." },
      { title: "Who is Pro for?", body: "Pro is for growing operators who need more room, more capability, and support for up to three businesses." },
      { title: "Who should contact Sales?", body: "Contact Sales if you are evaluating Business, running a larger or more complex operation, or need a sales-assisted discussion." },
      { title: "Can I manage multiple businesses?", body: "Yes. Starter supports 1 business, Pro supports up to 3 businesses, and Business is the sales-assisted path for expanded structure." },
    ],
    visual: { id: "wf-pricing-faq-surface-treatment", title: "FAQ Surface Treatment", summary: "Calm expandable FAQ surface.", kind: "trust" },
    variant: "faq",
  },
  finalCta("Start with the plan that matches how you operate.", "wf-pricing-final-cta-motif"),
];

const featuresSections: Section[] = [
  {
    eyebrow: "Features",
    title: "The field-service operating system, organized by capability.",
    body: "Explore the WIZFIELD capabilities that bring customers, leads, jobs, estimates, invoices, communication, documents, intelligence, growth, and workspace control into one system.",
    ctas: [primaryCta, { label: "Explore Platform", href: "/platform", variant: "secondary" }],
    visual: { id: "wf-features-hero-capability-map", title: "Feature Hero Capability Map", summary: "Product grid and module map.", kind: "flow" },
    variant: "hero",
  },
  {
    eyebrow: "Capability Map",
    title: "Find the part of the system you want to evaluate.",
    flow: ["Customer & Lead Management", "Calls & Messaging", "Jobs & Scheduling", "Estimates & Invoices", "Reports & Documents", "Portal & Customer Access", "AI", "Growth Center", "Language Store", "Multi-Business"],
    visual: { id: "wf-features-cluster-index-card-set", title: "Feature Cluster Index Card Set", summary: "Capability cards with labels.", kind: "cards" },
    variant: "quiet",
  },
  {
    eyebrow: "Core Operations",
    title: "The operating spine of the service business.",
    items: [
      { title: "Customer & Lead Management", body: "Keep customer records, lead context, and follow-up history connected to the work." },
      { title: "Jobs & Scheduling", body: "Move work from intake into the field-service job flow with context intact." },
      { title: "Estimates & Invoices", body: "Carry financial workflows from estimate to invoice without separating them from the customer record." },
      { title: "Reports & Documents", body: "Keep operational documents and reporting context organized inside the system." },
    ],
    variant: "cards",
  },
  {
    eyebrow: "Communication Context",
    title: "Keep customer communication tied to the work.",
    items: [
      { title: "Calls & Messaging", body: "Connect call and messaging context to the active organization and the records they belong to." },
      { title: "Portal & Customer Access", body: "Support customer-facing access through scoped resources rather than exposing internal records directly." },
    ],
    visual: { id: "wf-features-calls-messaging-ui-snippet", title: "Calls / Messaging UI Snippet", summary: "Organization-scoped communication card.", kind: "mockup" },
    variant: "split",
  },
  {
    eyebrow: "Financial and Document Workflows",
    title: "Keep estimates, invoices, and documents connected to operational truth.",
    items: [
      { title: "Estimates & Invoices", body: "Build customer-facing financial workflows from the same operating context your team uses every day." },
      { title: "Reports & Documents", body: "Support operational reporting and document workflows with stable business context." },
      { title: "Snapshot-Safe Output", body: "Generated customer-facing artifacts should preserve historical truth where it matters." },
    ],
    visual: { id: "wf-features-estimates-invoices-ui-snippet", title: "Estimates / Invoices UI Snippet", summary: "Estimate and invoice preview cards.", kind: "mockup" },
    variant: "split",
  },
  {
    eyebrow: "Intelligence and Growth",
    title: "Add intelligence and growth workflows around the operating core.",
    items: [
      { title: "AI", body: "Surfaces workspace-scoped signals, prepares drafts for review, supports controlled send behavior, and includes Voice Intake Intelligence as a bounded pilot." },
      { title: "Growth Center", body: "Turns operational signals into marketing opportunities, drafts, campaigns, explicit publish jobs, and internal analytics." },
      { title: "Language Store", body: "Supports worker language preferences and reviewed English customer-output generation for specific estimate and invoice line flows." },
    ],
    visual: { id: "wf-features-ai-growth-language-layer-cards", title: "AI / Growth / Language Layer Card Set", summary: "Differentiator cards with bounded claims.", kind: "cards" },
    variant: "cards",
  },
  {
    eyebrow: "Multi-Business Structure",
    title: "Support one business today and a more structured operation tomorrow.",
    body: "WIZFIELD supports one user identity with multiple separated business workspaces, explicit switching, full context change, and shared billing structure.",
    visual: { id: "wf-features-multibusiness-switcher-card", title: "Multi-Business Switcher Card", summary: "Active workspace switcher card.", kind: "mockup" },
    ctas: [{ label: "Explore Multi-Business", href: "/multi-business", variant: "secondary" }],
    variant: "split",
  },
  {
    eyebrow: "Explore Deeper",
    title: "Go deeper into the parts of WIZFIELD that matter most to your evaluation.",
    items: [
      { title: "Platform", body: "Understand the operating-system thesis." },
      { title: "AI", body: "See bounded intelligence and human-controlled workflows." },
      { title: "Growth Center", body: "Explore operationally connected marketing." },
      { title: "Language Store", body: "Review multilingual team support and English customer output." },
      { title: "Multi-Business", body: "Understand workspace switching and separated context." },
      { title: "Pricing", body: "Compare Starter, Pro, and Business paths." },
    ],
    visual: { id: "wf-features-related-page-routing-cards", title: "Related Page Routing Cards", summary: "Cards linking to deeper pages.", kind: "cards" },
    variant: "cards",
  },
  finalCta("Start with the operating system built for field-service work.", "wf-features-final-cta-motif"),
];

const contactSections: Section[] = [
  {
    eyebrow: "Contact",
    title: "Talk with WIZFIELD about Business, scale, or a complex operating model.",
    body: "Contact Sales is for Business plan interest, larger or more complex operators, partnerships, and commercial questions that need more than the self-serve trial path.",
    ctas: [contactCta, primaryCta],
    flow: ["Evaluating Starter or Pro? You can start with a trial without talking to sales."],
    visual: { id: "wf-contact-hero-sales-fit-panel", title: "Contact Hero Sales-Fit Panel", summary: "Sales-fit panel without gating self-serve trial.", kind: "trust" },
    variant: "hero",
  },
  {
    eyebrow: "Sales Fit",
    title: "Contact sales when your operating model needs a conversation.",
    items: [
      { title: "Business Plan Interest", body: "You are evaluating WIZFIELD Business or need expanded structure." },
      { title: "Multi-Business Operations", body: "You operate multiple businesses, brands, regions, or entities and want to discuss fit." },
      { title: "Larger Team Needs", body: "Your team, permissions, onboarding, or rollout questions need a sales-assisted path." },
      { title: "Partnership or Commercial Inquiry", body: "You want to discuss a serious commercial or partnership opportunity." },
    ],
    visual: { id: "wf-contact-inquiry-qualification-cards", title: "Inquiry Qualification Card Set", summary: "Business, multi-business, larger team, partnership, and product question cards.", kind: "cards" },
    variant: "cards",
  },
  {
    eyebrow: "Contact Form",
    title: "Send the details that help us understand fit.",
    body: "This first pass provides a clean, honest form UI. Backend delivery remains a later integration item until the owner confirms the destination.",
    visual: { id: "wf-contact-form-visual-treatment", title: "Contact Form Visual Treatment", summary: "Premium form surface with inquiry fields and helper text.", kind: "trust" },
    variant: "form",
  },
  {
    eyebrow: "Inquiry Type",
    title: "Choose the path that best matches your question.",
    flow: ["Business Plan Interest", "Multi-Business Operation", "Larger Team / Setup Question", "Partnership Inquiry", "Product Question", "Other Commercial Inquiry"],
    visual: { id: "wf-contact-inquiry-type-selector", title: "Inquiry Type Selector Visual", summary: "Category selector chips for commercial routing.", kind: "cards" },
    variant: "quiet",
  },
  {
    eyebrow: "What Happens Next",
    title: "We use your details to understand fit.",
    body: "Your inquiry should include enough context for WIZFIELD to understand whether you are best served by self-serve trial, Business, or a more detailed commercial conversation.",
    flow: ["No specific response-time promise is published until owner-approved."],
    visual: { id: "wf-contact-response-expectation-trust-panel", title: "Response Expectation Trust Panel", summary: "Routing expectation without SLA claim.", kind: "trust" },
    variant: "split",
  },
  {
    eyebrow: "Prefer to Start Now?",
    title: "Starter and Pro do not need a sales call first.",
    body: "If you are ready to evaluate WIZFIELD for a self-serve plan, start a trial and explore the system directly.",
    ctas: [primaryCta, { label: "View Pricing", href: "/pricing", variant: "secondary" }],
    visual: { id: "wf-contact-trial-alternative-cta-card", title: "Trial Alternative CTA Card", summary: "Self-serve trial alternative remains visible.", kind: "cards" },
    variant: "cta",
  },
  {
    eyebrow: "Contact Routing",
    title: "Form submission wiring remains a launch integration item.",
    body: "Until the backend destination is connected, the contact form stays honest about its preview state and does not claim delivery.",
    ctas: [{ label: "View Pricing", href: "/pricing", variant: "secondary" }, { label: "Explore Docs", href: "https://docs.wizfield.com/", variant: "secondary" }],
    visual: { id: "wf-contact-post-submit-success-state", title: "Post-Submit Success State Visual", summary: "Static success-state visual reserved until backend is wired.", kind: "trust" },
    variant: "split",
  },
];

export const pages: Record<string, PageContent> = {
  "/": homePage,
  "/platform": {
    slug: "/platform",
    title: "Platform",
    description: "A field-service operating system, not another disconnected tool.",
    sections: platformSections,
  },
  "/ai": {
    slug: "/ai",
    title: "WIZFIELD AI",
    description: "Intelligence that supports the operator.",
    sections: aiSections,
  },
  "/growth-center": {
    slug: "/growth-center",
    title: "Growth Center",
    description: "Marketing operations connected to the work your business already does.",
    sections: growthSections,
  },
  "/language-store": {
    slug: "/language-store",
    title: "Language Store",
    description: "Language support for multilingual teams and reviewed English customer output.",
    sections: languageSections,
  },
  "/multi-business": {
    slug: "/multi-business",
    title: "Multi-Business Control",
    description: "One owner identity, multiple business workspaces, and clear separation.",
    sections: multiSections,
  },
  "/pricing": {
    slug: "/pricing",
    title: "Pricing",
    description: "Choose the operating system plan that fits how your service business runs.",
    sections: pricingSections,
  },
  "/features": {
    slug: "/features",
    title: "Features",
    description: "The field-service operating system, organized by capability.",
    sections: featuresSections,
  },
  "/contact": {
    slug: "/contact",
    title: "Contact",
    description: "Talk with WIZFIELD about Business, scale, or a complex operating model.",
    sections: contactSections,
  },
};
