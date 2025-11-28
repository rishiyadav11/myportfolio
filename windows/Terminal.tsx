"use client";

import WindowControl from "@/components/WindowControl";
import { techStack } from "@/constants";
import WindowWrapper from "@/hoc/WindowWrapper";
import { Check, Flag } from "lucide-react";
import React from "react";

const Terminal = () => {
  return (
    <div className="flex h-full flex-col max-sm:overflow-hidden">
      <div
        id="window-header"
        className="sticky top-0 z-10 flex items-center gap-4"
      >
        <WindowControl target="terminal" />
        <h2 className="text-sm font-semibold">Tech stacks</h2>
      </div>

      <div className="techstack flex-1 overflow-y-auto">
        <span className="font-bold">@rishiyadav %</span> show techstacks
        <div className="label">
          <p className="w-32 font-semibold max-sm:w-24">Category</p>
          <p className="font-semibold">Technologies</p>
        </div>
        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li
              key={category}
              className="flex flex-col sm:flex-row sm:items-center gap-3"
            >
              <div className="flex items-center gap-3">
                <Check className="check" size={20} />
                <h3>{category}</h3>
              </div>

              <ul className="flex flex-wrap gap-2 text-sm">
                {items.map((item, index) => (
                  <li key={index}>
                    {item}
                    {index < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="footnote">
          <p>
            <Check size={20} /> Verified skills & production-ready experience.
          </p>
          <p className="text-black flex items-center gap-2">
            <Flag size={20} /> Render time : 6ms
          </p>
        </div>
      </div>
    </div>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;
