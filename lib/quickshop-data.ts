export const quickShopSubnav = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "research", label: "Research" },
  { id: "concepts", label: "Concepts" },
  { id: "solution", label: "Solution" },
  { id: "recommendations", label: "Recommendations" },
  { id: "mvp", label: "MVP" },
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
    { label: "Timeline", value: "8 months" },
    {
      label: "Focus",
      value: "Personalisation / Behavioural UX / AI-assisted commerce",
    },
  ],
  image: "/images/work/quickshop/hero-hand.png",
  imageAlt:
    "Hand holding an iPhone showing the Waitrose Favourites and Quick Shop experience.",
};

export const quickShopMyRole = {
  title: "My role",
  avatar: "/images/jacinto-hero.png",
  avatarAlt: "Jacinto De Matos",
  body: "I led the experience strategy, interaction design, prototyping and validation for QuickShop — a responsive web experience designed mobile-first and adapted across breakpoints. I worked closely with product, engineering, data and UX research to shape a focused Top Regulars MVP.",
  bullets: [
    "Defined the behavioural problem around repeat weekly grocery shopping",
    "Designed and compared personalised basket-building interaction models with UX research",
    "Created prototypes to test recommendation structure, confidence and customer control",
    "Worked with product, data and engineering to shape and ship a focused Top Regulars MVP",
  ],
};

export const quickShopChallenge = {
  label: "The challenge",
  headline: "Repeat shopping still felt like starting again.",
  body: [
    "Most online grocery experiences treated every shopping session as a new browsing journey. Regular customers still searched, navigated categories and rebuilt similar baskets week after week.",
    "Favourites preserved historical purchases, but historical behaviour did not always reflect current intent. As saved products accumulated, finding what mattered now became slower — especially when diets, households or routines changed.",
    "QuickShop explored whether personalisation could make routine shopping faster, clearer and more controlled without reducing customer confidence.",
  ],
  contextImage: "/images/work/quickshop/context/customer-waitrose.jpg",
  contextImageAlt:
    "Customer leaving a Waitrose store carrying branded shopping bags after a weekly shop.",
};

export const quickShopExistingExperience = {
  label: "Existing experience",
  headline: "Favourites remembered purchases, but not always current intent.",
  body: [
    "Favourites captured everything a customer had bought before. QuickShop was designed as a more focused route into repeat shopping — surfacing high-confidence regulars rather than asking customers to navigate their full purchase history.",
  ],
  image: "/images/work/quickshop/context/current-favs.png",
  imageWidth: 474,
  imageHeight: 1024,
  imageAlt:
    "Waitrose Favourites mobile screen showing category filters, sort options and a long list of previously purchased products.",
  caption:
    "QuickShop created a distinct route for high-confidence repeat purchases rather than asking customers to navigate their full purchase history.",
};

export const quickShopResearch = {
  label: "Research",
  headline: "Understanding when personalisation stopped feeling personal.",
  intro:
    "Working closely with the UX researcher, we combined behavioural evidence, customer conversations and prototype testing to understand where the existing experience broke down and which interaction model customers trusted most.",
  workspace: {
    image: "/images/work/quickshop/research/miro-workspace.png",
    imageAlt:
      "Miro research board showing QuickShop concept development, prototype journeys, test observations and competitor analysis.",
    caption:
      "The shared research workspace brought together behavioural evidence, concept development, prototype journeys, test observations and competitor analysis.",
  },
  bridge: {
    image: "/images/work/quickshop/research/miro-angled.png",
    imageAlt:
      "Angled view of the QuickShop research board showing ideation clusters and mobile prototype screens.",
    caption:
      "Testing showed that related options needed to remain visible together, leading to a family of grouped recommendation variants rather than one universal card.",
  },
};

export type QuickShopParticipant = {
  id: string;
  segment: string;
  basket: string;
  responsibility: string;
  experience: string;
};

export const quickShopParticipants = {
  label: "Participants",
  headline: "Testing across different shopping routines.",
  intro:
    "We compared the concepts with six experienced Waitrose online customers whose basket sizes, shopping responsibilities and routines varied substantially. This helped us test whether the interaction model worked beyond one narrow type of repeat shopper.",
  items: [
    {
      id: "Participant 01",
      segment: "Platinum Loyals",
      basket: "£200+ indicative recent basket",
      responsibility: "Primary household shopper",
      experience: "Experienced online grocery customer",
    },
    {
      id: "Participant 02",
      segment: "Loyals",
      basket: "£60–£80 indicative recent basket",
      responsibility: "Shares household shopping",
      experience: "Regular Waitrose online shopper",
    },
    {
      id: "Participant 03",
      segment: "Loyals",
      basket: "£160–£180 indicative recent basket",
      responsibility: "Primary household shopper",
      experience: "Experienced online grocery customer",
    },
    {
      id: "Participant 04",
      segment: "Loyals",
      basket: "£100–£120 indicative recent basket",
      responsibility: "Primary household shopper",
      experience: "Regular Waitrose online shopper",
    },
    {
      id: "Participant 05",
      segment: "Loyals",
      basket: "£100–£120 indicative recent basket",
      responsibility: "Shares household shopping",
      experience: "Experienced online grocery customer",
    },
    {
      id: "Participant 06",
      segment: "Loyals",
      basket: "£120–£140 indicative recent basket",
      responsibility: "Primary household shopper",
      experience: "Regular Waitrose online shopper",
    },
  ] satisfies QuickShopParticipant[],
};

export type QuickShopInsight = {
  number: string;
  title: string;
  copy: string;
};

export const quickShopInsights = {
  label: "Insights",
  headline: "Customers wanted speed, but not at the cost of control.",
  items: [
    {
      number: "01",
      title: "Historical behaviour could become stale",
      copy: "Products previously bought often remained visible after diets, preferences or household routines had changed.",
    },
    {
      number: "02",
      title: "Relevance determined trust",
      copy: "A small number of visibly unsuitable recommendations could undermine confidence in the entire experience.",
    },
    {
      number: "03",
      title: "Structure reduced effort",
      copy: "Participants found a staged journey easier to understand than one long, continuous product feed.",
    },
    {
      number: "04",
      title: "Related products needed to remain comparable",
      copy: "Customers evaluated variants, pack sizes, offers and substitutes together, even when the recommendation model scored them differently.",
    },
  ] satisfies QuickShopInsight[],
};

export type QuickShopConcept = {
  number: string;
  title: string;
  description: string;
  detail: string;
  testResults: string;
  advantage: string;
  limitation: string;
  outcome: string;
  outcomeTone: "positive" | "muted" | "neutral";
  diagram: "feed" | "steps" | "carousels";
};

export type QuickShopConceptsSection = {
  label: string;
  headline: string;
  intro: string[];
  testing: { label: string; copy: string };
  items: QuickShopConcept[];
  direction: {
    headline: string;
    body: string[];
    pullQuote: string;
  };
};

export const quickShopConcepts = {
  label: "Concepts",
  headline: "Three ways to make repeat shopping faster.",
  intro: [
    "A major part of the project focused on testing different interaction models for personalised basket building.",
    "We put three clickable prototypes in front of six experienced Waitrose online customers — comparing how each model handled speed, orientation, trust and basket completion across different shopping routines.",
  ],
  testing: {
    label: "How we tested",
    copy: "Participants worked through realistic repeat-shop tasks. We observed completion time, confidence in recommendations, ability to review selections and willingness to continue — then compared patterns across the three models.",
  },
  items: [
    {
      number: "01",
      title: "Joy Scrolling",
      description:
        "A continuous feed of recommended products displayed within a single long page.",
      detail:
        "Every recommendation appeared in one scrollable stream, prioritising speed of exposure over category structure. The hypothesis was that habitual shoppers could scan and tap quickly without navigating between sections.",
      testResults:
        "Customers struggled to maintain context. Recommendations felt overwhelming, category switching created friction and lower-confidence products reduced trust. Several participants lost track of what they had already added.",
      advantage:
        "Continuous browsing created a fast, lightweight entry into recommendations.",
      limitation:
        "Long feeds weakened orientation and made the journey feel harder to complete.",
      outcome: "Rejected",
      outcomeTone: "muted",
      diagram: "feed",
    },
    {
      number: "02",
      title: "Step-by-Step Shopping",
      description:
        "A structured basket-building experience organised into focused stages such as Top Regulars, Food & Drink and Household.",
      detail:
        "Each stage surfaced a smaller, confidence-scored set of recommendations aligned with a familiar shopping rhythm. Customers could complete high-certainty regulars first, then move into broader categories without facing one continuous feed.",
      testResults:
        "This aligned most closely with customer mental models. Participants described it as faster, clearer, easier to trust and more predictable. Structured flows increased confidence because customers always knew where they were in the journey.",
      advantage:
        "Clear stages reduced cognitive load and gave customers a stronger sense of progression.",
      limitation:
        "The wider vision introduced greater design and engineering complexity.",
      outcome: "Preferred direction",
      outcomeTone: "positive",
      diagram: "steps",
    },
    {
      number: "03",
      title: "Netflix-style navigation",
      description:
        "A vertically stacked interface using horizontal product carousels grouped by recommendation themes.",
      detail:
        "Categories were separated into distinct rows customers could swipe through laterally — borrowing from media browsing patterns to keep the screen feeling scannable while preserving grouping.",
      testResults:
        "It improved category separation but created excessive lateral scanning, fragmented focus and weaker progression through basket building. Useful for understanding grouping, but not as the primary navigation model.",
      advantage: "Horizontal groups created clear category separation.",
      limitation:
        "Repeated lateral scanning fragmented attention and made comparison less efficient.",
      outcome: "Useful learning",
      outcomeTone: "neutral",
      diagram: "carousels",
    },
  ] satisfies QuickShopConcept[],
  direction: {
    headline: "Why Step-by-Step became the direction",
    body: [
      "Across the three models, the clearest signal was that routine shoppers wanted speed without sacrificing orientation. Joy Scrolling felt fast initially but became disorienting. Netflix-style navigation improved grouping but slowed comparison.",
      "Step-by-Step Shopping became the preferred direction because it matched how customers already thought about a weekly shop — handling regulars first, then moving through familiar categories with a clear sense of progress.",
      "Carousel-style grouping still informed how related products were presented within each stage, but the overall journey was structured rather than feed-driven.",
    ],
    pullQuote:
      "Customers preferred recommendations that felt structured, transparent and confidence-driven.",
  },
} satisfies QuickShopConceptsSection;

export const quickShopSolution = {
  label: "Selected direction",
  headline: "A clearer path through the routine shop.",
  body: [
    "Step-by-Step separated the shop into understandable stages. Customers could handle high-confidence regular purchases first, then move into broader categories and inspiration without facing one continuous recommendation feed.",
    "The intended progression moved from Top Regulars into Food & Drink, Household, inspirational meals and finally trolley review — keeping confidence high before broader discovery.",
  ],
  pullQuote: "Speed earned attention; structure preserved confidence.",
  flowImage: "/images/work/quickshop/solution/QS_Flow.png",
  flowImageWidth: 4157,
  flowImageHeight: 3170,
  flowImageAlt:
    "Step-by-step Quick Shop flow showing progression from Top Regulars through Food & Drink, Household and inspirational categories.",
};

export type QuickShopResponsiveShowcase = {
  image: { src: string; alt: string; width: number; height: number };
};

export const quickShopResponsive = {
  label: "Responsive design",
  headline: "One recommendation hierarchy across different screen sizes.",
  body: "The underlying hierarchy remained consistent across breakpoints, but density changed with the available space. Mobile prioritised a readable selectable list, while desktop supported a higher-density grid for scanning and comparison.",
  showcase: {
    image: {
      src: "/images/work/quickshop/solution/desktop-grid.png",
      alt: "Desktop Quick Shop grid showing Top Regulars arranged in a high-density product layout.",
      width: 992,
      height: 800,
    },
  } satisfies QuickShopResponsiveShowcase,
};

export type QuickShopRecommendationSystem = {
  overview: { src: string; alt: string; width: number; height: number };
  variants: {
    title: string;
    copy: string;
    icon: "single" | "paired" | "expandable";
  }[];
  principles: { title: string; copy: string }[];
  pullQuote: string;
};

export const quickShopRecommendations = {
  label: "Recommendation system",
  headline: "Grouping related choices reduced scrolling and improved comparison.",
  intro: [
    "The recommendation model ranked individual products by probability. However, customers often compared products relationally — by brand, variant, pack size, offer or substitute. Ranking each item independently could separate closely related choices across a long list.",
    "I introduced flexible recommendation groups that kept comparable products together while preserving a clear primary recommendation.",
  ],
  system: {
    overview: {
      src: "/images/work/quickshop/components/recommendation-system-overview.png",
      alt: "Figma component exploration showing single, paired and expandable recommendation groups.",
      width: 1024,
      height: 735,
    },
    variants: [
      {
        title: "Single recommendation",
        copy: "The highest-confidence product remained immediately visible with a clear primary action.",
        icon: "single" as const,
      },
      {
        title: "Paired recommendation",
        copy: "Comparable variants or pack sizes appeared together without splitting attention across the list.",
        icon: "paired" as const,
      },
      {
        title: "Expandable group",
        copy: "Additional options stayed behind progressive disclosure until the customer chose to inspect them.",
        icon: "expandable" as const,
      },
    ],
    principles: [
      {
        title: "Keep the primary recommendation clear",
        copy: "The highest-confidence choice remained immediately visible.",
      },
      {
        title: "Bring comparable choices together",
        copy: "Related products, variants, offers or pack sizes appeared in one group.",
      },
      {
        title: "Reveal complexity progressively",
        copy: "Additional options remained behind “View more” until the customer chose to inspect them.",
      },
    ],
    pullQuote:
      "The model ranked products individually. Customers compared them relationally.",
  } satisfies QuickShopRecommendationSystem,
};

export const quickShopDecisions = {
  label: "Key product decisions",
  headline: "The decisions that shaped what shipped.",
  items: [
    {
      number: "01",
      title: "Top Regulars first",
      copy: "The journey started where recommendation confidence was strongest and time-saving value was clearest.",
    },
    {
      number: "02",
      title: "Confidence before discovery",
      copy: "Routine replenishment came before broader inspirational browsing.",
    },
    {
      number: "03",
      title: "Progressive disclosure of alternatives",
      copy: "Comparable options stayed grouped and expandable rather than flattening into one long feed.",
    },
    {
      number: "04",
      title: "Clear review before adding products",
      copy: "Customers could inspect selections before committing items to the trolley.",
    },
    {
      number: "05",
      title: "Responsive density changes",
      copy: "The same hierarchy adapted to list-first mobile and grid-first desktop layouts.",
    },
    {
      number: "06",
      title: "A narrower MVP than the tested vision",
      copy: "Later journey stages were deprioritised so the team could validate the highest-confidence behaviour first.",
    },
  ],
};

export const quickShopMvp = {
  label: "MVP",
  headline: "Starting with the highest-confidence part of the journey.",
  body: [
    "The broader concept organised repeat shopping across multiple stages. The MVP focused on Top Regulars, where confidence was strongest and the time-saving value was clearest.",
    "Although broader recommendation groups and later journey stages tested positively, subsequent stages were reduced to a one-page concept following analytics — allowing the team to validate behavioural assumptions before expanding scope.",
  ],
  image: "/images/work/quickshop/solution/mvp-entry.png",
  imageWidth: 529,
  imageHeight: 1024,
  imageAlt:
    "Quick Shop entry screen showing regular items ready to add to the trolley.",
};

export const quickShopImpact = {
  label: "Results",
  headline: "The impact of reducing repeat shopping friction.",
  intro:
    "QuickShop delivered measurable gains in speed, basket value, engagement and repeat behaviour — showing the value of data-informed personalisation when it is designed around customer confidence and control.",
  sequence: [
    "Easier to find regular products",
    "Faster to complete the shop",
    "More products added with confidence",
    "Higher commercial value",
  ],
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
  label: "Reflection",
  headline: "Personalisation only worked when it reduced effort.",
  body: [
    "The most important learning was that personalisation alone does not reduce friction. Recommendation quality is not only a model problem — interface structure affects trust in personalisation.",
    "Ranking and comparison are different customer needs. A strong future vision can still produce a deliberately narrower MVP, and customer confidence can matter more than recommendation volume.",
    "QuickShop showed that personalisation becomes useful only when customers can understand, compare and correct what the system recommends.",
  ],
  liveLink: {
    href: "https://www.waitrose.com/ecom/quick-shop",
    label: "View Quick Shop on Waitrose",
  },
};

export type QuickShopResearchWorkspace = {
  image: string;
  imageAlt: string;
  caption: string;
};
