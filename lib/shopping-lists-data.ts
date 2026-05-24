export const shoppingListsSubnav = [
  { id: "overview", label: "Overview" },
  { id: "why-it-mattered", label: "Why it mattered" },
  { id: "problem", label: "Problem" },
  { id: "insights", label: "Insights" },
  { id: "hypothesis", label: "Hypothesis" },
  { id: "principles", label: "Principles" },
  { id: "solution", label: "Solution" },
  { id: "decisions", label: "Decisions" },
  { id: "validation", label: "Validation" },
  { id: "proof", label: "Proof" },
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
    { label: "Timeline", value: "12 weeks" },
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

export const problem = {
  label: "03 The problem",
  headline: "Real-world shopping behaviour is messy.",
  body: "Customers rarely think in exact product titles or SKUs. Instead, they create fragmented reminders throughout the week: handwritten notes, screenshots, meals, family requests, generic reminders and brand references. Traditional grocery experiences forced customers to manually translate this intent into products one item at a time.",
  painPoints: [
    { title: "Slow basket building", icon: "clock" as const },
    { title: "Decision fatigue", icon: "brain" as const },
    { title: "Repetitive searching", icon: "search" as const },
    { title: "Low confidence", icon: "shield" as const },
    { title: "Friction for new customers", icon: "user" as const },
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

export const insights = {
  label: "04 Behavioural insights",
  headline: "Designing around how people actually plan.",
  body: "Planning often happened away from the supermarket. Inputs were messy, ambiguous and created across multiple moments throughout the week. The experience needed to support natural planning behaviour while keeping customers confident and in control.",
  cards: [
    {
      number: "01",
      title: "Customers planned before they shopped",
      copy: "Planning happened across notes apps, paper lists, conversations, screenshots and meal inspiration. The experience needed to support behaviour that already existed in the real world.",
      icon: "notepad" as const,
    },
    {
      number: "02",
      title: "Intent was highly ambiguous",
      copy: "Simple inputs like ‘milk’, ‘bread’ and ‘pasta’ required interpretation, not simple matching. Customers expected the system to understand context, preferences and likely behaviour.",
      icon: "search" as const,
    },
    {
      number: "03",
      title: "Automation only worked when customers stayed in control",
      copy: "Confidence increased when recommendations were editable, alternatives were visible and quantities could be changed easily. Transparency mattered more than aggressive automation.",
      icon: "sliders" as const,
    },
  ],
};

export const hypothesis = {
  label: "05 Hypothesis",
  headline: "If we could interpret messy intent, we could reduce planning effort.",
  body: "We believed that if we could capture shopping intent naturally, interpret ambiguous inputs and generate editable draft baskets, we could reduce planning effort while increasing confidence, basket completion and repeat usage.",
  steps: [
    {
      label: "Capture shopping intent naturally",
      icon: "message" as const,
    },
    {
      label: "Interpret ambiguous inputs",
      icon: "search" as const,
    },
    {
      label: "Generate editable draft baskets",
      icon: "basket" as const,
    },
    {
      label: "Keep refinement lightweight",
      icon: "sliders" as const,
    },
  ],
  panelTitle: "Increase confidence, basket completion and repeat usage.",
};

export const principles = {
  label: "06 Design principles",
  headline: "Reduce effort — not control.",
  subcopy: "AI should accelerate basket building without removing customer ownership.",
  intro:
    "These principles shaped how the experience balanced intelligence, trust and customer control.",
  items: [
    {
      number: "1.",
      title: "Start with intent, not products",
      copy: "Customers think in meals and household needs, not exact product names.",
    },
    {
      number: "2.",
      title: "Keep refinement lightweight",
      copy: "Editing quantities, swapping products and removing items needed to feel effortless.",
    },
    {
      number: "3.",
      title: "Make the system feel collaborative",
      copy: "The experience should feel assistive rather than automated.",
    },
  ],
};

export const solution = {
  label: "07 Solution",
  headline: "The solution.",
  subcopy:
    "AI that understands messy intent. An experience that keeps customers in control.",
  features: [
    {
      title: "Understand anything",
      copy: "Natural language and notes are turned into smart, shoppable suggestions.",
      color: "purple" as const,
    },
    {
      title: "Refine with ease",
      copy: "Edit, add or remove items in seconds. Always your list, your way.",
      color: "orange" as const,
    },
    {
      title: "Seamless to basket",
      copy: "Everything flows straight to your shop, ready to buy.",
      color: "pink" as const,
    },
  ],
  image: "/images/work/shopping-lists/mockup2.png",
  imageAlt:
    "Two mobile screens showing a customer entering shopping intent and receiving editable basket suggestions.",
};

export const decisions = {
  label: "08 Key product decisions",
  headline: "The decisions that made the experience work.",
  subcopy: "Trust came from restraint, clarity and control — not just automation.",
  items: [
    {
      number: "01",
      title: "We intentionally avoided full automation",
      copy: "Customers needed editable drafts, not invisible decisions. Recommendations stayed transparent and reviewable.",
      icon: "eye" as const,
    },
    {
      number: "02",
      title: "We prioritised mixed-input behaviour",
      copy: "People plan in many ways — typed lists, meal ideas, notes and screenshots — so the experience had to support messy real-world input.",
      icon: "pencil" as const,
    },
    {
      number: "03",
      title: "We used confidence-based recommendation logic",
      copy: "High-confidence suggestions could speed up basket building, while more ambiguous inputs surfaced alternatives.",
      icon: "target" as const,
    },
    {
      number: "04",
      title: "We designed for new customers first",
      copy: "New users had less history and more uncertainty, so the journey needed lightweight guidance and confidence-building support.",
      icon: "user" as const,
    },
  ],
  image: "/images/work/shopping-lists/mockup4.png",
  imageAlt:
    "Mobile screen showing editable product suggestions with quantity controls and add to trolley action.",
};

export const validation = {
  label: "09 Validation and iteration",
  headline: "Validation and iteration.",
  body: "We tested early concepts, refined the experience in response to feedback, and validated the solution with real customers.",
  process: [
    {
      number: "01",
      title: "Research",
      copy: "User interviews and concept testing",
    },
    {
      number: "02",
      title: "Prototype",
      copy: "Low-fi to hi-fi prototypes across mobile",
    },
    {
      number: "03",
      title: "Test and learn",
      copy: "Usability testing with customers",
    },
    {
      number: "04",
      title: "Iterate",
      copy: "Refine, retest and improve confidence",
    },
  ],
  learnings: [
    {
      number: "01",
      title: "Customers expected flexibility",
      quote: "I want to tweak items before adding them to my list.",
      response: "Gave customers edit control before adding to basket.",
    },
    {
      number: "02",
      title: "Visibility improved trust",
      quote: "Seeing what was added helps me feel confident.",
      response: "Made suggestions visible, reviewable and editable.",
    },
    {
      number: "03",
      title: "Grouping improved comprehension",
      quote: "Grouped suggestions are easier to scan.",
      response: "Grouped items by occasion and category.",
    },
  ],
};

export const proof = {
  label: "Proof",
  headline: "What gave us confidence",
  intro:
    "The direction was supported by a clear behavioural pattern: customers were already planning shops outside the product. The opportunity was to translate that existing intent into a faster, editable basket-building experience without removing customer control.",
  cards: [
    {
      title: "Behaviour already existed",
      copy:
        "Customers were already using paper lists, notes, screenshots, meal ideas and household reminders to plan shops before opening the grocery experience. This showed the product did not need to create a new behaviour. It needed to support one that already existed.",
    },
    {
      title: "Ambiguity was the real problem",
      copy:
        "Inputs like milk, bread or pasta showed that customers rarely think in exact product names. The experience needed to interpret intent, suggest likely matches and keep alternatives visible where confidence was lower.",
    },
    {
      title: "Control protected trust",
      copy:
        "Testing showed that customers were more comfortable with AI-assisted suggestions when they could review, edit, swap, remove and adjust quantities before committing anything to basket.",
    },
  ],
  closing:
    "The proof was not that customers wanted automation. It was that they wanted less effort while still feeling in control.",
};

export const impact = {
  label: "10 Impact and outcomes",
  headline: "From fragmented planning to editable basket creation.",
  body: "The concept connected a high-value customer behaviour with a faster, more flexible way to build baskets. Instead of asking customers to search one product at a time, the experience translated messy intent into editable, shoppable suggestions that customers could review, refine and add to basket.",
  outcomes: [
    {
      title: "Reduced basket-building effort",
      copy: "Customers could move from fragmented planning inputs to draft basket suggestions faster.",
    },
    {
      title: "Improved confidence before adding to basket",
      copy: "Visibility, grouping and edit controls helped customers understand and review what had been suggested.",
    },
    {
      title: "Supported multiple planning behaviours",
      copy: "The experience worked across typed lists, uploaded notes, screenshots, meal ideas and preference-based inputs.",
    },
    {
      title: "Created a scalable AI-assisted shopping model",
      copy: "The logic could adapt across known customers, new customers, favourites, preferences and purchase history.",
    },
    {
      title: "Linked to a high-value commercial behaviour",
      copy: "Shopping lists were connected to larger basket sizes, repeat planning and stronger grocery shopping intent.",
    },
  ],
};

export const reflection = {
  label: "11 Reflection",
  headline: "Automation alone did not create trust.",
  lead: "The biggest shift was not helping customers create lists. It was helping them turn intent into a basket.",
  body: "Customers valued speed, but only when they retained visibility, flexibility and control. That insight reframed the experience from a simple list-making tool into an intelligent, editable shopping assistant.",
  cards: [
    {
      title: "Control built confidence",
      copy: "Editable suggestions made AI feel helpful rather than prescriptive.",
      icon: "sliders" as const,
    },
    {
      title: "Visibility increased trust",
      copy: "Customers wanted to understand what was suggested and why.",
      icon: "eye" as const,
    },
    {
      title: "Intent became the real input",
      copy: "The product worked best when it responded to messy human planning behaviour.",
      icon: "target" as const,
    },
  ],
};
