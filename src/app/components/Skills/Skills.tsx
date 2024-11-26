import { BorderBeam } from '@/components/ui/border-beam';
import styles from './Skills.module.scss';
import Stack from './Stack/Stack';
import { Container } from '../Container/Container';


export const Skills = ():JSX.Element=>{


return (
  <>
    <div
      className={`flex flex-col gap-5 align-middle justify-center relative ${styles.custom} md:text-center`}
    >
      <h1 className=" text-6xl w-full text-white antialiased mb-5 md:text-8xl">
        Things I've used...
      </h1>
      <div className=" bg-black">
        <Container props={{ type: "border" }}>
          <Stack />
        </Container>
      </div>
    </div>
  </>
);
}