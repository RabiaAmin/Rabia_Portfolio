import { useState, useContext } from "react";
import { cn } from "@/lib/utility";

import { ExternalLink, Github } from "lucide-react";
import { protfolioContext } from "../context/protfolioContext";
import { Link } from "react-router-dom";

// Get all unique tags from the projects
const category = ["All", "Frontend", "React Js", "Mern Stack", "Mobile", "Ejs"];

function Projects() {
  const [selectedTag, setSelectedTag] = useState("All");
  const { projects, loading, user } = useContext(protfolioContext);
  const [visibleCount, setVisibleCount] = useState(3);

  console.log("this is project data ", projects);

  if (loading)
    return (
      <div className="flex items-center justify-between ">
        <p className="text-muted-foreground w-full h-full">
          Loading project ......
        </p>
      </div>
    );

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 3); // Show 6 more on each click
  };

  const handleViewLess = () => {
    setVisibleCount((prev) => prev - 3); // Show 6 more on each click
  };

  return (
    <section id="project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects, Each Project was carefully
          crafted with attention to details , performance , and user experience.
        </p>

        <div className="flex justify-between flex-wrap mb-10">
          <div className="flex  overflow-x-scroll hide-scrollbar gap-2 ">
            {category.map((tag, key) => (
              <div key={key}>
                <button
                  onClick={() => setSelectedTag(tag)}
                  className={cn(
                    "truncate capitalize px-6 py-2  rounded-full  border border-primary text-primary hover:bg-primary/50 hover:text-primary-foreground transition-colors duration-300",
                    selectedTag === tag
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondry/70"
                  )}
                >
                  {tag}
                </button>
              </div>
            ))}
          </div>
          <div className="text-center hidden lg:block">
            <a
              href={user.githubUrl}
              target="_blank"
              className="cosmic-button w-fit flex items-center animate-pulse-subtle"
            >
              Check My Github <Github size={16} className="ml-1" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 ">
          {visibleProjects.length === 0 ? (
            <div className="col-span-full flex justify-center items-center h-40">
              <p className="text-muted-foreground text-center text-lg">
                Project Not Added Yet!
              </p>
            </div>
          ) : (
            visibleProjects.map((project, key) => (
              <Link to={`/project/${project._id}`}>
                <div
                  key={key}
                  className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image.url}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondry text-secondry-foreground ">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-1 truncate">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 truncate">
                      {project.Description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <a
                          href={project.demoUrl}
                          className="text-foreground/80  hover:text-primary transition-colors duration-300"
                          target="blank"
                        >
                          <ExternalLink size={20} />
                        </a>
                        <a
                          href={project.gitHubUrl}
                          className="text-foreground/80  hover:text-primary transition-colors duration-300"
                          target="black"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        {filteredProjects.length > 3 &&
          (filteredProjects.length === visibleProjects.length ? (
            <p
              onClick={handleViewLess}
              className="cursor-pointer text-primary transition-transform duration-500 hover:scale-110 text-center"
            >
              View Less Projects
            </p>
          ) : (
            <p
              onClick={handleViewMore}
              className="cursor-pointer text-primary transition-transform duration-500 hover:scale-110 text-center"
            >
              View More Projects
            </p>
          ))}
      </div>
    </section>
  );
}

export default Projects;
