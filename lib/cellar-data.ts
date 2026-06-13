export const cellarSubnav = [
  { id: "overview", label: "Overview" },
  { id: "opportunity", label: "Opportunity" },
  { id: "problem", label: "Problem" },
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
    title: "What we learned",
    intro:
      "Customers rarely talked about registration. Instead, they wanted:",
    items: [
      "Easier repeat purchasing",
      "Better continuity",
      "More confidence",
      "Relevant recommendations",
    ],
  },
  quote:
    "The experience worked for customers who already knew what they wanted, but did little to support discovery, confidence or repeat purchasing.",
};

export const cellarReframe = {
  before: "How do we build a Waitrose Cellar account platform?",
  after: "How do we identify customers and unlock loyalty as quickly as possible?",
  copy: "Shifting the conversation from building account infrastructure to creating customer value fundamentally changed the solution.",
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

export const cellarOutcome = {
  label: "Outcome",
  headline: "Redirecting investment toward customer value",
  body: "Avoiding a year-long platform build allowed the team to focus on the next highest-value customer problem.",
  priority: "Order History",
  benefits: [
    "Visibility of previous purchases",
    "Easier repeat ordering",
    "Better continuity across purchases",
  ],
  roadmap: ["Account Foundation", "Order History", "Personalisation", "Loyalty"],
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
