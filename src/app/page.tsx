'use client'
import styles from "./page.module.scss";
import './globals.scss'
import Hero from "./components/Hero/Hero";
export default function Home() {
  return (
    <div className={styles.page}>
 <Hero/>
      
    </div>
  );
}
