import { createContext, useEffect, useState } from "react";
import { fetchData } from "../api/index";

export const protfolioContext = createContext();

const PortfolioProvider = ({children})=>{
 const [projects,setProjects] = useState([]);
 const [skills, setSkills] = useState([]);
 const [loading , setLoading] = useState(true);

 useEffect(()=>{
    const fetchPortfolioData = async()=>{
        setLoading(true);

        const data = await fetchData();
        setProjects(data.projects);
        setSkills(data.skillsData);

        setLoading(false);
    }
    fetchPortfolioData();
 },[]);



 return (
    <protfolioContext.Provider  value={{projects,skills,loading}}>
        {children}
    </protfolioContext.Provider>
 )


}


export default PortfolioProvider;