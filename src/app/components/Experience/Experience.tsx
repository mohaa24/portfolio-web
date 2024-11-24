import styles from './Experience.module.scss'

export const Experience = ():JSX.Element=>{
return (
  <>
    <div className={`${styles.xpCtr}`}>
      <h1 className=" text-4xl text-left w-full text-white antialiased">
        Experience
      </h1>
      <div className=" text-white antialiased font-sans">
        <p>
          My journey into coding began with a simple yet transformative
          task—automating an Excel sheet using VBA. This sparked my passion for
          problem-solving through technology. Soon after, I joined the
          Reinsurance team at Aviva, where I collaborated with the RPA team to
          support the development of a payment tool, streamlining operational
          efficiency.
        </p>
        <br />
        <p>
          Later, I joined the Chartered Institute for Securities & Investment
          (CISI) as a Junior Developer, where I prototyped a new Intranet web
          app using React, enhanced data flow from APIs, and supported marketing
          campaigns by creating dynamic web solutions. I even developed a
          virtual annual report using Three.js to deliver an engaging user
          experience.
        </p>{" "}
        <br />
        <p>
          {" "}
          Currently, I’m working at Noon as an L1 Software Engineer, focusing on
          building seller-based solutions using Next.js and React. My work
          involves transforming Figma designs into responsive web interfaces,
          implementing scalable data flows, and maintaining high coding
          standards. I’ve led key projects like the App-intel platform, which
          increased seller engagement by 2.5x, and the Partner-pricing-engine,
          enhancing pricing robustness with dynamic error handling.
        </p>{" "}
        <br />
        <p>
          With expertise in both front-end and back-end technologies, I’m
          passionate about creating impactful and scalable solutions. Beyond
          coding, I enjoy exploring emerging technologies and refining my craft
          through personal projects and collaborations.
        </p>
        <br /> <br /> <br />
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  
  </>
);
}