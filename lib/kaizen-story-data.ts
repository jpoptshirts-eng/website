import type { KaizenFeatureSlug } from "@/lib/kaizen-features";

export interface KaizenAtAGlance {
  problem: string;
  keyInsight: string;
  decision: string;
  result: string;
}

export interface KaizenStoryTransition {
  text: string;
  nextHref: string;
  nextLabel: string;
}

export interface KaizenDecisionTradeoff {
  alternative: string;
  chosen: string;
  evidence: string;
  consequence: string;
}

export interface KaizenResultsLearning {
  headline: string;
  body: string[];
}

export const kaizenStoryAtAGlance: Record<KaizenFeatureSlug, KaizenAtAGlance> = {
  "visual-direction": {
    problem:
      "Conversational AI was unfamiliar, and the product needed to feel trustworthy, approachable and human before the first lesson began.",
    keyInsight:
      "Learners responded most strongly to photography because real people made the experience feel more authentic and tutor-like.",
    decision:
      "Retain the warmth learners valued, but translate it into a scalable illustration system the startup could afford to maintain.",
    result:
      "A distinctive visual direction that balanced customer trust, product personality and early-stage production constraints.",
  },
  "ai-lessons": {
    problem:
      "The conversation interface could identify incorrect responses, but repeated pronunciation failures created frustration and lesson abandonment.",
    keyInsight:
      "Learners did not only need correction. They needed contextual support that explained why an answer failed and how to continue.",
    decision:
      "Design the conversation as a structured learning system and introduce Suggestion as an in-context recovery mechanism.",
    result:
      "Suggestion increased lesson completion by 25% by helping learners recover without removing the learning challenge.",
  },
  "writing-system": {
    problem:
      "The proposed roadmap focused on more intermediate and advanced lessons, while most of the audience remained novice or beginner.",
    keyInsight:
      "Learners repeatedly described Japanese writing as difficult to learn online and valued tracing, repetition and structured character practice.",
    decision:
      "Prioritise Hiragana and Katakana foundations before expanding advanced content, using progressive guidance from tracing to independent recall.",
    result:
      "The writing experience achieved an NPS of 62 in testing, with strong character recall during the final quiz.",
  },
  practice: {
    problem:
      "Learners could complete lessons but had no clear way to identify and revisit the vocabulary or grammar that needed further practice.",
    keyInsight:
      "Revision was more useful when it reflected material already encountered and showed where confidence was weakest.",
    decision:
      "Connect lesson history, confidence signals, vocabulary and grammar into a personalised practice system rather than a generic flashcard library.",
    result:
      "Established a connected practice model that turned completed lesson content into structured revision and a foundation for future personalisation.",
  },
  retention: {
    problem:
      "Learners needed a stronger reason to return consistently and turn initial lesson interest into an ongoing learning habit.",
    keyInsight:
      "Visible continuity and progress could encourage repeat practice, but overly punitive mechanics risked damaging learner confidence.",
    decision:
      "Introduce shipped streak and reward mechanics while exploring recovery concepts such as freezes and repairs for a future phase.",
    result:
      "Retention increased by more than 35% following the introduction of the shipped gamification mechanics.",
  },
  subscription: {
    problem:
      "The product needed to let new learners experience enough value to understand Kaizen while maintaining a clear reason to subscribe.",
    keyInsight:
      "Conversion was sensitive not only to the amount of free access, but also to how subscription choices were framed and prioritised.",
    decision:
      "Test lesson limits and paywall hierarchy as focused experiments rather than redesigning the entire subscription journey.",
    result:
      "Reducing daily free lessons from three to two produced an approximately 13% relative premium-conversion uplift, while repositioning the recommended plan increased six-month subscriptions by more than 20%.",
  },
};

export const kaizenStoryTransitions: Record<
  KaizenFeatureSlug,
  KaizenStoryTransition | null
> = {
  "visual-direction": {
    text: "Establishing a trustworthy visual identity helped learners approach the product. The next challenge was making the AI conversation itself feel clear, supportive and recoverable.",
    nextHref: "/work/kaizen-languages/ai-lessons",
    nextLabel: "AI conversation lessons",
  },
  "ai-lessons": {
    text: "Improving error recovery helped learners progress through conversation lessons, but research revealed a more foundational barrier: many beginners lacked confidence with Japanese writing.",
    nextHref: "/work/kaizen-languages/writing-system",
    nextLabel: "Japanese writing system",
  },
  "writing-system": {
    text: "Guided writing helped learners acquire new characters, but they also needed a way to revisit vocabulary and grammar after a lesson ended.",
    nextHref: "/work/kaizen-languages/practice",
    nextLabel: "Practice and flashcards",
  },
  practice: {
    text: "Personalised practice supported progression between lessons. The next challenge was creating a repeatable habit that encouraged learners to return consistently.",
    nextHref: "/work/kaizen-languages/retention",
    nextLabel: "Gamification and retention",
  },
  retention: {
    text: "Stronger learning habits increased continued use, but the product also needed a sustainable way to convert that value into subscription growth.",
    nextHref: "/work/kaizen-languages/subscription",
    nextLabel: "Subscription and conversion",
  },
  subscription: null,
};

export const kaizenStoryResultsLearning: Record<
  KaizenFeatureSlug,
  KaizenResultsLearning
> = {
  "visual-direction": {
    headline: "Trust before the first lesson",
    body: [
      "Photography received the strongest response in testing, but the startup could not sustain that production model at scale.",
      "The illustration system retained warmth and human connection within a direction the business could maintain — evidence-led design adapted to real constraints.",
    ],
  },
  "ai-lessons": {
    headline: "Failure is not the same as unrecoverable difficulty",
    body: [
      "Suggestion worked because it distinguished between failure and recoverable difficulty. The lesson remained challenging, but learners had a clearer route forward when confidence began to break down.",
      "The conversation model became the interaction foundation for later product areas, with measurable improvement tied specifically to in-lesson recovery.",
    ],
  },
  "writing-system": {
    headline: "Foundations before advanced progression",
    body: [
      "The strategic value was not simply adding handwriting. The writing system strengthened the beginner foundation, giving learners a structured path from recognition to active recall.",
      "Testing showed strong engagement with the mechanic and solid recall in the final quiz, validating the decision to prioritise foundations over more advanced lesson content.",
    ],
  },
  practice: {
    headline: "Revision connected to real lesson history",
    body: [
      "The practice layer connected lesson content with independent revision, giving learners a clearer route back into difficult vocabulary and grammar.",
      "Future measurement should focus on repeat practice usage, return to lesson behaviour and whether revision improves previously difficult material.",
    ],
  },
  retention: {
    headline: "Progress visibility without punishment",
    body: [
      "Gamification was effective when it made genuine learning progress visible. The objective was not to reward activity for its own sake, but to help learners recognise continuity and maintain momentum.",
      "The measured uplift came from shipped streak mechanics. Explored recovery concepts such as freezes and repairs informed the direction without being attributed to the result.",
    ],
  },
  subscription: {
    headline: "Focused experiments over full redesign",
    body: [
      "Commercial optimisation did not require withholding all value or redesigning the complete journey. Focused changes to access and choice architecture created a clearer path from experiencing the product to understanding why a subscription was worthwhile.",
      "The two verified experiments showed that conversion responded to both how much was free and how plans were framed — product thinking applied to commercial decisions.",
    ],
  },
};
