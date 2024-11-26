"use client";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import styles from "./layout.module.scss";
// import "./styles/theme.scss";
import "./globals.scss"
import { AppContextProvider } from "./context/appContext";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppContextProvider>
      <html className={styles.root} lang="en">
        {/* <ParticleEffect/> */}
        <body className={styles.bodyContainer}>
          {/* <div>Loader</div> */}
          <div className={`${styles.container} antialiased text-primaryFont`}>
            <NavBar />
            <main className={`${styles.wrapper} w-screen overflow-hidden`}>{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </AppContextProvider>
  );
}
