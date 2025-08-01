import { useAppContext } from "@/app/context/appContext";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMemo } from "react";
import { About } from "../About/About";
import { Experience } from "../Experience/Experience";
import Hero from "../Hero/Hero";
import AnimatedCanvas from "../ParticleEffect/ParticleEffect";
import { Projects } from "../Projects/Projects";
import { Skills } from "../Skills/Skills";
import { Button } from "@/components/ui/button";

const tabOrder = ["home", "about", "skills", "experience", "projects"];


export const Home = () => {

    const { selectedTab, setSelectedTab } = useAppContext();

    const moveNext = () => {
        const currrentIdx = tabOrder.indexOf(selectedTab);
        let nextTab;
        if (tabOrder.length - 1 >= currrentIdx + 1) {
            nextTab = tabOrder[currrentIdx + 1];
        } else {
            nextTab = tabOrder[0];
        }
        setSelectedTab(nextTab)
    }

    const movePrev = () => {
        const currrentIdx = tabOrder.indexOf(selectedTab);
        let nextTab;
        if (currrentIdx - 1 >= 0) {
            nextTab = tabOrder[currrentIdx - 1];
        } else {
            nextTab = tabOrder[tabOrder.length - 1];
        }
        setSelectedTab(nextTab)
    }

    const items = useMemo(() => {
        switch (selectedTab) {
            case 'home':
                return (

                    <section id="home" className=" w-full h-full flex justify-center">

                        <Hero />
                    </section>
                );
            case 'about':
                return (
                    <section id="about" className=" h-full flex justify-center items-center md:text-start">
                        <div className=" md:w-4/6">
                            <About />
                        </div>
                    </section>);
            case 'skills':
                return (<section id="home" className="h-full w-full flex justify-center ">
                    {/* <DotPattern
              className={cn(
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] "
              )}
            /> */}
                    <Skills />
                </section>);
            case 'experience':
                return (<section id="home" className=" w-full flex justify-center">
                    <Experience />
                </section>);
            case 'projects':
                return (<section id="home" className=" w-full flex justify-center">
                    <Projects />
                </section>);

            default:
                return (<section id="home" className=" w-full flex justify-center">
                    <Hero />
                </section>);
        }
    }, [selectedTab])


    return (
        <div className={clsx('h-full')}>
            <div className=" absolute w-full h-full top-0 left-0 z-1">
                <AnimatedCanvas />
            </div>
            <div className="hidden md:flex absolute bottom-[65px] right-0 p-5 border-borderColor border border-1 m-3 rounded-xl backdrop-blur-md justify-center gap-5 z-10"><Button className="w-32 font-bold text-xl text-black dark:text-[#fff]" variant={'ghost'} onClick={() => movePrev()} disabled={!tabOrder.indexOf(selectedTab)}><ArrowLeft /> Previous</Button> <Button className="w-32 flex justify-end font-bold text-xl text-black dark:text-[#fff]" variant={'ghost'} onClick={() => moveNext()} disabled={(tabOrder.indexOf(selectedTab) === tabOrder.length - 1)}>Next <ArrowRight /></Button></div>
            <div className="h-full hidden md:block"   >

                {items}
            </div>


            <div className="backdrop-blur-sm w-full md:hidden md:backdrop-blur-0 md:w-auto">
                <section id="home" className=" flex justify-center">
                    <Hero />
                </section>{" "}
                <section id="about" className=" flex justify-center md:text-start">
                    <div className=" md:w-4/6">
                        <About />
                    </div>
                </section>
                <section
                    id="skills"
                    className={` p-10 relative md:py-40`}
                >
                    <div className={`flex flex-col items-center relative z-10`}>
                        <Skills />
                    </div>
                    <DotPattern
                        className={cn(
                            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
                        )}
                    />
                </section>{" "}
                <section
                    id="experience"
                    className="flex justify-center align-middle md:text-start"
                >
                    <div className=" md:w-3/6 ">
                        <Experience />
                    </div>
                </section>
                <section>
                    {" "}
                    <div
                        className="flex justify-center align-middle md:text-start"
                    >
                        <Projects />
                    </div>
                </section>

            </div>
        </div>
    );
}