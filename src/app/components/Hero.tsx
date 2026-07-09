import { Button } from "./ui/button";
import {
  Github,
  Linkedin,
  Download,
  ArrowDown,
} from "lucide-react";

// Photo temporairement désactivée
// import { ImageWithFallback } from "./figma/ImageWithFallback";
// import rimaImg from "../../images/rima.jpg";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-40 right-20 w-48 h-48 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="absolute bottom-40 left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="border-r border-foreground/10 h-full"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* INTRODUCTION */}

          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
              Electrical & Automation Engineer
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-zinc-900 dark:text-zinc-50">
                Hello, I'm
              </span>

              <span className="block bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">
                Rima Aguel
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
              Embedded Systems | PCB Design | Industrial
              Automation
            </p>

            <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
              Passionate about embedded systems, electronics,
              and intelligent technologies. Specialized in
              embedded software development, PCB design, IoT,
              digital electronics, and AI-based solutions for
              industrial and automotive applications.
            </p>
          </div>

          {/* BUTTONS */}

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="px-8 py-6 rounded-xl bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black transition-all shadow-md"
            >
              <span className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download Resume
              </span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="px-8 py-6 rounded-xl"
            >
              View My Work
            </Button>
          </div>

          {/* SOCIAL LINKS */}

          <div className="flex justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full border"
              asChild
            >
              <a
                href="https://github.com/RimaAguel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full border"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/rima-aguel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* PHOTO - TEMPORARILY COMMENTED */}

          {/*
          
          <div className="relative">

             Image component here

          </div>

          */}
        </div>

        {/* SCROLL INDICATOR */}

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
          <div
            onClick={() => scrollToSection("projects")}
            className="flex flex-col items-center gap-2 animate-bounce cursor-pointer"
          >
            <span className="text-xs uppercase tracking-widest text-zinc-400">
              Explore
            </span>

            <ArrowDown className="h-4 w-4 text-zinc-400" />
          </div>
        </div>
      </div>
    </section>
  );
}