import styles from "./Footer.module.scss";

const Footer = (): JSX.Element => {
  return (
    <div
      className={`${styles.footerContainer} py-4 w-full backdrop-blur-sm border-solid border-borderColor border-t-2`}
    >
      <div className={`${styles.footerInner} text-secondaryFont`}>
        © 2024 MOHAA24. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
