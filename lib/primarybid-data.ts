export const primaryBidSubnav = [
  { id: "overview", label: "Overview" },
  { id: "why-it-mattered", label: "Context" },
  { id: "problem", label: "Problem" },
  { id: "insights", label: "Insights" },
  { id: "hypothesis", label: "Hypothesis" },
  { id: "solution", label: "Solution" },
  { id: "platform", label: "Platform" },
  { id: "decisions", label: "Decisions" },
  { id: "validation", label: "Validation" },
  { id: "proof", label: "Proof" },
  { id: "impact", label: "Impact" },
  { id: "reflection", label: "Reflection" },
] as const;

export const primaryBidHero = {
  label: "01 Case Study",
  title: "Designing confidence into regulated investment journeys",
  subcopy:
    "At PrimaryBid, I designed responsive investment experiences, broker tools and scalable product systems that helped make public market participation clearer, safer and easier to navigate.",
  intro:
    "Public market investing is complex, regulated and often intimidating for retail investors. I helped design product experiences that made investment participation feel clearer, more trustworthy and easier to navigate across mobile, tablet and desktop.",
  meta: [
    { label: "Role", value: "Senior Product Designer" },
    { label: "Company", value: "PrimaryBid" },
    { label: "Timeline", value: "16 months" },
    {
      label: "Focus",
      value: "Fintech / Regulated UX / High-trust product design / Design systems",
    },
  ],
  image: "/images/work/primarybid/hero-phones.png",
  imageAlt:
    "Three iPhone screens showing PrimaryBid live offers and how-it-works education overlay.",
};

export const primaryBidContext = {
  label: "02 Context",
  headline: "Making public offers easier to understand",
  body: "Retail investors are often excluded from institutional financial opportunities because the experience can feel fragmented, jargon-heavy and difficult to trust. PrimaryBid’s challenge was to make participation in public offers feel accessible while respecting the regulatory, legal and operational requirements behind each transaction.",
  body2:
    "I led experience strategy and product design across customer-facing investment journeys, internal broker tools and reusable design system foundations — balancing customer trust, regulatory needs and operational complexity.",
  challenges: [
    "Financial jargon increased hesitation",
    "Compliance steps created friction",
    "Users needed reassurance before committing",
    "Internal teams needed scalable operational workflows",
    "Experiences needed to work across devices",
  ],
};

export const primaryBidQuotes = [
  "Designing financial products is not just about simplifying journeys. It is about designing confidence.",
  "Reducing uncertainty became more important than reducing information.",
  "The project shifted the focus from ‘How do we simplify finance?’ to ‘How do we help people feel confident navigating complex financial systems?’",
];

export const primaryBidProblem = {
  label: "03 Problem",
  headline: "Complex journeys. High-stakes decisions. Low tolerance for ambiguity.",
  body: "Investment journeys involve onboarding, identity checks, legal requirements, financial information, order review and confirmation. Each step carries risk. If the hierarchy is unclear or the next action feels uncertain, users lose confidence quickly.",
  hmw: "How might we simplify regulated investment experiences while preserving trust, transparency and compliance?",
  points: [
    "Customers needed to understand unfamiliar financial processes",
    "They needed to complete regulated steps without confusion",
    "They needed to review offer details confidently",
    "They needed to understand key dates, price, discount and risk",
    "Internal teams needed operational visibility",
    "The platform needed reusable, scalable product foundations",
  ],
  image: "/images/work/primarybid/mockup-offers-pair.png",
  imageAlt:
    "Two iPhone screens showing PrimaryBid live offers list and offer detail with apply CTA.",
};

export const primaryBidInsights = {
  label: "04 Behavioural insights",
  headline: "What shaped the design direction",
  body: "The strongest design opportunities came from understanding where confidence broke down — and where operational complexity could be made invisible to customers.",
  cards: [
    {
      number: "01",
      title: "Financial confidence is fragile",
      copy: "Users became hesitant when terminology was unclear, workflows felt ambiguous or important information was difficult to find.",
      icon: "shield" as const,
    },
    {
      number: "02",
      title: "Trust is built through transparency",
      copy: "Users responded better when processes were clearly explained, progress was visible and system status was easy to understand.",
      icon: "eye" as const,
    },
    {
      number: "03",
      title: "Operational complexity should stay invisible",
      copy: "The backend process was complex, but the customer experience needed to feel structured, reliable and simple to follow.",
      icon: "layers" as const,
    },
  ],
};

export const primaryBidHypothesis = {
  label: "05 Hypothesis",
  headline: "If we improve clarity, we improve confidence.",
  body: "We believed that improving clarity, strengthening interaction consistency and making key information easier to understand would increase customer confidence while supporting scalable financial operations.",
  points: [
    "Clearer information hierarchy",
    "More predictable flows",
    "Stronger reassurance moments",
    "Reusable cross-platform patterns",
  ],
};

export const primaryBidSolution = {
  label: "06 Solution",
  liveOffers: {
    headline: "Designing a clearer live offers experience",
    body: "The live offers experience needed to help users quickly understand what was available, compare opportunities and move into more detailed information without feeling overwhelmed.",
    decisions: [
      "Clear offer cards with company name, sector and investment amount",
      "Status indicators for live offers",
      "Simple navigation between live, closed and orders",
      "Reduced visual noise to improve scanning",
      "Consistent card patterns for repeatable financial information",
    ],
    image: "/images/work/primarybid/mockup-phones-hero-alt.png",
    imageAlt:
      "Three iPhone screens showing PrimaryBid live offers, navigation and offer discovery.",
  },
  offerDetail: {
    headline: "Helping users make informed decisions",
    body: "The offer detail page had to balance commercial action with careful financial comprehension. Users needed to understand the company, sector, price, key dates and risk before applying.",
    decisions: [
      "Key information placed above the fold where possible",
      "Important dates separated into clear rows",
      "Risk messaging kept close to the CTA",
      "Apply action made visible but not detached from context",
      "Supporting education placed nearby to explain primary markets and IPOs",
    ],
    image: "/images/work/primarybid/mockup-offers-pair.png",
    imageAlt:
      "PrimaryBid offer detail showing Oxford Biomedica, key dates and Apply now CTA.",
  },
  education: {
    headline: "Explaining the unfamiliar without slowing users down",
    body: "For many users, primary markets and IPOs are unfamiliar. Short, contextual explanations helped users understand how public offers worked before applying — making the experience feel more transparent and lowering anxiety.",
    steps: [
      "Get access to shares and bonds directly from issuers",
      "Apply in seconds with no hidden fees or commission",
      "Track your order every step of the way",
    ],
    image: "/images/work/primarybid/hero-phones.png",
    imageAlt:
      "PrimaryBid how-it-works overlay explaining public offers in three clear steps.",
  },
};

export const primaryBidPlatform = {
  label: "07 Platform",
  responsive: {
    headline: "Building confidence across mobile, tablet and desktop",
    body: "The experience needed to support customers across different devices while preserving clarity, consistency and trust. Responsive layouts helped maintain the same interaction logic whether users were discovering an offer on mobile or reviewing more detailed information on desktop.",
    points: [
      "Mobile-first offer discovery",
      "Desktop layouts for richer information review",
      "Tablet support for account and operational workflows",
      "Consistent navigation and hierarchy across breakpoints",
    ],
  },
  broker: {
    headline: "Designing for operational clarity",
    body: "Alongside customer-facing journeys, I worked on internal and account-based tools that supported financial operations, account management and broker-related workflows. These experiences needed to handle dense information while remaining structured and usable.",
    points: [
      "Improved form clarity",
      "Better information grouping",
      "Clearer editable states",
      "More structured account and broker details",
      "Reduced ambiguity around required fields and actions",
    ],
    image: "/images/work/primarybid/mockup-tablet-orders.png",
    imageAlt: "iPad showing PrimaryBid orders and allocations dashboard.",
  },
};

export const primaryBidDecisions = {
  label: "08 Decisions",
  designSystem: {
    headline: "Creating reusable foundations for high-trust workflows",
    body: "A significant part of the work focused on reusable components and interaction patterns that could scale across offer discovery, application flows, account management and broker tools. In regulated environments, consistency is not only a usability benefit — it becomes a trust mechanism.",
    patterns: [
      "Offer cards",
      "Key date rows",
      "CTA modules",
      "Status indicators",
      "Account detail fields",
      "Educational content panels",
      "Navigation patterns",
    ],
  },
  tradeoffs: [
    {
      title: "Clarity over feature density",
      copy: "Financial products can easily become overloaded. We prioritised hierarchy and progression over showing everything at once.",
      icon: "eye" as const,
    },
    {
      title: "Progressive disclosure over long-form explanation",
      copy: "Users needed access to detail, but not all at the same time. Breaking information into structured sections improved comprehension.",
      icon: "layers" as const,
    },
    {
      title: "Consistency over one-off solutions",
      copy: "Reusable patterns reduced cognitive load and created a more predictable experience across journeys.",
      icon: "list" as const,
    },
    {
      title: "Customer confidence and operational needs",
      copy: "The experience had to work for customers, internal teams and regulatory expectations at the same time.",
      icon: "shield" as const,
    },
  ],
};

export const primaryBidValidation = {
  label: "09 Validation",
  headline: "Refining the experience through feedback",
  body: "The product evolved through stakeholder collaboration, workflow testing, behavioural analysis and operational feedback. The strongest theme was that users and stakeholders responded positively when workflows felt more structured, transparent and predictable.",
  cards: [
    {
      title: "Clarity improved confidence",
      copy: "Users and stakeholders responded positively when workflows felt easier to understand and follow.",
    },
    {
      title: "Consistency reduced cognitive load",
      copy: "Repeated patterns helped users know what to expect across critical journeys.",
    },
    {
      title: "Better information architecture improved operational efficiency",
      copy: "Broker and account tooling became easier to navigate and manage at scale.",
    },
  ],
};

export const primaryBidProof = {
  label: "Proof",
  headline: "What validated the design direction",
  intro:
    "In a regulated investment journey, confidence was the key measure of usability. The design direction was validated when complex financial information became easier to scan, explain and reuse across customer and operational workflows.",
  cards: [
    {
      title: "Clarity reduced hesitation",
      copy:
        "Users and stakeholders responded better when offer details, key dates, risk information and application actions were structured around a clearer hierarchy.",
    },
    {
      title: "Reusable patterns improved consistency",
      copy:
        "Offer cards, status indicators, key date rows, CTA modules, account fields and education panels created a more predictable experience across customer-facing and broker workflows.",
    },
    {
      title: "Responsive layouts supported different decision contexts",
      copy:
        "Mobile supported quick offer discovery, while desktop gave users more room to review dense investment information before applying.",
    },
  ],
  closing:
    "The proof was not only that the interface became simpler. It was that regulated complexity became easier to understand, repeat and operate.",
};

export const primaryBidImpact = {
  label: "10 Impact",
  headline: "Impact",
  body: "PrimaryBid was about designing confidence into regulated investment journeys — helping users understand complex public market offers while supporting scalable financial operations.",
  outcomes: [
    {
      title: "Improved trust across regulated journeys",
      copy: "The redesigned workflows created clearer and more understandable investment experiences.",
    },
    {
      title: "Established scalable product foundations",
      copy: "Reusable patterns improved consistency across customer and broker products.",
    },
    {
      title: "Simplified operational complexity",
      copy: "Broker and account tooling became easier to navigate and manage.",
    },
    {
      title: "Strengthened product maturity",
      copy: "The work helped PrimaryBid evolve into a more cohesive, scalable and high-trust financial platform.",
    },
  ],
};

export const primaryBidReflection = {
  label: "11 Reflection",
  headline: "What I learned",
  lead: "The biggest learning was that designing financial products is fundamentally about designing confidence.",
  body: "Users do not only evaluate speed, features or functionality. They evaluate trust, clarity, reassurance, predictability and transparency.",
  body2:
    "Designing within regulated environments required balancing compliance with usability, complexity with clarity and operational requirements with customer trust. The result was a more structured and scalable investment experience designed around confidence, transparency and consistency.",
};

