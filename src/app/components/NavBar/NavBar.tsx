import Link from "next/link";
import styles from "./NavBar.module.scss";
import { useState } from "react";
import Button from "antd/es/button";

 type TTabs = {
   label: string;
   key: string;
 };

const NavBar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState("home");

  const ButtonStyle = {
    color: "white",
  };
  const ActiveButtonStyle = {
    background: "rgba(88,175,223,.1)",
    color: "rgb(88 196 220",
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
      key: "project",
      label: "Project",
    },
    {
      key:'contact',
      label:"Contact"
    }
  ];
 
  const tabList = tabs.map((item: any) => {
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
      </li>
    );
  });

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <Link href="/"> </Link>
        </div>
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          {tabList && tabList}
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
