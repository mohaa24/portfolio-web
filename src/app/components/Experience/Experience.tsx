import DotPattern from '@/components/ui/dot-pattern';
import { Container } from '../Container/Container';
import styles from './Experience.module.scss'
import Timeline from './Timeline/Timeline';
import { cn } from '@/lib/utils';

export const Experience = ():JSX.Element=>{
return (
  <>
    <div
      className={`flex flex-col p-10 gap-5 align-middle justify-center relative ${styles.custom} md:text-center`}
    >
      <h1 className=" text-5xl w-full text-white antialiased mb-5 md:text-8xl">
        My Timeine...
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati sit
        vitae, explicabo blanditiis corporis modi expedita quos exercitationem
        consequuntur mollitia nam, voluptates dolorem? Quasi minus tempora
        blanditiis soluta dolore minima.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati sit
        vitae, explicabo blanditiis corporis modi expedita quos exercitationem
        consequuntur mollitia nam, voluptates dolorem? Quasi minus tempora
        blanditiis soluta dolore minima.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati sit
        vitae, explicabo blanditiis corporis modi expedita quos exercitationem
        consequuntur mollitia nam, voluptates dolorem? Quasi minus tempora
        blanditiis soluta dolore minima.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati sit
        vitae, explicabo blanditiis corporis modi expedita quos exercitationem
        consequuntur mollitia nam, voluptates dolorem? Quasi minus tempora
        blanditiis soluta dolore minima.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati sit
        vitae, explicabo blanditiis corporis modi expedita quos exercitationem
        consequuntur mollitia nam, voluptates dolorem? Quasi minus tempora
        blanditiis soluta dolore minima.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati sit
        vitae, explicabo blanditiis corporis modi expedita quos exercitationem
        consequuntur mollitia nam, voluptates dolorem? Quasi minus tempora
        blanditiis soluta dolore minima.
      </p>

      <div className="">
        <Timeline />
      </div>
    </div>
  </>
);
}