import { useEffect, useState } from "react";
import { fetchSingleProjectData } from "../api";
import { useParams } from "react-router-dom";

function ProjectView() {
  const [singleProject, setSingleProject] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchSingleProject = async (id) => {
      setLoading(true);

      const data = await fetchSingleProjectData(id);
      setSingleProject(data.project);

      setLoading(false);
    };

    fetchSingleProject(id);
  }, []);

  console.log(singleProject);

  if (loading)
    return (
      <div className="flex items-center justify-between ">
        <p className="text-muted-foreground w-full h-full">
          Loading project ......
        </p>
      </div>
    );

  return (
    <div className="w-full h-[100vh] mx-auto px-4 py-20 bg-background">
      <div className="container max-w-4xl mx-auto text-start z-10 ">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 ">
          {singleProject.title}
        </h1>

        <div className="w-full  flex flex-row justify-center gap-4 items-center">
          <div className="w-100 h-100 overflow-hidden rounded-2xl shadow-md mb-6 bg-card flex items-center">
            <img
              src={singleProject.image?.url}
              alt={singleProject.title}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex flex-col flex-wrap gap-2 mb-6">
            {singleProject.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-primary/10 text-primary  px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="text-muted-foreground mb-6 whitespace-pre-wrap leading-tight">
          {singleProject.Description}
        </p>
        <div className="flex justify-center items-center gap-4 pb-4">
          {singleProject.demoUrl && (
            <a
              href={singleProject.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-primary hover:bg-primary-700 transition rounded-lg text-white"
            >
              Live Demo
            </a>
          )}
          {singleProject.gitHubUrl && (
            <a
              href={singleProject.gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gray-800 hover:bg-gray-700 transition rounded-lg text-white"
            >
              View Code
            </a>
          )}
          {!singleProject.demoUrl && !singleProject.gitHubUrl && (
            <p className="p-4 mt-2 border w-full border-green-900 text-green-600 ">This project is private, and access to the demo and code is restricted!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectView;
