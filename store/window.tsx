import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@/constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface WindowConfigType {
  [key: string]: {
    isOpen: boolean;
    zIndex: number;
    data: any;
  };
}

interface WindowStoreType {
  windows: WindowConfigType;
  nextZindex: number;
  openWindow: (windowKey: string, data?: any) => void;
  CloseWindow: (windowKey: string) => void;
  FocusWindow: (windowKey: string) => void;
}

const useWindowStore = create<WindowStoreType>()(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZindex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = true;
        win.zIndex = state.nextZindex;
        win.data = data ?? win.data;
        state.nextZindex++;
      }),

    CloseWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    FocusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.zIndex = state.nextZindex++;
      }),
  }))
);

export default useWindowStore;
