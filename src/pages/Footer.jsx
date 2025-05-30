import { ArrowUp, Mail, Phone } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="h-55 md:h-35 py-12 px-8 bg-card relative  border-t border-border mt-12 mb-0 pt-8 flex flex-wrap justify-between ">
      {" "}
      <div className="flex-col justify-around ">
        <div className="flex items-start gap-2 mb-2">
          <Phone />
          <p> +92 3049359567 </p>
        </div>
        <div className="flex items-start gap-2 mb-2">
          <Mail />
          <p> rabia10march@gamil.com </p>
        </div>

        <p>
          &copy; {new Date().getFullYear()} Rabia.Dev , All rights reserved.{" "}
        </p>
      </div>
      <a
        href="#hero"
        className="hidden md:block p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors animate-bounce"
      >
        <ArrowUp  />
      </a>
    </footer>
  );
}

export default Footer;
