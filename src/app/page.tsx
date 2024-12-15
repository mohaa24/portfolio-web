"use client";
import styles from "./page.module.scss";
import "./globals.scss";
import Hero from "./components/Hero/Hero";
import { Skills } from "./components/Skills/Skills";
import { Experience } from "./components/Experience/Experience";
import { About } from "./components/About/About";
import { useEffect } from "react";
import { useAppContext } from "./context/appContext";
import Particles from "./components/ParticleEffect/ParticleEffect";
import AnimatedCanvas from "./components/ParticleEffect/ParticleEffect";
import { Container } from "./components/Container/Container";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { Projects } from "./components/Projects/Projects";
export default function Home() {
  const { selectedTab } = useAppContext();
  const scrollToSection = (id: string) => {
     const section = document.getElementById(id);
     const navbarOffset = 150; // Adjust based on your navbar height
     if (section) {
       const offsetTop = section.offsetTop - navbarOffset;
       window.scrollTo({ top: offsetTop, behavior: "smooth" });
     }
  };
  useEffect(() => {
    scrollToSection(selectedTab);
  }, [selectedTab]);

  return (
    <div className={styles.page}>
      <section id="home" className=" w-full flex justify-center">
        <Hero />
      </section>{" "}
      <section id="about" className=" flex justify-center md:text-start">
        <div className=" md:w-4/6">
          <About />
        </div>
      </section>
      <section
        id="skills"
        className={` p-10 relative ${styles.custom} md:py-40`}
      >
        <div className={`flex flex-col items-center relative z-10`}>
          <Skills />
        </div>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
      </section>{" "}
      <section
        id="experience"
        className="flex justify-center align-middle md:text-start"
      >
        <div className=" md:w-3/6 ">
          <Experience />
        </div>
      </section>
      <section>
        {" "}
        <div
        className="flex justify-center align-middle md:text-start"
>
          <Projects />
        </div>{" "}
      </section>
      <section></section>
      <section></section>
      <div className=" py-4">.</div>
    </div>
  );
}
