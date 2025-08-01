import DotPattern from '@/components/ui/dot-pattern';
import { Container } from '../Container/Container';
import styles from './Experience.module.scss'
import Timeline from './Timeline/Timeline';
import { useState } from 'react';

export const Experience = ():JSX.Element=>{
return (
  <>
    <div
      className={`flex flex-col p-10 gap-5 justify-center items-center text-black dark:text-primaryFont ${styles.custom} md:text-center`}
    >
      <h1 className=" text-5xl w-full text-white antialiased mb-5 md:text-8xl">
        My Timeine...
      </h1>
      <div className="w-full md:w-4/6  backdrop-blur-sm">
        <Timeline />
      </div>
    </div>
  </>
);
}