import { locations } from "@/constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type RootLocation = (typeof locations)[keyof typeof locations];
type ChildLocation = typeof locations.work.children[number];

export type LocationType = RootLocation | ChildLocation;

interface LocationStoreType {
  activeLocation: LocationType;
  setActiveLocation: (location: LocationType) => void;
  resetActiveLocation: () => void;
}

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create<LocationStoreType>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location) =>
      set((state) => {
        state.activeLocation = location;
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  }))
);

export default useLocationStore;
