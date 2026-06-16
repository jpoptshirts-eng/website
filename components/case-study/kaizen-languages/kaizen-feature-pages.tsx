import type { ComponentType } from "react";
import type { KaizenFeatureSlug } from "@/lib/kaizen-features";
import KaizenAiLessonsFeature from "./features/KaizenAiLessonsFeature";
import KaizenPracticeFeature from "./features/KaizenPracticeFeature";
import KaizenRetentionFeature from "./features/KaizenRetentionFeature";
import KaizenSubscriptionFeature from "./features/KaizenSubscriptionFeature";
import KaizenVisualDirectionFeature from "./features/KaizenVisualDirectionFeature";
import KaizenWritingSystemFeature from "./features/KaizenWritingSystemFeature";

export const kaizenFeatureComponents: Record<
  KaizenFeatureSlug,
  ComponentType
> = {
  "visual-direction": KaizenVisualDirectionFeature,
  "ai-lessons": KaizenAiLessonsFeature,
  "writing-system": KaizenWritingSystemFeature,
  practice: KaizenPracticeFeature,
  retention: KaizenRetentionFeature,
  subscription: KaizenSubscriptionFeature,
};
