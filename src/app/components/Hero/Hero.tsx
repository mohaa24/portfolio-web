import { useGlitch } from "react-powerglitch";
import styles from "./Hero.module.scss";

const Hero = () => {
  const glitch = useGlitch();
  return (
    <div className={styles.heroMainContainer}>
      <div className={styles.headLine}>
        <h1 className={styles.glitch} data-text="I'M ADNAN">
          I'M ADNAN
        </h1>
      </div>
    </div>
  );
};

export default Hero;
