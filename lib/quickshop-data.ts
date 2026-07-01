export const quickShopSubnav = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "behaviour", label: "Behaviour" },
  { id: "model", label: "Model" },
  { id: "constraints", label: "Constraints" },
  { id: "concepts", label: "Concepts" },
  { id: "prototype", label: "Prototype" },
  { id: "testing", label: "Testing" },
  { id: "solution", label: "Solution" },
  { id: "results", label: "Results" },
  { id: "reflection", label: "Reflection" },
] as const;

export const quickShopHero = {
  label: "01 Case Study",
  title: "QuickShop",
  subcopy:
    "Reducing weekly grocery friction through personalised basket building",
  supporting:
    "A behaviour-led basket-building experience designed to help customers rebuild their regular shop faster using purchase history and recommendation confidence.",
  meta: [
    { label: "Role", value: "Senior Product Designer" },
    { label: "Company", value: "Waitrose & Partners" },
    { label: "Timeline", value: "8 months" },
    {
      label: "Focus",
      value: "Predictive personalisation / Behavioural UX / Commerce",
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
  body: "I led the translation of Data Science’s Basket Building Model into a customer-facing proposition. I defined how recommendation confidence influenced hierarchy, grouping and progression; designed and tested three interaction models; created a data-connected prototype capable of representing different customer behaviours; and worked with Product, Data Science and Engineering to narrow the initial release to Top Regulars.",
  bullets: [
    "Translated behavioural model outputs into interface hierarchy, grouping and progression",
    "Designed and compared three personalised basket-building interaction models with UX research",
    "Built a data-connected prototype to test recommendation behaviour across customer datasets",
    "Worked with product, data science and engineering to shape and ship a focused Top Regulars MVP",
  ],
};

export const quickShopChallenge = {
  label: "02 The challenge",
  headline: "Repeat shopping still felt like starting again.",
  body: [
    "Most online grocery experiences treated every shopping session as a new browsing journey. Regular customers still searched, navigated categories and rebuilt similar baskets week after week.",
    "Favourites preserved historical purchases, but historical behaviour did not always reflect current intent. As saved products accumulated, finding what mattered now became slower — especially when diets, households or routines changed.",
    "QuickShop explored whether predictive personalisation could make routine shopping faster, clearer and more controlled without reducing customer confidence.",
  ],
  contextImage: "/images/work/quickshop/context/customer-waitrose.jpg",
  contextImageAlt:
    "Customer leaving a Waitrose store carrying branded shopping bags after a weekly shop.",
};

export const quickShopExistingBehaviour = {
  label: "03 Existing behaviour",
  headline: "Why regular shopping still took too much effort.",
  intro:
    "Customers already had ways to revisit familiar products, but each route placed work back onto them. The opportunity was not simply to create another list. It was to make rebuilding a routine shop faster and more relevant to the customer’s current needs.",
  cards: [
    {
      title: "Favourites required manual curation",
      copy: "Customers were using Favourites as a workaround for rebuilding regular shops, but they still had to maintain the list themselves and decide what was relevant each time.",
    },
    {
      title: "Previous Orders required searching backwards",
      copy: "Only 2.4% of total add-to-trolley actions came through Previous Orders. Customers had to open historic orders and identify what they wanted to buy again.",
    },
    {
      title: "QuickShop could predict what was relevant now",
      copy: "Rather than asking customers to maintain a list or browse previous baskets, QuickShop used recurring purchase behaviour to prioritise products they were most likely to need.",
    },
  ],
  conclusion:
    "QuickShop shifted repeat shopping from remembering and searching towards recognising and confirming.",
  image: "/images/work/quickshop/context/current-favs.png",
  imageWidth: 784,
  imageHeight: 1692,
  imageAlt:
    "Waitrose Favourites mobile screen showing category filters, sort options and a long list of previously purchased products.",
};

export const quickShopResearch = {
  label: "04 Research",
  headline: "Understanding when personalisation stopped feeling personal.",
  intro:
    "Working closely with the UX researcher, we combined behavioural evidence, customer conversations and prototype testing to understand where the existing experience broke down and which interaction model customers trusted most.",
  workspace: {
    image: "/images/work/quickshop/research/miro-workspace.png",
    imageAlt:
      "Miro research board showing QuickShop concept development, prototype journeys, test observations and competitor analysis.",
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
  label: "05 Participants",
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
  label: "06 Insights",
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

export const quickShopModel = {
  label: "07 Behavioural model",
  headline: "Turning repeat behaviour into recommendation confidence.",
  intro:
    "I worked with Peter in Data Science to translate the existing Basket Building Model into a customer-facing experience. The model examined both how frequently and how regularly an individual customer purchased each product.",
  body: "Together, these signals produced a predictability score for each customer-product relationship. A product bought frequently and at a consistent interval could be treated as a high-confidence recommendation. Occasional or irregular purchases required more cautious placement.",
  chart: {
    src: "/images/work/quickshop/model/regularity-frequency-chart.png",
    alt: "Scatterplot showing product purchase analysis with purchase frequency on the x-axis and purchase regularity on the y-axis.",
    width: 1024,
    height: 780,
  },
  signals: [
    {
      title: "Frequency",
      copy: "How often the customer purchased the product across their order history.",
    },
    {
      title: "Regularity",
      copy: "How consistently the purchase appeared within the customer’s routine.",
    },
    {
      title: "Predictability",
      copy: "The combined confidence that the product was relevant to the customer’s next shop.",
    },
  ],
  flow: [
    "Purchase history",
    "Frequency and regularity",
    "Predictability score",
    "Recommendation priority",
    "Customer interface",
  ],
  highlight:
    "The challenge was not only producing recommendations. It was deciding how much confidence was required before a recommendation deserved the customer’s attention.",
};

export const quickShopConstraints = {
  label: "08 Constraints and trade-offs",
  headline: "Prioritising what we could prove in the MVP.",
  intro:
    "QuickShop needed to validate predictive basket building without blocking roadmap delivery. Real constraints around engineering effort, category scale and customer trust shaped what shipped first.",
  constraintsLabel: "Constraints",
  tradeoffsLabel: "Trade-offs",
  constraints: [
    {
      title: "Fast validation required",
      copy: "We needed to prove the predictive shopping experience quickly without delaying broader roadmap delivery.",
    },
    {
      title: "Engineering cost of the full vision",
      copy: "A fully guided multi-step experience demanded significant build effort before value was proven.",
    },
    {
      title: "Relevance at category scale",
      copy: "Maintaining useful recommendations across large product ranges added complexity to logic and presentation.",
    },
    {
      title: "Risk of recommendation overload",
      copy: "Too many layers could overwhelm customers and weaken confidence in what was being suggested.",
    },
    {
      title: "Speed, familiarity and discovery",
      copy: "The journey had to balance routine efficiency with enough discovery without slowing repeat shops.",
    },
    {
      title: "Evidence before scale",
      copy: "Behavioural and commercial metrics needed to justify investment before expanding the experience.",
    },
  ],
  tradeoffs: [
    {
      title: "Top Regulars as MVP",
      copy: "We launched a focused entry point first rather than the full multi-step basket-building experience.",
    },
    {
      title: "Less exploration upfront",
      copy: "Category breadth was reduced initially to improve delivery speed and learning clarity.",
    },
    {
      title: "Structured steps over Joy Scrolling",
      copy: "Testing showed continuous feeds caused cognitive fatigue and loss of orientation, so we prioritised step-based navigation.",
    },
    {
      title: "Inspiration deferred",
      copy: "Recipe-led and inspirational experiences waited until core behavioural assumptions were validated.",
    },
    {
      title: "Customer control over automation",
      copy: "Selections stayed reviewable rather than relying too heavily on automated basket creation.",
    },
  ],
};

export const quickShopPrinciples = {
  label: "09 Design principles",
  headline: "Reduce effort, not control.",
  items: [
    {
      title: "Prioritise confidence over quantity",
      copy: "A smaller set of relevant recommendations was more valuable than a large set of uncertain suggestions.",
    },
    {
      title: "Reduce decision fatigue",
      copy: "The experience should minimise unnecessary browsing, scanning and repeated searching.",
    },
    {
      title: "Reflect natural shopping behaviour",
      copy: "Recommendations should follow routines, replenishment patterns and recognisable categories.",
    },
    {
      title: "Keep the experience lightweight",
      copy: "Customers needed to progress quickly while retaining the ability to review and refine their basket.",
    },
  ],
};

export type QuickShopConcept = {
  number: string;
  title: string;
  description: string;
  benefit: string;
  risk?: string;
  finding: string;
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
  };
};

export const quickShopConcepts = {
  label: "10 Concepts",
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
        "An exploratory continuous feed designed to make browsing feel engaging.",
      benefit:
        "Continuous browsing created a fast, lightweight entry into recommendations.",
      risk: "It created scanning fatigue and weakened customers’ sense of progression.",
      finding:
        "Customers struggled to maintain context. Recommendations felt overwhelming, category switching created friction and lower-confidence products reduced trust.",
      outcome: "Rejected",
      outcomeTone: "muted",
      diagram: "feed",
    },
    {
      number: "02",
      title: "Step-by-Step",
      description:
        "A structured flow that grouped recommendations into manageable stages.",
      benefit:
        "Clear stages reduced cognitive load and gave customers a stronger sense of progression.",
      finding:
        "It provided the clearest orientation, strongest progression and best fit with routine shopping behaviour.",
      outcome: "Preferred direction",
      outcomeTone: "positive",
      diagram: "steps",
    },
    {
      number: "03",
      title: "Netflix-style navigation",
      description:
        "A collection-led model designed to encourage discovery across recommendation groups.",
      benefit: "Horizontal groups created clear category separation.",
      risk: "It felt visually familiar but required too much browsing for a task primarily driven by speed.",
      finding:
        "It improved category separation but created excessive lateral scanning, fragmented focus and weaker progression through basket building.",
      outcome: "Useful learning",
      outcomeTone: "neutral",
      diagram: "carousels",
    },
  ] satisfies QuickShopConcept[],
  direction: {
    headline: "Why Step-by-Step became the direction",
    body: [
      "Step-by-Step Shopping became the preferred direction because it matched how customers already thought about a weekly shop — handling regulars first, then moving through familiar categories with a clear sense of progress.",
      "Carousel-style grouping still informed how related products were presented within each stage, but the overall journey was structured rather than feed-driven.",
    ],
  },
} satisfies QuickShopConceptsSection;

export const quickShopPrototype = {
  label: "11 Prototyping the system",
  headline: "Static screens could not test a dynamic product.",
  intro:
    "The proposed experience depended on customer-specific data, recommendation confidence, product categories, quantities, offers and grouping rules. Conventional Figma prototypes could show individual journeys, but they could not represent the behaviour of the wider system efficiently.",
  limitationHeading: "The limitation",
  limitations: [
    {
      title: "The spaghetti trap",
      copy: "Manually connecting every possible state created prototypes that were difficult to edit, debug and maintain.",
    },
    {
      title: "Rigid customer journeys",
      copy: "Static screens could not respond credibly to different customer histories and product recommendations.",
    },
    {
      title: "Slow iteration",
      copy: "Building a realistic journey could take up to two weeks, limiting the number of ideas we could test.",
    },
    {
      title: "Scaling failure",
      copy: "As personalisation increased, the number of screens and connections expanded faster than the prototype could support.",
    },
  ],
  responseHeading: "The response",
  response:
    "I used Figma Make with a structured Supabase dataset to create a more realistic prototype. This allowed different customer datasets and product rules to populate the same interface rather than manually rebuilding every possible journey.",
  supports: [
    {
      title: "Structured product data",
      copy: "Products included recommendation order, quantity, category, grouping, product type and offer information.",
    },
    {
      title: "Reusable interface logic",
      copy: "The same components could respond to different datasets and behavioural conditions.",
    },
    {
      title: "Faster learning",
      copy: "We could test the behaviour of the recommendation system, not only the appearance of individual screens.",
    },
  ],
};

export const quickShopInteractionLogic = {
  label: "12 Interaction logic",
  headline: "How behavioural signals shaped the interface.",
  intro:
    "The model produced scores and product attributes, but customers needed a clear, manageable shopping experience. I translated those outputs into a set of interface rules governing what appeared, where it appeared and how products were grouped.",
  flow: [
    "Behavioural data",
    "Confidence threshold",
    "Product grouping",
    "Journey position",
    "Quick basket action",
  ],
  rules: [
    {
      number: "01",
      title: "High-confidence products became Top Regulars",
      copy: "Products above the agreed confidence threshold could be surfaced prominently as likely repeat purchases.",
      detail:
        "The prototype initially used a confidence threshold of approximately 60% to explore how many products could be shown before relevance and trust began to fall.",
    },
    {
      number: "02",
      title: "Related products were grouped together",
      copy: "Alternative or related products could be assigned a shared grouping identifier and displayed together, reducing repetitive scrolling and supporting quicker comparison.",
    },
    {
      number: "03",
      title: "Categories shaped progression",
      copy: "Product categories helped determine where recommendations appeared within the Step-by-Step journey, aligning the flow with recognisable shopping behaviour rather than a continuous recommendation feed.",
    },
    {
      number: "04",
      title: "Offers supported value without disrupting the journey",
      copy: "Offer data could influence product presentation and quantity recommendations while keeping customers within the main flow.",
      detail:
        "Product groups could use different presentation patterns such as standard, single and double depending on the recommendation context.",
    },
  ],
  image: {
    src: "/images/work/quickshop/interaction/recommendation-variants.png",
    alt: "Figma specification showing single, double and standard recommendation variants with score and grouping parameters.",
    width: 3358,
    height: 1890,
  },
};

export const quickShopTesting = {
  label: "13 Validation and iteration",
  headline: "Testing changed the density, confidence and scope.",
  intro:
    "Testing focused on more than whether customers could complete the flow. We needed to understand how recommendation confidence, information density and progression affected trust.",
  beforeLabel: "Before testing",
  afterLabel: "After testing",
  before: [
    "Broader recommendation sets",
    "More categories shown upfront",
    "Lower-confidence products appeared too prominently",
    "Continuous browsing increased scanning",
    "The full multi-step concept carried significant delivery complexity",
  ],
  after: [
    "Higher-confidence products were prioritised",
    "Fewer recommendations appeared at each stage",
    "Related products were grouped more clearly",
    "Step-based progression improved orientation",
    "Top Regulars became the focused initial release",
  ],
  evidence: [
    {
      title: "Structured flows increased confidence",
      copy: "Customers responded positively to Step-by-Step because it reduced overwhelm, improved clarity and created stronger progression.",
    },
    {
      title: "Recommendation transparency mattered",
      copy: "Trust improved when recommendations felt relevant and behaviourally logical.",
    },
    {
      title: "Simplicity outperformed novelty",
      copy: "Customers prioritised speed, predictability and efficiency over visually exploratory browsing.",
    },
    {
      title: "Poor matches reduced trust quickly",
      copy: "Lower-confidence recommendations made the experience feel less reliable when they appeared too prominently.",
    },
  ],
  pullQuote:
    "The winning direction was not the most visually novel. It was the one that best matched routine shopping behaviour.",
};

export const quickShopSolution = {
  label: "14 Solution",
  headline: "A faster way to rebuild regular shops.",
  body: [
    "The broader Step-by-Step model established the long-term direction, but the first release focused on Top Regulars: the highest-confidence repeat purchases within each customer’s history.",
    "Recommendations were prioritised using behavioural confidence and presented in a lightweight, reviewable flow. Customers could quickly select familiar products, adjust quantities and continue building their basket without handing complete control to automation.",
  ],
  features: [
    {
      title: "Top Regulars",
      copy: "High-confidence repeat purchases formed the foundation of the initial basket-building experience.",
    },
    {
      title: "Structured recommendation groups",
      copy: "The broader design direction organised products around shopping behaviour and recognisable categories.",
    },
    {
      title: "Lightweight interaction design",
      copy: "The experience prioritised rapid selection, clear progression and easy basket refinement.",
    },
  ],
  flow: [
    "Purchase behaviour",
    "Predictability score",
    "Confidence threshold",
    "Product grouping",
    "Quick basket action",
  ],
  image: {
    src: "/images/work/quickshop/solution/quickshop-widget.png",
    alt: "Waitrose Favourites screen showing the Quick Shop widget with regular items ready to add to the trolley.",
    width: 1550,
    height: 2996,
  },
};

export const quickShopImpact = {
  label: "15 Results",
  headline: "The impact of reducing repeat shopping friction.",
  intro:
    "QuickShop delivered measurable gains in speed, basket value, engagement and repeat behaviour — showing the value of behaviour-led personalisation when it is designed around customer confidence and control.",
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
      copy: "Customers made two additional orders over a 13-week period.",
    },
    {
      metric: "37%",
      title: "feature retention",
      copy: "37% of customers returned to use the feature again.",
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
  label: "16 Reflection",
  headline: "Personalisation was only valuable when it made the shop feel simpler.",
  body: [
    "QuickShop showed that predictive technology alone does not create a useful experience. Customers judged the system through the quality, order and density of what appeared in front of them.",
    "The most important design work was translating invisible behavioural signals into clear interface rules, then reducing the first release to the smallest proposition that could prove customer and commercial value.",
  ],
  points: [
    {
      title: "Design the confidence, not only the recommendation",
      copy: "Where and how a suggestion appeared mattered as much as the product itself.",
    },
    {
      title: "Prototype the system behaviour",
      copy: "Realistic data and rules exposed issues that static happy-path screens could not.",
    },
    {
      title: "Prove the habit before expanding the vision",
      copy: "Top Regulars allowed the team to validate repeat-shopping value before investing in the broader Step-by-Step journey.",
    },
  ],
  liveLink: {
    href: "https://www.waitrose.com/ecom/quick-shop",
    label: "View Quick Shop on Waitrose",
  },
};

export type QuickShopResearchWorkspace = {
  image: string;
  imageAlt: string;
};
