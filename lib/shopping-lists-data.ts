export const shoppingListsSubnav = [
  { id: "overview", label: "Overview" },
  { id: "why-it-mattered", label: "Why it mattered" },
  { id: "behaviour", label: "Behaviour" },
  { id: "commercial", label: "Commercial" },
  { id: "problem", label: "Problem" },
  { id: "model-shift", label: "Model shift" },
  { id: "product-gap", label: "Product gap" },
  { id: "principles", label: "Principles" },
  { id: "mapping", label: "Mapping" },
  { id: "trade-offs", label: "Trade-offs" },
  { id: "feedback", label: "Feedback" },
  { id: "validation", label: "Validation" },
  { id: "impact", label: "Impact" },
  { id: "reflection", label: "Reflection" },
] as const;

export const shoppingListsHero = {
  label: "01 Case Study",
  title: "Shopping lists",
  subcopy: "Turning messy shopping intent into intelligent baskets",
  meta: [
    { label: "Role", value: "Senior Product Designer" },
    { label: "Company", value: "Waitrose & Partners" },
    { label: "Timeline", value: "6 months" },
    {
      label: "Focus",
      value: "Intelligent shopping lists / Behavioural UX / AI assisted basket building",
    },
  ],
  image: "/images/work/shopping-lists/mockup1.png",
  imageAlt:
    "Two mobile screens showing the Waitrose shopping list creation and top up flow.",
};

export const myRole = {
  title: "My role",
  avatar: "/images/jacinto-hero.png",
  avatarAlt: "Jacinto De Matos",
  body: "I led the experience strategy, interaction design, prototyping and validation approach, working across customer behaviour, data logic and basket-building flows.",
  bullets: [
    "Defined the behavioural problem and customer planning patterns",
    "Designed the mobile list creation and basket-building experience",
    "Created prototypes to test input methods, editable suggestions and customer control",
    "Worked through recommendation logic, confidence states and refinement patterns",
  ],
};

export const whyItMattered = {
  label: "02 Why this mattered",
  headline: "Shopping lists sat at the centre of weekly grocery planning.",
  body: "Shopping lists were one of the strongest behavioural signals linked to larger basket sizes and repeat purchasing, but existing list experiences still relied heavily on manual product searching and repetitive basket building.",
  stats: [
    {
      stat: "2.5×",
      description: "Customers using lists spent up to 2.5× more than those who did not",
    },
    {
      stat: "65%+",
      description: "of customers still created physical lists",
    },
    {
      stat: "56%",
      description:
        "used hybrid planning behaviour, combining meals and individual items",
    },
    {
      stat: "",
      description:
        "New online grocery customers often started with incomplete or ambiguous intent",
      isTextOnly: true,
    },
  ],
};

export const listHabit = {
  label: "03 The behaviour existed, but the habit was weak",
  headline: "Customers used lists, but most had not built a repeatable habit.",
  intro:
    "Customers were already using lists, but the data showed that most were not building a repeatable list habit. The opportunity was not simply helping customers add items from lists to trolley. It was helping more customers create, reuse and mature their lists into a faster way to build a shop.",
  stats: [
    {
      stat: "373k+",
      label: "Saved shopping lists",
      copy: "Existing list behaviour was already present across the customer base.",
    },
    {
      stat: "252k+",
      label: "Customers",
      copy: "A meaningful number of customers had created at least one saved list.",
    },
    {
      stat: "80%",
      label: "Had only one list",
      copy: "Most list users had not yet developed a repeatable list habit.",
    },
    {
      stat: "0.5%",
      label: "Added lists to trolley",
      copy: "Very few saved lists were being converted into basket-building behaviour.",
    },
  ],
  insightTitle: "What this told us",
  insight:
    "The issue was not whether customers understood lists. They already did. The bigger opportunity was to improve list creation, reuse and conversion into trolley-building behaviour, especially for customers who planned their shop before entering the grocery journey.",
};

export const listCommercial = {
  label: "04 Why list maturity mattered commercially",
  headline: "List maturity was a strategic growth opportunity.",
  body: "List users showed stronger commercial behaviour, with higher order frequency, higher average order value and higher-value trolleys. That made list creation and reuse a strategic growth opportunity, not just a usability improvement.",
  stats: [
    {
      stat: "72%",
      label: "Higher order frequency",
      copy: "List users ordered more often than non-list users.",
    },
    {
      stat: "36%",
      label: "Higher average order value",
      copy: "List users generated stronger average order value.",
    },
    {
      stat: "£417.03 vs £177.52",
      label: "Net cart revenue",
      copy: "List users showed materially higher trolley value than non-list users.",
    },
    {
      stat: "£22.46 vs £16.42",
      label: "Average value per shop",
      copy: "A £6.35 uplift per shop showed the value of increasing list usage.",
    },
  ],
  objectiveTitle: "The business objective",
  objectiveCopy:
    "The objective was to move more customers from single-list behaviour into repeat list usage, increase list-to-trolley conversion, and support competitor win-back by making Waitrose faster and easier for planned shops.",
  objectives: [
    {
      title: "Increase list maturity",
      copy: "Move more single-list customers towards two or more reusable lists.",
    },
    {
      title: "Improve list-to-trolley conversion",
      copy: "Turn saved planning behaviour into basket-building behaviour.",
    },
    {
      title: "Support Ocado win-back",
      copy: "Reduce the friction for customers bringing existing planning habits from competitors.",
    },
    {
      title: "Grow high-value shopping behaviour",
      copy: "Increase exposure to a behaviour already linked with higher frequency and higher order value.",
    },
  ],
  opportunityLine:
    "The opportunity connected a £150m Ocado win-back ambition with a £400m existing-shopper spend opportunity.",
};

export const problem = {
  label: "05 The problem",
  headline: "Real-world shopping behaviour is messy.",
  body: "Customers rarely think in exact product titles or SKUs. Instead, they create fragmented reminders throughout the week: handwritten notes, screenshots, meals, family requests, generic reminders and brand references. Traditional grocery experiences forced customers to manually translate this intent into products one item at a time.",
  painPoints: [
    {
      title: "Slow basket building",
      copy: "Customers translated messy list items into products one at a time before they could start shopping.",
      icon: "clock" as const,
    },
    {
      title: "Decision fatigue",
      copy: "Too many possible matches for vague inputs made planning feel harder than it needed to be.",
      icon: "brain" as const,
    },
    {
      title: "Repetitive searching",
      copy: "The same items and brands were searched again each week instead of reusing existing intent.",
      icon: "search" as const,
    },
    {
      title: "Low confidence",
      copy: "Customers hesitated when they could not see, review or correct suggestions before adding to basket.",
      icon: "shield" as const,
    },
    {
      title: "Friction for new customers",
      copy: "Less purchase history meant more guesswork and more manual work to build a first online basket.",
      icon: "user" as const,
    },
  ],
};

export const modelShift = {
  label: "06 From search-and-select to prediction-first",
  headline: "From search-and-select to prediction-first",
  intro:
    "Traditional grocery search asks customers to translate intent into individual product decisions. For a weekly shop, that creates repeated effort: search, compare, select, adjust and repeat. A prediction-first model changes the sequence. The customer starts with intent, and the system generates a draft trolley using behavioural signals that can be reviewed and edited.",
  searchModel: {
    title: "Search-and-select model",
    bullets: [
      "Customer starts with a product search",
      "Each item requires a separate decision",
      "Generic terms create long result lists",
      "Customers carry the cognitive effort",
      "Basket building is slow and repetitive",
    ],
  },
  predictionModel: {
    title: "Prediction-first model",
    bullets: [
      "Customer starts with shopping intent",
      "System interprets the likely need",
      "Behavioural signals guide the recommendation",
      "Customer reviews, swaps and adjusts",
      "Basket building becomes faster while control remains visible",
    ],
  },
  closing:
    "The goal was not full automation. It was to reduce the effort between intent and trolley while keeping confidence high.",
};

export const productGap = {
  label: "07 Product gap",
  headline: "App and web fragmentation",
  body: "The current lists experience was fragmented across app and web. The app did not support saved lists, while web lists were tied to specific products. Multi-search behaved more like a temporary output than something customers could save, reuse or build on.",
  opportunity:
    "The opportunity was to move from temporary search outputs and fixed product lists towards reusable, intelligent product groupings across platforms.",
  cards: [
    {
      title: "App",
      copy: "No saved lists. Multi-search behaved like a temporary output.",
      icon: "smartphone" as const,
    },
    {
      title: "Web",
      copy: "Saved product lists, but tied to specific products.",
      icon: "monitor" as const,
    },
    {
      title: "Opportunity",
      copy: "Reusable, intelligent product groupings across app and web.",
      icon: "layers" as const,
    },
  ],
};

export const quotes = [
  {
    number: "Quote 01",
    text: "How could we help customers move from intent to basket faster without removing confidence or control?",
  },
  {
    number: "Quote 02",
    text: "The challenge was not matching products. It was recommending with confidence.",
  },
  {
    number: "Quote 03",
    text: "The real breakthrough was not automation. It was editable intelligence.",
  },
];

export const designPrinciples = {
  label: "08 Design principles",
  headline: "Reduce effort, not control.",
  intro:
    "These principles shaped how the experience balanced prediction, trust and customer ownership.",
  items: [
    {
      title: "Start with intent",
      copy: "Let customers begin with how they naturally plan: typed lists, notes, meal ideas, screenshots or saved lists.",
      icon: "target" as const,
    },
    {
      title: "Predict before search",
      copy: "Use behavioural signals to suggest likely products before asking customers to search item by item.",
      icon: "sparkles" as const,
    },
    {
      title: "Keep control visible",
      copy: "Suggestions must stay editable, swappable and removable before anything is added to trolley.",
      icon: "sliders" as const,
    },
    {
      title: "Show confidence",
      copy: "Make it clear what the system has recognised, where it is confident and where review is needed.",
      icon: "shield" as const,
    },
    {
      title: "Learn carefully",
      copy: "Use customer corrections as signals without over-interpreting temporary decisions or one-off changes.",
      icon: "refresh" as const,
    },
  ],
};

export const intentMapping = {
  label: "09 Intent-to-product mapping",
  headline: "How vague intent becomes a specific recommendation",
  intro:
    "Prediction-first only worked if the system could translate vague customer inputs into specific, reviewable products. The design challenge was deciding what the system should infer, when it should use customer history, and where customers needed control.",
  steps: [
    {
      number: "01",
      title: "Customer writes",
      copy: "“milk”, “bread”, “pasta”, “snacks” or uploads a handwritten list.",
      icon: "message" as const,
    },
    {
      number: "02",
      title: "System interprets",
      copy: "Favourites, purchase history, preferences, brand/range, price sensitivity and popular products.",
      icon: "search" as const,
    },
    {
      number: "03",
      title: "System recommends",
      copy: "A likely product, likely quantity and alternatives where confidence is lower.",
      icon: "basket" as const,
    },
    {
      number: "04",
      title: "Customer reviews",
      copy: "Swap, remove, adjust quantity and review before adding to trolley.",
      icon: "sliders" as const,
    },
  ],
  closing:
    "The output needed to mirror the input closely enough for customers to recognise what had been interpreted, compare it quickly and correct anything that felt wrong.",
  image: "/images/work/shopping-lists/mockup2.png",
  imageAlt:
    "Two mobile screens showing a customer entering shopping intent and receiving editable basket suggestions.",
};

export const mvpScope = {
  label: "10 MVP scope and trade-offs",
  headline: "Proving intent-to-trolley without unnecessary complexity",
  intro:
    "The MVP needed to prove whether real-world shopping intent could be converted into basket-ready products without adding unnecessary complexity.",
  included: [
    "Quick add mapped products",
    "Scan list auto-convert",
    "Meal input ingredient breakdown",
    "Editable draft basket",
  ],
  removed: ["Voice input"],
  voiceNote:
    "Voice was useful long term, but not essential to prove the core intent-to-basket loop. It also risked making the experience feel like a conversational assistant, which added complexity and raised the wrong expectations.",
  decisions: [
    {
      number: "01",
      title: "We moved from search-and-select to prediction-first",
      copy: "Instead of making customers search for every item, the system interpreted shopping intent first and generated a draft trolley customers could review, swap and adjust.",
      icon: "search" as const,
    },
    {
      number: "02",
      title: "We prioritised signed-in customers for MVP",
      copy: "Personalisation depended on favourites, previous orders and shopping behaviour, so signed-in customers gave the system stronger signals for product mapping. Newer customers could still be supported after account creation through popular products and lightweight preferences.",
      icon: "user" as const,
    },
  ],
  constraints: [
    {
      title: "Ambiguous list inputs",
      copy: "Physical lists were often vague, making accurate product interpretation difficult.",
    },
    {
      title: "Unreliable OCR",
      copy: "Confidence varied with handwriting, formatting and image clarity.",
    },
    {
      title: "Operational complexity",
      copy: "Availability, substitutions and category logic added backend complexity.",
    },
  ],
  image: "/images/work/shopping-lists/mockup4.png",
  imageAlt:
    "Mobile screen showing editable product suggestions with quantity controls and add to trolley action.",
};

export const feedbackLoop = {
  label: "11 Feedback loop",
  headline: "Learning from corrections without over-interpreting",
  intro:
    "Every customer correction can become a signal, but not every correction means the same thing. The system needed to learn carefully from edits, swaps, removals and quantity changes.",
  rows: [
    {
      action: "Removes oat milk",
      learns: "Negative preference signal",
      future: "Suggest it less often",
    },
    {
      action: "Swaps branded cereal for own-label",
      learns: "Price sensitivity",
      future: "Prioritise value alternatives",
    },
    {
      action: "Increases pasta quantity",
      learns: "Household size signal",
      future: "Adjust future quantities",
    },
    {
      action: "Keeps recipe ingredients",
      learns: "Meal interest signal",
      future: "Suggest similar meals",
    },
    {
      action: "Unchecks an item",
      learns: "May already have it at home",
      future: "Do not treat as dislike",
    },
  ],
  closing:
    "The system should learn from behaviour, but avoid over-interpreting temporary shopping decisions.",
};

export const validation = {
  label: "12 Validation and iteration",
  headline: "Validation and iteration",
  body: "We tested early concepts with customers, then refined around clarity, trust and control.",
  testing: [
    { stat: "5", label: "Moderated tests" },
    { stat: "5", label: "Unmoderated tests" },
    { stat: "6/7", label: "Ease of Use rating" },
  ],
  validated: [
    "Customers understood the value of turning a list, meal idea or uploaded image into a draft trolley.",
    "The review area was important because customers wanted control before anything was added.",
    "Uploading an image created strong interest, but expectations needed clearer explanation.",
  ],
  changed: [
    "Terminology around lists, meals, saved groups and upload image needed to be clearer.",
    "Customers needed to see what the system recognised before product matching happened.",
    "The product needed to show confidence and allow easy swapping, rather than feel fully automated.",
  ],
  note: "Testing validated behaviour, trust and interaction patterns, not production-level OCR accuracy or recommendation performance.",
  nextTitle: "What still needed validation",
  nextClosing:
    "The next stage was not about adding more features. It was about improving accuracy, language and trust so customers felt confident using the experience repeatedly.",
  nextColumns: [
    {
      title: "Improve product accuracy",
      items: [
        "Connect to a fuller product catalogue",
        "Retest product matching with a larger product set",
        "Improve vague input mapping for terms like “milk”, “bread” and “pasta”",
      ],
    },
    {
      title: "Improve clarity and trust",
      items: [
        "Refine terminology around saved lists, meal groups and uploaded images",
        "Make upload-image limitations clearer",
        "Show what has been recognised before anything is added to trolley",
      ],
    },
    {
      title: "Define smarter rules",
      items: [
        "Use confidence levels to decide when the system predicts, asks or lets customers swap",
        "Keep review before add to trolley",
        "Validate whether customers reuse saved lists, meal groups and product selections over time",
      ],
    },
  ],
};

export const impact = {
  label: "13 Impact and outcomes",
  headline: "Impact and outcomes",
  intro:
    "The concept connected an existing high-value behaviour with a faster way to create, reuse and convert lists into trolleys.",
  outcomes: [
    {
      title: "Reduced effort from intent to trolley",
      copy: "Customers could move from a note, meal idea, saved list or handwritten shop into editable product suggestions faster.",
    },
    {
      title: "Shifted the model from search to prediction",
      copy: "The experience reduced reliance on item-by-item search by generating a draft trolley first, then letting customers review and refine.",
    },
    {
      title: "Improved list maturity",
      copy: "The strategy targeted customers who had only one list, helping them create and reuse multiple shopping missions over time.",
    },
    {
      title: "Improved list-to-trolley conversion",
      copy: "The opportunity was to turn saved planning behaviour into actual basket-building behaviour, addressing the very low list-to-trolley conversion baseline.",
    },
    {
      title: "Linked to high-value customer behaviour",
      copy: "List usage was already associated with higher order frequency, higher average order value and stronger trolley value.",
    },
    {
      title: "Supported competitor win-back",
      copy: "A faster intent-to-trolley experience could help customers bringing established planning habits from Ocado or other grocery competitors.",
    },
  ],
};

export const closing = {
  label: "14 Closing thought",
  headline: "Closing thought",
  body: "We were not designing a shopping list. We were designing a system that removed effort from turning intent into a shop, then helped customers reuse that intent again and again.",
  body2:
    "The value was not just faster basket building. It was turning real-life planning behaviour into a reusable, personalised shopping system.",
  prototype: {
    href: "https://list-umber-zeta.vercel.app/",
    label: "View prototype",
  },
  image: "/images/work/shopping-lists/prototype-mockup.png?v=2",
  imageAlt:
    "Waitrose shopping lists prototype showing create your list and build shop screens on mobile.",
};
