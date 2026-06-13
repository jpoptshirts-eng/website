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
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Feedback", href: "/#feedback" },
  { label: "Approach", href: "/#approach" },
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
    title: "Cellar Account",
    subtitle: "(Waitrose)",
    description:
      "How I helped redefine the account strategy, leverage existing Waitrose infrastructure and reduce delivery effort by over 50% while accelerating customer value.",
    tags: [
      "Product Strategy",
      "Customer Accounts",
      "Roadmap Prioritisation",
      "Loyalty & CRM",
    ],
    image: "/images/cellar.png",
    href: "/work/cellar",
  },
  {
    number: "04",
    title: "PrimaryBid",
    subtitle: "Transactional website and IPO",
    description:
      "Simplifying complex IPO investment workflows for trust, clarity and confidence at every step.",
    tags: ["Fintech", "SaaS", "Trust"],
    image: "/images/primarybid.png",
    href: "/work/primarybid",
  },
  {
    number: "05",
    title: "Kaizen Languages",
    subtitle: "AI language learning",
    description:
      "iOS and Android AI language learning app that adapts to motivation, ability and real-life progress.",
    tags: ["AI", "iOS", "Android"],
    image: "/images/kaizen.png",
    href: "/work/kaizen-languages",
  },
  {
    number: "06",
    title: "Smarter",
    subtitle: "Connected kitchen ecosystem",
    description:
      "Designing one connected app for the iKettle, Smarter Coffee and FridgeCam.",
    tags: ["Connected products", "IoT", "Mobile app", "Grocery"],
    image: "/images/smarter.png",
    href: "/work/smarter",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Jac is a proactive, high-impact Senior Product Designer who improved delivery speed and consistency on PrimaryBid's flagship IPO product.",
    name: "Rory Woods",
    role: "Head of Design",
    company: "PrimaryBid",
    avatar: "/images/avatar-rory.png",
  },
  {
    quote:
      "Jacinto has led our UX/UI covering our app and website for the last 3 years and has been tremendous.",
    name: "Patrick Allan",
    role: "CTO",
    company: "Kaizen Languages",
    avatar: "/images/avatar-patrick.png",
  },
  {
    quote:
      "Jacinto has done an amazing job designing the Smarter app and has been a pleasure to work with.",
    name: "Carl Lewis",
    role: "Lead Android Developer",
    company: "Smarter",
    avatar: "/images/avatar-carl.png",
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
