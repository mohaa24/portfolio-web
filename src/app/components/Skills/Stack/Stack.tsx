import Menu, { MenuProps } from "antd/es/menu";
import MenuItem from "antd/es/menu/MenuItem";
import { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

type TCategories = "front" | "back" | "ds" | "all";
type TStack = {
  label: string;
  key: string;
  type: TCategories[];
  node: JSX.Element;
};

const Stack = (): JSX.Element => {
  const [current, setCurrent] = useState<TCategories>("front");

  const items: MenuItem[] = [
    {
      label: "All",
      key: "all",
    },
    {
      label: "Front-End",
      key: "front",
      icon: "",
    },
    {
      label: "Back-End",
      key: "back",
    },
    {
      label: "Data Science",
      key: "ds",
    },
  ];

  const stackItems: TStack[] = [
    // Front-End
    {
      label: "React.js",
      key: "react",
      type: ["front"],
      node: <>React</>,
    },
     {
      label: "React Native",
      key: "reactNative",
      type: ["front"],
      node: <>React Native</>,
    },
    {
      label: "Next.js",
      key: "next",
      type: ["front"],
      node: <>Next.js</>,
    },
     {
      label: "Tailwind CSS",
      key: "tailwind",
      type: ["front"],
      node: <>Tailwind CSS</>,
    },
       {
      label: "React Hook Form",
      key: "hookForm",
      type: ["front"],
      node: <>React Hook Form</>,
    },
    {
      label: "Zustand",
      key: "redux",
      type: ["front"],
      node: <>Zustand</>,
    },
    {
      label: "Apollo Client",
      key: "apollo",
      type: ["front"],
      node: <>Apollo</>,
    },
    {
      label: "SASS/SCSS",
      key: "sass",
      type: ["front"],
      node: <>SASS/SCSS</>,
    },
    {
      label: "Three.js",
      key: "three",
      type: ["front"],
      node: <>Three.js</>,
    },

    // Back-End
    {
      label: "Node.js",
      key: "node",
      type: ["back"],
      node: <>Node</>,
    },
    {
      label: "FastAPI",
      key: "fastapi",
      type: ["back"],
      node: <>FastAPI</>,
    },
    {
      label: "MongoDB",
      key: "mongodb",
      type: ["back"],
      node: <>MongoDB</>,
    },
    {
      label: "SQLAlchemy",
      key: "sqlalchemy",
      type: ["back"],
      node: <>SQLAlchemy</>,
    },
    {
      label: "BigQuery",
      key: "bigquery",
      type: ["back"],
      node: <>BigQuery</>,
    },
    {
      label: "Spanner",
      key: "spanner",
      type: ["back"],
      node: <>Spanner</>,
    },

    // Data Science
    {
      label: "Python",
      key: "python",
      type: ["ds"],
      node: <>Python</>,
    },
    {
      label: "FastAI",
      key: "fastai",
      type: ["ds"],
      node: <>FastAI</>,
    },
    {
      label: "PyTorch",
      key: "pytorch",
      type: ["ds"],
      node: <>PyTorch</>,
    },
  ];

  const onClick = (e: any) => {
    console.log('clicking',e.target.id)
    setCurrent(e.target.id);
  };
  let filtered: TStack[] = stackItems;

  if (current !== "all") {
    filtered = stackItems.filter((item) => item.type.includes(current));
  }
  return (
    <div className=" border-2 border-borderColor rounded-xl p-5">
      <div className=" border-b-2 border-borderColor flex gap-5 flex-row overflow-scroll md:overflow-hidden">
        {items.map((item: any) => (
          <div
            className={` cursor-pointer ${item.key === current && "border-b-2 border-primaryColor"} text-nowrap`}
            id={item.key}
            onClick={(e) => onClick(e)}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="flex mt-2 gap-2 flex-wrap  md:w-[600px]">
        {filtered &&
          filtered.map((item) => (
            <div className="text-primaryColor bg-primaryOverlay rounded-xl px-2 py-1" key={item.key}>
              {item.node}
            </div>
          ))}
      </div>
    </div>
  );
};
export default Stack;
