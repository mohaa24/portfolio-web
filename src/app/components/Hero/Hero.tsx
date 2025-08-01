import styles from "./Hero.module.scss";
import { DoubleLeftOutlined } from "@ant-design/icons";
import AnimatedCanvas from "../ParticleEffect/ParticleEffect";
import { useAppContext } from "@/app/context/appContext";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import img from '../../adnan.png'
import { motion } from "framer-motion";
const Hero = () => {
  const {darkMode}=useAppContext();
  return (
<motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`h-[90vh] w-full flex items-center justify-center flex-grow md:w-5/6 md:h-auto`}
   
    >
      <div className="grid items-center grid-cols-2 md:grid-cols-3 w-4/6 z-20 text-black dark:text-[#fff]">
        <div className="col-span-2 md:col-span-1 flex items-center justify-center ">
          <Image width={300} height={300} alt="adnan" className=" rounded-full border-2 border-primaryColor  border-double object-contain  mb-5 w-[150px] md:w-[300px] md:block" src={img}/>
        </div>
        <div className="col-span-2  w-full backdrop-blur-sm">
         {/* <div className="text-2xl ">👋 Hi There...!</div>  */}
         <ReactTyped typeSpeed={150} cursorChar="_" className="text-2xl md:text-4xl mb-3 text-secondaryFont" strings={[
        "Hi There...",
        "My name is",
        
      ]}/>
             <h1
          className={`${styles.glitch} !mt-5 text-left  text-3xl md:text-6xl font-bold w-full !mb-5`}
          data-text="MOHAMED"
        >
          MOHAMED 
        </h1>
             <h1
          className={`${styles.glitch} text-left  text-3xl md:text-6xl font-bold w-full !mb-5`}
          data-text="ADNAN"
        >
          ADNAN 
        </h1>
        <hr className="mb-3 text-primaryColor"/>
        
          <div className=" font-thin text-md md:text-2xl">I create scalable, responsive web experiences using React and Next.js. Always excited to tackle new challenges and learn new tech.</div>

        </div>
      </div>
      </motion.div>
  );
};

export default Hero;
