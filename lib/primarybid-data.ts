export const primaryBidSubnav = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "research", label: "Demand" },
  { id: "archetypes", label: "Archetypes" },
  { id: "verbatims", label: "Verbatims" },
  { id: "observing", label: "Observations" },
  { id: "cross-channel", label: "Cross-channel" },
  { id: "principles", label: "Principles" },
  { id: "structuring", label: "Structure" },
  { id: "responsive", label: "Responsive" },
  { id: "urgency", label: "Urgency" },
  { id: "learn", label: "Learn" },
  { id: "payment", label: "Payment" },
  { id: "broker", label: "Broker" },
  { id: "orders", label: "Orders" },
  { id: "recovery", label: "Recovery" },
  { id: "components", label: "Components" },
  { id: "engineering", label: "Release" },
  { id: "mentoring", label: "Mentoring" },
  { id: "outcome", label: "Outcome" },
] as const;

export const primaryBidHero = {
  label: "PrimaryBid",
  title: "Designing a cross-channel investment platform",
  subcopy:
    "Creating a responsive transactional experience that helped retail investors research opportunities, apply for offers and manage their investments across web and mobile.",
  meta: [
    { label: "Role", value: "Senior Product Designer" },
    { label: "Timeline", value: "16 months" },
    { label: "Platforms", value: "Transactional web and responsive mobile web" },
    {
      label: "Focus",
      value: "Product strategy, regulated UX and platform design",
    },
  ],
  image: "/images/work/primarybid/hero-live-offers-mobiles.png",
  imageAlt:
    "Three iPhone screens showing PrimaryBid live offers, offer detail and key dates across mobile web.",
};

export const primaryBidMyRole = {
  title: "My role",
  avatar: "/images/jacinto-hero.png",
  avatarAlt: "Jacinto De Matos",
  body: "As Senior Product Designer, I worked across discovery, product definition, interaction design and delivery for PrimaryBid’s transactional web platform.",
  body2:
    "I collaborated with product, research, engineering, compliance and commercial teams to understand investor behaviour, define the cross-channel experience and design responsive journeys spanning onboarding, offer discovery, applications, payments, orders and account management.",
  body3:
    "I also developed reusable components for partner-led experiences, supported implementation through staged releases and mentored designers working across the wider product ecosystem.",
  bullets: [
    "Senior Product Designer",
    "16 months",
    "Product strategy and discovery",
    "User research and synthesis",
    "Responsive UX and UI",
    "Prototyping and validation",
    "Regulated transaction design",
    "Design systems and reusable components",
    "Cross-functional delivery",
    "Designer mentoring",
  ],
};

export const primaryBidChallenge = {
  label: "The challenge",
  headline: "Investing decisions were happening across disconnected experiences",
  body: [
    "PrimaryBid enabled retail investors to access public-market opportunities, but the experience had become increasingly app-led.",
    "Research showed that mobile worked well for immediacy and time-sensitive transactions. However, many investors preferred desktop when reading offer documents, reviewing financial information, comparing opportunities and making considered decisions.",
    "Some customers also found the mobile-only experience difficult because of accessibility needs, small-screen limitations, technical issues or a lack of access to a suitable device.",
    "The opportunity was not simply to recreate the app on a larger screen. It was to create a connected experience that supported research, decision-making and transactions across devices.",
  ],
  image: "/images/work/primarybid/t-web-splash.jpg",
  imageAlt:
    "Early PrimaryBid transactional web product vision showing onboarding, live offers and order history.",
  imageCaption:
    "Early product vision for PrimaryBid’s transactional web experience",
};

export const primaryBidOpportunity = {
  label: "The product opportunity",
  insight:
    "Mobile supported immediacy. Web supported deeper research, comparison and considered investment decisions.",
  body: "Rather than treating web and mobile as competing products, I helped define how each channel could support a different moment in the same investment journey.",
  journey: ["Discover", "Research", "Compare", "Apply", "Track"],
};

export const primaryBidValidatingDemand = {
  label: "Validating demand",
  headline: "Validating demand before committing to the build",
  body: [
    "Before defining the product, the team tested whether there was meaningful demand for transactional web access among existing and previously active PrimaryBid customers.",
    "The experiment gave us enough evidence to continue, while still treating T-Web as a hypothesis that needed further behavioural research and beta validation.",
  ],
  metrics: [
    { value: "84,000", label: "Customers contacted" },
    { value: "16,500", label: "Opened the invitation" },
    { value: "~1,100", label: "Interacted with the campaign" },
    { value: "866", label: "Registered for the T-Web beta" },
    {
      value: "105",
      label: "Previously interviewed customers who preferred web access",
    },
  ],
  note: "The beta registration figure demonstrated interest, but it was not treated as proof that the final product had already been validated.",
};

export const primaryBidArchetypes = {
  label: "Understanding different investors",
  headline: "One platform could not serve every investor in the same way",
  intro:
    "Our research identified five investor archetypes with different levels of experience, confidence and investment behaviour.",
  image: "/images/work/primarybid/type-of-investor.jpg",
  imageAlt:
    "Research table showing five PrimaryBid investor archetypes and their relative proportions.",
  archetypes: [
    {
      title: "Super Spenders",
      share: "4% of users",
      copy: "Highly experienced and confident investors who valued depth, speed and access.",
    },
    {
      title: "Caring Family Providers",
      share: "13% of users",
      copy: "Considered investors focused on stability, clarity and long-term outcomes.",
    },
    {
      title: "Future Architects",
      share: "22% of users",
      copy: "Less experienced investors building towards future financial goals.",
    },
    {
      title: "Volatility Tinkerers",
      share: "18% of users",
      copy: "Opportunity-led investors attracted by movement, timing and market activity.",
    },
    {
      title: "Community Thrivers",
      share: "43% of users",
      copy: "The largest group, generally less experienced and more reliant on accessible information and external guidance.",
    },
  ],
  implication:
    "Experienced investors needed depth and efficiency. Less confident investors needed clearer language, stronger guidance and understandable information.",
};

export const primaryBidVerbatims = {
  label: "Customer verbatims",
  headline: "What customers were telling us",
  quotes: [
    {
      text: "I’m trying to log in but it keeps directing me to get the app. I don’t want the app — I just want to log in as normal.",
      avatar: "/images/work/primarybid/verbatim-avatar-1.jpg",
      avatarAlt: "Customer portrait",
    },
    {
      text: "If someone at your company could allow PC-only people to take part in IPOs, you might get a lot more business from older folk like me.",
      avatar: "/images/work/primarybid/verbatim-avatar-2.jpg",
      avatarAlt: "Customer portrait",
    },
    {
      text: "As someone with severe arthritis, it is really impractical to use my phone or iPad to make investments rather than my desktop.",
      avatar: "/images/work/primarybid/verbatim-avatar-3.jpg",
      avatarAlt: "Customer portrait",
    },
    {
      text: "I avoid using a mobile phone for financial transactions, as my desktop is a much more secure environment.",
      avatar: "/images/work/primarybid/verbatim-avatar-4.jpg",
      avatarAlt: "Customer portrait",
    },
  ],
  summary:
    "These comments exposed overlapping problems around access, accessibility, screen size, confidence, security and the effort required to move between PrimaryBid and external banking or research tools.",
  closing:
    "The opportunity was not web versus mobile. It was to let each channel support the behaviour it was best suited to.",
};

export const primaryBidObservingDecisions = {
  label: "Observing investment decisions",
  headline: "Observing the decision-making process",
  body: "We designed a mixed research study combining discovery interviews with observed investment tasks.",
  points: [
    "how investors discovered an offer",
    "what they did before deciding whether to invest",
    "which websites and sources they trusted",
    "how behaviour changed between short-lived offers and longer IPO opportunities",
    "which information had the greatest influence on the final decision",
  ],
  closing:
    "Participants responded to a realistic offer notification and shared their screen while showing how they investigated it. This helped us compare what customers said they did with what they actually did in practice.",
  image: "/images/work/primarybid/dovetail.png",
  imageAlt:
    "Dovetail research board showing customer verbatims and observed investment behaviour.",
  process: [
    "Offer notification",
    "External research",
    "Comparison",
    "Decision",
    "Transaction",
  ],
};

export const primaryBidCrossChannel = {
  label: "Defining the cross-channel role",
  headline: "Giving each channel a clear role",
  mobile: {
    title: "Mobile",
    points: [
      "immediate access",
      "time-sensitive offers",
      "notifications and availability",
      "fast transactions",
      "use away from a desk",
    ],
  },
  web: {
    title: "Transactional web",
    points: [
      "deeper research",
      "long documents and financial information",
      "easier comparison",
      "larger-screen accessibility",
      "considered investment decisions",
    ],
  },
  body: "Rather than reproducing the same experience at a different size, I designed the two channels around the behaviours they supported best.",
  mobileImage: "/images/work/primarybid/iphone-x-mockup.png",
  mobileImageAlt:
    "PrimaryBid live offers screen on iPhone showing time-sensitive offer status.",
};

export const primaryBidPrinciples = {
  label: "Product principles",
  headline: "Principles that guided the platform",
  cards: [
    {
      title: "Clarity before urgency",
      copy: "Time-sensitive opportunities needed to be visible without using manipulative pressure patterns.",
      icon: "eye" as const,
    },
    {
      title: "Research before commitment",
      copy: "Customers needed enough information to understand an opportunity before entering a regulated transaction.",
      icon: "search" as const,
    },
    {
      title: "Consistency across channels",
      copy: "Navigation, terminology and investment information needed to remain recognisable as customers moved between devices.",
      icon: "repeat" as const,
    },
  ],
};

export const primaryBidStructuring = {
  label: "Structuring the platform",
  headline: "Turning research into a connected platform",
  body: "The information architecture was organised around the customer’s investment lifecycle rather than around isolated product features.",
  lifecycle: [
    { title: "Discover", copy: "Browse live opportunities" },
    { title: "Research", copy: "Review the company, offer and supporting information" },
    { title: "Apply", copy: "Choose an amount and confirm eligibility" },
    { title: "Pay", copy: "Select an appropriate payment method" },
    { title: "Track", copy: "Review applications, allocations and previous orders" },
  ],
  architectureImage: "/images/work/primarybid/t-web-info-architecture.png",
  architectureAlt:
    "PrimaryBid transactional web information architecture organised around the investment lifecycle.",
  architectureCaption: "Investment lifecycle information architecture",
  indexImage: "/images/work/primarybid/index-screen.jpg",
  indexAlt:
    "Polished PrimaryBid transactional web interface showing live offers and navigation structure.",
  indexCaption: "Product interpretation of the connected platform structure",
};

export const primaryBidResponsiveOffer = {
  label: "The responsive offer experience",
  headline: "A consistent investment journey across screen sizes",
  body: "The experience was not simply scaled from desktop to mobile. The information hierarchy and navigation adapted to the available space and the customer’s likely context.",
  annotations: [
    {
      title: "Desktop",
      copy: "Persistent navigation supported browsing while keeping offer detail visible.",
      icon: "desktop" as const,
    },
    {
      title: "Tablet",
      copy: "The layout retained depth while allowing customers to review orders and account information in a more portable format.",
      icon: "tablet" as const,
    },
    {
      title: "Mobile",
      copy: "The interface prioritised the active offer, timing, price and primary action, with supporting information revealed progressively.",
      icon: "mobile" as const,
    },
  ],
  primaryImage: "/images/work/primarybid/mweb-and-web.png",
  primaryAlt:
    "PrimaryBid live offer experience shown across laptop and mobile with consistent hierarchy.",
};

export const primaryBidTimeSensitive = {
  label: "Time-sensitive offers",
  headline: "Making urgency visible without creating pressure",
  body: [
    "Some PrimaryBid opportunities were available only briefly. Customers needed to understand when an offer was expected to close without the interface becoming unnecessarily alarming or manipulative.",
    "The live-offer experience surfaced offer status, expected close time, minimum investment, current share price, investment type, access to further information and the primary application action.",
  ],
  principle:
    "Communicate urgency clearly, but keep the customer in control.",
  image: "/images/work/primarybid/ipad-live-offer-detail.png",
  imageAlt:
    "PrimaryBid iPad live offer showing company detail, key dates and apply action.",
  imageCaption: "Time-sensitive offer detail with supporting company information",
};

export const primaryBidLearn = {
  label: "Supporting research",
  headline: "Bringing decision-support content into the experience",
  body: [
    "Research showed that customers frequently left PrimaryBid to understand unfamiliar investment types, assess a company or compare market information.",
    "I explored how educational content could sit closer to the investment decision without turning the transaction journey into a publishing platform.",
    "When the full Learn index was removed from the initial release, I adapted the approach so that individual articles could still be surfaced contextually from relevant offers and product journeys.",
  ],
  principles: [
    {
      title: "Contextual",
      copy: "Show information that relates to the customer’s current task and position in the journey.",
    },
    {
      title: "Simple",
      copy: "Help customers find the information they need without introducing another complex navigation system.",
    },
    {
      title: "Discoverable",
      copy: "Allow customers who want more depth to continue exploring related content.",
    },
  ],
  images: [
    {
      src: "/images/work/primarybid/learn-concept.jpg",
      alt: "Modular PrimaryBid Learn article layout with supporting imagery and structured content blocks.",
      caption: "Modular article system",
    },
    {
      src: "/images/work/primarybid/plaid-flow.png",
      alt: "PrimaryBid application and payment flow showing review, payment method selection and bank confirmation.",
      caption: "Application and payment flow",
    },
    {
      src: "/images/work/primarybid/learn-card.jpg",
      alt: "Educational article surfaced from a PrimaryBid offer detail page.",
      caption: "Contextual content from an offer",
    },
  ],
};

export const primaryBidPayment = {
  label: "Application and payment",
  headline: "Designing confidence into a regulated payment journey",
  body: [
    "The application journey needed to balance commercial speed with regulatory clarity and customer confidence.",
    "Customers reviewed their application, confirmed eligibility and selected between supported payment options before leaving PrimaryBid to complete payment.",
  ],
  image: "/images/work/primarybid/learn-mobile.png",
  imageAlt:
    "PrimaryBid mobile application flow showing review, payment method selection and confirmation steps.",
  process: [
    "Review application",
    "Select payment method",
    "Choose bank",
    "Confirm payment",
  ],
  decisions: [
    "investment details remained visible before payment",
    "regulatory confirmation was required before continuing",
    "Plaid supported instant bank transfer",
    "Worldpay supported debit-card payment",
    "payment providers were named transparently",
    "the primary action remained consistent throughout the flow",
  ],
};

export const primaryBidBroker = {
  label: "Broker confirmation",
  headline: "Closing a critical information gap",
  body: [
    "The existing payment journey did not allow customers to confirm or correct their broker details before completing an application.",
    "Rather than rebuilding the transaction flow, I introduced a confirmation step using patterns and components that already existed.",
    "Customers could review their broker and account number, edit either field where necessary and then continue into the existing payment journey.",
    "I kept broker selection and account-number editing within one connected sequence. Treating them as separate isolated edits would have forced customers backwards and forwards and increased the risk of submitting mismatched information.",
  ],
  tradeoff:
    "Improve confidence at the point of commitment without adding unnecessary engineering complexity.",
  process: [
    "Review application",
    "Confirm broker details",
    "Correct information",
    "Continue to payment",
  ],
  image: "/images/work/primarybid/broker-app-details.png",
  imageAlt:
    "PrimaryBid broker detail fields with editable account information on mobile.",
};

export const primaryBidOrders = {
  label: "Orders and account management",
  headline: "Extending the experience beyond the transaction",
  body: [
    "The investment journey did not end when a payment succeeded. Customers needed to understand the status of applications, review allocations, revisit previous orders and maintain regulated account information.",
    "The platform therefore connected transaction history, allocation status, account management and future discovery.",
  ],
  primaryImage: "/images/work/primarybid/mockup-tablet-orders.png",
  primaryAlt:
    "PrimaryBid orders screen on iPad showing confirmed allocations and future discovery.",
  outcomes: [
    {
      title: "Order visibility",
      copy: "Customers could review applications and confirmed allocations.",
      icon: "visibility" as const,
    },
    {
      title: "Account control",
      copy: "Customers could update contact, address and broker information.",
      icon: "control" as const,
    },
    {
      title: "Continued discovery",
      copy: "Completed investments connected back to relevant future opportunities.",
      icon: "discovery" as const,
    },
  ],
};

export const primaryBidRecovery = {
  label: "Designing recovery paths",
  headline: "Designing recovery paths, not only the happy path",
  body: [
    "Analysis of onboarding drop-off showed that failure was rarely caused by one screen.",
    "Customers could abandon because a verification email was delayed, the message entered a spam folder, an email address was mistyped, a code had expired, a customer entered an incorrect code, registration and login were not clearly differentiated, the customer used a different email from their PrimaryBid account, or moving between email and the product interrupted the journey.",
    "I led a cross-functional workshop with product and engineering to map these scenarios, identify backend dependencies and agree where intervention would have the greatest effect.",
  ],
  closing:
    "The objective was not only to shorten onboarding. It was to make failure understandable and recoverable.",
  asideImage: {
    src: "/images/work/primarybid/drop-off.png",
    alt: "Simplified onboarding recovery flow with validation and error states.",
  },
  bottomImages: [
    {
      src: "/images/work/primarybid/figma-flow.jpg",
      alt: "Figma workshop board mapping onboarding friction points and recovery paths.",
    },
    {
      src: "/images/work/primarybid/onboarding-flow.jpg",
      alt: "Selected PrimaryBid signup validation and error states.",
    },
  ],
};

export const primaryBidComponents = {
  label: "Reusable platform components",
  headline: "Building once for multiple partners and journeys",
  body: [
    "T-Web needed to support different brokers, issuers and partner-led experiences without creating a separate product for every implementation.",
    "I created a configurable base component that allowed elements to be switched on or off, including partner branding, progress indicators, titles and supporting copy, selectors, alerts, investment amounts, confirmation controls, calls to action, and regulatory and payment information.",
    "The same structural pattern could then support multiple journeys while maintaining consistency. A flexible logo system also allowed PrimaryBid to work across brokers, banks, issuers and corporate partners without rebuilding the surrounding experience.",
  ],
  asideImage: {
    src: "/images/work/primarybid/component-base.png",
    alt: "Configurable PrimaryBid transaction layout with modular content blocks.",
  },
  fullWidthImage: {
    src: "/images/work/primarybid/components-logos.png",
    alt: "Flexible PrimaryBid partner branding framework across brokers and issuers.",
  },
};

export const primaryBidEngineering = {
  label: "Working with engineering",
  headline: "From prototype to staged release",
  body: "My involvement continued beyond design handoff. I worked with product and engineering throughout feasibility discussions, acceptance criteria, implementation reviews and staged releases.",
  timeline: [
  { title: "Prototype", copy: "Validate the concept and interaction model" },
  {
    title: "Value validation",
    copy: "Test whether the proposed capability solved a meaningful problem",
  },
  {
    title: "Canary release",
    copy: "Expose the experience to a controlled customer group",
  },
  {
    title: "Release candidate",
    copy: "Validate production behaviour before wider availability",
  },
  {
    title: "General availability",
    copy: "Release to the broader customer base",
  },
  {
    title: "Version increments",
    copy: "Improve the experience through ongoing learning",
  },
  ],
};

export const primaryBidMentoring = {
  label: "Mentoring and team contribution",
  headline: "Contributing beyond my individual product work",
  body: "Alongside the T-Web platform, I supported designers working across the broker dashboard and PrimaryBid’s IPO design system. I reviewed work, helped designers structure complex regulated journeys and supported the handover of reusable patterns so the wider team could continue evolving the products consistently.",
};

export const primaryBidOutcome = {
  label: "Outcome",
  headline: "A platform foundation for cross-channel investing",
  body: "The work established the foundations for a transactional web experience shaped around how investors actually researched opportunities and made decisions.",
  outcomes: [
    {
      title: "Validated demand",
      copy: "Established evidence that a meaningful group of customers wanted transactional web access.",
    },
    {
      title: "Clear channel roles",
      copy: "Defined how desktop and mobile could support different moments within the same investment journey.",
    },
    {
      title: "Connected journeys",
      copy: "Linked discovery, research, applications, payments, order tracking and account management.",
    },
    {
      title: "Responsive product foundations",
      copy: "Created a consistent experience across desktop, tablet and mobile.",
    },
    {
      title: "Reusable platform patterns",
      copy: "Developed configurable components for partner and issuer journeys.",
    },
    {
      title: "Stronger recovery",
      copy: "Mapped onboarding failure scenarios and designed clearer validation and recovery states.",
    },
    {
      title: "Decision-support content",
      copy: "Created a modular framework for contextual investor education.",
    },
    {
      title: "Incremental delivery",
      copy: "Supported the platform from prototype through validation and staged release.",
    },
  ],
  closing:
    "The value of the work was not a single screen. It was the creation of a connected and scalable product foundation for high-trust investing across channels.",
  showcaseImage: "/images/work/primarybid/t-web-splash.png",
  showcaseAlt:
    "PrimaryBid transactional web landing page with live offers and company detail on desktop.",
};

export const primaryBidAdditional = {
  label: "Additional improvements",
  headline: "Additional improvements across the investor experience",
  cards: [
    {
      title: "Onboarding recovery",
      copy: "Mapped drop-off causes and introduced clearer validation and recovery paths.",
    },
    {
      title: "Broker-detail confirmation",
      copy: "Allowed customers to verify and correct critical information before payment.",
    },
    {
      title: "Contextual review experiment",
      copy: "Proposed asking for an app review only after a successful transaction, respecting “not now”, limiting repeat prompts and tracking each touchpoint.",
    },
  ],
};

export const primaryBidProjectNav = {
  previous: { title: "Meal Plans", href: "/work/meal-plans" },
  next: { title: "Kaizen Languages", href: "/work/kaizen-languages" },
};
