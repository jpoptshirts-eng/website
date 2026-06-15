export const kaizenSubnav = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "research", label: "Research" },
  { id: "insight", label: "Insight" },
  { id: "visual-direction", label: "Visual direction" },
  { id: "ai-conversation", label: "AI conversation" },
  { id: "lesson", label: "Lesson" },
  { id: "strategy", label: "Strategy" },
  { id: "writing", label: "Writing" },
  { id: "gamification", label: "Gamification" },
  { id: "conversion", label: "Conversion" },
  { id: "proof", label: "Proof" },
  { id: "impact", label: "Impact" },
  { id: "decisions", label: "Decisions" },
  { id: "reflection", label: "Reflection" },
  { id: "retention", label: "Retention" },
] as const;

export const kaizenHero = {
  label: "01 Case Study",
  title: "Kaizen Languages",
  subcopy:
    "Designing an AI-powered language learning experience around confidence, motivation and retention.",
  meta: [
    { label: "Role", value: "Founding Product Designer" },
    { label: "Timeline", value: "3 years" },
    { label: "Platform", value: "Native iOS and Android" },
    {
      label: "Team",
      value: "Founders, developers, language specialists, AI stakeholders",
    },
    {
      label: "Focus",
      value:
        "Mobile product design / Behavioural UX / AI conversation / Retention / Gamification / Subscription conversion",
    },
  ],
  image: "/images/work/kaizen-languages/hero.png",
  imageAlt:
    "Kaizen Languages mobile app mockups showing lessons, progress and subscription screens.",
  highlights: [
    { metric: "+25%", label: "Lesson completions after Suggestion" },
    { metric: "3.8%", label: "Conversion at Version 7" },
    { metric: "+35%", label: "Retention uplift through gamification" },
    { metric: "62% NPS", label: "Writing feature score" },
  ],
};

export const kaizenMyRole = {
  title: "My role",
  avatar: "/images/jacinto-hero.png",
  avatarAlt: "Jacinto De Matos",
  lead: "As founding product designer, I led the end-to-end design of a native iOS and Android language learning app, shaping the lesson experience, onboarding, writing interactions, gamification, experimentation and conversion journeys. The challenge was not only helping people learn a language, but helping them feel confident enough to keep going.",
  body: "I owned the product design from discovery through optimisation — across UX, UI, research, analytics, workshops, guidelines, product foundations and hands-on delivery. Because Kaizen was an early-stage product, the role required both strategic thinking and execution.",
  bullets: [
    "Defining the core lesson experience",
    "Building testable prototypes",
    "Creating product flows and UI systems",
    "Running guerrilla and remote user testing",
    "Using Firebase funnels and Hotjar to analyse behaviour",
    "Shaping A/B tests and CRO decisions",
    "Producing assets and documentation for developers",
    "Collaborating with language specialists on lesson structure and writing systems",
    "Working with developers on speech, writing input and interaction constraints",
  ],
};

export const kaizenOverview = {
  label: "02 Overview",
  headline: "Designing an AI learning product people would return to",
  body: "Kaizen was built around a different way of learning languages: AI-powered conversation instead of traditional classroom or video-based learning. That created a complex product challenge. Users needed to understand how the product worked, feel comfortable speaking to AI, recover from mistakes and stay motivated long enough to build a habit.",
  body2:
    "As founding product designer, I shaped the mobile experience from early discovery through optimisation, working across lesson design, onboarding, conversion, analytics, gamification and writing-based learning systems.",
  points: [
    "Led end-to-end product design across iOS and Android",
    "Designed AI chat lesson flows, correction states and support patterns",
    "Created onboarding, paywall and subscription experiments",
    "Used research, testing and analytics to guide product decisions",
    "Worked closely with founders, developers, language specialists and AI stakeholders",
  ],
};

export const kaizenChallenge = {
  label: "03 The challenge",
  headline: "Creating trust and momentum in a new way of learning",
  body: "The core challenge was not simply helping users complete lessons. It was helping them build confidence. Speaking to AI felt unfamiliar and high pressure. When users made pronunciation mistakes, repeated correction often created frustration and drop-off. The product needed to feel educational, responsive and encouraging without removing the challenge of learning.",
  hmw: "How might we design a language learning experience that feels adaptive, rewarding and behaviourally sustainable over time?",
  challenges: [
    "Speaking to AI felt unfamiliar and high pressure",
    "Users dropped out when pronunciation errors repeated",
    "Early lesson experiences were not interactive enough",
    "The product needed to balance learning outcomes with subscription growth",
    "As an early-stage product, we needed to learn quickly through research, testing and analytics",
  ],
  image: "/images/work/kaizen-languages/mockup-lessons.png",
  imageAlt:
    "Kaizen Languages mobile app showing the Japanese beginner lesson list.",
};

export const kaizenQuotes = [
  "Learners were not dropping out because they lacked content. They were dropping out because the experience did not always help them recover when confidence broke down.",
  "The writing feature shifted the experience from passive learning into active practice, giving beginners a clearer sense of progress and achievement.",
  "Small interaction changes mattered because the product depended on momentum. Every moment of friction risked breaking the learning habit.",
];

export const kaizenInsight = {
  label: "04 Key user insight",
  headline: "Learners did not just need content. They needed confidence.",
  body: "The biggest friction was not simply “learning a language”. It was the emotional barrier inside the lesson. Users were often unsure whether they were pronouncing things correctly. When correction repeated without enough support, the experience started to feel punitive rather than helpful.",
  points: [
    "Confidence mattered as much as correctness",
    "Repeated correction created frustration",
    "Users needed help recovering when they got stuck",
    "The lesson flow needed to support progression, not just identify errors",
    "Feedback needed to feel encouraging, contextual and actionable",
    "Beginners needed a stronger foundation before being pushed into more advanced content",
  ],
};

export const kaizenResearch = {
  label: "05 Discovery and research",
  headline: "Understanding how people learn, where they struggle and what keeps them going",
  body: "To design a credible learning product, I needed to understand both the educational and behavioural side of language learning. The research focused on how learners build confidence, where they lose momentum and what type of support helps them continue after making mistakes.",
  inputs: [
    "Competitive review of language-learning onboarding and lesson patterns",
    "In-person guerrilla research with learners",
    "Remote testing using platforms such as UserTesting",
    "Visits to language schools, meet-ups and learning communities",
    "Study of spaced repetition and language memory techniques",
    "Study of beginner Japanese learning methods, including Genki",
    "Collaboration with language specialists and AI stakeholders",
    "Firebase funnels and Hotjar for behavioural and drop-off analysis",
    "A/B testing across onboarding, lessons and subscription screens",
  ],
  recruitment:
    "To avoid testing with generic app users, I recruited people actively learning Japanese through language schools, meetups, comic stores, WeWork, flyers outside independent classes and remote platforms such as UserTesting and TryMyUI. This helped validate the product with learners who were already experiencing the motivation, confidence and pronunciation challenges the app needed to solve.",
  learningGoals: [
    "What makes a lesson feel useful rather than intimidating",
    "Where users lose confidence",
    "How much guidance is enough without reducing challenge",
    "What drives repeat use and paid conversion",
    "Whether beginners needed more foundational support before advanced content",
  ],
};

export const kaizenVisualDirection = {
  label: "Early product direction",
  headline: "Defining how an AI tutor should feel",
  intro: [
    "Before designing the core lesson experience, I reviewed established language-learning products to understand their onboarding, learning flows, visual conventions and how they introduced learners to a new language.",
    "None of the products offered the same AI conversation experience as Kaizen. Competitor analysis gave me useful reference points, but it could not provide the final answer. I needed to explore what would make our product feel credible, approachable and distinct.",
  ],
  routes: [
    {
      title: "Photography-led",
      icon: "camera" as const,
      hypothesis:
        "The hypothesis was that seeing real people and places would make the AI experience feel more credible, human and culturally connected.",
    },
    {
      title: "Illustration direction one",
      icon: "sparkles" as const,
      hypothesis:
        "The hypothesis was that a playful visual language could reduce anxiety and make starting a new language feel less intimidating.",
    },
    {
      title: "Illustration direction two",
      icon: "palette" as const,
      hypothesis:
        "The hypothesis was that a more considered visual style could help the product feel distinctive and provide it with a stronger identity.",
    },
    {
      title: "Hybrid direction",
      icon: "layers" as const,
      hypothesis:
        "The hypothesis was that photography could provide trust and realism, while illustration added warmth, flexibility and personality.",
    },
  ],
  heroImage: {
    src: "/images/work/kaizen-languages/visual-direction-hero.png",
    alt: "Kaizen Languages iPhone mockup showing the Japanese lessons interface with locked and unlocked lesson states.",
  },
  researchFinding: {
    headline: "What learners responded to",
    body: [
      "I tested the four directions through guerrilla research with people interested in learning Japanese, the first language we planned to launch.",
      "The photography-led direction received the strongest response. Participants felt that seeing real people made the experience feel more authentic and reinforced the impression that they would be learning with a genuine tutor rather than interacting with an abstract piece of technology.",
      "This was particularly important because conversational AI was still unfamiliar. Photography helped humanise the proposition and build trust before the first lesson had started.",
    ],
  },
  constraint: {
    headline: "Adapting the evidence to an early-stage budget",
    body: [
      "I recommended the photography-led direction to the founders, but as an early-stage company, Kaizen did not have the budget required to produce and maintain a scalable photography library.",
      "The team selected one of the illustration-led routes instead. I created the illustration system from scratch and adapted it to retain as much warmth, personality and human connection as possible while remaining affordable and scalable.",
    ],
    decision:
      "Use research to identify the strongest customer direction, then adapt its underlying principles to the commercial reality of the business.",
    supporting:
      "The final execution was not the highest-rated route, but it retained the qualities participants valued most: approachability, personality and the feeling of learning with someone rather than from a static interface.",
  },
  transitionToAi:
    "The visual exploration established how the product should feel. The next challenge was defining how the tutor and learner would interact once a lesson began.",
};

export const kaizenAiConversation = {
  label: "Core interaction model",
  headline: "Designing conversation as a lesson",
  intro: [
    "Conversation was the core of the Kaizen experience, but a conventional messaging interface would not provide enough support for someone learning a new language.",
    "Before defining the interaction model, I reviewed messaging and language-learning products to understand established behaviours, including message hierarchy, audio controls, conversation pacing and how supporting information was presented. Competitors provided useful interface patterns, but none were solving the same problem: creating a conversation that felt natural while also functioning as a structured AI-powered lesson.",
  ],
  challenge: {
    headline: "One conversation, multiple learning needs",
    body: "The interface needed to support a natural exchange while helping learners understand pronunciation, meaning and different Japanese character systems. I mapped the states and controls required throughout a lesson:",
    requirements: [
      "Distinguishing the learner's messages from those of the AI tutor",
      "Showing when the tutor was composing or speaking",
      "Replaying a spoken phrase",
      "Listening at normal or reduced speed",
      "Revealing a translation only when required",
      "Switching between romaji and Japanese character systems",
      "Communicating response or connection errors",
      "Helping learners recover without losing the conversation",
    ],
  },
  media: {
    src: "/images/work/kaizen-languages/ai-conversation.png",
    alt: "Kaizen Languages app mockups showing welcome, AI conversation, lessons, progress and subscription screens.",
    placeholderLabel: "AI conversation interface image to be added",
  },
  support: {
    headline: "Balancing immersion with support",
    body: [
      "Rather than showing every learning aid permanently, I explored progressive disclosure so learners could first attempt to understand a phrase and then reveal additional support when needed.",
      "Hiding the translation by default increased the level of challenge and encouraged learners to interpret the Japanese phrase before falling back on English.",
      "Audio replay and reduced-speed pronunciation provided support without interrupting the conversation. Switching between romaji and hiragana allowed the experience to adapt as learners became more confident with the Japanese writing system.",
      "The messaging interface therefore became more than a chat screen. It became a flexible learning system that could adjust the level of assistance without removing the feeling of a real conversation.",
    ],
  },
  states: [
    {
      title: "AI responding",
      learnerNeed: "Understand that the conversation is progressing.",
      designResponse: "A clear composing or speaking state.",
    },
    {
      title: "Audio playing",
      learnerNeed: "Follow the tutor's spoken response.",
      designResponse: "Animated audio feedback and a visible playback state.",
    },
    {
      title: "Phrase unclear",
      learnerNeed: "Hear the pronunciation more carefully.",
      designResponse: "Normal and reduced-speed playback controls.",
    },
    {
      title: "Meaning unclear",
      learnerNeed: "Access additional support without leaving the lesson.",
      designResponse: "A translation that can be revealed on demand.",
    },
    {
      title: "Script unfamiliar",
      learnerNeed: "Read the phrase at the appropriate learning level.",
      designResponse: "The ability to switch between romaji and hiragana.",
    },
    {
      title: "System error",
      learnerNeed: "Understand what happened and continue the conversation.",
      designResponse: "A clear error state with a recovery or retry action.",
    },
  ],
  delivery: {
    headline: "Defining the behaviour for development",
    body: [
      "I designed the individual message states, audio behaviours, errors and character-set variations, then documented how each component should respond throughout the conversation.",
      "I also created an interactive prototype to communicate timing, audio feedback, animation and transitions to the engineering team—details that could not be understood fully from static screens alone.",
    ],
    closing:
      "The documentation turned a collection of screens into a shared interaction model that design and engineering could build consistently.",
  },
  transitionToLesson:
    "With the core conversation model established, I put it in front of learners to understand where the experience still broke down.",
};

export const kaizenLesson = {
  label: "06 Core lesson experience",
  headline: "Making AI chat feel teachable, responsive and engaging",
  body: "One of the core product problems was how to translate a chat interface into an effective lesson environment. The messaging experience had to do more than look like chat. It had to teach. I explored how users would distinguish AI responses from their own, replay audio, view translations, understand errors and hear slowed-down pronunciation.",
  designed: [
    "Differentiated chat bubbles and message states",
    "Typing and audio feedback to make AI feel responsive",
    "Translation controls",
    "Character-set support such as romaji and hiragana",
    "Instructional cards and correction states",
    "Prototypes and documentation for developer handoff",
  ],
  testingHeadline: "Where the lesson experience broke down",
  testingBody:
    "Through guerrilla testing and recorded sessions, I found a recurring issue: users often believed they were saying the right word, but still received errors. After repeated failed attempts, frustration increased and lesson drop-off rose sharply. Correction alone was not enough support.",
  testingTakeaway:
    "Users needed help recovering from mistakes, not just being told they were wrong.",
  image: "/images/work/kaizen-languages/mockup-lesson-chat.png",
  imageAlt:
    "Kaizen Languages AI chat lesson showing conversation bubbles and correction states.",
};

export const kaizenSuggestion = {
  label: "07 Design decision",
  headline: "Helping users recover when pronunciation failed",
  body: "To reduce frustration, I introduced Suggestion, a support card that broke pronunciation into simpler syllables and allowed users to hear the word more slowly. The goal was to preserve challenge while giving users a way through moments of failure. The design was triggered after repeated errors, directly inside the lesson flow.",
  why: [
    "Reduced dead ends in the lesson",
    "Gave users a clearer path to success",
    "Supported confidence without removing learning effort",
    "Kept help contextual rather than hidden elsewhere",
  ],
  result:
    "Suggestion gave learners a clearer recovery path when pronunciation failed, without removing the learning challenge.",
  image: "/images/work/kaizen-languages/mockup-suggestion.png",
  imageAlt:
    "Kaizen Languages Suggestion card helping users recover from pronunciation errors.",
};

export const kaizenIteration = {
  label: "08 Iteration",
  headline: "From static lessons to interactive learning loops",
  before: {
    title: "Version 5",
    body: "Lessons felt more static, with limited interaction states, weaker recovery moments and less guidance when learners became stuck.",
  },
  after: {
    title: "Version 6",
    body: "Version 6 introduced AI typing states, clearer options, drawer cards, grammar prompts and more supportive recovery moments, making the experience feel more responsive and easier to continue.",
  },
  result:
    "Conversion rose from 1.6% in Version 5 to 2.7% in Version 6, a roughly 70% uplift, with Version 7 later reaching 3.8%.",
};

export const kaizenStrategy = {
  label: "09 Product strategy",
  headline: "Why I prioritised beginner confidence over more advanced content",
  body: "A key strategic moment in the project was challenging the initial direction from the CEO and CTO. The business wanted to add more intermediate and expert-level lessons to increase revenue and reduce churn. But research suggested that our strongest opportunity was not simply adding more content.",
  body2:
    "Most of our audience was still at the novice or beginner stage. Before asking users to progress into harder lessons, they needed a stronger foundation in the writing system itself. I proposed shifting focus towards Hiragana and Katakana, creating a feature that helped beginners learn character recognition, stroke order and recall through guided interaction.",
  body3:
    "This moved the product strategy from “add more lessons” to “strengthen the learning foundation”.",
  points: [
    "Challenged the assumption that more advanced content would reduce churn",
    "Used research to identify beginners as the higher-impact audience",
    "Proposed a foundational writing feature focused on Hiragana and Katakana",
    "Positioned Kanji as a later progression once the learning model was validated",
    "Connected beginner confidence to long-term retention and subscription value",
  ],
  decision: "Prioritise foundational confidence before advanced progression.",
};

export const kaizenWriting = {
  label: "10 Writing system",
  headline: "Translating a physical learning method into a digital experience",
  body: "To design the writing feature, I first needed to understand how Japanese characters are traditionally learned. I studied Genki and beginner learning methods to understand how Hiragana and Katakana are introduced through character groups, repetition, stroke order and recall.",
  body2:
    "The goal was not simply to show users a character. It was to help them understand how each character is formed, practise the movement and then recall it later without support. I broke the learning journey into character sets, starting with the first Hiragana group: A, I, U, E, O.",
  learningModel: [
    "Introduce the character visually",
    "Show how the character is written through animated stroke order",
    "Let the user practise with a dashed guide",
    "Reduce guidance by removing the dashed line",
    "Increase difficulty by removing start and end markers",
    "Test recall through a short quiz",
    "Reward completion to reinforce progress",
  ],
  interaction:
    "Each stroke used a green start point and a red end point to guide the user. The dashed line showed the correct stroke path at the easiest level. As the user progressed, the help was gradually removed so they could build confidence and memory.",
  levels: [
    {
      title: "Level 1",
      copy: "Dashed line, green start point and red end point are visible.",
    },
    {
      title: "Level 2",
      copy: "Dashed line is removed. Only the green and red points remain.",
    },
    {
      title: "Level 3",
      copy: "All guidance is removed and the user has to recall the character independently.",
    },
  ],
  quiz:
    "At the end of each character set, users completed a short quiz combining characters they had learned. For example, after learning A, I, U, E, O, users were shown AO, meaning blue in Japanese — helping users feel that the writing exercise had practical value beyond isolated character practice.",
  collaboration:
    "I worked closely with language specialists to define the character sets, pronunciation and quiz logic. I also collaborated with developers to understand the technical constraints of stroke recognition, including the acceptable drawing area, stroke size and preventing users from completing the interaction by drawing outside the required path.",
  result:
    "In testing, users were highly engaged with the writing mechanic and were able to recall the majority of characters during the final quiz.",
  flowLabel: "Learning sequence planning",
  characterImage: "/images/work/kaizen-languages/writing-character-a.png",
  characterAlt:
    "Kaizen Languages writing screen showing character tracing with stroke guidance.",
  heroImage: "/images/work/kaizen-languages/mockup-writing-hero.png",
  heroAlt:
    "Kaizen Languages writing feature showing Hiragana and Katakana practice screens.",
  showcaseImage: "/images/work/kaizen-languages/mockup-writing-kana.png",
  showcaseAlt:
    "Kaizen Languages Hiragana writing flow showing character sets, stroke practice and recall quiz.",
  showcaseBackground: "#0D47A1",
};

export const kaizenGamification = {
  label: "11 Gamification",
  headline: "Designing motivation through behavioural psychology",
  body: "To improve retention, I explored how successful learning products sustain engagement over time. Through competitor analysis, particularly studying Duolingo, it became clear that gamification is not just a feature. It is a behavioural system.",
  why: [
    "Reward loops reinforced repeat actions",
    "Progress visibility created achievement and momentum",
    "Loss aversion encouraged consistency through streaks",
    "Goal-setting mechanics increased commitment over time",
  ],
  approach:
    "I introduced a gamified system designed to support daily learning behaviour, including streak mechanics, reward structures, progress markers and future-facing ideas such as streak freezes, repairs and leaderboards.",
  visualSystem: [
    "Lightning bolts represented energy, momentum and streak continuity",
    "Stars acted as immediate rewards for lesson completion",
    "Trophies signalled achievement and future leaderboard potential",
  ],
  writingConnection: [
    "Difficulty increased as guidance was removed",
    "Quizzes reinforced recall at the end of each character set",
    "Rewards helped users feel progress after completing a learning loop",
    "The mechanic supported both motivation and memory",
  ],
  video: "/videos/work/kaizen-languages/gamification.mp4",
  phoneFrame: "/images/work/kaizen-languages/iphone-white-bezel.png",
  videoAlt:
    "Screen recording of the Kaizen Languages gamification experience showing streaks, rewards and progress.",
};

export const kaizenRetention = {
  label: "16 Retention",
  headline: "Turning first-time use into repeat behaviour",
  body: "Once the core lesson experience improved, the next challenge was retention. I looked at how learning products create momentum and studied gamified patterns used by competitors. This led to the introduction of streaks and reward systems that encouraged daily return behaviour.",
  results: [
    "Retention increased by over 35% after introducing streaks",
    "Kaizen achieved 40% Day 1 retention versus an education-tech average of 14.5%",
    "Kaizen achieved 22% Week 1 retention versus an average of 4.6%",
  ],
  image: "/images/work/kaizen-languages/final-img.jpg",
  imageAlt:
    "Isometric collage of Kaizen Languages app screens showing lessons, progress, grammar exercises and rewards.",
};

export const kaizenConversion = {
  label: "12 Conversion",
  sectionHeadline: {
    line1: "Conversion and subscription",
    line2: "experiments",
  },
  freeLessons: {
    headline: "Balancing user value with subscription conversion",
    body: "I used analytics and A/B testing to understand how lesson access influenced subscription behaviour. One experiment tested whether offering 2 or 3 free lessons per day led to stronger premium conversion. The data showed that limiting access to 2 free lessons increased subscription conversion from 1.15% to 1.3%, resulting in a 13% increase in premium customers.",
    point:
      "This was not about adding friction for the sake of conversion. It was about finding the right balance between giving users enough value to understand the product and creating a clear reason to subscribe.",
    result: "+13% increase in premium customers.",
    image: "/images/work/kaizen-languages/mockup-free-lessons.png",
    imageAlt:
      "Kaizen Languages free daily lessons limit screen encouraging subscription.",
  },
  paywall: {
    headline: "Small hierarchy changes created measurable subscription uplift",
    body: "Another experiment focused on the subscription screen, specifically the placement of the Most Popular label. By testing which plan was framed as the recommended option, the team found that moving the label increased 6-month subscriptions by more than 20%. It showed that not every gain requires a major redesign. Sometimes clearer framing changes decision-making.",
    result: "More than 20% increase in 6-month subscriptions.",
    image: "/images/work/kaizen-languages/mockup-paywall-ab.png",
    imageAlt:
      "A/B test comparison of Kaizen Languages paywall Most Popular label placement.",
  },
  onboarding: {
    headline: "Reducing sign-up friction through social login",
    body: "I also pushed for lower-friction sign-up patterns, including social sign-in. This was initially debated with stakeholders, but the rationale was clear: fewer fields and fewer decisions reduce friction at the point of entry.",
    results: [
      "Sign-ups increased by up to 40%",
      "Subscription rates increased by 20%",
      "Social links on app performed 8.5% better for conversion than web",
    ],
  },
};

export const kaizenProof = {
  label: "Proof",
  headline: "What changed the product direction",
  intro:
    "Research, moderated testing and product analytics challenged the assumption that more advanced content alone would improve retention. The strongest gains came from recovery design, beginner foundations and small, measurable experiments.",
  cards: [
    {
      title: "Completion improved through character control",
      copy:
        "Giving learners the option to switch between Romaji, Hiragana and Kanji gave them more control over difficulty and increased lesson completion by 25%.",
    },
    {
      title: "Writing validated active learning",
      copy:
        "The writing feature was shaped around stroke order, repetition and recall, then validated with a 62% NPS, 12% above average.",
    },
    {
      title: "Small pricing changes improved conversion",
      copy:
        "A/B testing showed that moving the ‘most popular’ label to the 6 month plan increased 6 month subscribers by more than 20%.",
    },
  ],
  closing:
    "The product direction shifted from adding more content to designing the confidence loops that helped learners keep going.",
};

export const kaizenImpact = {
  label: "13 Impact",
  headline: "Impact at a glance",
  intro:
    "The writing feature became one of the strongest indicators that beginner-focused learning could create deeper engagement. It showed that users valued active practice, guided progression and the feeling of genuine learning achievement.",
  analyticsNote:
    "Alongside moderated testing, I used Firebase funnels, Hotjar and A/B testing to understand where learners dropped off, which lesson changes improved completion, and how pricing presentation affected subscription behaviour.",
  metrics: [
    {
      metric: "+25%",
      title: "Lesson completions",
      copy: "After introducing Suggestion. Contextual pronunciation support helped users recover from errors without removing the learning challenge.",
    },
    {
      metric: "1.6% → 2.7%",
      title: "Conversion improvement",
      copy: "Version 5 to Version 6, with Version 7 later reaching 3.8%.",
    },
    {
      metric: "+13%",
      title: "Premium customers",
      copy: "By reducing free lessons from 3 to 2 per day.",
    },
    {
      metric: "+20%",
      title: "6-month subscriptions",
      copy: "Through paywall A/B testing and Most Popular label placement.",
    },
    {
      metric: "Up to +40%",
      title: "Sign-ups",
      copy: "Through social login improvements.",
    },
    {
      metric: "+35%",
      title: "Retention uplift",
      copy: "Through streaks and gamification.",
    },
    {
      metric: "40% / 22%",
      title: "Day 1 and Week 1 retention",
      copy: "Versus education-tech benchmarks of 14.5% and 4.6%.",
    },
    {
      metric: "62% NPS",
      title: "Writing feature",
      copy: "12% above average, with strong engagement in testing.",
    },
  ],
};

export const kaizenDecisions = {
  label: "14 Decisions",
  headline: "The decisions that shaped the product",
  items: [
    {
      title: "Confidence over correction",
      copy: "The lesson experience needed to teach without making users feel punished. Suggestion helped users recover from mistakes while keeping the learning challenge intact.",
      icon: "heart" as const,
    },
    {
      title: "Beginner foundations over advanced content",
      copy: "Rather than prioritising more intermediate and expert-level lessons, I proposed strengthening the beginner learning foundation through Hiragana and Katakana. This better matched the needs of the core audience and supported long-term retention.",
      icon: "layers" as const,
    },
    {
      title: "Retention as a product system",
      copy: "Gamification was not treated as decoration. It became part of the behavioural system that helped users build consistency and return over time.",
      icon: "zap" as const,
    },
    {
      title: "Commercial optimisation without damaging value",
      copy: "Subscription experiments were designed to find the right balance between product value and conversion, rather than simply locking content away.",
      icon: "scale" as const,
    },
    {
      title: "Writing as deeper engagement",
      copy: "The writing system expanded the product beyond conversation and created a more active, embodied way to practise language.",
      icon: "pencil" as const,
    },
  ],
};

export const kaizenReflection = {
  label: "15 Reflection",
  headline: "What this project taught me",
  lead: "Kaizen showed me that successful learning products are not simply educational systems. They are behavioural systems.",
  body: "Retention was driven less by content volume and more by confidence, emotional reinforcement, progress visibility and habit sustainability.",
  shift:
    "The project shifted the design challenge from “How do we teach language?” to “How do we help people continue learning?”",
  balance: [
    "Structure with flexibility",
    "Guidance with experimentation",
    "Progression with emotional motivation",
    "Learning outcomes with commercial sustainability",
    "Business goals with the needs of the core learner audience",
  ],
  closing:
    "This project shifted the product from simply adding more content to designing the confidence loops that helped learners keep going. The biggest improvement came from combining research, analytics and small product experiments to reduce friction, support recovery and make progress feel more achievable.",
  animationImage: "/images/work/kaizen-languages/jpn-lesson-1-animation.gif",
  animationAlt:
    "Animated Kaizen Languages Japanese lesson showing greeting interactions and learner feedback.",
};
