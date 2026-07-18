import { Project } from "@/type/project";

export const projects: Project[] = [
  {
    id: "options-trading-ml",
    title: "Algorithmic Options Trading Strategy",
    role: "Python Developer Intern",
    timeline: "Feb 2025 - Apr 2025",
    description: "Developed and backtested high-frequency options trading strategies, optimizing parameter combinations on historical datasets.",
    tags: ["Python", "Pandas", "Backtesting", "Financial Engineering", "Numpy"],
    github: "https://github.com/cvsiouy",
    featured: true,
    details: [
      "Developed an algorithmic trading strategy using Pandas, backtesting 260,000+ parameter combinations.",
      "Analyzed 5 years of historical Nifty Options data to validate strategy viability and risk profiles.",
      "Improved strategy P&L by 37% and was awarded a Full-Time Equivalent (FTE) offer."
    ]
  },
  {
    id: "brighttree-dotnet-service",
    title: "Brighttree Healthcare Integrations",
    role: "Full Stack .NET Developer",
    timeline: "Jul 2025 - Present",
    description: "Maintained and enhanced business-critical SOAP-based .NET integrations syncing insurance claim data with SQL Server.",
    tags: [".NET Core", "C#", "SQL Server", "SOAP", "NUnit", "Playwright"],
    github: "https://github.com/cvsiouy",
    featured: true,
    details: [
      "Maintained and enhanced SQL Server-Brighttree integrations through SOAP-based .NET services, ensuring reliable synchronization.",
      "Resolved 100+ production defects, contributing to a 40% reduction in customer-reported issues over two release cycles.",
      "Built an automated testing framework using Playwright and Cucumber, reducing regression testing from 2 days to 3 hours.",
      "Implemented Feature Toggle architecture, reducing production recovery time from hours to minutes."
    ]
  },
  {
    id: "internal-docs-platform",
    title: "Internal Documentation Platform",
    role: "Full Stack .NET Developer",
    timeline: "2025",
    description: "Engineered a custom wiki and documentation platform to accelerate team knowledge-sharing and developer onboarding.",
    tags: ["NextJS", "ReactJS", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/cvsiouy",
    featured: true,
    details: [
      "Engineered a high-performance documentation platform used daily by 15+ engineering team members.",
      "Reduced developer onboarding and knowledge-sharing friction by approximately 30%."
    ]
  },
  {
    id: "book-buddy",
    title: "BookBuddy",
    role: "Creator & Developer",
    timeline: "2024",
    description: "A web application powered by the Google Books API for searching, cataloging, and discovering literary works.",
    tags: ["HTML5", "CSS3", "JavaScript", "Google Books API"],
    github: "https://github.com/cvsiouy",
    featured: false,
    details: [
      "Developed BookBuddy, a web app to search and display books via the Google Books API.",
      "Implemented real-time autocomplete search filtering and responsive typography layouts."
    ]
  },
  {
    id: "coveys-quadrants",
    title: "Covey's Quadrants Scheduler",
    role: "Creator & Developer",
    timeline: "2024",
    description: "A task scheduling and time management web app based on the Stephen Covey four quadrants matrix.",
    tags: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    github: "https://github.com/cvsiouy",
    featured: false,
    details: [
      "Built a personal project for time management based on Stephen Covey's matrix.",
      "Designed dynamic drag-and-drop categorization with persistent storage via web APIs."
    ]
  }
];