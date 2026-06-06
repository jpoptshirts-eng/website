export const shoppingListsSubnav = [
  { id: "overview", label: "Overview" },
  { id: "why-it-mattered", label: "Why it mattered" },
  { id: "list-behaviour", label: "List behaviour" },
  { id: "problem", label: "Problem" },
  { id: "product-gap", label: "Product gap" },
  { id: "direction", label: "Direction" },
  { id: "mapping", label: "Mapping" },
  { id: "personalisation", label: "Personalisation" },
  { id: "mvp", label: "MVP" },
  { id: "feedback", label: "Feedback" },
  { id: "validation", label: "Validation" },
  { id: "next-steps", label: "Next steps" },
  { id: "impact", label: "Impact" },
  { id: "closing", label: "Closing" },
] as const;

export const shoppingListsHero = {
  label: "01 Case Study",
  title: "Shopping lists",
  subcopy: "Turning messy shopping intent into intelligent baskets",
  meta: [
    { label: "Role", value: "Senior Product Designer" },
    { label: "Company", value: "Waitrose & Partners" },
    { label: "Timeline", value: "4 months" },
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

export const listBehaviour = {
  label: "03 What list behaviour revealed",
  headline: "Lists were shopping missions, not product collections.",
  intro:
    "Existing list behaviour showed that customers were using lists to organise real shopping missions, not just save individual products.",
  stats: [
    { stat: "47%", label: "Core essentials" },
    { stat: "10%", label: "Category shortlisting" },
    { stat: "9%", label: "Shopping for others" },
    { stat: "3%", label: "Plans and events" },
    { stat: "2%", label: "Dietary" },
    { stat: "2%", label: "Meal specific" },
  ],
  namesTitle: "What saved list names showed",
  namesCopy:
    "Saved list names showed that customers organised shopping around routines, meals, occasions, people, household spaces and repeat missions.",
  nameExamples: [
    {
      title: "Routine shops",
      examples: "weekly, monthly, next shop",
    },
    {
      title: "Meals and categories",
      examples: "pasta, baking, dairy, drinks",
    },
    {
      title: "Occasions",
      examples: "Christmas, BBQ, party, picnic",
    },
    {
      title: "Essentials",
      examples: "basics, stock up, full shop",
    },
    {
      title: "People",
      examples: "Dad, baby, kids, pets",
    },
    {
      title: "Household spaces",
      examples: "fridge, freezer, cupboard, bathroom",
    },
  ],
  closing:
    "Lists were not static product collections. They were dynamic, collaborative and evolving shopping systems.",
};

export const problem = {
  label: "04 The problem",
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

export const productGap = {
  label: "05 Product gap",
  headline: "App and web fragmentation",
  body: "The current lists experience was fragmented across app and web. The app did not support saved lists, while web lists were tied to specific products. Multi-search behaved more like a temporary output than something customers could save, reuse or build on.",
  opportunity:
    "The opportunity was to move from temporary search outputs and fixed product lists towards reusable, intelligent product groupings across platforms.",
  cards: [
    {
      title: "App",
      copy: "No saved lists. Multi-search behaved like a temporary output.",
    },
    {
      title: "Web",
      copy: "Saved product lists, but tied to specific products.",
    },
    {
      title: "Opportunity",
      copy: "Reusable, intelligent product groupings across app and web.",
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

export const productDirection = {
  label: "06 Hypothesis and product direction",
  headline: "From messy intent to editable draft trolleys",
  hypothesis:
    "If we could capture shopping intent naturally, interpret ambiguous inputs and generate editable draft trolleys, we could reduce planning effort while increasing confidence, basket completion and repeat usage.",
  direction: [
    "Capture intent instantly",
    "Translate intelligently",
    "Generate a draft trolley",
    "Keep customers in control",
    "Learn and improve over time",
  ],
};

export const intentMapping = {
  label: "07 Intent-to-product mapping",
  headline: "How vague intent becomes a specific recommendation",
  intro:
    "The key design shift was moving from generic search results to product prediction. The system needed to interpret vague or high-level inputs using behavioural signals, then recommend likely products customers could quickly review and adjust.",
  steps: [
    {
      number: "01",
      title: "Customer writes",
      copy: "“milk”, “pasta”, “snacks” or uploads a handwritten list",
      icon: "message" as const,
    },
    {
      number: "02",
      title: "AI interprets",
      copy: "Purchase history, favourites, preferences, brand and range, price sensitivity",
      icon: "search" as const,
    },
    {
      number: "03",
      title: "System recommends",
      copy: "Specific product, likely quantity and alternatives if needed",
      icon: "basket" as const,
    },
    {
      number: "04",
      title: "Customer reviews",
      copy: "Swap, remove, adjust quantity and review before adding to trolley",
      icon: "sliders" as const,
    },
  ],
  image: "/images/work/shopping-lists/mockup2.png",
  imageAlt:
    "Two mobile screens showing a customer entering shopping intent and receiving editable basket suggestions.",
};

export const personalisation = {
  label: "08 Personalisation and confidence",
  headline: "Different strategies for known and new customers",
  body: "Known and new customers required different recommendation strategies. Returning customers gave the system stronger signals through favourites, purchase history, substitutions and shopping behaviour. Newer customers needed lighter preference capture, category defaults and popular products until better behavioural data existed.",
  mvpNote:
    "For MVP, we prioritised signed-in customers because the feature sat within Favourites and product mapping was stronger with account history. New customers could still be supported after account creation through popular products and lightweight preferences.",
  returning: [
    "Favourites",
    "Purchase history",
    "Substitutions",
    "Shopping behaviour",
  ],
  newer: [
    "Lightweight preferences",
    "Category defaults",
    "Popular products",
    "Progressive learning over time",
  ],
};

export const mvpScope = {
  label: "09 MVP scope and trade-offs",
  headline: "Proving intent-to-basket without unnecessary complexity",
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
  mainTradeoff:
    "We prioritised signed-in customers for MVP because personalisation depended on favourites, previous orders and shopping behaviour. Progressive sign-in could be explored later once the feature had proved value.",
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
  label: "10 Feedback loop",
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
  label: "11 Validation and iteration",
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
};

export const nextValidation = {
  label: "12 What still needed validation",
  headline: "From concept validation to production readiness",
  closing:
    "The next stage was not about adding more features. It was about improving accuracy, language and trust so customers felt confident using the experience repeatedly.",
  columns: [
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
  outcomes: [
    {
      title: "Reduced effort from intent to trolley",
      copy: "Customers could move from real-world planning inputs to draft basket suggestions faster.",
    },
    {
      title: "Protected trust through review and control",
      copy: "Suggestions stayed visible, editable and reversible before anything was added to trolley.",
    },
    {
      title: "Created a reusable AI-assisted shopping model",
      copy: "The logic could adapt across favourites, purchase history, preferences, product availability and customer corrections.",
    },
    {
      title: "Linked to a high-value commercial behaviour",
      copy: "Shopping lists were already associated with higher order frequency, higher average order value and larger trolley value.",
    },
  ],
};

export const closing = {
  label: "14 Closing thought",
  headline: "Closing thought",
  body: "We were not designing a shopping list. We were designing a system that removed effort from turning intent into a shop, then helped customers reuse that intent again and again.",
  body2:
    "The value was not just faster basket building. It was turning real-life planning behaviour into a reusable, personalised shopping system.",
};
