import { createElement, JSX, ReactNode } from "react";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { GiTalk } from "react-icons/gi";

import { Languages } from "lucide-react";
import { LANGUAGE_SKILLS, SOFT_SKILLS, TECHNICAL_SKILLS } from "@/constants";
import { cn } from "@/lib/utils";
import { AnimatedTabs } from "./animated-tabs";

type Tab = {
  id: number;
  icon: ReactNode;
  label: string;
  content: JSX.Element;
};

// const TABS: Tab[] = [
//   {
//     id: 1,
//     icon: <FaScrewdriverWrench />,
//     label: "Technical Skills",
//     content: (
//       <div className="grid grid-cols-3 gap-2">
//         {TECHNICAL_SKILLS.map((skill, i) => (
//           <div
//             key={skill.name}
//             className="flex items-center gap-2 bg-foreground/10 px-4 py-2"
//           >
//             {createElement(skill.icon, { size: 18 })}
//             <span className="text-xs">{skill.name}</span>
//           </div>
//         ))}
//       </div>
//     ),
//   },
//   {
//     id: 2,
//     icon: <GiTalk />,
//     label: "Soft Skills",
//     content: (
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//         {SOFT_SKILLS.map((skill, i) => (
//           <div
//             key={skill.name}
//             className="flex items-center gap-1 md:gap-2 bg-foreground/10 px-4 py-2"
//           >
//             {createElement(skill.icon, { size: 18 })}
//             <span className="text-xs">{skill.name}</span>
//           </div>
//         ))}
//       </div>
//     ),
//   },
//   {
//     id: 3,
//     icon: <Languages size={18} />,
//     label: "Languages",
//     content: (
//       <div className="grid grid-cols-3 gap-2">
//         {LANGUAGE_SKILLS.map((skill, i) => (
//           <div
//             key={skill}
//             className="flex items-center gap-1 md:gap-2 bg-foreground/10 px-4 py-2 text-xs"
//           >
//             {skill}
//           </div>
//         ))}
//       </div>
//     ),
//   },
// ];

export const Skills = () => {
  const TABS: Tab[] = [
    {
      id: 1,
      icon: <FaScrewdriverWrench />,
      label: "Technical Skills",
      content: (
        <div className="grid grid-cols-3 gap-2">
          {TECHNICAL_SKILLS.map((skill, i) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 bg-foreground/10 px-4 py-2"
            >
              {createElement(skill.icon, { size: 18 })}
              <span className="text-xs">{skill.name}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 2,
      icon: <GiTalk />,
      label: "Soft Skills",
      content: (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {SOFT_SKILLS.map((skill, i) => (
            <div
              key={skill.name}
              className="flex items-center gap-1 md:gap-2 bg-foreground/10 px-4 py-2"
            >
              {createElement(skill.icon, { size: 18 })}
              <span className="text-xs">{skill.name}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 3,
      icon: <Languages size={18} />,
      label: "Languages",
      content: (
        <div className="grid grid-cols-3 gap-2">
          {LANGUAGE_SKILLS.map((skill, i) => (
            <div
              key={skill}
              className="flex items-center gap-1 md:gap-2 bg-foreground/10 px-4 py-2 text-xs"
            >
              {skill}
            </div>
          ))}
        </div>
      ),
    },
  ];
  return (
    <div id="skills" className="flex flex-col gap-4 pb-24">
      <h5 className={cn("font-semibold text-xl")}>Skills</h5>
      <AnimatedTabs tabs={TABS} />
    </div>
  );
};
