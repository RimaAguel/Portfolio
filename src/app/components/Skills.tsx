import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

export function Skills() {
  const skillCategories = [
    {
      icon: null,
      title: "🔌 PCB Design & Electronics",
      skills: [
        "Altium Designer",
        "LTspice",
        "Schematic Design",
        "PCB Layout",
        "Electronic Components Selection",
        "Power Electronics",
      ],
    },

    {
      icon: null,
      title: "💻 Programming Languages",
      skills: ["C", "C++", "Python", "Java"],
    },

    {
      icon: null,
      title: "🔧 Embedded Systems & Hardware",
      skills: [
        "STM32",
        "ESP32",
        "Arduino",
        "Raspberry Pi",
        "STM32CubeIDE",
        "STM32CubeMX",
      ],
    },

    {
      icon: null,
      title: "📡 Communication Protocols",
      skills: ["UART", "SPI", "I²C", "CAN", "Ethernet", "MQTT"],
    },

    {
      icon: null,
      title: "🧪 Test, Measurement & Automation",
      skills: [
        "LabVIEW",
        "MATLAB/Simulink",
        "Data Acquisition",
        "Instrumentation",
        "Control Systems",
        "Industrial Automation",
      ],
    },

    {
      icon: null,
      title: "🤖 AI & Computer Vision Tools",
      skills: [
        "OpenCV",
        "YOLOv8",
        "DeepSORT",
        "Scikit-learn",
        "NumPy",
      ],
    },

    {
      icon: null,
      title: "🛠️ Development & Engineering Tools",
      skills: [
        "Git",
        "VS Code",
        "PlatformIO",
        "Keil MDK",
        "Linux (Basic)",
        "Vivado (Basic)",
        "ModelSim (Basic)",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">
            Technical Skills
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto">
            Expertise in embedded systems, electronics design,
            PCB development, industrial automation,
            communication protocols, testing, and intelligent
            vision-based solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;

            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {IconComponent && (
                      <IconComponent className="h-5 w-5 text-primary" />
                    )}
                    {category.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(
                      (skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                        >
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}