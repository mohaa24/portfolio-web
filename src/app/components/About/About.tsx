import { BorderBeam } from '@/components/ui/border-beam';
import Me from '../Me/Me';
import styles from './About.module.scss';
import { Container } from '../Container/Container';

export const About = ():JSX.Element=>{
return (
  <>
    {/* <Container> */}
    <div
      className={`${styles.AboutCtr} text-black rounded-xl p-10 dark:text-primaryFont  md:flex flex-row `}
    >
      <div className="flex flex-col gap-30 md:w-2/6 md:items-end">
        <h1 className="text-6xl pr-10 md:text-right md:text-9xl ">
          About
          <br className=" hidden md:block" /> Me
        </h1>
        {/* <div className=" w-full flex justify-center hidden md:flex ">
          <Me />
        </div> */}
      </div>

      <div className="font-sans text-lg font-medium md:w-4/6">
        {" "}
        <p>
          Back in 2017, I stumbled upon the idea of automating a tedious Excel
          task. What started as a small experiment quickly became a
          transformative experience—when the automation worked, the rush of
          dopamine sparked a deep fascination with coding. That moment sent me
          down the rabbit hole of software development and ultimately led me to
          pursue a Diploma in Computing, followed by a Bachelor's in Software
          Engineering.
        </p>
        <br />
        <p>
          Although I started my career in accounting, I caught the attention of
          the Reinsurance team with some small but impactful improvements I made
          to the finance team's workflows. This led to my transition into the
          RPA team, where I contributed to automating processes that enhanced
          operational efficiency.
        </p>{" "}
        <br />
        <p>
          {" "}
          I thrive on solving complex problems, building solutions from scratch,
          and understanding how things work at a fundamental level. My curiosity
          also drove me to explore machine learning, where I developed custom ML
          models for side projects. This newfound passion inspired me to pursue
          a Master’s in Data Science to deepen my understanding and broaden my
          expertise in this field.
        </p>{" "}
        <br />
        <p>
          While I'm not coding, Love to play video games. &#127918; Watch some
          sci-fi or learn some cosmology!
        </p>
      </div>
    </div>
    {/* </Container> */}
  </>
);
}