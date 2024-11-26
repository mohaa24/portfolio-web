import Link from "next/link";
import styles from "./NavBar.module.scss";
import { useEffect, useState } from "react";
import Button from "antd/es/button";
import { useAppContext } from "@/app/context/appContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import logo from '@/app/logo.svg';
type TTabs = {
  label: string;
  key: string;
};

const NavBar = (): JSX.Element => {
  const {selectedTab,setSelectedTab} = useAppContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ButtonStyle = {
    // color: "white",
    color:"#999",
    fontWeight:600,
    background:'none'
  };
  const ActiveButtonStyle = {
    background: "rgba(88,175,223,.1)",
    color: "rgb(88 196 220)",
    fontWeight: 600,
  };

  const clickHandler = (key: string) => {
    setSelectedTab(key);
  };

  const tabs: TTabs[] = [
    {
      key: "home",
      label: "Home",
    },
    {
      key: "about",
      label: "About",
    },
    {
      key: "skills",
      label: "Skills",
    },
    {
      key: "experience",
      label: "Experience",
    },

  ];

  const tabList = tabs.map((item: TTabs) => {
    return (
      <li key={item.key}>
        <Button
          color="default"
          className={
            item.key === "contact" ? styles.specialBtn : styles.normalBtn
          }
          style={selectedTab === item.key ? ActiveButtonStyle : ButtonStyle}
          onClick={() => clickHandler(item.key)}
          variant={item.key === "contact" ? "filled" : "filled"}
        >
          {item.label}
        </Button>
        {/* <button className="text-grey bg-secondaryBlue py-1 px-2">{item.label}</button> */}
      </li>
    );
  });
const [darkMode ,setDarkMode]= useState(true);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav
      className={`${styles.navbar} fixed py-4 w-full backdrop-blur-sm flex flex-row align-baseline justify-center border-solid border-borderColor border-b-2`}
    >
      <div className={`${styles.navbarContainer} md:w-5/6 `}>
        <div className={`${styles.logo} flex-row flex text-3xl font-extrabold`}>
          {/* <div className="text-primaryColor">{""}Adnan</div>
          <div className=" text-white">.dev{""}</div> */}
          <img src={logo.src} alt="" />
        </div>
        <ul className={`${styles.navLinks}`}>
          {tabList && tabList}

          <div className="">
            <DarkModeSwitch
            style={{marginTop:6}}
              sunColor="yellow"
              moonColor="#fff"
              checked={darkMode}
              onChange={() => {
                setDarkMode(!darkMode);
              }}
              size={20}
            />
          </div>
        </ul>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
