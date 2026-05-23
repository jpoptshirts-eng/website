export const quickShopSubnav = [
  { id: "overview", label: "Overview" },
  { id: "opportunity", label: "Opportunity" },
  { id: "my-role", label: "My role" },
  { id: "problem", label: "Problem" },
  { id: "insights", label: "Insights" },
  { id: "principles", label: "Principles" },
  { id: "exploration", label: "Exploration" },
  { id: "solution", label: "Solution" },
  { id: "decisions", label: "Decisions" },
  { id: "validation", label: "Validation" },
  { id: "impact", label: "Impact" },
  { id: "reflection", label: "Reflection" },
  { id: "skills", label: "Skills" },
] as const;

export const quickShopHero = {
  label: "01 Case Study",
  title: "QuickShop",
  subcopy:
    "Reducing weekly grocery friction through personalised basket building",
  supporting:
    "A personalised basket-building experience designed to help customers rebuild their regular shop faster using behavioural data and recommendation confidence.",
  meta: [
    { label: "Role", value: "Senior Product Designer" },
    { label: "Company", value: "Waitrose & Partners" },
    { label: "Timeline", value: "10 weeks" },
    {
      label: "Focus",
      value: "Personalisation / Behavioural UX / AI-assisted commerce",
    },
  ],
  image: "/images/work/quickshop/hero-hand.png",
  imageAlt:
    "Hand holding a phone showing the Waitrose QuickShop personalised basket experience.",
};

export const quickShopOpportunity = {
  label: "02 Overview",
  headline: "Routine shops were still too manual.",
  body: "Online grocery shopping involves high-frequency repeat behaviour. Customers regularly repurchase staple groceries, household essentials, familiar brands and recurring weekly products.",
  body2:
    "Despite this, rebuilding a weekly basket still required repeated searching, category navigation and manual basket building.",
  body3:
    "QuickShop explored whether personalisation could make routine shopping faster, clearer and more effortless.",
  cards: [
    { title: "Repeated searching", icon: "search" as const },
    { title: "Manual basket building", icon: "basket" as const },
    { title: "Decision-heavy browsing", icon: "branch" as const },
    { title: "Slower basket completion", icon: "clock" as const },
  ],
};

export const quickShopMyRole = {
  label: "03 My role",
  headline: "I led the experience strategy.",
  intro:
    "As Senior Product Designer, I led the end-to-end experience design for QuickShop, from defining the customer problem and testing interaction models through to shaping the MVP direction with product, data and engineering teams.",
  avatar: "/images/jacinto-hero.png",
  avatarAlt: "Jacinto De Matos",
  cards: [
    {
      title: "Framed the customer problem",
      copy: "I translated repeat shopping behaviour into a clear product opportunity focused on reducing effort, improving confidence and speeding up basket building.",
      icon: "target" as const,
    },
    {
      title: "Explored interaction models",
      copy: "I designed and compared different recommendation experiences, including Joy Scrolling, Step-by-Step Shopping and Netflix-style navigation.",
      icon: "layout" as const,
    },
    {
      title: "Validated behaviour through testing",
      copy: "I used customer feedback to understand which models felt faster, clearer and easier to trust during repeat weekly shops.",
      icon: "users" as const,
    },
    {
      title: "Shaped the MVP direction",
      copy: "I helped prioritise a focused Top Regulars MVP to validate behavioural assumptions quickly while reducing implementation complexity.",
      icon: "flag" as const,
    },
  ],
};

export const quickShopProblem = {
  label: "04 Problem",
  headline: "Repeat shopping still felt like starting again.",
  body: "Most online grocery experiences treated every shopping session as a new browsing journey.",
  body2:
    "But grocery shopping behaviour is highly habitual. Customers often wanted to repeat previous behaviour, replenish essentials quickly and complete routine shopping efficiently.",
  body3:
    "Traditional navigation forced customers to search for known products, move across multiple categories and rebuild baskets from scratch.",
  challenge:
    "How might we intelligently streamline repeat shopping behaviour without overwhelming customers or reducing confidence?",
  journey: [
    "Start weekly shop",
    "Search for milk",
    "Search for bread",
    "Browse household",
    "Add regulars",
    "Check basket",
    "Repeat next week",
  ],
};

export const quickShopQuotes = [
  "The goal wasn't discovery. It was reducing effort for repeat purchasing.",
  "Customers preferred recommendations that felt structured, transparent and confidence-driven.",
];

export const quickShopInsights = {
  label: "06 Behavioural insights",
  headline: "Customers wanted speed, not more choice.",
  intro:
    "Research showed that grocery shopping is deeply habitual. Customers often shop around predictable routines, familiar products and replenishment cycles.",
  cards: [
    {
      title: "Grocery shopping is deeply habitual",
      copy: "Customers consistently purchased recurring products on predictable cycles, including weekly staples, household products, repeat brands and replenishment items.",
      icon: "repeat" as const,
    },
    {
      title: "Speed mattered more than exploration",
      copy: "During routine weekly shops, customers wanted efficiency, familiarity and predictability rather than discovery-led browsing.",
      icon: "zap" as const,
    },
    {
      title: "Over-personalisation created friction",
      copy: "Recommendations became frustrating when they felt irrelevant, overly broad or difficult to scan.",
      icon: "alert" as const,
    },
    {
      title: "Confidence shaped trust",
      copy: "Customers responded better when recommendations felt highly relevant, structured, transparent and confidence-driven.",
      icon: "eye" as const,
    },
  ],
};

export const quickShopPrinciples = {
  label: "07 Design principles",
  headline: "Reduce effort, not control.",
  intro:
    "These principles shaped how the experience balanced behavioural intelligence, trust and customer control.",
  hypothesis:
    "We believed that if we could identify highly predictable shopping behaviour, prioritise confidence-based recommendations, simplify basket rebuilding and structure recommendations around customer mental models, we could reduce friction and increase repeat-purchase efficiency.",
  items: [
    {
      number: "1.",
      title: "Prioritise confidence over quantity",
      copy: "Highly relevant recommendations were more valuable than large recommendation sets.",
      icon: "target" as const,
    },
    {
      number: "2.",
      title: "Reduce decision fatigue",
      copy: "The experience should minimise unnecessary browsing and searching.",
      icon: "sliders" as const,
    },
    {
      number: "3.",
      title: "Reflect natural shopping behaviour",
      copy: "Customers think in routines, categories and replenishment patterns, not algorithmic outputs.",
      icon: "repeat" as const,
    },
    {
      number: "4.",
      title: "Keep the experience lightweight",
      copy: "The interaction model needed to feel fast, focused and easy to scan.",
      icon: "feather" as const,
    },
  ],
};

export const quickShopExploration = {
  label: "08 Concept exploration",
  headline: "Three ways to rebuild a basket.",
  intro:
    "A major part of the project focused on testing different interaction models for personalised basket building.",
  image: "/images/work/quickshop/mockup-explore.png",
  imageAlt:
    "Two phone screens showing Waitrose QuickShop favourites and list view interaction concepts.",
  concepts: [
    {
      number: "01",
      title: "Joy Scrolling",
      description:
        "A continuous feed of recommended products displayed within a single long page.",
      learned:
        "Customers struggled to maintain context. Recommendations felt overwhelming, category switching created friction and lower-confidence products reduced trust.",
      outcome: "Rejected",
      outcomeTone: "muted" as const,
      diagram: "feed" as const,
    },
    {
      number: "02",
      title: "Step-by-Step Shopping",
      description:
        "A structured basket-building experience organised into focused stages such as Top Regulars, Food & Drink, Household & More and Inspirational Meals.",
      learned:
        "This aligned more closely with customer mental models. Customers described it as faster, clearer, easier to trust and more predictable.",
      outcome: "Preferred direction",
      outcomeTone: "positive" as const,
      diagram: "steps" as const,
    },
    {
      number: "03",
      title: "Netflix-style navigation",
      description:
        "A vertically stacked interface using horizontal product carousels grouped by recommendation themes.",
      learned:
        "It improved category separation but created excessive scanning, fragmented focus and weaker progression through basket building.",
      outcome: "Useful learning",
      outcomeTone: "neutral" as const,
      diagram: "carousels" as const,
    },
  ],
};

export const quickShopSolution = {
  label: "10 Solution",
  headline: "A faster way to rebuild regular shops.",
  body: "The final direction focused on a simplified Step-by-Step basket-building experience.",
  body2:
    "Recommendations were prioritised using behavioural confidence scoring and grouped into structured categories aligned with shopping habits.",
  body3:
    "The experience surfaced highly predictable repeat purchases, household staples, personalised product suggestions and category-specific recommendations within a fast, lightweight flow.",
  image: "/images/work/quickshop/mockup-list.png",
  imageAlt:
    "QuickShop list view showing regular items with quick add to trolley on mobile.",
  features: [
    {
      title: "Top Regulars",
      copy: "High-confidence repeat purchases formed the foundation of the basket-building experience.",
      color: "purple" as const,
    },
    {
      title: "Structured recommendation groups",
      copy: "Recommendations were grouped around behavioural patterns rather than algorithmic outputs.",
      color: "orange" as const,
    },
    {
      title: "Lightweight interaction design",
      copy: "The flow prioritised quick selection, minimal decision-making, rapid progression and easy basket refinement.",
      color: "pink" as const,
    },
  ],
  logic: [
    "Behavioural data",
    "Confidence score",
    "Product grouping",
    "Quick basket action",
  ],
};

export const quickShopDecisions = {
  label: "11 Key product decisions",
  headline: "The decisions that shaped the experience.",
  subcopy:
    "The product direction was shaped by customer behaviour, recommendation trust and delivery constraints.",
  items: [
    {
      number: "01",
      title: "We prioritised recommendation confidence over volume",
      copy: "Large recommendation sets reduced trust and increased cognitive load. Surfacing fewer, more relevant products created stronger customer confidence.",
      icon: "eye" as const,
    },
    {
      number: "02",
      title: "We avoided endless recommendation feeds",
      copy: "Continuous feeds created scanning fatigue and reduced orientation. Structured progression aligned more closely with grocery shopping behaviour.",
      icon: "sliders" as const,
    },
    {
      number: "03",
      title: "We designed around behavioural patterns, not categories alone",
      copy: "Customers think in routines and replenishment behaviour. Grouping recommendations around shopping intent improved usability.",
      icon: "target" as const,
    },
    {
      number: "04",
      title: "We shipped a focused MVP",
      copy: "Although broader recommendation structures tested positively, the initial MVP focused on Top Regulars. This allowed the team to validate behavioural assumptions quickly, reduce implementation complexity and accelerate delivery.",
      icon: "user" as const,
    },
  ],
};

export const quickShopValidation = {
  label: "12 Validation and iteration",
  headline: "Testing helped simplify the direction.",
  body: "The concepts were tested with customers across different shopping behaviours and levels of online grocery familiarity.",
  process: [
    { number: "01", title: "Research", copy: "Behavioural insight and concept framing" },
    { number: "02", title: "Prototype", copy: "Low-fi to hi-fi interaction models" },
    { number: "03", title: "Test", copy: "Usability testing with customers" },
    { number: "04", title: "Iterate", copy: "Refine, simplify and focus the MVP" },
  ],
  learnings: [
    {
      number: "01",
      title: "Structured flows increased confidence",
      copy: "Customers responded positively to the Step-by-Step model because it reduced overwhelm, improved clarity, created stronger progression and aligned with existing shopping habits.",
    },
    {
      number: "02",
      title: "Recommendation transparency mattered",
      copy: "Trust improved when recommendations felt understandable, relevant and behaviourally logical.",
    },
    {
      number: "03",
      title: "Simplicity outperformed novelty",
      copy: "While more exploratory browsing models appeared visually engaging, customers ultimately prioritised speed, predictability and efficiency for routine shopping tasks.",
    },
    {
      number: "04",
      title: "Poor matches reduced trust quickly",
      copy: "Customers lost confidence when lower-confidence recommendations appeared too prominently.",
    },
  ],
};

export const quickShopImpact = {
  label: "13 Impact",
  headline:
    "QuickShop reframed repeat grocery shopping around behaviour, confidence and speed.",
  outcomes: [
    {
      title: "Reduced basket-building friction",
      copy: "The experience streamlined repeat shopping by surfacing highly relevant products earlier.",
    },
    {
      title: "Increased repeat-purchase efficiency",
      copy: "Customers could rebuild regular baskets faster using confidence-based recommendations.",
    },
    {
      title: "Established recommendation frameworks",
      copy: "The project helped define how personalisation, recommendation confidence and behavioural prediction could scale across future grocery experiences.",
    },
    {
      title: "Created foundations for AI-assisted commerce",
      copy: "QuickShop established early frameworks for more intelligent grocery experiences centred around behavioural understanding, predictive shopping and adaptive recommendation systems.",
    },
  ],
};

export const quickShopReflection = {
  label: "14 Reflection",
  headline: "Personalisation only worked when it reduced effort.",
  body: "The most important learning was that personalisation alone does not reduce friction.",
  body2:
    "Recommendations only became valuable when they aligned with customer expectations, felt highly relevant, reduced cognitive effort and maintained customer confidence.",
  body3:
    "Designing for repeat grocery behaviour required balancing prediction with clarity, speed with trust and automation with human shopping habits.",
  from: "How do we recommend more products?",
  to: "How do we make routine shopping feel effortless?",
};

export const quickShopSkills = {
  label: "15 Skills",
  headline: "Core skills demonstrated.",
  tags: [
    "Product strategy",
    "Behavioural UX",
    "Recommendation systems",
    "AI-assisted commerce",
    "Systems thinking",
    "Personalisation design",
    "Interaction design",
    "Information architecture",
    "User research",
    "Rapid prototyping",
    "A/B testing",
    "Cross-functional collaboration",
    "Data-informed design",
    "E-commerce optimisation",
  ],
  closing:
    "QuickShop demonstrated how behavioural insight, recommendation logic and careful interaction design can turn a repetitive shopping task into a faster, more confident and more intelligent customer experience.",
};
