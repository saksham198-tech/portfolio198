import SectionWrapper from "./SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    period: "2021 - 2025",
    details: "Relevant Coursework: Data Structures, Object-Oriented Programming, DBMS, Web Development, Software Engineering."
  }
];

const Education = () => {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
        {education.map((edu, index) => (
          <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <GraduationCap className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold">{edu.degree}</CardTitle>
                  <CardDescription>{edu.institution} | {edu.period}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{edu.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
