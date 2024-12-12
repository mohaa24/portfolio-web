"use client";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import styles from "./layout.module.scss";
// import "./styles/theme.scss";
import "./globals.scss"
import { AppContextProvider, useAppContext } from "./context/appContext";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppContextProvider>
      {/* Wrap AppContextProvider first */}
      <InnerLayout>{children}</InnerLayout>
    </AppContextProvider>
  );
}

function InnerLayout({ children }: { children: React.ReactNode }) {
  // Access `darkMode` here, after the AppContextProvider wraps this component
  const { darkMode } = useAppContext();

  return (
    <html className={`${styles.root} ${darkMode ? "dark" : ""}`} lang="en">
      <meta />
      {/* <ParticleEffect/> */}
      <body className={` bg-white dark:bg-black ${styles.bodyContainer}`}>
        {/* <div>Loader</div> */}
        <div
          className={`${styles.container} antialiased text-primaryFont selection:bg-primaryColor`}
        >
          <NavBar />
          <main className={`${styles.wrapper} w-full overflow-hidden`}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}


