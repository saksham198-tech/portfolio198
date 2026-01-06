import SectionWrapper from "./SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Web Developer Intern",
    company: "Hanumant Technology",
    period: "Jun 2024 - Jul 2024",
    description: "Developed and optimized full-stack applications using Node.js, Express.js, and React, improving load efficiency by 30%. Designed RESTful APIs and integrated SQL and MongoDB databases, reducing data retrieval time by 25%. Built responsive UIs using Tailwind CSS and JavaScript, increasing user engagement by 40%. Implemented API testing and automation using Postman and GitHub workflows, improving deployment speed by 20%."
  }
];

const Experience = () => {
  return (
    <SectionWrapper id="experience" title="Experience" className="bg-muted/30">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-border hidden md:block -translate-x-px"></div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-4 top-2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 transform border-4 border-background"></div>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
