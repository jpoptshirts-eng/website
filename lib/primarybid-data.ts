export const primaryBidSubnav = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "research", label: "Research" },
  { id: "strategy", label: "Strategy" },
  { id: "platform", label: "Platform" },
  { id: "responsive-design", label: "Responsive design" },
  { id: "transactions", label: "Transactions" },
  { id: "recovery", label: "Recovery" },
  { id: "design-system", label: "Design system" },
  { id: "wider-contribution", label: "Wider contribution" },
  { id: "outcome", label: "Outcome" },
] as const;

export const primaryBidHero = {
  label: "01 Case Study",
  title: "Designing a cross-channel investment platform",
  subcopy:
    "Creating a responsive transactional web experience that helped retail investors research opportunities, apply for offers and manage their investments across desktop, tablet and mobile web.",
  meta: [
    { label: "Role", value: "Senior Product Designer" },
    { label: "Timeline", value: "16 months" },
    {
      label: "Platforms",
      value: "Transactional web across desktop, tablet and mobile web",
    },
    {
      label: "Focus",
      value: "Product strategy, regulated UX and platform design",
    },
  ],
  image: "/images/work/primarybid/hero-live-offers-mobiles.png",
  imageAlt:
    "Three mobile-web screens showing PrimaryBid live offers, offer detail and key dates across the responsive T-Web experience.",
};

export const primaryBidMyRole = {
  title: "My role",
  avatar: "/images/jacinto-hero.png",
  avatarAlt: "Jacinto De Matos",
  body: [
    "As Senior Product Designer, I led the end-to-end product design of T-Web, PrimaryBid’s transactional website, across desktop, tablet and mobile-web breakpoints.",
    "I worked across discovery, product definition, information architecture, interaction design, prototyping and delivery. The experience covered onboarding, offer discovery, company and investment information, applications, payments, broker confirmation, order tracking and account management.",
    "Alongside T-Web, I oversaw and supported work on the broker dashboard, created interface concepts used in IPO pitches and developed reusable patterns for the supporting design system.",
    "I collaborated with product, research, engineering, compliance and commercial teams, supported implementation through staged releases and mentored designers working across the wider product ecosystem.",
  ],
};

export const primaryBidChallenge = {
  label: "02 The challenge",
  headline: "Investing decisions were happening across disconnected experiences",
  body: [
    "PrimaryBid enabled retail investors to access public-market opportunities, but the experience had become increasingly app-led.",
    "Research showed that the native app worked well for immediacy and time-sensitive transactions. However, many investors preferred desktop when reading offer documents, reviewing financial information, comparing opportunities and making considered decisions.",
    "Some customers also found app-only access difficult because of accessibility needs, small-screen limitations, technical issues or a lack of access to a suitable device.",
    "The opportunity was not to reproduce the native app on a larger screen. It was to design a connected transactional website that supported research, decision-making and investment across desktop, tablet and mobile web.",
  ],
  image: "/images/work/primarybid/t-web-splash.jpg",
  imageAlt:
    "Early PrimaryBid transactional web product vision showing onboarding, live offers and order history.",
};

export const primaryBidOpportunity = {
  label: "03 The product opportunity",
  insight:
    "The native app supported immediacy. T-Web supported deeper research, comparison and considered investment decisions.",
  body: "Rather than treating the native app and T-Web as competing products, I helped define the role the transactional website could play within the wider investment journey.",
  journey: ["Discover", "Research", "Compare", "Apply", "Track"],
};

export const primaryBidValidatingDemand = {
  label: "04 Validating demand",
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
  label: "05 Understanding different investors",
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
  label: "06 Customer verbatims",
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
    "The opportunity was not the native app versus web. It was to let each product support the behaviour it was best suited to.",
};

export const primaryBidObservingDecisions = {
  label: "07 Observing investment decisions",
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
  label: "08 Defining the cross-channel role",
  headline: "Giving each channel a clear role",
  nativeApp: {
    title: "Native app — product context",
    points: [
      "immediate access",
      "time-sensitive offers",
      "notifications and availability",
      "fast transactions",
      "use away from a desk",
    ],
    note: "The native app was owned by the Principal Designer and is shown here to explain the wider channel strategy.",
  },
  web: {
    title: "Transactional web — my direct ownership",
    points: [
      "deeper research",
      "long documents and financial information",
      "easier comparison",
      "larger-screen accessibility",
      "considered investment decisions",
      "responsive access across desktop, tablet and mobile web",
    ],
  },
  body: "Rather than reproducing the native app at a different size, I designed T-Web around the research, comparison and transactional behaviours that web supported best.",
  nativeAppImage: "/images/work/primarybid/iphone-x-mockup.png",
  nativeAppImageAlt:
    "Existing PrimaryBid native app live-offers screen shown for product and channel context.",
};

export const primaryBidPrinciples = {
  label: "09 Product principles",
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
      copy: "Navigation, terminology and investment information needed to remain recognisable between T-Web and the existing native app, while allowing each product to use the interaction patterns best suited to its context.",
      icon: "repeat" as const,
    },
  ],
};

export const primaryBidStructuring = {
  label: "10 Structuring the platform",
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
  indexImage: "/images/work/primarybid/index-screen.jpg",
  indexAlt:
    "Desktop transactional-web interface showing PrimaryBid live offers and navigation structure.",
};

export const primaryBidResponsiveOffer = {
  label: "11 The responsive offer experience",
  headline: "A consistent investment journey across screen sizes",
  body: "T-Web was designed responsively across desktop, tablet and mobile web. It was not simply reduced from a desktop layout: the information hierarchy, navigation and interaction model adapted to the available space and the customer’s likely context.",
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
      title: "Mobile web",
      copy: "The responsive website prioritised the active offer, timing, price and primary action, with supporting information revealed progressively.",
      icon: "mobile" as const,
    },
  ],
  primaryImage: "/images/work/primarybid/mweb-and-web.png",
  primaryAlt:
    "Responsive T-Web live-offer experience shown across laptop and mobile-web screens with consistent hierarchy.",
};

export const primaryBidTimeSensitive = {
  label: "12 Time-sensitive offers",
  headline: "Making urgency visible without creating pressure",
  body: [
    "Some PrimaryBid opportunities were available only briefly. Customers needed to understand when an offer was expected to close without the interface becoming unnecessarily alarming or manipulative.",
    "The responsive T-Web offer experience surfaced offer status, expected close time, minimum investment, current share price, investment type, access to further information and the primary application action.",
  ],
  principle:
    "Communicate urgency clearly, but keep the customer in control.",
  image: "/images/work/primarybid/ipad-live-offer-detail.png",
  imageAlt:
    "Tablet T-Web screen showing company detail, key dates and apply action within the responsive offer experience.",
};

export const primaryBidLearn = {
  label: "13 Supporting research",
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
      alt: "Modular T-Web Learn article layout with supporting imagery and structured content blocks.",
    },
    {
      src: "/images/work/primarybid/learn-mobile.png",
      alt: "Responsive T-Web Learn article on mobile web.",
    },
    {
      src: "/images/work/primarybid/learn-card.jpg",
      alt: "Educational article surfaced from a T-Web offer detail page.",
    },
  ],
};

export const primaryBidPayment = {
  label: "14 Application and payment",
  headline: "Designing confidence into a regulated payment journey",
  body: [
    "The application journey needed to balance commercial speed with regulatory clarity and customer confidence.",
    "Customers reviewed their application, confirmed eligibility and selected between supported payment options before leaving PrimaryBid to complete payment.",
  ],
  image: "/images/work/primarybid/plaid-flow.png",
  imageAlt:
    "Responsive PrimaryBid web flow showing application review, payment-method selection and bank confirmation.",
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
  label: "15 Broker confirmation",
  headline: "Closing a critical information gap",
  body: [
    "The existing payment journey did not allow customers to confirm or correct their broker details before completing an application.",
    "This formed part of the responsive transactional-web journey across T-Web breakpoints.",
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
    "Responsive T-Web broker detail fields with editable account information on mobile web.",
};

export const primaryBidOrders = {
  label: "16 Orders and account management",
  headline: "Extending the experience beyond the transaction",
  body: [
    "The T-Web journey did not end when a payment succeeded. Customers needed to understand application status, review allocations, revisit previous orders and maintain regulated account information across desktop, tablet and mobile web.",
    "The platform therefore connected transaction history, allocation status, account management and future discovery.",
  ],
  primaryImage: "/images/work/primarybid/mockup-tablet-orders.png",
  primaryAlt:
    "Tablet T-Web orders screen showing confirmed allocations and future discovery.",
  video: "/videos/work/primarybid/orders-prototype.mp4",
  tabletFrame: "/images/work/primarybid/ipad-landscape-bezel.png",
  poster: "/images/work/primarybid/orders-prototype-poster.jpg",
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
  label: "18 Designing recovery paths",
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
    alt: "Simplified T-Web onboarding recovery flow with validation and error states.",
  },
  bottomImages: [
    {
      src: "/images/work/primarybid/figma-flow.jpg",
      alt: "Figma workshop board mapping onboarding friction points and recovery paths.",
    },
    {
      src: "/images/work/primarybid/onboarding-flow.jpg",
      alt: "Selected T-Web signup validation and error states.",
    },
  ],
};

export const primaryBidComponents = {
  label: "19 Reusable platform components",
  headline: "Building once for multiple partners and journeys",
  body: [
    "PrimaryBid worked with a growing network of issuers, banks and brokers. Rather than designing every partner experience from scratch, I developed configurable components that could adapt to different brands, content and transactional journeys.",
    "The system covered modular layouts, partner logos, progress indicators, alerts, investment controls, regulatory information and payment states — creating a consistent foundation that could scale across propositions.",
  ],
  closing:
    "These same foundations also supported product concepts used during IPO pitches, allowing different issuer, bank, broker and partner propositions to be represented without rebuilding every experience from scratch.",
  asideImage: {
    src: "/images/work/primarybid/component-base.png",
    alt: "Configurable T-Web transaction layout with modular content blocks for partner journeys.",
  },
  fullWidthImage: {
    src: "/images/work/primarybid/components-logos.png",
    alt: "Flexible partner-branding framework across brokers, issuers and IPO pitch experiences.",
  },
};

export const primaryBidWiderContribution = {
  label: "20 Wider contribution",
  headline: "Extending the product ecosystem beyond T-Web.",
  intro:
    "My principal ownership was T-Web, but my role also extended into the broker dashboard and the product system used to support IPO pitches.",
  brokerDashboard: {
    headline: "Overseeing the broker dashboard",
    body: [
      "I oversaw and supported design work for PrimaryBid’s broker dashboard, reviewing journey structure, information architecture and interaction patterns.",
      "I helped the designer responsible for the detailed execution work through complex regulated workflows and ensured the dashboard remained consistent with the wider product ecosystem.",
    ],
    bullets: [
      "journey oversight",
      "design critique",
      "designer support",
    ],
  },
  ipoSystem: {
    headline: "Supporting IPO pitches and the design system",
    body: [
      "I created adaptable interface concepts and reusable patterns used to support IPO pitches across issuers, banks, brokers and partner brands.",
      "The system covered configurable branding, logos, content, progress indicators, alerts, investment controls, regulatory information and payment states.",
      "I later handed the design-system work to another designer and supported the transition so it could continue evolving beyond my direct involvement.",
    ],
  },
};

export const primaryBidEngineering = {
  label: "21 Working with engineering",
  headline: "From prototype to staged release",
  body: "My involvement continued beyond design handoff. I worked with product and engineering throughout feasibility discussions, acceptance criteria, implementation reviews and staged releases for T-Web.",
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
  video: "/videos/work/primarybid/iphone-live-back-button.mp4",
  phoneFrame: "/images/work/primarybid/iphone-x-bezel.png",
  videoAlt:
    "Responsive T-Web mobile-web prototype showing live offers navigation and offer cards.",
};

export const primaryBidMentoring = {
  label: "22 Mentoring and team contribution",
  headline: "Contributing beyond my individual product work.",
  body: [
    "Alongside my direct ownership of T-Web, I supported designers working across the broker dashboard and IPO design system.",
    "I reviewed work, helped structure complex regulated journeys, provided critique on information architecture and interaction design, and supported the handover of reusable patterns.",
    "This allowed the wider team to continue evolving the products consistently while keeping detailed execution with the relevant designer.",
  ],
};

export const primaryBidOutcome = {
  label: "23 Outcome",
  headline: "A platform foundation for cross-channel investing",
  body: "The work established the foundations for a transactional website shaped around how investors researched opportunities and made decisions, while complementing the existing native app.",
  outcomes: [
    {
      title: "Validated demand",
      copy: "Established evidence that a meaningful group of customers wanted transactional web access.",
    },
    {
      title: "Clear product roles",
      copy: "Defined how T-Web could support deeper research and considered transactions alongside the native app’s more immediate experience.",
    },
    {
      title: "Connected T-Web journeys",
      copy: "Linked discovery, research, applications, payments, order tracking and account management within one transactional website.",
    },
    {
      title: "Responsive product foundations",
      copy: "Created a consistent T-Web experience across desktop, tablet and mobile web.",
    },
    {
      title: "Reusable partner patterns",
      copy: "Developed configurable components for partner, issuer and IPO pitch experiences.",
    },
    {
      title: "Wider design leadership",
      copy: "Supported broker-dashboard quality through design review, guidance and mentoring.",
    },
    {
      title: "Broker-dashboard oversight",
      copy: "Supported the structure and quality of broker-facing workflows through design review, guidance and mentoring.",
    },
    {
      title: "Stronger recovery",
      copy: "Mapped onboarding failure scenarios and designed clearer validation and recovery states.",
    },
    {
      title: "Incremental delivery",
      copy: "Supported T-Web from prototype through validation and staged release.",
    },
  ],
  closing:
    "The value of the work was not a single screen. It was the creation of a connected transactional web platform, alongside reusable foundations and design leadership across the wider PrimaryBid ecosystem.",
  showcaseImage: "/images/work/primarybid/t-web-splash.png",
  showcaseAlt:
    "Desktop transactional-web interface for PrimaryBid T-Web with live offers and company detail.",
};

export const primaryBidAdditional = {
  label: "24 Additional improvements",
  headline: "Additional improvements across the investor experience",
  cards: [
    {
      title: "Onboarding recovery",
      copy: "Mapped drop-off causes and introduced clearer validation and recovery paths.",
      icon: "recovery" as const,
    },
    {
      title: "Broker-detail confirmation",
      copy: "Allowed customers to verify and correct critical information before payment.",
      icon: "broker" as const,
    },
    {
      title: "IPO pitch system",
      copy: "Created adaptable interface foundations that helped the team present branded investor experiences more consistently.",
      icon: "ipo" as const,
    },
  ],
};

export const primaryBidProjectNav = {
  previous: { title: "Meal Plans", href: "/work/meal-plans" },
  next: { title: "Kaizen Languages", href: "/work/kaizen-languages" },
};
