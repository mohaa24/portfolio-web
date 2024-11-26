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
      <section id="home" className=" w-full flex justify-center align-middle">
        <Hero />
      </section>{" "}
      <section
        id="about"
        className="pb-40 flex justify-center align-middle text-center md:text-start"
      >
        <div className=" w-5/6 ">
          <About />
        </div>
      </section>
      <section
        id="skills"
        className="flex justify-center align-middle text-center md:text-start"
      >
        <div className=" w-4/6 ">
          <Skills />
        </div>
      </section>{" "}
      <section
        id="experience"
        className="flex justify-center align-middle text-center md:text-start"
      >
        <div className=" w-4/6 ">
          <Experience />
        </div>
      </section>
      <section> </section>
      <section></section>
      <section></section>
      <div className=" py-4">.</div>
    </div>
  );
}
