import React, { createContext, useContext, useState } from "react";
import NavigationBar from "../components/NavigationBar";

export const NavigationContext = createContext(null);

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = (props: { children: JSX.Element }) => {
  const [navigationType, setNavigationType] = useState<
    "fixed" | "sticky" | "hidden"
  >("sticky");
  const value = {
    showNavigation: navigationType,
    setShowNavigation: setNavigationType,
  };
  return (
    <NavigationContext.Provider value={value}>
      <NavigationBar
        className={`${
          navigationType === "sticky"
            ? "sticky"
            : navigationType === "fixed"
            ? ""
            : "hidden"
        }`}
      />
      {props.children}
    </NavigationContext.Provider>
  );
};
