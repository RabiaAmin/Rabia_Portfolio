import { Code, Smartphone, LayoutTemplate } from "lucide-react";
import React, { useContext } from "react";

import { protfolioContext } from "../context/protfolioContext";

const cardItems = [
  {
    icon: Code,
    title: "Modern Web App Development",
    para: "I build responsive, high-performing web apps using React for smooth, engaging user experiences.",
  },
  {
    icon: Smartphone,
    title: "Custom Mobile App Development",
    para: "I create fast, cross-platform mobile apps with Flutter, tailored to your vision and business goals.",
  },
  {
    icon: LayoutTemplate,
    title: "UI Implementation & Integration",
    para: "I turn designs into clean, functional frontends with seamless API integration and optimized performance.",
  },
];

function AboutSection() {
  const { user, loading } = useContext(protfolioContext);

  console.log("user data", user);
  const resume = user.resume;
  if (loading)
    return (
      <div className="flex items-center justify-between ">
        <p className="text-muted-foreground w-full h-full">
          Loading skills ......
        </p>
      </div>
    );
  return (
    <section id="about" className="py-24 px-4 relative ">
      {" "}
      <div className="container max-auto max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
          About <span className="text-primary">Me</span>{" "}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-xl font-semibold">
              Bringing Ideas to Life with Flutter & React
            </h3>
            <p className="text-muted-foreground sm:text-xs">{user.aboutMe}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button animate-bounce">
                {" "}
                Get In Touch
              </a>
              <a
                href={resume.url} // <-- make sure to use .url
                target="_blank"
                rel="noopener noreferrer"
                download="resume"
                className="px-6 py-2 rounded-full  border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {cardItems.map((item, key) => {
              const Icon = item.icon;

              return (
                <div key={key} className="gradient-border p-6 card-hover">
                  <div className="flex flex-col items-center justify-center md:flex-row md:items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.para} </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
