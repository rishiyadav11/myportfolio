"use client";

import React from "react";
import WindowControl from "@/components/WindowControl";
import WindowWrapper from "@/hoc/WindowWrapper";
import useWindowStore from "@/store/window";
import { useMediaQuery } from "react-responsive";

const ImageFile = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile.data;

  // Responsive check
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  if (!data) return null;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div
        id="window-header"
        className="flex items-center justify-between border-b border-gray-300 p-2"
      >
        <WindowControl target="imgfile" />
        <h2 className="text-sm font-medium text-center pr-10">{data.name}</h2>
      </div>

      {/* Content */}
      <div className="overflow-auto p-4 flex-1 flex items-center justify-center">
        {data.imageUrl && (
          <img
            src={data.imageUrl}
            alt={data.name}
            className={`max-w-full max-h-full object-contain rounded ${
              isMobile ? "w-full" : ""
            }`}
          />
        )}
      </div>
    </div>
  );
};

const ImageFileWindow = WindowWrapper(ImageFile, "imgfile");

export default ImageFileWindow;


