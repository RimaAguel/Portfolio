import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "End of Year Project",
      company: "Marquardt Tunisia",
      location: "Tunis, Tunisia",
      period: "02-2026 – 06-2026",
    },
    {
      title: "Engineering Internship",
      company: "LEONI Tunisia",
      location: "Sousse, Tunisia",
      period: "07-2025 – 08-2026",
    },
    {
      title: "Industrial Internship",
      company: "Chemical Company ALKIMIA",
      location: "Gabes, Tunisia",
      period: "06-2024 – 07-2024",
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Professional Experience
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-8 tracking-wide">
            Hands-on experience in embedded systems, PCB design,
            AI-based computer vision, and industrial automation
            across multiple internships and engineering projects.
          </p>
        </div>

        {/* CARDS */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <Card key={index} className="py-0">
              <CardContent className="px-5 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Briefcase className="h-4 w-4 text-primary shrink-0" />
                      {exp.title}
                    </div>
                    <p className="text-primary text-sm font-medium pl-6">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-1 text-xs text-muted-foreground pl-6 sm:pl-0">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}