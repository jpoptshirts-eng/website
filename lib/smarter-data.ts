const BASE = "/images/smarter";

function img(name: string) {
  return `${BASE}/${encodeURIComponent(name)}`;
}

export const smarterImages = {
  hero: img("iKettle_app_mockup_5.jpg"),
  sketchFlow: img("Screen Shot 2018-10-05 at 11.42.04.png"),
  sketchSetup: img("Screen Shot 2018-10-05 at 11.41.51.png"),
  farmingMockup: img("FarmingMockup.gif"),
  fridgeView: img("iphone-X-mockup-downloadable-2.png"),
  inventory: img("iphone-x_inventory_mockup.png"),
  delivered: img("FridgeCam_app_mockup_5.png"),
  camAngle: img("cam_angle.webp"),
  fridgecamSetup: img("fridgecam_setup-mobile.png"),
  processPhoto1: img("IMG_4047.JPG"),
  processPhoto2: img("IMG_4046.JPG"),
  fridgeInstall: img("Smarter-FridgeCam-In-fridge-Camera-image-1.jpeg"),
} as const;

export const smarterSubnav = [
  { id: "products", label: "Products" },
  { id: "challenge", label: "Challenge" },
  { id: "ecosystem", label: "Ecosystem" },
  { id: "setup", label: "Setup" },
  { id: "fridgecam", label: "FridgeCam" },
  { id: "principles", label: "Principles" },
  { id: "delivered", label: "Delivered" },
  { id: "reflection", label: "Reflection" },
] as const;

export const smarterHero = {
  label: "01 Smarter · Connected kitchen ecosystem",
  title: "Designing one app for three connected products",
  supporting:
    "Smarter brought the iKettle, Smarter Coffee and FridgeCam into a single mobile ecosystem. Customers could connect each product to their home network, complete its setup and control it remotely, but every appliance had different physical behaviours, controls and potential points of failure.",
  meta: [
    { label: "Role", value: "Product Designer · UX and UI" },
    { label: "Timeline", value: "16 months" },
    { label: "Company", value: "Smarter" },
    { label: "Platforms", value: "iOS and Android" },
    {
      label: "Products",
      value: "iKettle, Smarter Coffee and FridgeCam",
    },
    {
      label: "Focus",
      value: "Connected products, onboarding, device controls and grocery management",
    },
  ],
  image: smarterImages.hero,
  imageAlt: "Smarter mobile app interfaces for connected kitchen products.",
};

export const smarterMyRole = {
  title: "My role",
  avatar: "/images/jacinto-hero.png",
  avatarAlt: "Jacinto De Matos",
  body: "Over 16 months, I led the UX and UI design across the Smarter mobile ecosystem, covering connected-product onboarding, device pairing, product controls and the wider FridgeCam inventory experience. I worked directly with the physical products to ensure the app guidance reflected what customers needed to do with the hardware.",
  bullets: [
    "Designed the setup journeys for the iKettle, Smarter Coffee and FridgeCam",
    "Created the BlinkUp pairing, connection, firmware and recovery states",
    "Designed product-specific controls across three different connected appliances",
    "Extended FridgeCam into inventory, best-before tracking and shopping-list generation",
    "Designed the Tesco and IFTTT replenishment experience",
    "Prototyped and tested the app alongside the physical products",
  ],
};

export const smarterOverview = {
  label: "02 Project overview",
  headline: "One app, three very different products",
  body: "Customers experienced Smarter as one connected ecosystem, but the products beneath it behaved very differently.",
  body2:
    "The iKettle involved temperature, boiling and scheduling. Smarter Coffee introduced brew strength, grind, quantity and preparation choices. FridgeCam combined physical installation, image capture, inventory, expiry dates and shopping-list management.",
  body3:
    "The challenge was not simply designing three sets of screens. It was deciding what should remain consistent across the ecosystem and what needed to adapt to the physical product.",
  capabilitiesLabel: "Product capabilities at the time",
  products: [
    {
      name: "iKettle",
      items: [
        "Remote boiling",
        "Temperature selection between 20°C and 100°C",
        "Wake Up and Home modes",
        "Formula mode",
        "Water-level information",
        "Keep-warm controls",
      ],
    },
    {
      name: "Smarter Coffee",
      items: [
        "Remote brewing",
        "Wake Up and Home modes",
        "Filter or grinder configuration",
        "Strength and grind selection",
        "Number of cups",
        "Warming controls",
      ],
    },
    {
      name: "FridgeCam",
      items: [
        "Image captured when the fridge door closed",
        "Remote view of fridge contents",
        "Product inventory",
        "Best-before tracking",
        "Suggested recipes",
        "Shopping-list generation and replenishment",
      ],
    },
  ],
};

export const smarterChallenge = {
  label: "03 The system challenge",
  headline: "The experience was larger than the screen",
  body: "The app sat between the customer, their phone, the home network, a cloud service and a physical appliance. FridgeCam also introduced the fridge environment, camera placement, product recognition and external grocery services.",
  body2:
    "A failure anywhere in that chain could make the entire product appear broken.",
  diagram: [
    "Customer",
    "Mobile app",
    "Home Wi-Fi",
    "Cloud connection",
    "Physical appliance",
    "External service",
  ],
  question:
    "How might we make three very different connected products feel like one reliable ecosystem, while giving each product the instructions and controls it required?",
};

export const smarterEcosystem = {
  label: "04 Mapping the ecosystem",
  headline: "Mapping physical and digital states together",
  body: "I began by mapping the complete journey around each product rather than designing isolated app screens.",
  body2:
    "That included what the customer was doing, what the phone was displaying, what the appliance was doing and what needed to happen when those states did not match.",
  photos: [
    {
      src: smarterImages.processPhoto1,
      alt: "Sketching product-specific onboarding and control journeys on paper.",
      caption:
        "Sketching product-specific onboarding and control journeys before moving into higher fidelity.",
    },
    {
      src: smarterImages.processPhoto2,
      alt: "Designing the Smarter app alongside physical kitchen products.",
      caption:
        "Designing the app alongside the physical products so that instructions and controls reflected the real hardware.",
    },
  ],
  flowImage: {
    src: smarterImages.sketchFlow,
    alt: "Sketch flow mapping connection, setup, firmware and product-control states across the Smarter ecosystem.",
    caption:
      "Mapping connection, setup, firmware and product-control states across the ecosystem.",
  },
};

export const smarterSetup = {
  label: "05 A shared setup model",
  headline: "A consistent foundation with product-specific guidance",
  body: "Although every product required different physical instructions, the overall setup journey needed to remain predictable.",
  body2:
    "Customers first selected and named their product, prepared the hardware, connected it to their network, waited for the connection and any software updates, and then completed product-specific configuration.",
  steps: [
    "Select the product",
    "Name the product",
    "Prepare or reset the hardware",
    "Enter network details",
    "Complete device pairing",
    "Confirm connection and updates",
    "Enter the product experience",
  ],
  statement:
    "The structure stayed familiar. The imagery, instructions, physical actions and recovery guidance changed according to the product.",
  flowImage: {
    src: smarterImages.sketchSetup,
    alt: "Sketch flow showing product selection, naming, hardware preparation and connection completion.",
  },
};

export const smarterBlinkUp = {
  label: "06 Guiding customers through BlinkUp",
  headline: "Turning an unfamiliar connection process into a guided physical action",
  body: "The products used BlinkUp during setup. Customers needed to enter their network details, prepare the appliance and position their phone correctly while the connection process took place.",
  body2:
    "Unlike normal mobile onboarding, success depended on the customer, phone, network and physical product reaching the correct state together.",
  interfaceNeeds: [
    "Which part of the product to use",
    "Whether the product needed resetting",
    "How to position the phone",
    "When to keep the phone still",
    "Whether the product was connecting",
    "Whether software was updating",
    "What to do when connection failed",
    "When setup had completed successfully",
  ],
  mainImage: {
    src: smarterImages.fridgecamSetup,
    alt: "FridgeCam setup instructions on a mobile phone alongside the physical device and reset pin.",
  },
  supportingImage: {
    src: smarterImages.sketchSetup,
    alt: "Setup flow screens showing reset guidance, BlinkUp pairing, countdown, connecting and software update states.",
  },
  caption:
    "The setup experience had to coordinate instructions on the phone with actions performed on the appliance.",
};

export const smarterPhysical = {
  label: "07 Designing with the physical product",
  headline: "Testing the experience beyond the prototype",
  body: "Working directly with the hardware exposed issues that would not have appeared in a screen-only prototype.",
  body2:
    "For FridgeCam, the experience depended on customers finding the reset point, mounting the device, selecting an appropriate camera angle and understanding when a new image would be captured.",
  body3:
    "Lighting, shelf position, fridge layout and door movement could all influence what customers eventually saw in the app.",
  images: [
    {
      src: smarterImages.camAngle,
      alt: "Close-up of the FridgeCam camera and mounting system.",
      caption:
        "The physical camera and mounting system shaped the digital setup guidance.",
    },
    {
      src: smarterImages.fridgeInstall,
      alt: "FridgeCam installed inside a refrigerator showing real-world viewing conditions.",
      caption:
        "FridgeCam needed to work inside different fridge layouts and viewing conditions.",
    },
  ],
  quote:
    "Connected-product design meant treating the hardware, app and physical environment as one experience.",
};

export const smarterFridgecam = {
  label: "08 The FridgeCam opportunity",
  headline: "From seeing the fridge to managing what was inside it",
  body: "FridgeCam captured an image when the fridge door closed and made the latest view available through the app.",
  body2:
    "This solved one immediate problem: helping customers check what they had at home while they were away.",
  body3:
    "The wider opportunity was to connect that visibility with inventory, expiry dates, food-waste prevention and grocery planning.",
  image: {
    src: smarterImages.fridgeView,
    alt: "Smarter app showing a remote view of fridge contents on an iPhone.",
  },
  journey: [
    { step: "Capture", copy: "A new image was created when the fridge door closed." },
    { step: "View", copy: "Customers could see the latest contents of their fridge remotely." },
    { step: "Track", copy: "Products could be recorded in a digital inventory." },
    { step: "Remind", copy: "Best-before dates supported expiry notifications." },
    {
      step: "Act",
      copy: "Missing or expiring products could be moved to a shopping list.",
    },
  ],
};

export const smarterFoodWaste = {
  label: "09 Food-waste context",
  headline: "Designing around a meaningful household problem",
  body: "Smarter framed FridgeCam around reducing unnecessary purchases and avoidable food waste.",
  body2:
    "Company research used at the time suggested that households were throwing away a significant proportion of the food they purchased, creating both a financial and environmental cost.",
  researchLabel: "Company research used at the time",
  figures: [
    { metric: "£700", copy: "Average annual household food waste stated in the company research." },
    { metric: "60%", copy: "Food waste described as avoidable." },
    { metric: "20%", copy: "Share of purchased food described as being wasted in the UK." },
    { metric: "7.3m tonnes", copy: "Household food waste per year cited in the company research." },
    { metric: "88%", copy: "Of households spending up to £100 per month on food." },
    { metric: "77%", copy: "Of households admitting to regularly throwing away food." },
    { metric: "98%", copy: "Of households throwing away some chilled products." },
    { metric: "£3.7b", copy: "Potential UK savings if avoidable food waste were reduced, as framed in the research." },
  ],
  note: "These figures provided the problem context for the product. They are not presented as measured outcomes of my design.",
};

export const smarterAssist = {
  label: "10 Smarter Assist",
  headline: "Connecting inventory with grocery replenishment",
  body: "Smarter Assist extended FridgeCam from passive visibility into household management.",
  body2:
    "Customers could scan products as they stored them, add them to an inventory, record an expiry date and move items into a shopping list when they were missing or approaching expiry.",
  body3:
    "At the time, Tesco customers could connect the experience through IFTTT so shopping-list items could be added to their Tesco basket.",
  process: [
    "Scan",
    "Add to inventory",
    "Track expiry",
    "Receive reminder",
    "Add to shopping list",
    "Send to Tesco basket",
  ],
  gif: {
    src: smarterImages.farmingMockup,
    alt: "Animated Smarter Assist interface showing product scanning and inventory management.",
  },
  inventoryImage: {
    src: smarterImages.inventory,
    alt: "Smarter app inventory screen showing expiry dates, item actions and shopping-list generation.",
  },
};

export const smarterPrinciples = {
  label: "11 Design principles",
  headline: "Principles that shaped the experience",
  items: [
    {
      title: "One mental model, not one identical flow",
      copy: "A shared app structure created familiarity, while individual setup and control journeys reflected the needs of each appliance.",
    },
    {
      title: "Make physical actions explicit",
      copy: "Instructions needed to show customers what to touch, position, reset or wait for, not simply what to select on screen.",
    },
    {
      title: "Always show system status",
      copy: "Connection, firmware and appliance states needed to remain visible so customers understood what was happening.",
    },
    {
      title: "Design recovery as part of the journey",
      copy: "Incorrect network details, failed connections, hardware resets and interrupted setup were expected product states, not edge cases.",
    },
  ],
};

export const smarterTradeoffs = {
  label: "12 Constraints and trade-offs",
  headline: "The key trade-offs",
  items: [
    {
      title: "Consistency versus specificity",
      copy: "Too much consistency would make the instructions vague. Too much variation would make the app feel like three unrelated products. The shared structure remained consistent while content and actions changed by product.",
    },
    {
      title: "Speed versus confidence",
      copy: "The fastest possible setup was not always the clearest. Customers needed enough guidance to complete sensitive physical actions correctly.",
    },
    {
      title: "Automation versus customer effort",
      copy: "Inventory and expiry features provided value, but they depended on products being scanned and maintained. The experience needed to make this effort understandable.",
    },
    {
      title: "Digital control versus physical reality",
      copy: "The app could communicate an intended state, but success still depended on the appliance, Wi-Fi connection, installation and surrounding environment.",
    },
  ],
};

export const smarterDelivered = {
  label: "13 What I delivered",
  headline: "What I delivered",
  body: "The work established a single mobile ecosystem across three connected kitchen products while allowing each product to retain the behaviours and controls it required.",
  items: [
    "Shared mobile app architecture and visual language",
    "Product selection and device-management journeys",
    "Support, notification and account experiences",
  ],
  image: {
    src: img("FridgeCam_app_mockup_5.png"),
    alt: "FridgeCam app mockup showing fridge visibility, inventory and shopping activity in one experience.",
    caption:
      "The final experience connected physical visibility, household inventory and shopping activity through one app.",
  },
};

export const smarterReflection = {
  label: "14 Reflection",
  headline: "What connected-product design taught me",
  body: "This project changed how I thought about mobile product design. The interface could not be considered separately from the appliance, network, sensor, physical environment or external service.",
  body2:
    "A clear screen was not enough. The experience had to help all of those parts reach the correct state together.",
  body3:
    "It reinforced the importance of visible system status, specific physical guidance and designing recovery with the same care as the successful journey.",
  body4:
    "Smarter was also an early introduction to the relationship between household inventory, replenishment and food waste, themes that later became relevant to my grocery work at Waitrose.",
};

export const smarterProjectNav = {
  previous: { title: "Kaizen Languages", href: "/work/kaizen-languages" },
  next: { title: "Shopping Lists", href: "/work/shopping-lists" },
};
