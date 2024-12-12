"use client";

import { useAppContext } from "@/app/context/appContext";
import Particles from "@/components/ui/particles";

import * as React from "react";

const AnimatedCanvas: React.FC = ({}) => {
const {darkMode}= useAppContext();
  return (
    <Particles
        className="w-full h-full"
        quantity={800}
        ease={100}
        color={darkMode? '#ffff':'#fff1122'}
        refresh
      />
  );
};

export default AnimatedCanvas;
