import React,{useState,useEffect} from "react";
import { Home, User,Code , Folder,Phone } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero", icon: Home, id: "hero" },
  { name: "Skills", href: "#skills", icon: Code, id: "skills" },
  { name: "Projects", href: "#project", icon: Folder, id: "project" },
  { name: "About", href: "#about", icon: User, id: "about" },
  { name: "Contact", href: "#contact", icon: Phone, id: "contact" }
]


const BottomNav = () => {
   const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // Adjusts when it switches section
        threshold: 0.1
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md px-4 py-2 rounded-full bg-neutral-200 dark:bg-neutral-800/60 border border-primary overflow-hidden group md:hidden">
      {/* Glow Layers */}
      <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none select-none z-0">
        <span className="block absolute -translate-x-1/2 -translate-y-1/3 size-40 blur-xl"
          style={{
            background: "linear-gradient(135deg, rgba(194, 162, 255, 0.6), rgba(158, 113, 255, 0.6), rgba(122, 63, 255, 0.6))",
            animation: "glow-move 10s ease-in-out infinite alternate"
          }}
        ></span>
      </span>

      {/* Nav Items */}
    
      <div className="relative z-10 flex justify-around items-center text-sm text-white/40">
          {
        navItems.map((item,key)=>{
            const Icon = item.icon;
             const isActive = activeSection === item.id;
          return (
            <a
              key={key}
              href={item.href}
              className={`flex flex-col items-center transition-all duration-200 ${
                isActive ? "text-white font-semibold" : "text-bg-primary"
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span>{item.name}</span>
            </a>
          )
        })
      }
      
      </div>
    </nav>
  );
};

export default BottomNav;
