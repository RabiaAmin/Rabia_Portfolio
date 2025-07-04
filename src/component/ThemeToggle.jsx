import { Moon, Sun } from 'lucide-react';
import React ,{useEffect, useState} from 'react'
import { cn } from '../lib/utility';


function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

useEffect(() => {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "light") {
    setIsDarkMode(false);
    document.documentElement.classList.remove("dark");
  } else {
    // Default to dark mode if no preference is stored
    setIsDarkMode(true);
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}, []);

  const handleToggleTheme = ()=>{
   if(isDarkMode){
   document.documentElement.classList.remove("dark");
   localStorage.setItem("theme" , "light");
   setIsDarkMode(false);
   } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setIsDarkMode(true);
   }
  }

  return (
   <button
    onClick={handleToggleTheme} 
    className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
         "focus:outline-hidden"        
    )}
   >
    {" "}
    {
        isDarkMode? <Sun className='h6 w6 text-yellow-300' /> : <Moon className='h6 w6 text-blue-900' />
    }
   </button>
  )
}

export default ThemeToggle