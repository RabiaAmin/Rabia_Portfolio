import { Github ,Instagram,Linkedin } from "lucide-react";
import ContactForm from "../component/ContactForm";
import { useContext } from "react";
import { protfolioContext } from "../context/protfolioContext";


function ContactSection() {

    const { user } = useContext(protfolioContext);


  const items = [
  {
    icon: <Github size={18}/>,
    label: "Github",
    url: user.githubUrl
},
  {
    icon: <Instagram size={18} />,
    label: "Instagram",
    url: user.instagramUrl
    
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    url: user.linkedInUrl
    
  },
];
  
  return (
    <section id="contact" className="py:10 md:py-20 px-4 relative bg-secondry/30">
      <div className="container  mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-tight">
          Get In Touch With {" "}
          <span className="text-primary">Me</span>{" "}
        </h1>
        <p className="text-center text-muted-foreground  max-w-2xl mx-auto">
          Have an Idea? I’m All Ears. Let’s Collaborate!
        </p>
       <div className="flex justify-center gap-2 max-w-2xs  mx-auto py-4  mt-4">
         {
            items.map((item,key)=>(
                <a target="_blank" className="p-4 border border-muted-foregound rounded-full hover:bg-primary/80  transition-al  duration-300 transform hover:-translate-y-1" key={key} href={item.url}>{item.icon}</a>
            ))
         }
       </div>
       <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
