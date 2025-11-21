import {
    FaBuilding,
    FaCommentDots,
    FaCss3Alt,
    FaHandHoldingHeart,
    FaHtml5,
    FaNodeJs,
    FaReact,
  } from "react-icons/fa6";
  import { IoLogoJavascript } from "react-icons/io5";
  import {
    SiAuth0,
    SiExpress,
    SiFirebase,
    SiJsonwebtokens,
    SiNestjs,
    SiNextdotjs,
    SiPostgresql,
    SiDocker,
    SiGit,
    SiDrizzle,
    SiPrisma
  } from "react-icons/si";
  import { SiMongodb } from "react-icons/si";
  import { SiTypescript } from "react-icons/si";
export const PROJECTS = [
    {
      coverImage: "/images/projects/project1.png",
      title: "CaseCrafter",
      slug: "CaseCrafter",
      description: "Design customized phonecase From casecrafter.",
      techStack: ["NextJS", "React","TypeScript", "TailwindCSS", "ShadcnUI", "PostgresSql", "Prisma","Stripe"],
      href: "https://casecrafter-beta.vercel.app/",
    },
    {
      coverImage: "/images/projects/project2.png",
      title: "AI Image SaaS App",
      slug: "AI Image SaaS App",
      description: "A Real Time Saas app with AI Image processing features",
      techStack: [
        "NextJS",
        "React",
        "TypeScript",
        "TailwindCSS",
        "ShadcnUI",
        "MongoDB",
        "Cloudinary",
        "Stripe"
      ],
      href: "https://imaginify-version-two.vercel.app/",
    },
    {
      coverImage: "/images/projects/project3.png",
      title: "Novus",
      slug: "Novus",
      description: "A Real Time Saas app with AI Image processing features",
      techStack: [
        "ReactJS",
        "SupaBase",
        "TypeScript",
        "TailwindCSS",
        "ShadcnUI",
      ],
      href: "https://job-portal-zeta-lake.vercel.app/",
    }
  ];

  export const TECHNICAL_SKILLS = [
    {
      name: "HTML",
      icon: FaHtml5,
    },
    {
      name: "CSS",
      icon: FaCss3Alt,
    },
    {
      name: "JavaScript",
      icon: IoLogoJavascript,
    },
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
    },
    {
      name: "Express.js",
      icon: SiExpress,
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "PostgresSql",
      icon: SiPostgresql,
    },
    {
      name: "Docker",
      icon: SiDocker,
    },
    {
      name: "Next-Auth",
      icon: SiAuth0,
    },
    {
      name: "JWT",
      icon: SiJsonwebtokens,
    },
    {
      name: "Authentication",
      icon: SiAuth0,
    },
    {
      name: "NestJs",
      icon: SiNestjs
    },
    {
      name: "Git",
      icon: SiGit
    },
    {
      name: "Drizzle ORM",
      icon: SiDrizzle
    },
    {
      name: "Prisma ORM",
      icon: SiPrisma
    }
  ];
  
  export const SOFT_SKILLS = [
    {
      name: "Has it all",
      icon: FaCommentDots,
    },
  ];
  
  export const LANGUAGE_SKILLS = ["English", "Hindi", "Bengali"];