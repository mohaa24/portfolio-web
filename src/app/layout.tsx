"use client";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import styles from "./layout.module.scss";
import "./styles/theme.scss";
import "./globals.scss"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={styles.root} lang="en">
      <body className={styles.bodyContainer}>
        {/* <div>Loader</div> */}
        <div className={styles.container}>
          <NavBar />
          <main className={styles.wrapper}>{children}</main>
          <Footer />
          <div className={`${styles.line} ${styles.top}`}></div>
          <div className={`${styles.line} ${styles.right}`}></div>

          <div className={`${styles.line} ${styles.left}`}></div>

          <div className={`${styles.line} ${styles.bottom}`}></div>
        </div>
      </body>
    </html>
  );
}
