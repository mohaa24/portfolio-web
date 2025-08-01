import { FileText, Linkedin, Mail } from "lucide-react";
import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <div
      className={`${styles.footerContainer} z-10 py-4 w-full backdrop-blur-sm border-solid border-borderColor border-t-2`}
    >
      <div className={`${styles.footerInner} text-secondaryFont flex justify-between w-full`}>
        <div>        © 2024 - Present, MOHAA24. All rights reserved.
        </div>
        <div className="flex gap-5">
          <Link href={'mailto:msmadnan20@gmail.com'}><Mail /></Link>
          <Link href={'https://www.linkedin.com/in/mohamed--adnan/'} target="_blank"><Linkedin /></Link>
          <Link href={'https://drive.google.com/file/d/1x_mOXhhiHMEuP57vfnLd6R5Qt_1QCU4K/view?usp=sharing'} target="_blank"> <FileText /></Link>

        </div>
      </div>
    </div>
  );
};

export default Footer;
