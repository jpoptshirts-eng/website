export type OnboardingScreen = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type OnboardingStageData = {
  id: string;
  title: string;
  description: string;
  screens: OnboardingScreen[];
};

const ONBOARDING_BASE = "/images/work/primarybid/onboarding";
const SCREEN_SIZE = { width: 1269, height: 2265 } as const;

function screen(filename: string, alt: string): OnboardingScreen {
  return {
    src: `${ONBOARDING_BASE}/${filename}`,
    alt,
    ...SCREEN_SIZE,
  };
}

export const primaryBidOnboardingCarousel = {
  label: "17 Onboarding journey",
  headline: "A staged journey from registration to investment readiness",
  intro:
    "The onboarding journey progressively collected the personal, eligibility and broker information customers needed before they could invest. Explore each stage of the experience below.",
  stages: [
    {
      id: "secure-access",
      title: "Create secure access",
      description:
        "Customers began with their email address and verified access using a six-digit code, creating a focused entry point before personal information was requested.",
      screens: [
        screen(
          "01-email-entry.png",
          "PrimaryBid sign-up screen asking the customer to enter their email address.",
        ),
        screen(
          "02-code-entry.png",
          "PrimaryBid verification screen with an empty six-digit code entry field.",
        ),
        screen(
          "03-code-complete.png",
          "PrimaryBid verification screen with a completed six-digit code.",
        ),
      ],
    },
    {
      id: "explain-requirements",
      title: "Explain what is required",
      description:
        "Before collecting regulated information, the journey explained which personal details were needed, why they were required and that customers could complete them later where permitted.",
      screens: [
        screen(
          "04-personal-details-intro.png",
          "PrimaryBid screen introducing the personal details customers would need to add before investing.",
        ),
      ],
    },
    {
      id: "establish-identity",
      title: "Establish identity",
      description:
        "Identity details were separated into short, focused steps rather than combined into one dense registration form.",
      screens: [
        screen(
          "05-full-name.png",
          "PrimaryBid screen asking the customer to enter their full name.",
        ),
        screen(
          "06-date-of-birth.png",
          "PrimaryBid screen asking the customer to enter their date of birth.",
        ),
      ],
    },
    {
      id: "confirm-address",
      title: "Confirm the customer’s address",
      description:
        "A postcode-led lookup reduced manual entry and helped customers select a verified address, while retaining access to a manual route when needed.",
      screens: [
        screen(
          "07-postcode-entry.png",
          "PrimaryBid address screen asking the customer to enter their postcode.",
        ),
        screen(
          "08-address-selection.png",
          "PrimaryBid address-selection screen listing matching addresses.",
        ),
      ],
    },
    {
      id: "contact-eligibility",
      title: "Confirm contact and eligibility",
      description:
        "The phone-number step included the relevant eligibility declaration, keeping regulatory confirmation close to the information and action it affected.",
      screens: [
        screen(
          "09-phone-entry.png",
          "PrimaryBid phone-number screen with an eligibility declaration checkbox.",
        ),
        screen(
          "10-phone-complete.png",
          "PrimaryBid phone-number screen with a completed number and confirmed eligibility.",
        ),
      ],
    },
    {
      id: "nominated-broker",
      title: "Connect a nominated broker",
      description:
        "Broker selection and trading-account details were presented as a connected sub-journey because investments would be transferred to the customer’s nominated account.",
      screens: [
        screen(
          "11-broker-details-intro.png",
          "PrimaryBid screen introducing the broker details required before investing.",
        ),
        screen(
          "13-broker-selection.png",
          "PrimaryBid broker-selection screen listing available brokers.",
        ),
        screen(
          "14-trading-account.png",
          "PrimaryBid screen asking the customer to enter their trading account number.",
        ),
      ],
    },
    {
      id: "investment-readiness",
      title: "Complete investment readiness",
      description:
        "The final stage completed the customer’s regulated profile and moved the journey into verification before they could participate in an offer.",
      screens: [
        screen(
          "15-nationality.png",
          "PrimaryBid nationality-selection screen with a list of countries.",
        ),
        screen(
          "16-national-insurance.png",
          "PrimaryBid screen asking the customer to enter their National Insurance number.",
        ),
        screen(
          "12-checking-details.png",
          "PrimaryBid verification screen showing a checking-details loading state.",
        ),
      ],
    },
  ] satisfies OnboardingStageData[],
} as const;

export const PRIMARY_BID_ONBOARDING_STAGE_COUNT =
  primaryBidOnboardingCarousel.stages.length;
