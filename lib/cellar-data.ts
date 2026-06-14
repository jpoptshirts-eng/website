export const cellarSubnav = [
  { id: "overview", label: "Overview" },
  { id: "opportunity", label: "Opportunity" },
  { id: "problem", label: "Problem" },
  { id: "reframe", label: "Reframe" },
  { id: "strategy", label: "Strategy" },
  { id: "outcome", label: "Outcome" },
] as const;

export const cellarHero = {
  label: "Case Study 3",
  title: "Waitrose Cellar",
  headline: "Realising a £2m CRM opportunity through MVP redefinition",
  intro:
    "How I helped redefine the account strategy, leverage existing Waitrose infrastructure and launch faster — reducing delivery effort by over 50% while unlocking the next most requested customer experience.",
  meta: {
    role: "Senior Product Designer",
    duration: "Q1–Q2 2025",
    team: "Product, Engineering, Research, Marketing",
    focus: [
      "Product Strategy",
      "Customer Accounts",
      "Roadmap Prioritisation",
      "Delivery Optimisation",
      "Loyalty & CRM",
    ],
  },
  image: "/images/work/cellar/hero.png",
  imageAlt:
    "Waitrose Cellar — red wine being poured into a glass against a deep burgundy background.",
};

export const cellarOpportunity = {
  label: "Opportunity",
  headline: "Unlocking customer value",
  body: "Waitrose Cellar had identified a significant commercial opportunity. Customers purchasing through Cellar remained largely anonymous, limiting CRM activity, personalisation and loyalty initiatives.",
  body2:
    "The business estimated that enabling customer identification could unlock approximately £2m annually through improved engagement and repeat purchasing.",
  metrics: [
    { metric: "£2m", title: "Annual CRM opportunity" },
    { metric: "CSAT", title: "Customer satisfaction improvement focus" },
    { metric: "Anonymous", title: "Limited personalisation without customer ID" },
    { metric: "Loyalty", title: "Future retention and repeat purchase growth" },
  ],
};

export const cellarProblem = {
  label: "Problem",
  headline: "Why the original approach was not enough",
  intro: [
    "While the business identified a £2m CRM opportunity through customer identification, the proposed solution required building a dedicated Cellar account platform from scratch.",
    "This included registration, sign in, account management and future loyalty functionality.",
    "For a relatively small product and engineering team, this represented a significant investment and was estimated to take over a year before customers received meaningful value.",
    "At the same time, customer research revealed something important.",
    "Customers rarely talked about registration itself.",
    "Instead, they consistently asked for:",
  ],
  roadmap: {
    title: "Original roadmap",
    items: [
      "Registration",
      "Sign in",
      "Account management",
      "Preferences",
      "Loyalty capabilities",
    ],
    delivery: "12+ months",
    effort: "High engineering effort",
  },
  learned: {
    title: "What customers wanted",
    items: [
      "Access to previous orders",
      "Easier repeat purchasing",
      "Better continuity between Waitrose and Cellar",
      "More personalised experiences",
    ],
  },
  tension:
    "This created tension between business goals and customer needs. The proposed roadmap would achieve the business objective, but it would delay customer value for more than a year.",
  callout: [
    { label: "Business need", outcome: "Customer identification" },
    { label: "Customer need", outcome: "Order history and repeat purchasing" },
  ],
  quote:
    "The experience worked for customers who already knew what they wanted, but did little to support discovery, confidence or repeat purchasing.",
  image: {
    src: "/images/work/cellar/sign-in.png",
    alt: "Waitrose sign-in screen showing shared waitrose.com account authentication.",
  },
};

export const cellarReframe = {
  label: "Reframe",
  before: "How do we build a Waitrose Cellar account platform?",
  after: "How do we identify customers and unlock loyalty as quickly as possible?",
  body: [
    "The challenge was not simply reducing delivery effort.",
    "The challenge was ensuring that engineering investment created customer value as quickly as possible.",
    "The original roadmap focused on building account infrastructure. However, customer research suggested that account creation itself was not the primary problem customers were trying to solve.",
    "Customers wanted easier access to previous purchases, faster repeat ordering and a more connected experience.",
  ],
  closing:
    "That shift fundamentally changed the solution. By leveraging existing Waitrose authentication, we could achieve the business objective while creating enough capacity to invest in higher-value customer experiences within the same roadmap cycle.",
};

export const cellarStrategy = {
  label: "Strategy",
  headline: "The Strategy",
  subtitle: "Reusing existing infrastructure",
  body: "Rather than creating a dedicated Cellar account ecosystem, I proposed leveraging the existing Waitrose authentication platform.",
  flow: [
    "Customer visits Cellar",
    "Select Sign In",
    "Authenticate using Waitrose account",
    "Automatically return to Cellar",
    "Customer ID linked to future purchases",
  ],
  included: [
    "Shared authentication",
    "Existing Waitrose credentials",
    "Customer ID sharing",
    "Automatic return to Cellar",
  ],
  deferred: [
    "Full account management",
    "Marketing preferences",
    "Saved payment methods",
    "Advanced account functionality",
  ],
  tradeoff:
    "We deliberately sacrificed short-term flexibility in favour of faster delivery and earlier customer value.",
  benefits: [
    "Faster delivery",
    "Reduced engineering effort",
    "Shared customer identity",
    "Faster CRM value",
    "Consistent customer experience",
  ],
};

export const cellarInfrastructure = {
  label: "Rationale",
  headline: "Why existing infrastructure made sense",
  cards: [
    {
      title: "Existing customer accounts",
      copy: "Many customers already had Waitrose accounts, reducing the need to create a separate authentication ecosystem.",
    },
    {
      title: "Shared ecosystem",
      copy: "Waitrose Cellar operated within the wider Waitrose experience, making shared authentication a natural extension of the platform.",
    },
    {
      title: "Same outcome, less effort",
      copy: "Customer identification could be achieved without building a standalone account system from scratch.",
    },
  ],
  closing:
    "The goal was not to build the perfect technical solution. The goal was to achieve the same business outcome while preserving capacity for customer-facing improvements.",
};

export const cellarOrderHistory = {
  label: "Prioritisation",
  headline: "Why order history became the next priority",
  body: [
    "One of the strongest themes emerging from customer feedback was the need for easier access to previous purchases.",
    "Customers wanted to revisit wines they had already bought, reorder favourites and maintain continuity between purchases.",
    "By reducing the scope of the account programme, we created enough capacity within the roadmap to begin investing in Order History during the same year.",
    "This transformed the initiative from a purely business-led programme into one that balanced commercial objectives with direct customer value.",
  ],
  roadmap: [
    "Customer identification",
    "Order history",
    "Repeat purchasing",
    "Loyalty",
  ],
  image: {
    src: "/images/work/cellar/ipad-cellar.png",
    alt: "Waitrose Cellar product page on iPad showing the premium shopping experience.",
  },
};

export const cellarOutcome = {
  label: "Outcome",
  headline: "Redirecting investment toward customer value",
  body: [
    "The success of the initiative was not simply reducing delivery effort.",
    "It was enabling the team to achieve the business objective while creating space to solve the customer problems that surfaced most frequently through research.",
    "By reusing existing Waitrose infrastructure, we accelerated access to customer identification, preserved the CRM opportunity and redirected investment toward experiences customers actively wanted.",
  ],
  metrics: [
    { metric: "£2m", title: "CRM opportunity preserved" },
    { metric: "50%+", title: "Reduction in delivery effort" },
    { metric: "1", title: "Shared customer identity across Waitrose and Cellar" },
    { metric: "Next priority unlocked", title: "Order History and loyalty experiences" },
  ],
};

export const cellarProjectNav = {
  previous: { title: "QuickShop", href: "/work/quickshop" },
  next: { title: "Meal Plans", href: "/work/meal-plans" },
};
