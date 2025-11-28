import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@/constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface WindowConfigType {
  [key: string]: {
    isOpen: boolean;
    zIndex: number;
    data: any;
    isMinimized?: boolean;
    isMaximized?: boolean;
  };
}

interface WindowStoreType {
  windows: WindowConfigType;
  nextZindex: number;
  openWindow: (windowKey: string, data?: any) => void;
  CloseWindow: (windowKey: string) => void;
  FocusWindow: (windowKey: string) => void;
  minimizeWindow: (windowKey: string) => void;
  toggleMaximizeWindow: (windowKey: string) => void;
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
        win.isMinimized = false;
        state.nextZindex++;
      }),

    CloseWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
        win.isMinimized = false;
        win.isMaximized = false;
      }),

    FocusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.zIndex = state.nextZindex++;
      }),

    // ✅ Minimize window
    minimizeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isMinimized = true;
      }),

    // ✅ Toggle maximize / restore
    toggleMaximizeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isMaximized = !win.isMaximized;
        win.isMinimized = false;
      }),
  }))
);

export default useWindowStore;
