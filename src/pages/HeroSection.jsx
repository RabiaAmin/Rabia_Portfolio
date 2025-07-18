import { ArrowDown } from "lucide-react";
import SplitText from "../component/TextSplit";

function HeroSection() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <SplitText
            text="Hello, i'm Rabia Ali"
            className="text-4xl md:text-6xl font-bold tracking-tight text-center "
            delay={100}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
            highlightWords={{ Rabia: "text-primary font-MyFont" }}
          />
          <p className="text-lg md:text-xl text-muted-foreground max-2-xl max-auto opacity-0 animate-fade-in-delay-3 mt-4">
            I craft intuitive and responsive digital experiences, with a focus
            on performance, usability, and clean design. Whether building mobile
            apps or web interfaces, I’m passionate about turning ideas into
            polished products. Open to freelance opportunities or joining a
            remote team that values creativity and impact.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#project" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="  absolute bottom-0  flex justify-center gap-1 flex-col  left-1/2 transform -translate-x-1/2  items-center  animate-bounce  ">
        <span className="text-sm text-muted-foreground mb-1 ">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
        {/* <CircularText
  text="REACT*BITS*COMPONENTS*"
  onHover="speedUp"
  spinDuration={10}
  className="custom-class"
/> */}
      </div>
    </section>
  );
}

export default HeroSection;
