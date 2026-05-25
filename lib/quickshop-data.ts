export const quickShopSubnav = [
  { id: "overview", label: "Overview" },
  { id: "opportunity", label: "Opportunity" },
  { id: "problem", label: "Problem" },
  { id: "insights", label: "Insights" },
  { id: "principles", label: "Principles" },
  { id: "exploration", label: "Exploration" },
  { id: "solution", label: "Solution" },
  { id: "decisions", label: "Decisions" },
  { id: "validation", label: "Validation" },
  { id: "proof", label: "Proof" },
  { id: "results", label: "Results" },
  { id: "reflection", label: "Reflection" },
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
    { label: "Timeline", value: "6 months" },
    {
      label: "Focus",
      value: "Personalisation / Behavioural UX / AI-assisted commerce",
    },
  ],
  image: "/images/work/quickshop/hero-hand.png",
  imageAlt:
    "Hand holding an iPhone showing the Waitrose Favourites and Quick Shop experience.",
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
  title: "My role",
  avatar: "/images/jacinto-hero.png",
  avatarAlt: "Jacinto De Matos",
  body: "I led the experience strategy, interaction design, prototyping and validation approach for QuickShop, working across repeat shopping behaviour, recommendation logic and personalised basket-building flows.",
  bullets: [
    "Defined the behavioural problem around repeat weekly grocery shopping",
    "Designed and compared personalised basket-building interaction models",
    "Created prototypes to test recommendation structure, confidence and customer control",
    "Worked with product, data and engineering teams to shape a focused Top Regulars MVP",
  ],
};

export const quickShopProblem = {
  label: "03 Problem",
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
  label: "04 Behavioural insights",
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
  label: "05 Design principles",
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
  label: "06 Concept exploration",
  headline: "Three ways to rebuild a basket.",
  intro:
    "A major part of the project focused on testing different interaction models for personalised basket building.",
  image: "/images/work/quickshop/mockup-explore.png",
  imageAlt:
    "iPhone showing the Waitrose Quick Shop regulars screen with product shortcuts and favourites.",
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
  label: "07 Solution",
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
  label: "08 Key product decisions",
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
  label: "09 Validation and iteration",
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

export const quickShopProof = {
  label: "Proof",
  headline: "What proved the direction was right",
  intro:
    "The strongest signal came from comparing different recommendation models against real shopping behaviour. Customers did not want more ways to browse. They wanted a faster way to rebuild the shop they already had in mind.",
  cards: [
    {
      title: "Structured shopping outperformed novelty",
      copy:
        "The Step-by-Step model tested better than endless feeds because it gave customers clearer progression, better orientation and a stronger sense of control.",
    },
    {
      title: "Poor matches damaged trust quickly",
      copy:
        "Lower-confidence recommendations made the experience feel less reliable. This reinforced the decision to prioritise fewer, higher-confidence products rather than a larger set of suggestions.",
    },
    {
      title: "MVP scope protected delivery",
      copy:
        "Although broader recommendation groups tested well, focusing the first release on Top Regulars reduced delivery complexity and allowed the team to validate the highest-confidence behaviour first.",
    },
  ],
  closing:
    "The winning direction was not the most visually novel. It was the one that best matched routine shopping behaviour.",
};

export const quickShopImpact = {
  label: "10 Results",
  headline: "The impact of reducing repeat shopping friction.",
  intro:
    "QuickShop delivered measurable gains in speed, basket value, engagement and repeat behaviour, showing the value of data-informed personalisation when it is designed around customer confidence and control.",
  featured: {
    metric: "25%",
    title: "faster completion",
    detail: "26 mins → 21 mins",
    highlight: "5 minutes saved per shop",
    copy: "Completion time dropped from 26 minutes to 21 minutes, saving customers around 5 minutes per shop.",
  },
  primary: [
    {
      metric: "+12%",
      title: "increase in AOV",
      copy: "Infrequent shoppers saw a 12% increase in average order value.",
    },
    {
      metric: "+19%",
      title: "more items per basket",
      copy: "High-value customers added 19% more items per basket.",
    },
    {
      metric: "2",
      title: "extra orders",
      copy: "Users made two additional orders over a 13-week period.",
    },
    {
      metric: "37%",
      title: "feature retention",
      copy: "37% of users returned to use the feature again.",
    },
  ],
  secondary: [
    {
      metric: "25%",
      title: "growth in Very High Value customers",
      copy: "The Very High Value customer segment grew by 25%.",
    },
  ],
  behaviour: [
    {
      metric: "45%",
      title: "reduction from Favourites",
      copy: "Navigational add-to-basket actions from Favourites dropped by 45%.",
    },
    {
      metric: "10%",
      title: "reduction from Search",
      copy: "Add-to-basket actions from Search dropped by 10%, showing customers relied less on manual searching.",
    },
  ],
  insight:
    "Browse and discovery remained stable, showing QuickShop reduced repeat-shopping friction without stopping spontaneous shopping behaviour.",
};

export const quickShopReflection = {
  label: "11 Reflection",
  headline: "Personalisation only worked when it reduced effort.",
  body: "The most important learning was that personalisation alone does not reduce friction.",
  body2:
    "Recommendations only became valuable when they aligned with customer expectations, felt highly relevant, reduced cognitive effort and maintained customer confidence.",
  body3:
    "Designing for repeat grocery behaviour required balancing prediction with clarity, speed with trust and automation with human shopping habits.",
  from: "How do we recommend more products?",
  to: "How do we make routine shopping feel effortless?",
};
