import GridMotion from "../component/GridMotion";
import SkillImage from "../assets/images/Skills.png";
import { useContext, useState } from "react";
import { cn } from "@/lib/utility";
import { protfolioContext } from "../context/protfolioContext";

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

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { skills, loading } = useContext(protfolioContext);

  if (loading)
    return (
      <div className="flex items-center justify-between ">
        <p className="text-muted-foreground w-full h-full">
          Loading skills ......
        </p>
      </div>
    );

  const filteredSkill =
    activeCategory == "all"
      ? skills
      : skills.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container max-auto max-w-5xl">

      <div className="w-full group flex flex-col  md:flex-row justify-between items-center gap-4 md:gap-8 ">
        {/* div 1 */}
        <div className="hidden md:block md:h-[65vh] h-[45vh] w-[80vw] mx-auto md:group-hover:w-[55vw] relative border border-primary glow rounded-2xl overflow-hidden transition-all duration-500 ease-in-out">
          <GridMotion items={items} />
        </div>

        {/* div 2 */}
        <div
          className="
          w-[80vw]
    
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
          <h1 className=" text-center text-3xl md:text-4xl font-bold mb-8 md:mb-12  md:text-start tracking-tight">
            My <span className="text-primary">Skills</span>{" "}
          </h1>
          <div className="flex  overflow-x-scroll hide-scrollbar gap-2 mb-4">
            {[
              "all",
              "frontend",
              "mobile",
              "version control & tools",
              "others",
            ].map((category, key) => (
              <div key={key}>
                <button
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "truncate capitalize px-6 py-2  rounded-full  border border-primary text-primary hover:bg-primary/50 hover:text-primary-foreground transition-colors duration-300",
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondry/70"
                  )}
                >
                  {category}
                </button>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2  gap-8 text-sm md:text-base text-left max-w-4xl">
            {filteredSkill.map((section, index) => (
              <div key={index}>
                <ul className="list-disc list-inside space-y-1">
                  {section.skills.map((skill, i) => (
                    <li key={i}className="truncate">{skill}</li>
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
