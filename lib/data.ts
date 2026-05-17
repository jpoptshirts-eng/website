export interface CaseStudy {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface ApproachItem {
  title: string;
  copy: string;
  icon: "brain" | "network" | "trending" | "flask";
}

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Feedback", href: "#feedback" },
  { label: "Approach", href: "#approach" },
] as const;

export const caseStudies: CaseStudy[] = [
  {
    number: "01",
    title: "Shopping Lists",
    subtitle: "(Waitrose)",
    description:
      "AI-assisted shopping lists that understand intent, adapt in real time and drive more basket value.",
    tags: ["AI", "Personalisation", "Commerce"],
    image: "/images/shopping-lists.png",
    href: "/work/shopping-lists",
  },
  {
    number: "02",
    title: "QuickShop",
    subtitle: "(Waitrose)",
    description:
      "Smart recommendations at the right moment to make shopping faster, easier and more relevant.",
    tags: ["Recommendations", "UX", "Growth"],
    image: "/images/quickshop.png",
    href: "/work/quickshop",
  },
  {
    number: "03",
    title: "Kaizen Languages",
    subtitle: "(Personal Project)",
    description:
      "A personalised language learning app that adapts to motivation, ability and real-life progress.",
    tags: ["Mobile", "Learning", "Behaviour"],
    image: "/images/kaizen.png",
    href: "/work/kaizen-languages",
  },
  {
    number: "04",
    title: "PrimaryBid",
    subtitle: "(Fintech SaaS)",
    description:
      "Simplifying complex IPO investment workflows for trust, clarity and confidence at every step.",
    tags: ["Fintech", "SaaS", "Trust"],
    image: "/images/primarybid.png",
    href: "/work/primarybid",
  },
];

// Replace these with real testimonials from Jacinto's portfolio or LinkedIn recommendations.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Jacinto combines deep strategic thinking with exceptional execution. He's data-informed, user-obsessed and always drives for real business impact.",
    name: "Sabeena Ahmed",
    role: "Head of Product",
    company: "Waitrose",
    avatar: "/images/avatar-1.png",
  },
  {
    quote:
      "Jacinto brings clarity to complexity. He asks the right questions, challenges assumptions and delivers designs that are both elegant and highly effective.",
    name: "Richard Hayward",
    role: "Product Director",
    company: "Waitrose",
    avatar: "/images/avatar-2.png",
  },
  {
    quote:
      "A collaborative leader and a brilliant problem solver. Jacinto elevates the teams he works with and consistently raises the bar.",
    name: "Tom Gurr",
    role: "Head of Design",
    company: "PrimaryBid",
    avatar: "/images/avatar-3.png",
  },
];

export const approachItems: ApproachItem[] = [
  {
    title: "Behaviour first",
    copy: "I start with real human behaviour to design experiences that resonate.",
    icon: "brain",
  },
  {
    title: "Systems thinking",
    copy: "I connect the dots across users, data, tech and business to find leverage.",
    icon: "network",
  },
  {
    title: "Commercial impact",
    copy: "I design for outcomes that drive value for users and the business.",
    icon: "trending",
  },
  {
    title: "Prototype the invisible",
    copy: "I use prototypes to test ideas early and reduce risk with confidence.",
    icon: "flask",
  },
];
