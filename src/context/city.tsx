"use client";

import { createContext, useState } from "react";
interface CityContextValue {
  name: string;
  setName: (name: string) => void;
}
export const CityContext = createContext<CityContextValue>({
  name: "Medellin",
  setName() {},
});

export function CityProvider({ children }) {
  const [name, setName] = useState("Medellin");

  return (
    <CityContext.Provider value={{ name, setName }}>
      {children}
    </CityContext.Provider>
  );
}
