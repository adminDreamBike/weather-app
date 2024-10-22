/* eslint-disable @typescript-eslint/no-explicit-any */
import { LocalNames } from "@/types";
import { create } from "zustand";

interface LocationStoreState {
  location: [
    {
      country: string;
      lat: number;
      local_names?: LocalNames;
      lon: number;
      name: string;
      state: string;
    }
  ];
}
interface Actions {
  setLocation: (location: any) => void;
}

const INITIAL_STATE: LocationStoreState = {
  location: [
    {
      country: "Colombia",
      lat: 6.2443,
      lon: -75.5736,
      name: "Medellin",
      state: "Antioquia",
    },
  ],
};
export const useLocationStore = create<LocationStoreState & Actions>((set) => ({
  location: INITIAL_STATE.location,
  setLocation: (location) =>
    set(() => ({
      location: location,
    })),
}));
