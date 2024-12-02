import { useGlitch } from "react-powerglitch";
import styles from "./Hero.module.scss";
import { ReactTyped } from "react-typed";
import { DoubleLeftOutlined } from "@ant-design/icons";
import AnimatedCanvas from "../ParticleEffect/ParticleEffect";
const Hero = () => {
  const glitch = useGlitch();
  return (
    <div className={`${styles.heroMainContainer} md:w-5/6`}>
      <div className=" absolute w-full h-full top-0 left-0">
        <AnimatedCanvas />
      </div>

      <div
        className={`${styles.headLine} flex justify-center align-middle flex-col`}
      >
        {/* <div className="text-6xl bg-secondaryOverlay p-5 rounded-xl">
          <ReactTyped
            startWhenVisible
            strings={[
              "Hi There...!",
              
            ]}
            typeSpeed={60}
            cursorChar={"_"}
          />
        </div> */}
        <h1
          className={`${styles.glitch} text-4xl w-5/6 md:text-6xl w-full`}
          data-text="I'M ADNAN"
        >
          I'M ADNAN
        </h1>
      </div>
      <div className={`${styles.sub} text-primaryColor font-medium`}>
        {/* <ReactTyped
          startWhenVisible
          strings={[
            "Based in London...",
            "Fullstack Developer...",
            "With over 5 years of experience...",
          ]}
          typeSpeed={100}
          cursorChar={"_"}
          loop
        /> */}
      </div>
      <div className={styles.scroll}>
        <DoubleLeftOutlined />
      </div>
    </div>
  );
};

export default Hero;
