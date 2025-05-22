
import GridMotion from '../component/GridMotion';
const items = [
  'Html',
  <div key='jsx-item-1'>Core Expertise</div>,
  'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Css',
  <div key='jsx-item-2'>Core Expertise</div>,
  'JavaScript',
  <div key='jsx-item-2'>Core Expertise</div>,
  'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Dart',
  <div key='jsx-item-2' className='text-xl  md:text-2xl text-primary/50 font-semibold'>Core Expertise</div>,
  'Flutter',
  <div key='jsx-item-2' className='text-xl  md:text-2xl text-primary/50 font-semibold'>Core Expertise</div>,
  'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Firebase',
  <div key='jsx-item-2'>Core Expertise</div>,
  'Unity',
  <div key='jsx-item-3' className='text-xl  md:text-2xl text-primary/50 font-semibold'>Core Expertise</div>,
  'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'React js ',
  <div key='jsx-item-2' className='text-xl  md:text-2xl text-primary/50 font-semibold'>Core Expertise</div>,
  'Gsap Animation',
  <div key='jsx-item-4'>Core Expertise</div>,
  'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Tailwind Css',
  // Add more items as needed

];

const skillsData = [
  {
    category: "Mobile Development",
    skills: [
      "Flutter",
      "Firebase",
      "REST API Integration",
      "Custom UI & Animations",
    ],
  },
  {
    category: "Frontend Web Development",
    skills: [
      "HTML5",
      "Tailwind Css",
      "JavaScript",
      "React.js",
    ],
  },
  {
    category: "Others",
    skills: ["Object-Oriented Programming (OOP)" , "Team Collaboration" ,"Creative Thinking"],
  },
  
  {
    category: "Version Control & Tools",
    skills: ["Git & GitHub","Visual Studio","Unity"],
  },
];


function SkillsSection() {


  return (
<section id="skill" className="">
  <div className="group flex flex-col mx-auto md:flex-row justify-between items-center gap-4 md:gap-2 ">
    {/* div 1 */}
    <div
      className="md:h-[65vh] h-[45vh] w-[80vw] mx-auto  md:group-hover:w-[45vw] relative border border-background rounded-2xl overflow-hidden transition-all duration-500 ease-in-out"
    >
      <GridMotion items={items} gradientColor='primary' />
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
          My{" "}
          <span className="text-primary">Skills</span>{" "}
      </h1>
  <div className="text-sm md:text-base text-left max-w-4xl ">
  <div className="grid  grid-cols-2  gap-8">
    {skillsData.map((section, index) => (
      <div key={index}>
        <h2 className="text-lg font-semibold text-primary/80 mb-1">
          {section.category}
        </h2>
        <ul className="list-disc list-inside space-y-1">
          {section.skills.map((skill, i) => (
            <li key={i} >{skill}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

    </div>
  </div>
</section>

  )
}

export default SkillsSection