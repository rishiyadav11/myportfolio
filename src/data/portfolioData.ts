export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  liveLink: string;
  caseStudyLink?: string;
  image?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export interface Experience {
  title: string;
  period: string;
  company: string;
  bullets: string[];
  tags?: string[];
  current?: boolean;
}

export const portfolioData = {
  personal: {
    name: "Rishi Yadav",
    title: "Full-Stack AI Developer & SaaS Architect",
    subtitle: "Founder of Reworks Studio. Specialized in building high-performance AI workflows, Retrieval-Augmented Generation (RAG) engines, and scalable distributed SaaS applications.",
    email: "photonics54yadav@gmail.com",
    twitter: "https://x.com/RishiYadav5911",
    github: "https://github.com/rishiyadav11",
    linkedin: "https://www.linkedin.com/in/rishiyadav11/",
    location: "Narnaul, Rewari, Gurgaon, Haryana, India (Delhi NCR)",
    phone: "+919999999999", // Update this with your actual WhatsApp phone number (with country code)
  },
  stats: [
    { label: "Focus", value: "Agentic Systems & Scale 💻" },
    { label: "Uptime", value: "99.9% Production SLA 🚀" },
    { label: "AI Stack", value: "LLMs, Vector DBs & Next.js 🛠️" },
  ],
  bio: {
    tagline: "The Architect",
    greeting: "HELLO! I'M RISHI YADAV",
    text1: "I am a Full-Stack AI Developer and Software Engineer based in Haryana, servicing Narnaul, Rewari, Gurgaon, and the Delhi NCR region. My engineering philosophy revolves around the \"Liquid Glass\" mindset—interfaces should be fluid, code should be transparent, and performance should be crystal clear. I specialize in bridging agentic AI workflows with high-availability React/Next.js and Go/Node.js web systems.",
    text2: "Currently building agentic design-to-code pipelines at Reworks Studio, optimizing RAG telemetry pipelines, and scaling serverless GPU integrations.",
    note: "Engineering is not just about building features; it's about architecting digital legacies. At Reworks, we don't just build SaaS; we build the infrastructure for the next decade of human-machine collaboration.",
  },
  projects: {
    ecommerce: [
      {
        title: "Reworks Studio",
        category: "E-commerce & Retail",
        description: "Premium digital design and e-commerce growth studio, turning attention into high-converting sales interfaces.",
        tags: ["Shopify Liquid", "Node.js", "Tailwind CSS"],
        liveLink: "#",
        caseStudyLink: "#",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcxJBAc3GXEBPgG6x1PT4uJDAzmrgRJtJwlO8lTiwhvo0HCri-ooQk0a8yesb6aQJUkYeUZTlopWGx1ys4Wr4RgUj4O1alJW17GpXidgDDDApT5ibVpVZHP7Zt2v3kQ4GM5XGOq8VB9eZ8DPS-uhaMoIwMrBqkrl5gR6JZhS-yCBxSC8uwMg_RL33lvKnmfzO-f_EfOFWDGt7YRyxqjInAIyKVl7I9AHVfPEa0fvUqCu4E-FF7oPy2wClSEzWrjaq7IRKNTqsT95k",
      },
      {
        title: "Smart Plaza",
        category: "E-commerce & Retail",
        description: "Retail operations and complex vendor inventory syncing framework, servicing luxury commercial hubs.",
        tags: ["React", "PostgreSQL", "AWS EC2"],
        liveLink: "#",
        caseStudyLink: "#",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOagdoRnnKdVk3UeefngoHaiWDKmN9mSfb6rnvQmH8AmIJ1DzdFTfNloNE8peGZGXqfFVn8anGR-MeGY3BTzkmdLqWSD6mVtcBsazbHzaykcH-6_0aecWAxjnlj76qD56bwrXYDnnYVS1VXx9HCTWO0FheHyLXL18UhlGGRJEzxV1Uvco8KhlaO8477LbA31s5fF9f3UAScdJcZiwhzTCpRhGCkSg9okOMz96fjCuKO4nqrufeHV1aRJ9hojVAdhUfGfs6TM1dSZk",
      },
      {
        title: "Baemark",
        category: "E-commerce & Retail",
        description: "Baemark is a stylish e-commerce fashion store offering curated outfits and premium clothing collections. The platform focuses on clean aesthetics, product clarity, and smooth user flow for easy shopping.",
        tags: ["Next.js", "E-commerce", "Tailwind CSS", "User Experience"],
        liveLink: "https://www.baemark.com/",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOagdoRnnKdVk3UeefngoHaiWDKmN9mSfb6rnvQmH8AmIJ1DzdFTfNloNE8peGZGXqfFVn8anGR-MeGY3BTzkmdLqWSD6mVtcBsazbHzaykcH-6_0aecWAxjnlj76qD56bwrXYDnnYVS1VXx9HCTWO0FheHyLXL18UhlGGRJEzxV1Uvco8KhlaO8477LbA31s5fF9f3UAScdJcZiwhzTCpRhGCkSg9okOMz96fjCuKO4nqrufeHV1aRJ9hojVAdhUfGfs6TM1dSZk",
      },
      {
        title: "Om Garments",
        category: "E-commerce & Retail",
        description: "An elegant e-commerce apparel catalog and retail hub custom-tailored for high-end boutique garments. Offers seamless filtering, high-definition asset views, and lightning-fast loading speeds.",
        tags: ["Shopify Integration", "Next.js", "Tailwind CSS", "Custom UI"],
        liveLink: "https://omgarments.in/",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcxJBAc3GXEBPgG6x1PT4uJDAzmrgRJtJwlO8lTiwhvo0HCri-ooQk0a8yesb6aQJUkYeUZTlopWGx1ys4Wr4RgUj4O1alJW17GpXidgDDDApT5ibVpVZHP7Zt2v3kQ4GM5XGOq8VB9eZ8DPS-uhaMoIwMrBqkrl5gR6JZhS-yCBxSC8uwMg_RL33lvKnmfzO-f_EfOFWDGt7YRyxqjInAIyKVl7I9AHVfPEa0fvUqCu4E-FF7oPy2wClSEzWrjaq7IRKNTqsT95k",
      },
    ],
    saas: [
      {
        title: "ReviewBoost AI",
        category: "SaaS & AI",
        description: "Llama-3 powered customer sentiment evaluation and automatic response agent. Leverages vector search databases to ground replies in specific business contexts.",
        tags: ["FastAPI", "Llama 3", "Qdrant Vector DB", "LangChain"],
        liveLink: "#",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSSp9w83V7zoH4PfyONvk8ApScOExxnuA2G1pNQVyl_AfnZsYUniZolzJVKkKo6lUC2pQqL3TnSCw7AUtIKtWLrMvpJoTaJfj3NxAwE2a8aIDAEj57B1HrNo9Iiucx19ZYfZ7NJkpvTaHtxUbi8csOBGT9RKUp4fS4LTjEx0E_mFuJfcR6GFoDnPkgVK8oq6q-6kIRuUeAcuJZF_4NsNnxuzeAangqe3L5ayqUIccfym6-UkcTShE3YicxuDJ3BPKn6k2dnVVfvPg",
      },
      {
        title: "Vidocraft AI",
        category: "SaaS & AI",
        description: "Social media intelligence framework utilizing GPT-4 API to generate viral content scripts and data-driven creative strategies for regional brands.",
        tags: ["Next.js", "GPT-4 API", "Tailwind CSS", "Vercel"],
        liveLink: "#",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPzKSGyz1HT18d8TYCSm7AL9BFEB7H6HgIA-mYYEfitSOAMwuqtJ2Ai0ioFkMuWI4N_cIUiTW4K74K_-dCHMn5cr1eMPCOjxtSg6QwIHVSNX3JXBNsj0SiqxTB-yBQPoNJ-hHDqWfa3xwg_KIneySZOQI44JAUdKQonOABmAK1v2f62IsWo03u9Fk870ZG0DVzdXCFCzs9wG-05n1NMoUAicd-_xu7qOl3I8yBbTRk4hgKWo_wstDyDEobB0p5ajeJlyfXEdQgOCg",
      },
      {
        title: "Orbis Design Compiler",
        category: "SaaS & AI",
        description: "Agentic translation engine converting layout screenshot mockups into production-ready Next.js components styled with Tailwind CSS.",
        tags: ["React", "Vision Models", "Tailwind CSS", "TypeScript"],
        liveLink: "https://www.ramgurjar.in/",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoFNfE3HFzZHXLbKfLWKXcGA5t3ZebZZERUSo7dhPdrRoX23I1sKFXuV-8QzizabJnMyVgE5FONaWfXeRkBcJ1Znhk2isDlO1YgZ_B2G11suCjmUDb7irCImEHUfEK3OrYfnTgl_hYqTETESrrfohwHsCVTDnQ-06S2NZurq2ACyqX26K_VQ3x6fBbAzw9zIx6GKphpCreRlXL8adhQtpUIHaNZOg0vFDzKCowULK4nZno3KJt3740xhgKmlZz1tHhFt1DYcclMsk",
      },
    ],
    healthcare: [
      {
        title: "Goyal Netra",
        category: "Healthcare & Education",
        description: "HIPAA-compliant surgical tracking system and clinical database for premier eye care centers.",
        tags: ["HIPAA Sync", "Node.js", "PostgreSQL", "Next.js"],
        liveLink: "#",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPbBIXH0t19I4RFaPiwe90-7My0GmRhijcNMDsm_0gg62oYwACePQwe_W6sgK3BgLGDL_stVbq6rqtLmGxyJS8gwSHo5AB2xKUvgSRa_yjkavE33PV2NAj23NtpnVh9t-Y6hWzOx7TDOT-nWN7uw5TGj0rluJAQEQfLyt72bQYj2DRmoCxFN-AMvHThe5jaqamRSCjstsU8Ayde-njvFzEdbWa7_Yq99LHlsIscv_xLM0cVFVq1-1W4uFM-9Qpu4zdcgk6CiwVKug",
      },
      {
        title: "Pariksha Career Institute",
        category: "Healthcare & Education",
        description: "Pariksha Career Institute is a coaching institute for NEET, JEE, Olympiads, and 8th–10th foundation batches.",
        tags: ["React.js", "Next.js", "Postgres", "Tailwind CSS"],
        liveLink: "https://www.parikshacareerinstitute.in/",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjg3S9_3ploB4RmnRtIppuaK2jVSe6mIfjuN5SXT5DfGWIwxkxkSQfXlcLKWrXa0LFusJsfJixPi4cbu6IlsMg6-3_mRbzaSNDj2YCMLPLxGHSfX1Kx5rJSkNXB8SIbDMI0Q3hGDV-Zz9vOhvxHmvJC1D5cH49XPylkq7zLDOFxMTXTlECfbj-hXtdwF3eXmH4Px3NAICYhPqTlcdZFh_JZn_Lc2FUnQ62P63YngoXd8EoaNlnfb2eY1QA6C2zKeOr35bjmBLSL9E",
      },
      {
        title: "STEM Labs Registry",
        category: "Healthcare & Education",
        description: "IoT automation console bridging physical sensors with real-time Next.js telemetry panels for schools.",
        tags: ["IoT WebSockets", "Hardware APIs", "Next.js", "Node"],
        liveLink: "#",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkJfSCeiLR6JP5ZsjxpRw5XJDA3KjR1HTGzaJhBrCGg0qr4PLaa_lQn_PMB1uMXEJEjg0rjyAQWUUdjP6i9Eb7Dm04u1TflLYffTl3Srm-ow1z7praTEPoRVN0If_AYzBx0zasjMcmZTpWOyhrJw4xz0AS1VCrVQ9_hCPWKrnKtarkeGZ3D3Ds67uJbhPewER6YwNd8IooQ6fpJsZlaV9V0PCVFk53EbRlwZ0Ly1l_Lkpu0eMhNb4mJ1FGmqAlgKQiYkxBfekIqLo",
      },
      {
        title: "GICE Academy",
        category: "Healthcare & Education",
        description: "GICE Academy is a premier training hub and resource registry for professional courses. Features active batch selectors, scheduling calendars, and interactive course directories.",
        tags: ["React.js", "Node.js", "Express", "MongoDB"],
        liveLink: "https://giceedu.com/",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjg3S9_3ploB4RmnRtIppuaK2jVSe6mIfjuN5SXT5DfGWIwxkxkSQfXlcLKWrXa0LFusJsfJixPi4cbu6IlsMg6-3_mRbzaSNDj2YCMLPLxGHSfX1Kx5rJSkNXB8SIbDMI0Q3hGDV-Zz9vOhvxHmvJC1D5cH49XPylkq7zLDOFxMTXTlECfbj-hXtdwF3eXmH4Px3NAICYhPqTlcdZFh_JZn_Lc2FUnQ62P63YngoXd8EoaNlnfb2eY1QA6C2zKeOr35bjmBLSL9E",
      },
    ],
    hospitality: [
      {
        title: "RB Health Club",
        category: "Hospitality & Fitness",
        description: "RB Health Club is a modern fitness platform with workout plans, nutrition tracking, and membership support.",
        tags: ["Next.js", "Tailwind CSS", "Node.js", "Payments"],
        liveLink: "https://www.rbhealthclub.com/",
        caseStudyLink: "#",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpjBWQbSMfROS-iUx4VxaYgd4zZKW-qUt-RLSSyCKNCRvWANXvG1Uo7I_pgTqwTz-ZqnPmKsZ-MBsyM9ZZESPkiC7G60Z3iWjFmzxN16Qks0Ju_ByZGPZQaZ_yDYC_2OYZyn9fty1hWxLHmRpMCBTA_Se5KuR2w8iW0duq4hFDZrZe68DBYgyUbYYetuy3xwqCeATOfUR2zut_AS_1CBVvtRfQ7vsmJeMUeAwdTTsDfG0_5ZDlZykJJMOn8Zse23T6Gd1j1Y_tTtg",
      },
      {
        title: "Ravi Jangid Coaching",
        category: "Hospitality & Fitness",
        description: "Elite coaching registry mapping workouts and performance summaries for national strength athletes.",
        tags: ["WordPress Custom", "PHP API", "Brand Legacy"],
        liveLink: "#",
        caseStudyLink: "#",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApngABnvjf2HbILFUPskc-zVqCnqx3gBhGpvB4VKLc1KNAs9YowtaraiOJ0qqQ87XzBUVH25La4qyylV67nAsVbuxyF1UaXdaSrufkGsMT0jPgfDFznXNfQ9wkDmh4Td91BBq04EOfrqg6Qqr7n2rwzs0wPRyQt8Gx3aOh-BFWpoev0zzdhlETSXSO5O4_XIeACJKcQxDPOMvwNUi4QPVWAnyMYUdUPuJOPHJ1JoV1snI9t1oCVVqaGjd7ZTRZeLWVMJDB7ia3AkE",
      },
      {
        title: "Chadni Resorts",
        category: "Hospitality & Fitness",
        description: "Chadni Resorts is a luxury hospitality portal and event booking framework. Streamlines amenities catalogs, room selections, reservation requests, and direct customer dispatch notifications.",
        tags: ["Next.js", "Resorts Booking", "Tailwind CSS", "Resilient APIs"],
        liveLink: "https://www.chadniresorts.in/",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpjBWQbSMfROS-iUx4VxaYgd4zZKW-qUt-RLSSyCKNCRvWANXvG1Uo7I_pgTqwTz-ZqnPmKsZ-MBsyM9ZZESPkiC7G60Z3iWjFmzxN16Qks0Ju_ByZGPZQaZ_yDYC_2OYZyn9fty1hWxLHmRpMCBTA_Se5KuR2w8iW0duq4hFDZrZe68DBYgyUbYYetuy3xwqCeATOfUR2zut_AS_1CBVvtRfQ7vsmJeMUeAwdTTsDfG0_5ZDlZykJJMOn8Zse23T6Gd1j1Y_tTtg",
      },
    ],
  },
  skills: [
    {
      title: "AI & Data Engineering",
      icon: "cpu",
      skills: [
        { name: "LLM Orchestration (LangChain, AutoGen)", level: 94 },
        { name: "Vector Databases (Qdrant, Pinecone)", level: 88 },
        { name: "Semantic Search & RAG Architectures", level: 92 },
        { name: "Model Tuning & Prompt Engineering", level: 95 },
      ],
    },
    {
      title: "Frontend Engineering",
      icon: "layers",
      skills: [
        { name: "Next.js (App Router, Turbopack)", level: 96 },
        { name: "React.js / Client State", level: 94 },
        { name: "Tailwind CSS v4 & PostCSS", level: 98 },
        { name: "Framer Motion (Transitions, Scroll)", level: 88 },
      ],
    },
    {
      title: "Backend Engineering",
      icon: "database",
      skills: [
        { name: "Node.js & Express APIs", level: 92 },
        { name: "Go (Golang) Microservices", level: 85 },
        { name: "WebSockets & Real-time Telemetry", level: 90 },
        { name: "GraphQL & RESTful Architectures", level: 88 },
      ],
    },
    {
      title: "Cloud & Distributed Systems",
      icon: "cloud_sync",
      skills: [
        { name: "AWS / Vercel Edge Serverless", level: 90 },
        { name: "Docker Containerization", level: 85 },
        { name: "PostgreSQL & Drizzle ORM Sync", level: 91 },
        { name: "CI/CD & Edge Cache (Cloudflare)", level: 88 },
      ],
    },
  ],
  experience: [
    {
      title: "Founder & Lead AI Architect",
      company: "Reworks Studio",
      period: "2023 - Present",
      bullets: [
        "Pioneering agentic code-to-design generation pipelines utilizing custom LLM visual translator agents.",
        "Architecting sub-50ms vector index matching frameworks to retrieve context segments for RAG pipelines.",
        "Developing scalable backend WebSockets interfaces supporting real-time telemetry updates.",
        "Serving enterprise clients across Delhi NCR and internationally with high-performance digital systems."
      ],
      tags: ["Next.js", "LangChain", "Qdrant", "Node.js", "Docker", "AWS"],
      current: true,
    },
    {
      title: "Senior AI Systems Engineer",
      company: "Fact Industries",
      period: "2021 - 2023",
      bullets: [
        "Led the integration of natural language database querying features using OpenAI and custom SQL model hooks.",
        "Built telemetry collection systems handling thousands of sensor telemetry signals per minute.",
        "Developed custom dashboard layouts in React, styled with Tailwind CSS, and synced with PostgreSQL databases."
      ],
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis","NEXT JS", "Vector Embeddings", "LLM"],
    },
  ],
  education: {
    school: "Maharshi Dayanand University",
    degree: "Bachelor of Technology in Computer Science (Specialization in Artificial Intelligence)",
    period: "2023 - 2027",
    location: "Haryana, India",
  },
};
