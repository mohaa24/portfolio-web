import { useGlitch } from "react-powerglitch";
import styles from "./Hero.module.scss";
import { ReactTyped } from "react-typed";
import { DoubleLeftOutlined } from "@ant-design/icons";
const Hero = () => {
  const glitch = useGlitch();
  return (
    <div className={styles.heroMainContainer}>
      <div className={styles.headLine}>
        <h1 className={styles.glitch} data-text="I'M ADNAN">
          I'M ADNAN
        </h1>
      </div>
      <div className={styles.sub}>
        <ReactTyped
          startWhenVisible
          strings={[
            "Based in London...",
            "Fullstack Developer...",
            "With over 5 years of experience...",
          ]}
          typeSpeed={100}
          cursorChar={"_"}
          loop
        />
      </div>
      <div className={styles.scroll}>
        <DoubleLeftOutlined />
      </div>
    </div>
  );
};

export default Hero;
