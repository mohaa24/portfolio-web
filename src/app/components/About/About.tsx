import { BorderBeam } from '@/components/ui/border-beam';
import Me from '../Me/Me';
import styles from './About.module.scss';
import { Container } from '../Container/Container';

export const About = ():JSX.Element=>{
return (
  <>
    <Container>
      <div
        className={`${styles.AboutCtr}flex flex-row rounded-xl backdrop-blur-sm p-10 border-2 border-solid border-borderColor md:flex flex-row`}
      >
        <div className="flex flex-col  gap-30 align-middle text-left md:w-3/6">
          <h1 className="text-center text-4xl md:text-8xl">About Me...</h1>
          <div className=" w-full flex justify-center ">
            <Me />
          </div>
        </div>

        <div className="font-sans text-lg font-medium md:w-3/6">
          {" "}
          <p>
            My journey into coding began with a simple yet transformative
            task—automating an Excel sheet using VBA. This sparked my passion
            for problem-solving through technology. Soon after, I joined the
            Reinsurance team at Aviva, where I collaborated with the RPA team to
            support the development of a payment tool, streamlining operational
            efficiency.
          </p>
          <br />
          <p>
            Later, I joined the Chartered Institute for Securities & Investment
            (CISI) as a Junior Developer, where I prototyped a new Intranet web
            app using React, enhanced data flow from APIs, and supported
            marketing campaigns by creating dynamic web solutions. I even
            developed a virtual annual report using Three.js to deliver an
            engaging user experience.
          </p>{" "}
          <br />
          <p>
            {" "}
            Currently, I’m working at Noon as an L1 Software Engineer, focusing
            on building seller-based solutions using Next.js and React. My work
            involves transforming Figma designs into responsive web interfaces,
            implementing scalable data flows, and maintaining high coding
            standards. I’ve led key projects like the App-intel platform, which
            increased seller engagement by 2.5x, and the Partner-pricing-engine,
            enhancing pricing robustness with dynamic error handling.
          </p>{" "}
          <br />
        </div>
      </div>
    </Container>
  </>
);
}