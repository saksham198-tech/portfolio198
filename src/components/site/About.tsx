import SectionWrapper from "./SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <SectionWrapper id="about" title="Professional Summary" className="bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg border-2 border-accent/10 overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <p className="text-lg md:text-xl text-center text-foreground/80 leading-relaxed">
              Full Stack Developer with strong proficiency in Java, Python, and modern web technologies. Experienced in developing scalable, high-performance web applications and APIs. Skilled in working across frontend and backend frameworks, integrating databases, and optimizing performance. Seeking opportunities to apply technical expertise and problem-solving abilities in a dynamic development environment.
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default About;
