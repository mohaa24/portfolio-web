import React from "react";
import { ConfigProvider, Timeline as T } from "antd";
import { SiReact } from "react-icons/si";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useAppContext } from "@/app/context/appContext";


const Timeline = (): JSX.Element => {
  type TXpItem = {
    text: JSX.Element;
    icon: IconProp;
    label: string;
  };
  const {darkMode} = useAppContext();
const renderIcon = (icon:IconProp):JSX.Element=>{
  return (
    <FontAwesomeIcon
      icon={icon}
      style={{ width: "15px", color: "white" }}
    />
  );
      
}
const renderContent = (content: JSX.Element) => {
  return <div className="mr-3 md:text-xl">{content}</div>;
};

const renderLabel = (label:string)=>{
  return<div className="mx-3 ">{label}</div>
}
  const XpItems: TXpItem[] = [
    {
      text: (
        <>
        Promoted to L2 Software Engineer at Noon. 
        </>
      ),
      icon: faBriefcase,
      label: "2025 - Present",
    },
      {
      text: (
        <>
        Became L1 Software Engineer at Noon. 
        </>
      ),
      icon: faBriefcase,
      label: "2021 - 2024",
    },
    {
      text: (
        <>
        Pursued a Master's in Data Science at the University of Greenwich,
          specializing in machine learning and analytics.
        </>
      ),
      icon: faGraduationCap,
      label: "2022 - 2024",
    },

    {
      text: (
        <>
        Started as a Junior Developer at the Chartered Institute for
          Securities & Investment (CISI). 
        </>
      ),
      icon: faBriefcase,
      label: "2020 - 2021",
    },
    {
      text: (
        <>
        Completed a Bachelor's degree in Software Engineering at London
          Metropolitan University, gaining foundational knowledge in software
          development.
        </>
      ),
      icon: faGraduationCap,
      label: "2018 - 2021",
    },
    {
      text: (
        <>
        Started at WNS/Aviva Insurance as reinsurance accountant and progressed to RPA.
        </>
      ),
      icon: faBriefcase,
      label: "2017 - 2020",
    },
  ];
  const renderedTimeLineItems:any = [];

  XpItems.map((item: TXpItem) => {
    renderedTimeLineItems.push({
      children: renderContent(item.text),
      // color: "purple",
      label: renderLabel(item.label),
      dot:<div className=" flex items-center justify-center w-[30px] h-[30px] border-2 bg-black rounded-full border-borderColor border-solid ">{renderIcon(item.icon)}</div>
    });
  });

  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Timeline: {
              tailColor: darkMode ? "white" : "black",
              colorText: darkMode ? "white" : "black",
              dotBg: darkMode ? "black" : "white",
              tailWidth: 1,
              itemPaddingBottom: 50,
            },
          },
        }}
      >
        <T mode="alternate" items={renderedTimeLineItems} />
      </ConfigProvider>
    </div>
  );
};
export default Timeline;
