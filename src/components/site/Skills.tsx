import SectionWrapper from "./SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Languages, Database, GitBranch, Cloud, Wand2 } from "lucide-react";
import React from 'react';

const skills = {
  "Programming Languages": [
    { name: "C", icon: <Code className="w-5 h-5 text-accent" /> },
    { name: "Java", icon: <Code className="w-5 h-5 text-accent" /> },
    { name: "Python", icon: <Languages className="w-5 h-5 text-accent" /> },
  ],
  "Web Development": [
    { name: "HTML", icon: <Code className="w-5 h-5 text-accent" /> },
    { name: "CSS", icon: <Code className="w-5 h-5 text-accent" /> },
    { name: "JavaScript", icon: <Code className="w-5 h-5 text-accent" /> },
    { name: "Tailwind CSS", icon: <Wand2 className="w-5 h-5 text-accent" /> },
    { name: "Node.js", icon: <Code className="w-5 h-5 text-accent" /> },
    { name: "Express.js", icon: <Code className="w-5 h-5 text-accent" /> },
  ],
  "Databases": [
    { name: "SQL", icon: <Database className="w-5 h-5 text-accent" /> },
    { name: "MongoDB", icon: <Database className="w-5 h-5 text-accent" /> },
  ],
  "Tools": [
    { name: "Postman", icon: <Wand2 className="w-5 h-5 text-accent" /> },
    { name: "Git", icon: <GitBranch className="w-5 h-5 text-accent" /> },
    { name: "GitHub", icon: <GitBranch className="w-5 h-5 text-accent" /> },
  ],
  "Deployment": [
    { name: "Vercel", icon: <Cloud className="w-5 h-5 text-accent" /> },
    { name: "Netlify", icon: <Cloud className="w-5 h-5 text-accent" /> },
  ]
};

const Skills = () => {
  return (
    <SectionWrapper id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, list]) => (
          <Card key={category} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {list.map(skill => (
                  <li key={skill.name} className="flex items-center gap-3">
                    {skill.icon}
                    <span className="text-foreground/80">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
