"use client";
import useWindowStore from "@/store/window";
import { RxCross2 } from "react-icons/rx";
import { FiMinus } from "react-icons/fi";
import { FiMaximize2 } from "react-icons/fi";
import React from "react";

const WindowControl = ({ target }: { target: string }) => {
  const { CloseWindow,  toggleMaximizeWindow } = useWindowStore();

  const btnStyle =
    "w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] text-black/70";

  return (
    <div className="flex items-center gap-2 ml-2">

      {/* Close */}
      <button
        className={`${btnStyle} bg-[#ff5f57] hover:cursor-pointer hover:scale-110 transition`}
        onClick={() => CloseWindow(target)}
      >
        <RxCross2 size={8} />
      </button>

      {/* Minimize */}
      <button
        className={`${btnStyle} bg-[#febc2e] hover:cursor-pointer hover:scale-110 transition`}
        onClick={() => CloseWindow(target)}
      >
        <FiMinus size={10} />
      </button>

      {/* Maximize */}
      <button
        className={`${btnStyle} bg-[#28c840] transition`}
        
      >
        <FiMaximize2 size={9} />
      </button>
    </div>
  );
};

export default WindowControl;
