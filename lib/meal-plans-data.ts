export const mealPlansSubnav = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "Context" },
  { id: "why-it-mattered", label: "Why it mattered" },
  { id: "behaviour", label: "Behaviour" },
  { id: "competitor", label: "Competitors" },
  { id: "problem", label: "Problem" },
  { id: "recipe-cards", label: "Recipe cards" },
  { id: "direction", label: "Direction" },
  { id: "solution", label: "Solution" },
  { id: "accessibility", label: "Accessibility" },
  { id: "trade-offs", label: "Trade-offs" },
  { id: "results", label: "Results" },
  { id: "reflection", label: "Reflection" },
] as const;

export const mealPlansHero = {
  label: "01 Case Study",
  title: "Meal Plans",
  subcopy: "Designing a meal-centric shopping experience for Waitrose.",
  intro:
    "A personalised meal planning experience that transformed recipe browsing into a guided, meal-based shopping journey. The goal was to help customers move from inspiration to planning, then towards ingredients and basket creation with less effort and more confidence.",
  meta: [
    { label: "Role", value: "Senior Product Designer" },
    { label: "Company", value: "Waitrose & Partners" },
    { label: "Timeline", value: "14 months" },
    {
      label: "Focus",
      value:
        "Meal planning / Recipe discovery / Behavioural UX / Personalisation / Recipe-to-basket journeys",
    },
  ],
  image: "/images/work/meal-plans/hero-img.png",
  imageAlt:
    "Waitrose Meal Plans mobile screens showing recipe discovery and weekly meal planning.",
};

export const mealPlansMyRole = {
  title: "My role",
  avatar: "/images/jacinto-hero.png",
  avatarAlt: "Jacinto De Matos",
  body: "I led the product design across the Meal Plans experience, shaping the journey from early research and competitor analysis through to information architecture, recipe-card improvements, MVP design, accessibility refinements and post-launch optimisation.",
  bullets: [
    "Defined the behavioural opportunity around meal planning and recipe-led shopping",
    "Analysed competitor recipe and meal planning experiences",
    "Designed the recipe index, onboarding and meal plan journey",
    "Worked with product, engineering, data, research, art, publication and nutrition teams",
    "Prioritised features by balancing customer value against backend and frontend complexity",
    "Improved accessibility, recipe-card clarity and decision-making confidence",
  ],
};

export const mealPlansContext = {
  label: "02 Overview",
  headline: "Customers were inspired by recipes, but the journey stopped before shopping.",
  body: "Customers were using recipes for inspiration, but the experience did not fully support how people actually plan meals. They still had to browse recipe by recipe, decide what was suitable, work out ingredients, check what they already had at home and manually move from inspiration into shopping.",
  body2:
    "Meal Plans explored how Waitrose could move from passive recipe browsing into a guided planning journey that helped customers build a weekly plan around their dietary needs, routines, household size and lifestyle.",
  keyIdea:
    "Customers do not just shop for ingredients. They plan meals around routines, households, time, budget, dietary needs and the reality of a busy week.",
  image: "/images/work/meal-plans/index-mockup.png",
  imageAlt:
    "Waitrose Meal Planning landing page showing a family cooking hero and get started call to action.",
};

export const mealPlansWhyItMattered = {
  label: "03 Why this mattered",
  headline: "Meal planning sat between inspiration and basket creation.",
  body: "Meal Plans mattered because recipes were already a strong source of inspiration, but the journey was fragmented. Customers could find recipes, but there was no clear system to help them turn those recipes into a plan, then into a shop.",
  cards: [
    {
      title: "Customer need",
      copy: "Customers wanted inspiration, but also needed structure. Planning meals across the week created too much decision-making when the journey relied on browsing individual recipes.",
      icon: "users" as const,
    },
    {
      title: "Business opportunity",
      copy: "Recipe users were commercially valuable, with recipe-led journeys linked to higher spend and stronger engagement.",
      icon: "trending" as const,
    },
    {
      title: "Product gap",
      copy: "Recipes helped customers discover meals, but they did not provide enough support for planning, saving, personalising and turning recipes into basket-ready ingredients.",
      icon: "gap" as const,
    },
  ],
};

export const mealPlansBehaviour = {
  label: "04 Behavioural insight",
  headline: "Customers struggled to decide, not to shop.",
  body: "The core problem was not just usability. Customers understood recipes, but confidence dropped when they had to make repeated decisions across a full week.",
  body2: "They needed guidance, but not a loss of control.",
  behaviours: [
    "Customers browsed for inspiration but did not always commit",
    "Too much choice created decision fatigue",
    "Customers often planned by checking what they already had at home first",
    "Food planning could be loose rather than fixed",
    "Customers wanted convenience, but still cared about freshness and quality",
    "Dietary needs, cook time, serving size and ingredient complexity shaped confidence",
  ],
  image: "/images/work/meal-plans/decide.png",
  imageAlt:
    "Mobile meal plan screen showing weekly recipes with ready to shop action.",
};

export const mealPlansCompetitor = {
  label: "05 Competitor analysis",
  headline: "Understanding why competitors made different strategic choices.",
  intro:
    "Before designing Meal Plans, I analysed Tesco, M&S and Sainsbury's to understand how each brand approached recipes, inspiration and meal planning.",
  intro2:
    "The important learning was not just what each competitor displayed on the page. It was why they had chosen that direction, and what customer behaviour they were trying to influence.",
  intro3:
    "A strong meal planning experience depends on strong recipe foundations. If customers do not trust, understand or feel inspired by the recipes, they are unlikely to commit to building a weekly plan around them.",
  competitors: [
    {
      title: "Tesco — trust and social proof",
      logo: "/images/work/meal-plans/logo-tesco.svg",
      logoAlt: "Tesco",
      body: "Tesco focused on customer confidence by highlighting ratings, reviews, save, share and customer feedback.",
      body2:
        "This made sense because recipes require customers to invest both time and money. Ratings and reviews reduce uncertainty by showing that other customers have already cooked, tested and trusted the recipe.",
      insight:
        "For Meal Plans to work, recipe cards needed to build confidence quickly. Customers needed social proof, clear ratings and useful decision-making information before selecting meals for the week.",
    },
    {
      title: "M&S — inspiration at the source",
      logo: "/images/work/meal-plans/logo-ms.svg",
      logoAlt: "M&S",
      body: "M&S leaned heavily into social reach, using social media, campaign content and influencer-style inspiration.",
      body2:
        "This was a strong strategic choice because 75% of users looking for food inspiration use social media. M&S targeted customers directly at the source of inspiration rather than relying only on traditional recipe browsing.",
      insight:
        "Meal Plans could not rely only on functional planning. It also needed to feel inspiring, visual and emotionally engaging enough to compete with the way customers already discover food ideas.",
    },
    {
      title: "Sainsbury's — quick and easy revenue",
      logo: "/images/work/meal-plans/logo-sainsburys.svg",
      logoAlt: "Sainsbury's",
      body: "Sainsbury's focused on quick and easy recipes as a core category.",
      body2:
        "This aligned with customer behaviour during the working week, especially Monday to Thursday, when customers have less time and need practical meal solutions. Quick and easy recipes also generated the highest revenue as a recipe category because they solved a frequent, high-intent customer need.",
      insight:
        "Meal Plans needed to prioritise practical weekly use cases, not just inspirational cooking. Plans around quick dinners, budget meals, batch cooking, leftovers and healthy weekday options would likely create stronger repeat value.",
    },
  ],
  takeaway: {
    title: "Strategic takeaway",
    intro:
      "The opportunity for Waitrose was to combine the strongest parts of each competitor approach:",
    bullets: [
      "Tesco's trust and social proof",
      "M&S' inspirational reach",
      "Sainsbury's practical, revenue-driving recipe categories",
    ],
    body: "This shaped the direction for Meal Plans: create a guided planning experience that felt inspiring, trustworthy and useful for real weekly routines.",
    closing:
      "The goal was not just to help customers find recipes. It was to help them confidently turn food inspiration into a practical meal plan and, eventually, a shop.",
  },
  imageSectionTitle: "Competitor mobile examples",
  image: "/images/work/meal-plans/competition.png",
  imageAlt:
    "Mobile competitor analysis showing Sainsbury's, Asda, M&S and Tesco meal planning experiences",
};

export const mealPlansProblem = {
  label: "06 The problem",
  headline: "The recipe journey was fragmented and effortful.",
  body: "Customers faced multiple friction points when trying to move from recipe inspiration into meal planning.",
  cards: [
    {
      title: "High cognitive load",
      copy: "Customers had to browse, compare, remember and decide across multiple recipes.",
      icon: "brain" as const,
    },
    {
      title: "No clear recipe-to-basket path",
      copy: "Recipes could inspire customers, but the next step into planning and shopping was not clear enough.",
      icon: "route" as const,
    },
    {
      title: "Limited personalisation",
      copy: "Dietary needs, serving size and lifestyle preferences were not always reflected strongly enough.",
      icon: "sliders" as const,
    },
    {
      title: "Weak save-and-return behaviour",
      copy: "Customers needed a way to return to recipes and plans later, especially if planning ahead.",
      icon: "bookmark" as const,
    },
    {
      title: "Recipe-card gaps",
      copy: "Customers needed stronger decision-making information before selecting a recipe.",
      icon: "card" as const,
    },
    {
      title: "System constraints",
      copy: "Recipe tagging, AEM authoring, shop-able recipes and content structure limited how personalised and flexible Meal Plans could become.",
      icon: "server" as const,
    },
  ],
};

export const mealPlansRecipeCards = {
  label: "07 Recipe cards as decision engines",
  headline: "Customers needed the right information before committing to a meal.",
  body: "Recipe cards became a critical part of the experience because customers make quick decisions based on a small set of signals.",
  questions: [
    "Does this look appealing?",
    "Is it trusted?",
    "Does it match my diet?",
    "How long will it take?",
    "Is it easy enough for a weekday?",
    "Are the ingredients manageable?",
    "Is it worth my time and money?",
  ],
  signals: [
    {
      title: "Image",
      copy: "The recipe image creates the first moment of attention.",
      icon: "image" as const,
    },
    {
      title: "Ratings",
      copy: "Customers were more confident when recipes had strong ratings, especially around four stars or higher.",
      icon: "star" as const,
    },
    {
      title: "Reviews",
      copy: "Reviews gave customers social proof, tips and reassurance from people who had already tried the recipe.",
      icon: "reviews" as const,
    },
    {
      title: "Dietary fit",
      copy: "Dietary information needed to be visible because it directly shaped whether a recipe was usable.",
      icon: "diet" as const,
    },
    {
      title: "Cook time",
      copy: "Convenience was critical, especially during the week.",
      icon: "clock" as const,
    },
    {
      title: "Ingredients",
      copy: "Too many ingredients, or hard-to-find ingredients, could put customers off.",
      icon: "ingredients" as const,
    },
    {
      title: "Difficulty",
      copy: "Customers wanted recipes that felt achievable, especially for weekday cooking.",
      icon: "difficulty" as const,
    },
  ],
  note: "This shifted the design focus from simply displaying recipes to helping customers make confident meal-planning decisions.",
  image: "/images/work/meal-plans/recipe-page.png",
  imageAlt:
    "Waitrose recipe page on mobile showing spiced chicken skewers with dietary tags and shop ingredients CTA.",
};

export const mealPlansDirection = {
  label: "08 Product direction",
  headline: "From recipe browsing to guided meal planning.",
  body: "The strategic direction was to move away from isolated recipe discovery and towards a guided meal planning system.",
  body2:
    "Instead of making customers browse recipe by recipe, Meal Plans helped them set preferences, review recipes, build a weekly plan and move towards ingredients.",
  before: [
    "Recipe browsing",
    "Manual planning",
    "Ingredient-led thinking",
    "Repeated decision-making",
    "No clear return path",
  ],
  after: [
    "Guided meal planning",
    "Preference-led journey",
    "Meal-led shopping",
    "Editable recipe selection",
    "A clearer route to basket",
  ],
  image: "/images/work/meal-plans/onboarding.png",
  imageAlt:
    "Meal Plans onboarding flow across four mobile screens showing how it works, plan selection and preferences.",
};

export const mealPlansPrinciples = {
  label: "09 Design principles",
  headline: "Reduce effort, but keep control visible.",
  items: [
    {
      title: "Start with customer needs",
      copy: "Meal planning needed to reflect real constraints such as time, diet, budget, household size and food waste.",
      icon: "users" as const,
    },
    {
      title: "Guide the journey",
      copy: "Customers needed help narrowing options rather than being left with open-ended recipe browsing.",
      icon: "compass" as const,
    },
    {
      title: "Make decisions easier",
      copy: "Recipe cards needed to surface the most important decision signals quickly.",
      icon: "eye" as const,
    },
    {
      title: "Keep plans flexible",
      copy: "Customers needed to adjust meals, servings and preferences before committing.",
      icon: "sliders" as const,
    },
    {
      title: "Build on recipe foundations",
      copy: "Personalisation depended on better tagging, shop-able recipes and content structure.",
      icon: "layers" as const,
    },
    {
      title: "Support confidence before basket",
      copy: "Customers needed to review what was selected before moving towards ingredients or basket creation.",
      icon: "shield" as const,
    },
  ],
};

export const mealPlansPrioritisation = {
  label: "10 Collaboration and prioritisation",
  headline: "Balancing customer value with technical complexity.",
  body: "I worked with engineers to compare potential features by customer value and backend/frontend complexity. This helped the team understand what should be prioritised for the MVP and what needed to move into later phases.",
  features: [
    "Ratings and reviews",
    "Method images",
    "Share",
    "Save",
    "Print/download",
    "Adjust servings",
    "Change measurements",
    "Related recipes",
    "Cross-sell",
    "Promotional banners",
    "Recipe videos",
    "Nutrition",
    "Per-serving price",
  ],
  columns: [
    {
      title: "High customer value",
      copy: "Ratings, reviews, save, adjust servings, recipe videos and price helped customers make better decisions.",
    },
    {
      title: "High technical complexity",
      copy: "Some features needed deeper backend, frontend or data support before they could scale.",
    },
    {
      title: "MVP decision",
      copy: "The MVP focused on proving the guided meal planning journey while identifying which recipe and data foundations needed improvement next.",
    },
  ],
};

export const mealPlansConstraints = {
  label: "11 System constraints and trade-offs",
  headline: "The experience was only as strong as the systems underneath it.",
  body: "Meal Plans showed that product design was not just about the interface. The quality of the experience depended on recipe data, tagging, content governance, AEM constraints and whether recipes were shop-able.",
  cards: [
    {
      title: "AEM infrastructure",
      copy: "The design had to work within existing AEM components and tight delivery timelines.",
      icon: "server" as const,
    },
    {
      title: "Recipe tagging",
      copy: "Limited tagging reduced how personalised filtering and plan generation could become.",
      icon: "tag" as const,
    },
    {
      title: "Shop-able recipes",
      copy: "Not all recipes were shop-able, which limited the route from meal planning into basket creation.",
      icon: "cart" as const,
    },
    {
      title: "Content authoring",
      copy: "Changes in content ownership created inconsistencies in how recipes were created, tagged and published.",
      icon: "file" as const,
    },
    {
      title: "Ingredient control",
      copy: "Recipes were not editable in some areas to avoid customers accidentally replacing ingredients that affected dietary or tolerance needs.",
      icon: "shield" as const,
    },
    {
      title: "Serving-size precision",
      copy: "Broad serving ranges helped coverage, but reduced confidence for customers planning around exact household needs.",
      icon: "users" as const,
    },
  ],
};

export const mealPlansSolution = {
  label: "12 The solution",
  headline: "A flexible meal planning journey.",
  body: "Phase 1 gave customers a way to create a weekly meal plan tailored to dietary preferences and lifestyle choices, with the aim of providing convenience, variety and healthier eating options.",
  cards: [
    {
      title: "Diverse recipe selection",
      copy: "Weekly plans were pre-populated with dinner-focused recipes.",
      icon: "utensils" as const,
    },
    {
      title: "Flexible meal customisation",
      copy: "Customers could select meal quantities, adjust serving sizes and choose from cuisines and dietary options.",
      icon: "sliders" as const,
    },
    {
      title: "Recipe shopping list",
      copy: "Customers could add recipes from the plan to a list, helping them return later and supporting future online or in-store shopping.",
      icon: "list" as const,
    },
    {
      title: "Enhanced recipe tagging",
      copy: "Improving recipe tagging increased the number of recipes available for inclusion in Meal Plans.",
      icon: "tag" as const,
    },
    {
      title: "Guided onboarding",
      copy: "Customers entered preferences so the experience could show more relevant recipes.",
      icon: "compass" as const,
    },
  ],
  image: "/images/work/meal-plans/multi-phones.png",
  imageAlt:
    "Bird's-eye view of multiple Meal Plans mobile screens across the full journey.",
};

export const mealPlansAccessibility = {
  label: "13 Accessibility improvements",
  headline: "Small changes made the experience clearer and more accessible.",
  body: "Accessibility testing identified that the journey was understandable, but some interaction patterns needed more clarity.",
  scores: {
    before: "88%",
    after: "95%",
  },
  cards: [
    {
      title: "Numbered steps",
      copy: "Adding numbers helped users understand where they were in the onboarding journey.",
      icon: "steps" as const,
    },
    {
      title: "Stronger accordion contrast",
      copy: "Darker chevrons made ingredient sections easier to discover and open.",
      icon: "accordion" as const,
    },
    {
      title: "Primary CTA treatment",
      copy: "Changing the CTA from secondary to primary improved contrast and made the action clearer.",
      icon: "cta" as const,
    },
    {
      title: 'Dietary "none" option',
      copy: 'Adding a "none / show me everything" option matched the pattern from previous screens and reassured users they had made a selection.',
      icon: "none" as const,
    },
  ],
  closing:
    "The accessibility work showed how small, practical interface changes could materially improve clarity without large development effort.",
  image: "/images/work/meal-plans/iPad_plans.png",
  imageAlt:
    "iPad mockup showing the Waitrose Meal Plans landing page with vegetarian, vegan and gluten-free plan options.",
};

export const mealPlansValidation = {
  label: "14 Validation and feedback",
  headline: "The concept worked, but customers wanted more precision.",
  body: "Hotjar feedback and user testing showed that customers found the experience useful and inspiring, but they wanted more control, more filters and more recipe depth.",
  cards: [
    {
      title: "What worked",
      copy: "Customers found the experience easy to use, quick and inspiring.",
      icon: "worked" as const,
    },
    {
      title: "What needed improvement",
      copy: "Customers wanted more dietary filters, clearer serving sizes, save functionality, more recipe options and fewer duplicated ingredients.",
      icon: "improvement" as const,
    },
    {
      title: "What this told us",
      copy: "The concept had value, but the next phase needed stronger personalisation, better recipe data and more flexible planning controls.",
      icon: "insight" as const,
    },
  ],
  quotes: [
    "Easy to use.",
    "Love the recipe ideas.",
    "So easy to create a vegan meal plan.",
    "First time user and really enjoying it.",
    "Love how quick it is.",
  ],
};

export const mealPlansTradeOffs = {
  label: "Trade-offs & delivery constraints",
  headline: "Several constraints shaped what we could ship for MVP.",
  intro:
    "Meal Plans was not only a UX challenge. The experience depended on recipe content, dietary tagging, backend rules, author confidence and trolley logic all working together. Several constraints shaped what we could ship for MVP and what needed to move into later phases.",
  cards: [
    {
      label: "Content risk",
      icon: "content" as const,
      title: "Dietary recipes were not always shoppable",
      body: [
        "Many vegan and gluten-free recipes were available for customers to read, but not to add directly to trolley. This was due to concerns around allergens, dietary accuracy and author confidence.",
        "That created a major constraint for Meal Plans because dietary preferences were a core part of the proposition. If those recipes were excluded, customers with specific dietary needs saw less variety and the experience felt less useful.",
      ],
      tradeOff:
        "I worked with recipe authors and content teams to identify which recipes could be reviewed and potentially made shoppable. This created a long dependency, taking around six months of review and back-and-forth, but it helped create a safer path for expanding dietary coverage.",
    },
    {
      label: "Backend logic",
      icon: "backend" as const,
      title: "Dietary filtering reduced recipe variety",
      body: [
        "Recipes were tagged by authors with dietary labels such as vegetarian, vegan and pescatarian. However, when customers selected multiple dietary preferences, the backend treated them as combined requirements.",
        "For example, if a customer selected vegetarian and pescatarian, the system only returned recipes that matched both tags. Instead of expanding choice, selecting more dietary preferences reduced the number of available recipes.",
      ],
      tradeOff:
        "The ideal solution was to move towards more inclusive matching, so customers could see vegetarian recipes, pescatarian recipes and recipes that matched both. This required more delivery time than the project allowed, so we worked within the existing logic for MVP and captured it as a future improvement.",
    },
    {
      label: "Content structure",
      icon: "structure" as const,
      title: "Serving size groups created relevance issues",
      body: [
        "Because the available recipe pool was limited, serving sizes were grouped together in the backend. Customers could choose ranges such as 1, 2–4, 5–7 and 8+.",
        "This made the experience appear broader, but it created friction. A customer cooking for two people could still be shown a recipe serving four, which made some recommendations feel less relevant and harder to act on.",
      ],
      tradeOff:
        "The frontend had to mirror the backend structure. Showing individual serving sizes in the UI would have created a misleading experience because the returned recipes would still be based on grouped ranges. We kept the grouped model for MVP and captured more precise serving logic for phase two.",
    },
    {
      label: "Scope control",
      icon: "scope" as const,
      title: "An added review step increased complexity",
      body: [
        "The original journey allowed customers to build a meal plan, send ingredients to trolley, then complete their final review there. This matched existing shopping behaviour because customers already use trolley to check quantities, remove items, review availability and complete their shop.",
        "During delivery, an additional ingredient review step was added before trolley. I challenged this direction because it duplicated the review behaviour that already existed in trolley, while creating a less reliable experience. Availability, sold out items and duplicate ingredients were clearer once items were in trolley, especially when linked to the customer\u2019s booked slot.",
      ],
      tradeOff:
        "We moved forward with the extra review step for MVP, but it added frontend and backend complexity and contributed to the project timeline extending from an expected 9\u201310 months to around 14 months. The key learning was that reassurance needs to sit where it creates the most value. In this case, trolley was the stronger review environment.",
    },
  ],
  closing:
    "Looking back, these constraints shaped one of the biggest lessons from the project: a meal planning experience is only as strong as the operational systems behind it. The UX had to work with recipe governance, dietary confidence, backend rules and trolley behaviour, not around them.",
};

export const mealPlansQuotes = [
  "The challenge was not showing more recipes. It was helping customers turn inspiration into a practical plan.",
  "We were not just designing a meal planner. We were designing the bridge between inspiration and shopping.",
];

export const mealPlansImpact = {
  label: "15 Impact and results",
  headline: "Meal Plans showed demand with limited exposure.",
  intro:
    "Despite limited placement on the recipe index, Meal Plans generated meaningful commercial performance and positive customer feedback.",
  metrics: [
    {
      metric: "£45,187",
      title: "Revenue generated from Meal Plans",
      copy: "Commercial performance from the guided meal planning journey.",
    },
    {
      metric: "3.2%",
      title: "Click-through rate",
      copy: "CTR from the recipe index into Meal Plans.",
    },
    {
      metric: "33.4%",
      title: "Exposure",
      copy: "Meal Plans achieved meaningful performance despite limited exposure.",
    },
    {
      metric: "3.6 / 5",
      title: "Hotjar score",
      copy: "Average score gathered over the first three weeks of release.",
    },
    {
      metric: "27%",
      title: "Excellent ratings",
      copy: "Percentage of respondents who rated the experience excellent.",
    },
  ],
  insight:
    "Meal Plans generated more revenue than the Mother's Day placement despite having far lower exposure, showing strong appetite for guided meal planning.",
};

export const mealPlansLearnings = {
  label: "16 What we learned",
  headline: "Meal planning needed stronger foundations before it could scale.",
  body: "The project showed that customers valued guided planning, but scaling the experience depended on improving the recipe ecosystem underneath it.",
  cards: [
    {
      title: "Guidance beats browsing",
      copy: "Customers did not just need more recipes. They needed help turning inspiration into a plan.",
      icon: "guidance" as const,
    },
    {
      title: "Recipe cards drive confidence",
      copy: "Images, ratings, reviews, dietaries, cook time and ingredients directly shaped whether customers selected a recipe.",
      icon: "confidence" as const,
    },
    {
      title: "Personalisation depends on data quality",
      copy: "Better tagging, shop-able recipes and content structure were needed to make plans feel truly relevant.",
      icon: "data" as const,
    },
    {
      title: "MVP trade-offs matter",
      copy: "Simplifying the experience helped delivery, but some trade-offs weakened precision and repeat use.",
      icon: "tradeoffs" as const,
    },
    {
      title: "Accessibility improves confidence",
      copy: "Clearer steps, stronger contrast and more consistent selection patterns helped customers understand the journey.",
      icon: "accessibility" as const,
    },
  ],
};

export const mealPlansNextSteps = {
  label: "17 Next steps",
  headline: "Improving the recipe ecosystem.",
  body: "The next phase should focus on strengthening the foundations that allow Meal Plans to become more personalised, flexible and repeatable.",
  cards: [
    {
      title: "Improve recipe foundations",
      copy: "Enhance AEM data, authoring, chips and recipe tagging.",
      icon: "foundations" as const,
    },
    {
      title: "Improve recipe-card UI",
      copy: "Surface the decision-making information customers need earlier.",
      icon: "ui" as const,
    },
    {
      title: "Add custom meal plans",
      copy: "Allow customers to build more personal plans around diet, budget, cuisine and household needs.",
      icon: "custom" as const,
    },
    {
      title: "Enable drag and drop",
      copy: "Let customers rearrange meals and make the plan feel more flexible.",
      icon: "drag" as const,
    },
    {
      title: "Support leftovers and batch cooking",
      copy: "Introduce planning patterns that reduce waste and support practical weekly routines.",
      icon: "leftovers" as const,
    },
    {
      title: "Improve filters",
      copy: "Give customers more control over diet, cost, calories, cuisine and cooking time.",
      icon: "filters" as const,
    },
  ],
  image: "/images/work/meal-plans/mvp-mockup.png",
  imageAlt:
    "Laptop mockup showing the Waitrose Meal Plans landing page with weekly dinner planning hero.",
};

export const mealPlansReflection = {
  label: "18 Closing thought",
  headline:
    "Inspiration and shopping still needed stronger foundations.",
  body: "Meal Plans proved that customers saw value in guided planning, but it also revealed that the strongest experience depends on the systems beneath the interface: recipe data, tagging, content quality, accessibility, personalisation and basket logic.",
  body2:
    "The value was not just helping customers pick recipes. It was helping them turn food inspiration into a practical, repeatable shopping journey.",
  image: "/images/work/meal-plans/convention.png",
  imageAlt:
    "Mobile mockup showing the recipe name convention editor within the Meal Plans experience.",
};

export const mealPlansProjectNav = {
  previous: { title: "QuickShop", href: "/work/quickshop" },
  next: { title: "Shopping Lists", href: "/work/shopping-lists" },
};
