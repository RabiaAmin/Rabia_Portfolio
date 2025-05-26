
import images from '../constant/images'
import { useState } from "react";
import {cn} from "@/lib/utility"


import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: "101",
    title: "HStudio Landing Page",
    Description: "A modern and responsive landing page built with React and Tailwind CSS for a design studio.",
    tags: ["Html", "Css", "javaScript"],
    image: images.Hstudio,
    demoUrl: "https://hstudio-demo.vercel.app",
    gitHubUrl: "https://github.com/rabia-dev/hstudio-landing"
  },
  {
    id: "102",
    title: "SaaS Analytics Dashboard",
    Description: "An interactive SaaS dashboard with charts and user management using React, Chart.js, and Tailwind.",
    tags: ["Html", "Css", "javascript" , "Gsap Animation"],
    image: images.Zentime,
    demoUrl: "https://saas-dashboard-demo.vercel.app",
    gitHubUrl: "https://github.com/rabia-dev/saas-dashboard"
  },
  {
    id: "103",
    title: "Foodie App Landing",
    Description: "A sleek landing page for a food delivery app, featuring animations and responsive layout.",
    tags: ["Flutter", "Lottie", "Firebaes"],
    image: images.arv,
    demoUrl: "https://foodie-app.vercel.app",
    gitHubUrl: "https://github.com/rabia-dev/foodie-landing"
  },
  {
    id: "104",
    title: "ARvCard Portfolio",
    Description: "Landing page and AR preview section for Rabia's AR-based visiting card tracker app.",
    tags: ["Flutter", "AR", "Firebase","unity","C#"],
    image: images.JB,
    demoUrl: "https://arvcard-landing.vercel.app",
    gitHubUrl: "https://github.com/rabia-dev/arvcard"
  },
  {
    id: "105",
    title: "Blog Generator UI",
    Description: "Dynamic blog and post generation UI with theme switching and content editing features.",
    tags: ["Html", "CSS", "Draggable"],
    image: images.SC,
    demoUrl: "https://bloggen.vercel.app",
    gitHubUrl: "https://github.com/rabia-dev/blog-generator"
  },
  {
    id: "106",
    title: "ToDo App",
    Description: "A simple yet functional to-do app with persistent state using localStorage.",
    tags: ["Flutter", "Dart", "localStorage"],
    image: images.notesapp,
    demoUrl: "https://todo-rabia.vercel.app",
    gitHubUrl: "https://github.com/rabia-dev/todo-app"
  },
  {
    id: "107",
    title: "React Weather App",
    Description: "Weather forecast app using OpenWeatherMap API, built in React with loading animations.",
    tags: ["Html", "Css", "JavaScript"],
    image: images.Dime,
    demoUrl: "https://react-weather-rabia.vercel.app",
    gitHubUrl: "https://github.com/rabia-dev/react-weather-app"
  },
   {
    id: "107",
    title: "React Weather App",
    Description: "Weather forecast app using OpenWeatherMap API, built in React with loading animations.",
    tags: ["React", "Gsap Animation", "JavaScript"],
    image: images.expense,
    demoUrl: "https://react-weather-rabia.vercel.app",
    gitHubUrl: "https://github.com/rabia-dev/react-weather-app"
  },
 
];

// Get all unique tags from the projects
const allTags = ["All", "React","Flutter","Html"];


function Projects() {
 const [selectedTag, setSelectedTag] = useState("All");

  // Filter projects based on selected tag
  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter(project => project.tags.includes(selectedTag));

  return (
  <section id="projects" className='py-24 px-4 relative'>
    <div className='container mx-auto max-w-5xl'> 
      <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
       Featured <span className="text-primary" >Projects</span>
      </h2>

      <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
      Here are some of my recent projects, Each Project was carefully
      crafted with attention to details , performance , and user experience.
      </p>

      <div className='flex justify-between flex-wrap mb-10'>
     <div className="flex justify-star flex-wrap gap-2 ">
                  {allTags.map((tag, key) => (
                    <div key={key}>
                      <button onClick= {()=> setSelectedTag(tag)} 
                      className={cn(
                         "capitalize px-6 py-2  rounded-full  border border-primary text-primary hover:bg-primary/50 hover:text-primary-foreground transition-colors duration-300"
                         ,selectedTag === tag ? "bg-primary text-primary-foreground" : "bg-secondry/70"
                    )}>
                        {tag}
                      </button>
                    </div>
                  ))}
        </div>
        <div className='text-center'>
          <a href="https://github.com/RabiaAmin" target='_blank' className='cosmic-button w-fit flex items-center animate-pulse-subtle'>
            Check My Github <Github size={16} className='ml-1' />
          </a>
        </div>
      </div>

  

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
       {
        filteredProjects.map((project,key)=>(
         <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
          <div className='h-48 overflow-hidden'>
           <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-11p' />
          </div>
          <div className='p-6'>
            <div className='flex flex-wrap gap-2 mb-4'>
            {
              project.tags.map((tag)=>(
                <span className='px-2 py-1 text-xs font-medium border rounded-full bg-secondry text-secondry-foreground '>
                  {tag}
                </span>
              ))
            }
            </div>
         
          <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
          <p className='text-muted-foreground text-sm mb-4'>{project.Description}</p>
          <div className='flex justify-between items-center'>
            <div className='flex space-x-3'>
              <a href={project.demoUrl} className='text-foreground/80  hover:text-primary transition-colors duration-300' target='blank'> 
                <ExternalLink size={20}/>
              </a>
              <a href={project.gitHubUrl}className='text-foreground/80  hover:text-primary transition-colors duration-300' target='black'>
                <Github size={20} />
              </a>
            </div>
          </div>
           </div>
         </div>
        ))
       }
      </div>
    </div>
  </section>
  )
}

export default Projects