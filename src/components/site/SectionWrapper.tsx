import React from 'react';

type SectionWrapperProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

const SectionWrapper = ({ id, title, children, className }: SectionWrapperProps) => {
  return (
    <section id={id} className={`relative py-20 md:py-28 overflow-hidden ${className}`}>
      {/* Floating Shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full animate-pulse -z-10"></div>
      <div className="absolute top-1/2 right-0 w-24 h-24 bg-accent/10 rounded-lg animate-pulse -z-10 transform rotate-45"></div>
      <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-primary/5 rounded-full animate-pulse -z-10"></div>
      <div className="absolute bottom-1/2 right-1/3 w-20 h-20 bg-accent/5 rounded-full animate-pulse -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12 text-primary">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
