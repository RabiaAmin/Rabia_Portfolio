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
const categories = ["All","frontend", "Mobile", "backend", "Other Technical Skills"];

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const { skills, loading } = useContext(protfolioContext);

  if (loading)
    return (
      <div className="flex items-center justify-between ">
        <p className="text-muted-foreground w-full h-full">
          Loading skills ......
        </p>
      </div>
    );

  
  const filteredSkill = activeCategory === "All"
    ? skills
    : skills.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className=" px-4  relative">
      <div className="container  max-auto max-w-5xl">
        <div className="w-full h-[75vh]  group flex flex-col  lg:flex-row justify-between items-center gap-4 md:gap-8">
          {/* div 1 */}
          <div className="hidden lg:block h-full w-[80vw] mx-auto lg:group-hover:w-[55vw] relative border border-primary glow rounded-2xl overflow-hidden transition-all duration-500 ease-in ">
            <GridMotion items={items} />
          </div>

          {/* div 2 */}
          <div
            className="
            w-full
           h-full
           lg:w-[45vw]
         
           flex
           flex-col
           justify-center
           items-center
           lg:hidden
           lg:group-hover:flex
           
           transition-all
           duration-300"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              My <span className="text-primary">Skills</span>{" "}
            </h1>
             <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
         Each of these skills represents the effort, curiosity, and dedication I bring to every project I work on.
        </p>
            <div className="w-full  flex  overflow-x-scroll hide-scrollbar gap-2 mb-4">
              {categories.map((category, key) => (
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
            <div className="grid grid-cols-4  p-4  gap-8 text-sm lg:text-base text-left w-full">
              {filteredSkill.map((section, index) => (
                <div key={index} >
                  <ul className="list-disc list-inside space-y-1  ">
                    {section.skills.map((skill, i) => (
                      <li key={i} >
                        {skill}
                      </li>
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
