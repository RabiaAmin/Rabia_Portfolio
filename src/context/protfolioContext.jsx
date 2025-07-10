import { createContext, useEffect, useState } from "react";
import {fetchProjectData,fetchSkillsData,fetchUserData } from "../api/index";

export const protfolioContext = createContext();
import LoadingPage from "../pages/LoadingPage";

const PortfolioProvider = ({children})=>{
 
 const [projects,setProjects] = useState([]);
 const [skills, setSkills] = useState([]);
 const [user, setUser] = useState({});

 const [loading , setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [userData, skillsData, projectData] = await Promise.all([
          fetchUserData(),
          fetchSkillsData(),
          fetchProjectData(),
        ]);

        setUser(userData.user);
        setSkills(skillsData.skills);
        setProjects(projectData.project);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

 return (
    <protfolioContext.Provider  value={{projects,skills,loading,user}}>
        {children}
    </protfolioContext.Provider>
 )


}


export default PortfolioProvider;