"use client";

import Particles from "@/components/ui/particles";

import * as React from "react";

const AnimatedCanvas: React.FC = ({}) => {

  return (
    <Particles
        className="w-full h-full"
        quantity={800}
        ease={100}
        color={'#ffff'}
        refresh
      />
  );
};

export default AnimatedCanvas;
