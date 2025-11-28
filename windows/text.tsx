"use client";

import React from "react";
import WindowControl from "@/components/WindowControl";
import WindowWrapper from "@/hoc/WindowWrapper";
import useWindowStore from "@/store/window";
import { useMediaQuery } from "react-responsive";

const TextFile = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data;

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
        <WindowControl target="txtfile" />
        <h2 className="text-sm font-medium">{data.name}</h2>
      </div>

      {/* Content */}
      <div className="overflow-auto p-4 flex-1">
        {/* Optional image */}
        {data.image && (
          <img
            src={data.image}
            alt={data.name}
            className={`mb-4 rounded ${
              isMobile ? "w-full" : "w-64"
            }`}
          />
        )}

        {/* Optional subtitle */}
        {data.subtitle && (
          <h3 className="text-lg font-semibold mb-2">{data.subtitle}</h3>
        )}

        {/* Description paragraphs */}
        {data.description &&
          data.description.map((para: string, idx: number) => (
            <p key={idx} className="mb-2 text-sm">
              {para}
            </p>
          ))}
      </div>
    </div>
  );
};

const TextFileWindow = WindowWrapper(TextFile, "txtfile");

export default TextFileWindow;
