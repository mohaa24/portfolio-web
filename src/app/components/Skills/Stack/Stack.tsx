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
  const [current, setCurrent] = useState<TCategories>("all");

  const items: MenuItem[] = [
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
    {
      label: "All",
      key: "all",
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
      label: "Next.js",
      key: "next",
      type: ["front"],
      node: <>Next.js</>,
    },
    {
      label: "Redux",
      key: "redux",
      type: ["front"],
      node: <>Redux</>,
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
      label: "Tailwind",
      key: "tailwind",
      type: ["front"],
      node: <>Tailwind</>,
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
    setCurrent(e.target.id);
  };
  let filtered: TStack[] = stackItems;

  if (current !== "all") {
    filtered = stackItems.filter((item) => item.type.includes(current));
  }
  return (
    // <Menu
    //   onClick={onClick}
    //   selectedKeys={[current]}
    //   mode="horizontal"
    //   items={items}
    //   theme="dark"
    // />
    <div className=" border-2 border-borderColor rounded-xl p-5">
      <div className=" border-b-2 border-borderColor flex gap-5 flex-row">
        {items.map((item: any) => (
          <div
            className={` cursor-pointer ${item.key === current && "border-b-2 border-primaryColor"}`}
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
            <div className="text-primaryColor bg-primaryOverlay rounded-xl px-2 py-1 ">
              {item.node}
            </div>
          ))}
      </div>
    </div>
  );
};
export default Stack;
