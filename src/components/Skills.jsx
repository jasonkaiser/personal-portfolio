import React from "react";
import { FaFigma, FaJava, FaReact } from "react-icons/fa";
import skills from "../data/skillsData";
import {SiTailwindcss, SiPhp, SiMysql, SiAdobephotoshop, SiKotlin,} from "react-icons/si";


const skillIcons = {
  Photoshop: (
    <div className="skill-icon-background">
      <SiAdobephotoshop className="skill-icon" />
    </div>
  ),
  Figma: (
    <div className="skill-icon-background">
      <FaFigma className="skill-icon" />
    </div>
  ),
  Java: (
    <div className="skill-icon-background">
      <FaJava className="skill-icon" />
    </div>
  ),
  PHP: (
    <div className="skill-icon-background">
      <SiPhp className="skill-icon" />
    </div>
  ),
  MySQL: (
    <div className="skill-icon-background">
      <SiMysql className="skill-icon" />
    </div>
  ),
  React: (
    <div className="skill-icon-background">
      <FaReact className="skill-icon" />
    </div>
  ),
  Tailwind: (
    <div className="skill-icon-background">
      <SiTailwindcss className="skill-icon" />
    </div>
  ),
  Kotlin: (
    <div className="skill-icon-background">
      <SiKotlin className="skill-icon" />
    </div>
  ),
};


const colsMap = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

const getColsClass = (count) => colsMap[Math.min(count, 4)] || "grid-cols-1";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center bg-gray-100 mt-10"
    >
      <h1 className="section-title">Skills</h1>
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10 mb-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="p-4 rounded-lg text-center">
              <h2 className="text-2xs font-semibold font-mono capitalize mb-7 text-purple-600 bg-purple-300/40 w-30 rounded-full border border-purple-600 py-2 relative underline-line max-sm:ml-4">
                {category}
              </h2>
              <div className={`grid gap-4 ${getColsClass(items.length)} max-lg:grid-cols-2 max-sm:grid-cols-1`}>
                {items.map((skill, index) => (
                  <div
                    key={index}
                    className="group bg-white/10 p-4 text-center rounded-2xl shadow text-black flex flex-col items-center hover:border-t-1 hover:border-t-purple-600  hover:shadow-xl transition-shadow duration-300 w-full"
                  >
                    {skillIcons[skill]}
                    <h1 className="text-gray-800 font-bold text-2xl mt-2">
                      {skill}
                    </h1>
                    <p className="text-xs font-mono text-gray-400">{category}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Skills;
