import styles from  './Projects.module.scss';

export const Projects = ():JSX.Element=>{
return (
  <>
    <div
      className={`flex flex-col p-10 gap-5 align-middle justify-center text-black dark:text-primaryFont relative md:text-center`}
    >
      <h1 className=" text-5xl w-full text-white antialiased mb-5 md:text-8xl">
        My Works.
      </h1>
      <div className=" text-white antialiased font-sans text-2xl font-700 p-5 my-10border-solid border-borderColor rounded-xl border-2 mt-16 md:text-4xl  ">
        Coming Soon...
      </div>
    </div>
  </>
);
}