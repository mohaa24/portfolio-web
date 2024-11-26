import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of your context
interface AppContextProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

// Create the context
const AppContext = createContext<AppContextProps | undefined>(undefined);

// Provider component
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTab, setSelectedTab] = useState<string>("home");

  return (
    <AppContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook for consuming the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
