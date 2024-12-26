"use client";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import styles from "./layout.module.scss";
// import "./styles/theme.scss";
import "./globals.scss"
import { AppContextProvider, useAppContext } from "./context/appContext";

import React, { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    // Dynamically load the Google Analytics script
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-34WCE6VCFD";
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", "G-34WCE6VCFD");
  }, []);

  return null; // No UI to render
};


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
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-34WCE6VCFD"
        ></script>
        <script>
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-34WCE6VCFD');
    `}
        </script>
      </head>
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


