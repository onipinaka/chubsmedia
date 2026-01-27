// Services Data
export const servicesData = [
  // 1. Website Development
  {
    id: 1,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="10" width="36" height="28" rx="2" />
        <path d="M6 18h36M24 26h8M24 30h8" />
        <circle cx="14" cy="28" r="3" />
      </svg>
    ),
    title: "Website Development",
    description:
      "We build fast, SEO-friendly websites and web apps designed to scale your business. From corporate sites to full-stack applications, your digital presence will work as hard as you do.",
    slug: "website-development",
    pricing: "4999",
    features: [
      "Custom Website Development",
      "SEO-Optimized Architecture",
      "Landing Pages & Corporate Sites",
      "Full-Stack Web Applications",
      "CMS & Admin Panel Development",
      "High-Performance & Scalable Builds",
    ],
    process: [
      { step: "01", title: "Discovery", description: "Understanding business goals, pain points, and user needs." },
      { step: "02", title: "Planning", description: "Creating the site architecture and deciding tech stack." },
      { step: "03", title: "Build", description: "Developing frontend + backend with industry best practices." },
      { step: "04", title: "Launch", description: "Optimizing, deploying, and monitoring performance." },
    ],
  },

  // 2. App Development
  {
    id: 2,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="14" y="6" width="20" height="36" rx="2" />
        <circle cx="24" cy="38" r="1.5" fill="currentColor" />
        <path d="M18 10h12" strokeLinecap="round" />
        <path d="M20 18h8M20 22h8M20 26h6" />
      </svg>
    ),
    title: "App Development",
    description:
      "We build intuitive, high-performance mobile and web apps tailored for growth. Smooth experience, clean UI, and reliable performance across all devices.",
    slug: "app-development",
    pricing: "4999",
    features: [
      "Android & iOS App Development",
      "Cross-Platform Apps",
      "Progressive Web Apps",
      "User-centric Interface Design",
      "Push Notifications & Integrations",
      "Analytics & Performance Tracking",
    ],
    process: [
      { step: "01", title: "Concept", description: "Defining features, scope, and user flows." },
      { step: "02", title: "Design", description: "Crafting clean and intuitive UI/UX." },
      { step: "03", title: "Build", description: "Developing the complete application with best practices." },
      { step: "04", title: "Launch", description: "Publishing and providing post-launch support." },
    ],
  },

  // 3. Graphic Design & UI/UX
  {
    id: 3,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 18L24 6l12 12M18 30l6-6 6 6M24 16v16" />
        <path d="M8 24c0 8.837 7.163 16 16 16s16-7.163 16-16" strokeLinecap="round" />
      </svg>
    ),
    title: "Graphic Design & UI/UX",
    description:
      "Great design isn’t just about looks—it’s about experience. We create intuitive interfaces and stunning visuals that build trust and keep your users engaged.",
    slug: "graphic-design-uiux",
    pricing: "499",
    features: [
      "UI Wireframes & Prototyping",
      "Branding: Logos, Colors, Typography",
      "Brochures, Pitch Decks & Banners",
      "Instagram Posts, Ads & Social Content",
      "Complete Visual Identity Systems",
      "Graphic Assets for Web & Print",
    ],
    process: [
      { step: "01", title: "Research", description: "Understanding audience, brand message, and goals." },
      { step: "02", title: "Concepting", description: "Creating moodboards, brand systems, and design directions." },
      { step: "03", title: "Design", description: "Crafting polished UI/UX and graphic content." },
      { step: "04", title: "Delivery", description: "Providing final files and editable assets." },
    ],
  },

  // 4. Social Media Management
  {
    id: 4,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="6" width="32" height="36" rx="2" />
        <path d="M16 14h16M16 20h16M16 26h10" />
      </svg>
    ),
    title: "Social Media Management",
    description:
      "We manage your social presence end-to-end. From content creation to video editing, we deliver posts, reels, and strategies that keep your brand relevant and engaging.",
    slug: "social-media-management",
    pricing: "2999",
    features: [
      "Social Media Strategy & Management",
      "High-Impact Monthly Content Calendars",
      "Reels, Shorts & Video Edits",
      "Corporate Explainers & Animations",
      "Personal Brand Growth",
      "Analytics & Performance Reports",
    ],
    process: [
      { step: "01", title: "Strategy", description: "Understanding brand voice and creating a content blueprint." },
      { step: "02", title: "Creation", description: "Designing posts, writing captions, and editing videos." },
      { step: "03", title: "Publishing", description: "Posting consistently across all platforms." },
      { step: "04", title: "Growth", description: "Tracking analytics and optimizing performance." },
    ],
  },

  // 5. Video Editing
  {
    id: 5,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 14h20v20H10z" />
        <path d="M30 18l8-4v20l-8-4z" />
      </svg>
    ),
    title: "Video Editing",
    description:
      "High-quality video edits for brands, creators, and businesses. We produce engaging reels, explainers, ads, and storytelling videos that convert attention into impact.",
    slug: "video-editing",
    pricing: "499",
    features: [
      "Reels & Short-Form Videos",
      "Corporate Explainers",
      "Promo Videos & Ads",
      "Animated Text & Motion Graphics",
      "Color Grading & Sound Design",
      "Story-Based Editing",
    ],
    process: [
      { step: "01", title: "Brief", description: "Understanding the message, style, and objective." },
      { step: "02", title: "Edit", description: "Cutting, arranging, and enhancing footage." },
      { step: "03", title: "Polish", description: "Adding transitions, motion graphics, and audio." },
      { step: "04", title: "Deliver", description: "Providing export files in all required formats." },
    ],
  },

  // 6. Marketing & Ads
  {
    id: 6,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 20h24v8H8z" />
        <path d="M32 24l8-4v12l-8-4z" />
      </svg>
    ),
    title: "Marketing & Ads",
    description:
      "We design and run targeted ad campaigns that convert. Data-driven strategies help you reach the right audience and maximize ROI across all platforms.",
    slug: "marketing-and-ads",
    pricing: "300",
    features: [
      "Campaign Strategy (Meta, Google)",
      "High-Converting Landing Pages",
      "Lead Funnels & Capture Systems",
      "Retargeting to Boost Sales",
      "Email & WhatsApp Drip Campaigns",
      "Performance Optimization",
    ],
    process: [
      { step: "01", title: "Strategy", description: "Understanding your market and defining audience." },
      { step: "02", title: "Setup", description: "Building campaigns, funnels, and ad assets." },
      { step: "03", title: "Run", description: "Launching ads with real-time optimization." },
      { step: "04", title: "Scale", description: "Improving conversions and scaling budgets." },
    ],
  },

  // 7. Automation Systems
  {
    id: 7,
    title: "AI / Automation",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="24" cy="24" r="10" />
        <path d="M24 4v6M24 38v6M4 24h6M38 24h6" />
      </svg>
    ),
    description:
      "Work smarter, not harder. We build automation systems, calling agents lead funnels that save you time, reduce your expenses and keep your sales pipeline active 24/7.",
    slug: "automation-systems",
    pricing: "999",
    features: [
      "Micro-task Automation",
      "WhatsApp, Email & RCS Automation",
      "n8n & CRM Setup (HubSpot, Zoho)",
      "AI Chatbots & Customer Support",
      "AI Calling Agents for Sales",
      "Lead Nurturing & Follow-up Systems",
    ],
    process: [
      { step: "01", title: "Audit", description: "Finding areas that can be automated." },
      { step: "02", title: "Setup", description: "Building automation flows and integrations." },
      { step: "03", title: "Testing", description: "Running system checks and improving efficiency." },
      { step: "04", title: "Optimize", description: "Ensuring everything runs on autopilot." },
    ],
  },

  // 8. Lead Generation
  {
    id: 8,
    title: "Lead Generation",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 6h24v12H12z" />
        <path d="M24 18v24M18 30h12" />
      </svg>
    ),
    description:
      "We build powerful lead-gen systems that drive real, qualified customers to your business—consistently and predictably.",
    slug: "lead-generation",
    pricing: "1999",
    features: [
      "High-Intent Lead Funnels",
      "Landing Pages & Capture Systems",
      "Cold Outreach Systems",
      "Email + WhatsApp Drip Sequences",
      "Retargeting Campaigns",
      "CRM Integration",
    ],
    process: [
      { step: "01", title: "Research", description: "Identifying audience and acquisition channels." },
      { step: "02", title: "Build", description: "Creating funnels, landing pages, and workflows." },
      { step: "03", title: "Acquire", description: "Launching campaigns to bring traffic." },
      { step: "04", title: "Optimize", description: "Improving lead quality and scaling results." },
    ],
  },

  // 9. Custom / Not Listed Service
  {
    id: 9,
    title: "Need Something Specific?",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="24" cy="24" r="20" />
        <path d="M24 14v10M24 32h.01" strokeLinecap="round" />
      </svg>
    ),
    description:
      "Didn’t spot the exact service you’re looking for? Let us know what you need; we’ll create a tailored, end-to-end solution built exclusively for your brand.",
    slug: "custom-service",
    pricing: "custom",
    features: [
      "Fully Customized Solutions",
      "Flexible Scope of Work",
      "Consultation & Strategy Sessions",
      "End-to-End Implementation",
      "Fast Support & Delivery",
    ],
    process: [
      { step: "01", title: "Talk", description: "Share your idea or requirement." },
      { step: "02", title: "Plan", description: "We design a custom solution for your needs." },
      { step: "03", title: "Execute", description: "We build it exactly the way you want." },
      { step: "04", title: "Deliver", description: "Final delivery with revisions if needed." },
    ],
  },
];

export const getServiceBySlug = (slug) => {
  return servicesData.find((service) => service.slug === slug);
};

// Services to display on home page (4 specific services)
export const homePageServices = [
  servicesData[0], // Website Development
  servicesData[2], // App Development
  servicesData[5], // Graphic Design & UI/UX
  servicesData[6], // Social Media Management
];
