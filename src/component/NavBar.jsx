import React, { useEffect, useState } from 'react'
import {cn} from "../lib/utility"


const navItems = [
  {name:"Home",href:"#hero"},
  {name:"About",href:"#about"},
  {name:"Skills",href:"#skills"},
  {name:"Projects",href:"#project"},
  {name:"Contact",href:"#contact"}

]

function NavBar() {
  const [ isScrolled , setIsScrolled] = useState(false);
useEffect(() => {
  const handleScroll = () => {
   const scrollTop = window.scrollY || document.documentElement.scrollTop;
    console.log("ScrollY:", scrollTop);
    setIsScrolled(scrollTop > 10);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <nav className={
      cn("fixed w-full z-40 transition-all duration-300",
      isScrolled? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"

    )} >

      <div className='container flex items-center justify-between '>
        <a href="#hero" className='font-MyFont text-xl font-bold text-primary flex items-center'>

          <span className='relative z-10'>
            <span className='text-glow text-foreground '>Rabia</span>{" "}
            .dev
          </span>
        </a>

        {/* dekstop nav*/}
        <div className='hidden md:flex space-x-8'>
          {
            navItems.map((item,key)=>(
              <a href={item.href} key={key} className='text-foreground/80 hover:text-primary transition-colors duration-300' >{item.name}</a>
            ))
          }
        </div>

      </div>
    </nav>
  )
}

export default NavBar