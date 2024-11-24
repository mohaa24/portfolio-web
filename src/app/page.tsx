"use client";
import styles from "./page.module.scss";
import "./globals.scss";
import Hero from "./components/Hero/Hero";
import { Skills } from "./components/Skills/Skills";
import { Experience } from "./components/Experience/Experience";
import { About } from "./components/About/About";
export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <section>
          <Hero />
        </section>{" "}
        <section>
          <About />
        </section>
        <section>
          <Skills />
        </section>{" "}
        <section>
          <Experience />
        </section>
        <section></section>
        <section></section>
        <section></section>
      </div>
    </div>
  );
}
