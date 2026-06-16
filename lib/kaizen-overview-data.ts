export const kaizenOverviewSubnav = [
  { id: "overview", label: "Overview" },
  { id: "role", label: "Role" },
  { id: "challenge", label: "Challenge" },
  { id: "strategy", label: "Strategy" },
  { id: "impact", label: "Impact" },
  { id: "explore", label: "Explore work" },
  { id: "reflection", label: "Reflection" },
] as const;

export const kaizenOverviewHero = {
  label: "Case Study",
  title: "Kaizen Languages",
  subcopy:
    "Designing an AI-powered language learning experience around confidence, motivation and retention.",
  meta: [
    { label: "Role", value: "Founding Product Designer" },
    { label: "Timeline", value: "Approximately three years" },
    { label: "Platform", value: "Native iOS and Android" },
    {
      label: "Team",
      value: "Founders, developers, language specialists, AI stakeholders",
    },
    {
      label: "Focus",
      value:
        "AI conversation, writing, retention, gamification and subscription conversion",
    },
  ],
  image: "/images/work/kaizen-languages/hero.png",
  imageAlt:
    "Kaizen Languages mobile app mockups showing lessons, progress and subscription screens.",
};

export const kaizenOverviewRole = {
  title: "My role",
  avatar: "/images/jacinto-hero.png",
  avatarAlt: "Jacinto De Matos",
  lead: "As the founding product designer, I helped shape Kaizen Languages from early concept through growth. My work covered product strategy, research, interaction design, visual direction, AI learning systems, retention and commercial experimentation across iOS and Android.",
  bullets: [
    "Product strategy and roadmap influence",
    "User research and testing",
    "UX and interaction design",
    "Visual design and illustration",
    "Prototyping and developer documentation",
    "Product analytics and experimentation",
    "Retention and conversion optimisation",
  ],
};

export const kaizenOverviewChallenge = {
  label: "Product challenge",
  headline: "Making AI language learning useful for complete beginners",
  body: "Kaizen used conversational AI to help people practise speaking with digital tutors. The challenge was not simply to create a chat interface. We needed to make unfamiliar technology feel human, provide enough structure for complete beginners and build habits strong enough to support both learning outcomes and a sustainable subscription product.",
};

export const kaizenOverviewStrategy = {
  label: "Product-level strategy",
  headline: "Connected decisions across three years of product work",
  items: [
    {
      title: "Prioritise novice learners",
      copy: "Rather than concentrating only on advanced content, the product focused on beginners who needed confidence and structure first.",
    },
    {
      title: "Define a human visual direction",
      copy: "I tested photography, illustration and hybrid routes, then adapted the strongest evidence to an early-stage budget.",
    },
    {
      title: "Turn AI messaging into a lesson system",
      copy: "Conversation became a structured learning environment with progressive support, recovery and measurable iteration.",
    },
    {
      title: "Introduce Japanese writing support",
      copy: "Hiragana and katakana practice gave novice learners a stronger foundation before harder lesson progression.",
    },
    {
      title: "Build practice and retention mechanics",
      copy: "Practice, streaks, freezes and progress feedback helped learners return without feeling punished.",
    },
    {
      title: "Experiment commercially",
      copy: "Free-access limits, paywall hierarchy and pricing emphasis were tested against customer value and business sustainability.",
    },
  ],
};

export const kaizenOverviewImpact = {
  label: "Combined impact",
  headline: "Strongest defensible outcomes",
  intro:
    "Across three years, the strongest gains came from connecting learning behaviour, product confidence and commercial experimentation rather than treating them as separate activities.",
  metrics: [
    {
      metric: "62% NPS",
      title: "Writing feature",
      copy: "Validated active beginner practice in testing.",
    },
    {
      metric: "+35%",
      title: "Retention uplift",
      copy: "After introducing streaks and related retention mechanics.",
    },
    {
      metric: "40% / 22%",
      title: "Day 1 and Week 1 retention",
      copy: "Versus education-tech benchmarks of 14.5% and 4.6%.",
    },
    {
      metric: "+25%",
      title: "Lesson completions",
      copy: "After introducing Suggestions in AI lessons.",
    },
    {
      metric: "+13%",
      title: "Premium customers",
      copy: "From the two-versus-three free-lesson experiment.",
    },
    {
      metric: "+20%",
      title: "6-month subscriptions",
      copy: "After moving the Most Popular label to the six-month plan.",
    },
  ],
};

export const kaizenOverviewExplore = {
  label: "Explore work",
  headline: "Explore three years of product work",
  intro:
    "Six feature stories cover the major product areas I shaped as founding designer. Each page goes deeper into the problem, evidence, design decisions and outcomes.",
};

export const kaizenOverviewReflection = {
  label: "Reflection",
  headline: "What three years as a founding designer taught me",
  body: "Kaizen required me to move continuously between product strategy, detailed interaction design, learning behaviour and commercial decisions. The strongest outcomes came from treating those areas as one connected system rather than separate design activities.",
};

export const kaizenOverviewProjectNav = {
  previous: { title: "PrimaryBid", href: "/work/primarybid" },
  next: { title: "Smarter", href: "/work/smarter" },
};
