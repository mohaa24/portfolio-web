import { BorderBeam } from '@/components/ui/border-beam';
import styles from './Skills.module.scss';
import Stack from './Stack/Stack';
import { Container } from '../Container/Container';


export const Skills = ():JSX.Element=>{


return (
  <>
    <div
      className={`flex flex-col gap-5 align-middle justify-center relative ${styles.custom} text-black dark:text-primaryFont md:text-center backdrop-blur-sm -z-1`}
    >
      <h1 className=" text-5xl text-white antialiased mb-5 md:text-8xl w-full">
        Things I've used...
      </h1>
      <div className=" bg-primaryFont dark:bg-black w-[80vw] md:w-auto">
        <Container props={{ type: "border" }}>
          <Stack />
        </Container>
      </div>
    </div>
  </>
);
}