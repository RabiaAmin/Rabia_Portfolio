import { createContext, useEffect, useState } from "react";
import {fetchProjectData,fetchSkillsData,fetchUserData } from "../api/index";

export const protfolioContext = createContext();

const PortfolioProvider = ({children})=>{
 
 const [projects,setProjects] = useState([]);
 const [skills, setSkills] = useState([]);
 const [user, setUser] = useState({});

 const [loading , setLoading] = useState(true);

 useEffect(()=>{
    
     const fetchUser = async()=>{
        setLoading(true);

        const data = await fetchUserData();
        setUser(data.user);

        setLoading(false);
    }

      const fetchSkills = async()=>{
        setLoading(true);

        const data = await fetchSkillsData();
        setSkills(data.skills);

        setLoading(false);
    }

       const fetchProject = async()=>{
        setLoading(true);

        const data = await fetchProjectData();
        setProjects(data.project);

        setLoading(false);
    }
    
  
    fetchProject();
    fetchSkills();
    fetchUser();
    
 },[]);



 return (
    <protfolioContext.Provider  value={{projects,skills,loading,user}}>
        {children}
    </protfolioContext.Provider>
 )


}


export default PortfolioProvider;