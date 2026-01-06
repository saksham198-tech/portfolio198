import SectionWrapper from "./SectionWrapper";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import React from "react";

const socialLinks = [
  { icon: <Linkedin />, href: "https://linkedin.com/in/charak-srivastava", label: "LinkedIn" },
  { icon: <Github />, href: "https://github.com/saksham198-tech", label: "GitHub" },
  { icon: <Instagram />, href: "https://www.instagram.com/sakshamsrivastava198/", label: "Instagram" },
];

const Contact = () => {
  return (
    <SectionWrapper id="contact" title="Get In Touch" className="bg-muted/30">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-lg text-muted-foreground mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
        </p>
        <Button asChild size="lg" className="font-bold mb-12">
          <a href="mailto:srivastavasaksham198@gmail.com">
            <Mail className="mr-2 h-5 w-5" /> Say Hello
          </a>
        </Button>
        <div className="flex justify-center gap-6">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-foreground/60 hover:text-primary transition-colors">
              {React.cloneElement(link.icon, { className: "w-8 h-8" })}
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
