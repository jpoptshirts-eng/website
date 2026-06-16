export const KAIZEN_OVERVIEW_HREF = "/work/kaizen-languages";

export type KaizenFeatureSlug =
  | "visual-direction"
  | "ai-lessons"
  | "writing-system"
  | "practice"
  | "retention"
  | "subscription";

export interface KaizenFeatureMeta {
  number: string;
  slug: KaizenFeatureSlug;
  shortTitle: string;
  title: string;
  summary: string;
  problem: string;
  contribution: string;
  outcome: string;
  href: string;
  heroImage: string;
  heroImageAlt: string;
  category: string;
}

export const kaizenFeatures: readonly KaizenFeatureMeta[] = [
  {
    number: "01",
    slug: "visual-direction",
    shortTitle: "Visual direction",
    title: "Defining how an AI tutor should feel",
    summary:
      "I explored four contrasting art directions and tested how photography, illustration and hybrid approaches affected trust in an unfamiliar AI product.",
    problem:
      "Kaizen needed a visual language that felt credible before learners had experienced conversational AI.",
    contribution:
      "I compared four routes, tested them with learners and adapted the strongest evidence to an early-stage budget.",
    outcome: "An evidence-led recommendation adapted to early-stage budget constraints.",
    href: "/work/kaizen-languages/visual-direction",
    heroImage: "/images/work/kaizen-languages/visual-direction.png",
    heroImageAlt:
      "Reconstructed comparison of four Kaizen Languages visual directions across iPhone mockups.",
    category: "Product direction",
  },
  {
    number: "02",
    slug: "ai-lessons",
    shortTitle: "AI conversation lessons",
    title: "Designing conversation as a language lesson",
    summary:
      "I developed the core AI conversation model, then iterated the lesson experience using observed frustration, funnel behaviour and repeated product versions.",
    problem:
      "A conventional messaging interface could not provide the structure, support and feedback required for a language lesson.",
    contribution:
      "I defined interaction states, iterated through product versions and introduced Suggestion to help learners recover from failure.",
    outcome: "Lesson completions increased by 25% after introducing Suggestions.",
    href: "/work/kaizen-languages/ai-lessons",
    heroImage: "/images/work/kaizen-languages/mockup-lesson-chat.png",
    heroImageAlt:
      "Kaizen Languages AI chat lesson showing conversation bubbles and correction states.",
    category: "Core product",
  },
  {
    number: "03",
    slug: "writing-system",
    shortTitle: "Japanese writing system",
    title: "Helping complete beginners learn Japanese writing",
    summary:
      "I challenged the proposed advanced-content roadmap and designed a progressive system for learning hiragana and katakana.",
    problem:
      "Novice learners needed a stronger writing foundation before more advanced lesson content would create lasting value.",
    contribution:
      "I mapped guided stroke practice, progressive support removal and recall testing into one writing journey.",
    outcome: "Created a clearer progression route for the product’s novice audience.",
    href: "/work/kaizen-languages/writing-system",
    heroImage: "/images/work/kaizen-languages/mockup-writing-hero.png",
    heroImageAlt:
      "Kaizen Languages writing feature showing Hiragana and Katakana practice screens.",
    category: "Learning system",
  },
  {
    number: "04",
    slug: "practice",
    shortTitle: "Practice and flashcards",
    title: "Building a personalised practice system",
    summary:
      "I designed practice tools that helped learners revisit vocabulary, recognise weak areas and continue learning outside structured lessons.",
    problem:
      "Lesson completion alone did not guarantee retention of vocabulary and grammar.",
    contribution:
      "I connected lessons, revision, audio recall and recommendations into one practice layer.",
    outcome:
      "Connected lessons, revision and confidence-building into one learning system.",
    href: "/work/kaizen-languages/practice",
    heroImage: "/images/work/kaizen-languages/practice/exercises-hub.png",
    heroImageAlt:
      "Kaizen Languages exercises hub showing progress, words, grammar and offline download prompts.",
    category: "Retention support",
  },
  {
    number: "05",
    slug: "retention",
    shortTitle: "Gamification and retention",
    title: "Designing habits without punishing learners",
    summary:
      "I introduced streaks, freezes, repairs and progress feedback to encourage regular learning while preserving learner confidence.",
    problem:
      "The product needed repeat behaviour without making missed days feel punitive.",
    contribution:
      "I designed streak mechanics, recovery tools and progress feedback as one behavioural system.",
    outcome: "Retention increased by 35%, with 40% day-one and 22% week-one retention.",
    href: "/work/kaizen-languages/retention",
    heroImage: "/images/work/kaizen-languages/iphone-gamified-hero.png",
    heroImageAlt:
      "Kaizen Languages gamified lessons screen showing progress, words, grammar and premium prompts.",
    category: "Retention",
  },
  {
    number: "06",
    slug: "subscription",
    shortTitle: "Subscription and conversion",
    title: "Improving premium conversion through experimentation",
    summary:
      "I tested free-access limits, subscription hierarchy and pricing emphasis to balance customer value with business sustainability.",
    problem:
      "Kaizen needed enough free value for learners to experience progress while creating a sustainable reason to subscribe.",
    contribution:
      "I ran pricing and access experiments, then connected product changes to commercial dashboards.",
    outcome:
      "Approximately 13% relative conversion uplift and more than 20% growth in six-month-plan selection.",
    href: "/work/kaizen-languages/subscription",
    heroImage: "/images/work/kaizen-languages/mockup-paywall-ab.png",
    heroImageAlt:
      "A/B test comparison of Kaizen Languages paywall Most Popular label placement.",
    category: "Commercial",
  },
] as const;

export function getKaizenFeature(slug: string) {
  return kaizenFeatures.find((feature) => feature.slug === slug);
}

export function getKaizenFeatureNav(slug: KaizenFeatureSlug) {
  const index = kaizenFeatures.findIndex((feature) => feature.slug === slug);
  const current = kaizenFeatures[index];
  const previous = index > 0 ? kaizenFeatures[index - 1] : null;
  const next = index < kaizenFeatures.length - 1 ? kaizenFeatures[index + 1] : null;

  return {
    index,
    current,
    previous,
    next,
    position: `${String(index + 1).padStart(2, "0")} of 06`,
  };
}
