import SectionWrapper from "./SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

const certifications = [
  { name: "Oracle Certified Associate, Generative AI", issuer: "Oracle" },
  { name: "Machine Learning Certified", issuer: "Softpro" },
];

const Certifications = () => {
  return (
    <SectionWrapper id="certifications" title="Certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {certifications.map((cert, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 flex items-center gap-6">
              <Award className="w-12 h-12 text-accent" />
              <div>
                <h3 className="text-lg font-bold text-primary">{cert.name}</h3>
                <p className="text-muted-foreground">Issued by {cert.issuer}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
