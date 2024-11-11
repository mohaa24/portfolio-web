import styles from "./Footer.module.scss";

const Footer = (): JSX.Element => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerInner}>
        © 2024 MOHAA24. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
