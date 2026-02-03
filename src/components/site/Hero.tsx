"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const Hero = () => {
  const profileImage = PlaceHolderImages.find(p => p.id === "profile-picture");

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen pt-20 bg-background overflow-hidden">
      {/* Floating Shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full animate-pulse -z-10"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent/20 rounded-lg animate-pulse -z-10 transform rotate-45"></div>
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-primary/10 rounded-full animate-pulse -z-10"></div>
      <div className="absolute bottom-1/2 right-1/3 w-20 h-20 bg-accent/10 rounded-full animate-pulse -z-10"></div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left md:w-1/2 lg:w-3/5 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-headline text-primary tracking-tight">
              Charak Srivastava
            </h1>
            <p className="text-xl md:text-2xl font-medium text-foreground/80">
              Full Stack Developer
            </p>
            <p className="text-lg text-foreground/70 max-w-xl mx-auto md:mx-0">
              I build scalable and high-performance web applications, leveraging modern technologies to create impactful digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <Button size="lg" className="font-bold" onClick={() => scrollTo('projects')}>
                View My Projects
              </Button>
              <Button size="lg" variant="outline" className="font-bold" onClick={() => scrollTo('contact')}>
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                width={500}
                height={500}
                data-ai-hint={profileImage.imageHint}
                className="rounded-full object-cover border-8 border-accent/20 shadow-2xl"
                priority
              />
            )}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full animate-pulse opacity-50 -z-10"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-lg animate-pulse opacity-50 -z-10"></div>
          </div>
        </div>
      </div>
      <button onClick={() => scrollTo('about')} aria-label="Scroll to about section" className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ArrowDown className="w-8 h-8 text-foreground/50 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
