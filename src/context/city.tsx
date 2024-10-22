"use client";

import React, { createContext, useState } from "react";
interface CityContextValue {
  name: string;
  setName: (name: string) => void;
}
export const CityContext = createContext<CityContextValue>({
  name: "Medellin",
  setName() {},
});

export function CityProvider({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState("Medellin");

  return (
    <CityContext.Provider value={{ name, setName }}>
      {children}
    </CityContext.Provider>
  );
}
