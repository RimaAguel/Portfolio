import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

// Imports des images locales pour le projet 1 (Smart Embedded Control Board)
import powerToolTopImg from "../../images/top.png";
import powerToolBottomImg from "../../images/bottom.png";
import powerToolLayersImg from "../../images/layers.png";

// Imports des images locales pour le projet 2 (OBD-II Automotive Diagnostic)
import obdTopImg from "../../images/top2.png";
import obdBottomImg from "../../images/bottom2.png";
import obdLayersImg from "../../images/layers.png";
import obdProtoImg from "../../images/obd.png";

// Import de l'image pour le projet 3 (Computer Vision)
import leoniImg from "../../images/leoni.png";

import rosImg from "../../images/ros2.png";
import parkingImg from "../../images/parking.png";

export function Projects() {
  const categories = [
    "All",
    "PCB Design",
    "Embedded Systems",
    "AI & Vision",
    "IoT",
  ];

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  // États pour basculer de manière indépendante les vues de chaque projet
  const [powerToolView, setPowerToolView] = useState<
    "top" | "bottom"
  >("top");
  const [obdView, setObdView] = useState<"top" | "bottom">(
    "top",
  );

  // Définition dynamique de la source de l'image selon la vue sélectionnée
  const getPowerToolImage = () => {
    switch (powerToolView) {
      case "bottom":
        return powerToolBottomImg;
      case "layers":
        return powerToolLayersImg;
      default:
        return powerToolTopImg;
    }
  };

  const getObdImage = () => {
    switch (obdView) {
      case "bottom":
        return obdBottomImg;
      case "layers":
        return obdLayersImg;
      case "proto":
        return obdProtoImg;
      default:
        return obdTopImg;
    }
  };

  const projects = [
    {
      id: "powertool",
      title: "Smart Embedded Control Board for a Power Tool",
      description:
        "Developed a 4-layer embedded control board for industrial BLDC motor applications, integrating STM32G431, DRV8323RS, and high-precision sensing.",
      category: "PCB Design",
      technologies: [
        "Altium Designer",
        "4-Layer PCB",
        "STM32G431",
        "DRV8323RS",
        "BLDC Motor Control",
        "LTspice",
        "PDN Analyzer",
      ],
      image: getPowerToolImage(),
      github: "#",
      showGithub: false, // Bouton masqué pour le Projet 1
      hasExtendedGallery: true,
      view: powerToolView,
      setView: setPowerToolView,
    },
    {
      id: "obd",
      title:
        "PCB-Based Embedded OBD-II Automotive Diagnostic System",
      description:
        "Designed a custom PCB-based OBD-II diagnostic system with CAN/CAN FD communication and real-time vehicle data acquisition.",
      category: "PCB Design",
      technologies: [
        "STM32 MCU",
        "Altium Designer",
        "CAN / CAN FD",
        "OBD-II Protocol",
        "Automotive ISO 15765",
        "Signal Conditioning",
        "Hardware Layout",
      ],
      image: getObdImage(),
      github: "#",
      showGithub: false, // Bouton masqué pour le Projet 2
      hasExtendedGallery: true,
      view: obdView,
      setView: setObdView,
    },
    {
      id: "computervision",
      title:
        "AI-Based Computer Vision System for Real-Time Monitoring",
      description:
        "Developed an AI-powered computer vision system using Python, OpenCV, and Electron for real-time operator monitoring, workflow analysis, and interactive production dashboards.",
      category: "AI & Vision",
      technologies: [
        "Python",
        "OpenCV",
        "Computer Vision",
        "AI",
        "Electron",
        "Real-time Monitoring",
        "Dashboard",
        "Data Visualization",
        "Privacy Protection",
      ],
      image: leoniImg,
      github:
        "https://github.com/RimaAguel/AI-Based-Computer-Vision-System-for-Real-Time-Monitoring",
      showGithub: true, // Bouton visible pour le Projet 3
      hasExtendedGallery: false,
    },
    {
      id: "ros",
      title: "ROS-Based Autonomous Robot System",
      description:
        "Developed a ROS-based autonomous robot for real-time navigation using 360° LiDAR, enabling obstacle detection, path planning, and autonomous steering.",
      category: "Embedded Systems",
      technologies: [
        "ROS2",
        "LiDAR",
        "Python",
        "Sensor Fusion",
        "Obstacle Avoidance",
        "Robotics",
      ],
      image: rosImg,
      github: "#",
      showGithub: false, // Bouton masqué pour le Projet 4
      hasExtendedGallery: false,
    },
    {
      id: "parking",
      title: "Smart Car Parking Management System",
      description:
        "Built a web-based smart parking management system with real-time slot availability, reservation handling, and analytics dashboards.",
      category: "IoT",
      technologies: [
        "JavaScript",
        "Firebase",
        "Web Development",
        "Real-time DB",
        "UI/UX",
      ],
      image: parkingImg,
      github:
        "https://github.com/RimaAguel/Smart-Car-Parking-Management-System",
      showGithub: true, // Bouton visible pour le Projet 5
      hasExtendedGallery: false,
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory,
        );

  return (
    <section className="py-20 px-4 bg-zinc-50/50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4 space-y-2">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Projects
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-sm">
            Discover my work spanning PCB Design, Robotics,
            Real-time Embedded Systems, AI Vision, and IoT
            Solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-8 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-200 rounded-full ${
                selectedCategory === category
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                  : "bg-white text-zinc-600 border border-zinc-200/80 hover:text-black dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-zinc-200/60 dark:border-zinc-800 shadow-sm rounded-xl group bg-white dark:bg-zinc-900 flex flex-col justify-between transition-all hover:shadow-md"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="relative aspect-[4/3] p-4 bg-zinc-50/30 dark:bg-zinc-900/30 flex items-center justify-center border-b border-zinc-100 dark:border-zinc-800/50">
                    <div className="w-full h-full overflow-hidden rounded-lg bg-white border border-zinc-200/80 dark:border-zinc-800 shadow-inner flex items-center justify-center p-2 relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="max-w-full max-h-full object-contain transition-all duration-300"
                      />

                      {/* Navigation "Top / Bottom" pour les projets PCB */}
                      {project.hasExtendedGallery &&
                        project.setView && (
                          <div className="absolute bottom-2 left-2 right-2 bg-zinc-900/85 backdrop-blur-xs p-0.5 rounded-lg flex justify-around border border-zinc-700 shadow-lg">
                            <button
                              onClick={() =>
                                project.setView!("top")
                              }
                              className={`text-[9px] font-bold tracking-wider px-2 py-1 rounded-md transition-all ${
                                project.view === "top"
                                  ? "bg-white text-black shadow-xs"
                                  : "text-zinc-400 hover:text-white"
                              }`}
                            >
                              Top
                            </button>
                            <button
                              onClick={() =>
                                project.setView!("bottom")
                              }
                              className={`text-[9px] font-bold tracking-wider px-2 py-1 rounded-md transition-all ${
                                project.view === "bottom"
                                  ? "bg-white text-black shadow-xs"
                                  : "text-zinc-400 hover:text-white"
                              }`}
                            >
                              Bottom
                            </button>
                          </div>
                        )}
                    </div>
                  </div>

                  <CardContent className="p-5 space-y-3 pb-4">
                    <div>
                      <Badge
                        className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border-none ${
                          project.category === "PCB Design"
                            ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                            : project.category ===
                                "Embedded Systems"
                              ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                              : project.category ===
                                  "AI & Vision"
                                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                                : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                        }`}
                      >
                        {project.category}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.map(
                        (tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-[11px] px-2 py-0 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border-none font-normal"
                          >
                            {tech}
                          </Badge>
                        ),
                      )}
                    </div>
                  </CardContent>
                </div>

                {/* Condition pour n'afficher le bouton Code que si showGithub est à true */}
                {project.showGithub && (
                  <CardContent className="p-5 pt-0 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 w-full text-zinc-700 border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </CardContent>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}