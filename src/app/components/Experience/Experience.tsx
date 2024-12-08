import DotPattern from '@/components/ui/dot-pattern';
import { Container } from '../Container/Container';
import styles from './Experience.module.scss'
import Timeline from './Timeline/Timeline';
import { useState } from 'react';

export const Experience = ():JSX.Element=>{
return (
  <>
    <div
      className={`flex flex-col p-10 gap-5 align-middle justify-center text-black dark:text-primaryFont relative ${styles.custom} md:text-center`}
    >
      <h1 className=" text-5xl w-full text-white antialiased mb-5 md:text-8xl">
        My Timeine...
      </h1>
      <div className="">
        <Timeline />
      </div>
    </div>
  </>
);
}