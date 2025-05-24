import GridMotion from "../component/GridMotion";
import SkillImage from "../assets/images/Skills.png";
import { useState } from "react";
import {cn} from "@/lib/utility"

const items = [
  "Html",
  <div key="jsx-item-1">Core Expertise</div>,
  SkillImage,
  "Css",
  <div key="jsx-item-2">Core Expertise</div>,
  "JavaScript",
  <div key="jsx-item-2">Core Expertise</div>,
  SkillImage,
  "Dart",
  <div
    key="jsx-item-2"
    className="text-xl  md:text-2xl text-primary/50 font-semibold"
  >
    Core Expertise
  </div>,
  "Flutter",
  <div
    key="jsx-item-2"
    className="text-xl  md:text-2xl text-primary/50 font-semibold"
  >
    Core Expertise
  </div>,
  SkillImage,
  "Firebase",
  <div key="jsx-item-2">Core Expertise</div>,
  "Unity",
  <div
    key="jsx-item-3"
    className="text-xl  md:text-2xl text-primary/50 font-semibold"
  >
    Core Expertise
  </div>,
  SkillImage,
  "React js ",
  <div
    key="jsx-item-2"
    className="text-xl  md:text-2xl text-primary/50 font-semibold"
  >
    Core Expertise
  </div>,
  "Gsap Animation",
  <div key="jsx-item-4">Core Expertise</div>,
  SkillImage,
  "Tailwind Css",
  // Add more items as needed
];

const skillsData = [
  {
    category: "mobile",
    skills: [
      "Flutter",
      "Firebase",
      "REST API Integration",
      "Custom UI & Animations",
    ],
  },
  {
    category: "frontend",
    skills: ["HTML5", "Tailwind Css", "JavaScript", "React.js"],
  },
  {
    category: "version control & tools",
    skills: ["Git & GitHub", "Visual Studio", "Unity"],
  },
  {
    category: "others",
    skills: [
      "Object-Oriented Programming (OOP)",
      "Team Collaboration",
      "Creative Thinking",
    ],
  },
];

function SkillsSection() {
  const [activeCategory , setActiveCategory] = useState('frontend');
  
  const filteredSkill = skillsData.filter(item => item.category === activeCategory);

  return (
    <section id="skill" >
      <div className="group flex flex-col mx-auto md:flex-row justify-between items-center gap-4 md:gap-2 ">
        {/* div 1 */}
        <div className="md:h-[65vh] h-[45vh] w-[80vw] mx-auto   md:group-hover:w-[45vw] relative border border-primary glow rounded-2xl overflow-hidden transition-all duration-500 ease-in-out">
          <GridMotion items={items} />
        </div>

        {/* div 2 */}
        <div
          className="
          w-[80vw]
    mx-auto
    md:w-[45vw]
    flex
    md:hidden
    justify-center
    items-start
    flex-col
    transform
    translate-y-0
    transition-all
    duration-500
    ease-in-out
    h-[45vh]
    md:h-[65vh]
    md:group-hover:flex
    
   
    md:-translate-y-4
      "
        >
          <h1 className=" text-3xl md:text-4xl font-bold mb-12 text-start tracking-tight">
            My <span className="text-primary">Skills</span>{" "}
          </h1>
          <div className="flex justify-around flex-wrap gap-2 mb-4">
            {['frontend','mobile','version control & tools','others'].map((category, key) => (
              <div key={key}>
                <button onClick= {()=> setActiveCategory(category)} 
                className={cn(
                   "px-6 py-2  rounded-full  border border-primary text-primary hover:bg-primary/50 hover:text-primary-foreground transition-colors duration-300"
                   ,activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondry/70"
              )}>
                  {category}
                </button>
              </div>
            ))}
          </div>
          <div className="text-sm md:text-base text-left max-w-4xl ">
            <div className="grid  grid-cols-2  gap-8">
              {filteredSkill.map((section, index) => (
                <div key={index}>
                  <ul className="list-disc list-inside space-y-1">
                    {section.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
