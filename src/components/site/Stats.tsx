import SectionWrapper from "./SectionWrapper";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Code, Coffee, Users, Zap } from "lucide-react";

const stats = [
  { icon: <Code className="w-8 h-8 text-accent" />, value: "10+", label: "Projects Completed" },
  { icon: <Coffee className="w-8 h-8 text-accent" />, value: "5000+", label: "Lines of Code" },
  { icon: <Users className="w-8 h-8 text-accent" />, value: "5+", label: "Team Collaborations" },
  { icon: <Zap className="w-8 h-8 text-accent" />, value: "2", label: "Certifications Earned" },
];

const Stats = () => {
  return (
    <SectionWrapper id="stats" title="My Journey in Numbers">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <CardHeader className="items-center pb-2">
              {stat.icon}
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold font-headline text-primary">{stat.value}</p>
              <p className="text-md text-muted-foreground mt-2">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Stats;
