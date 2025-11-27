"use client";

import WindowControl from "@/components/WindowControl";
import { techStack } from "@/constants";
import WindowWrapper from "@/hoc/WindowWrapper";
import { Check, Flag } from "lucide-react";
import React from "react";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
<WindowControl target="terminal" />
        <h2>Tech stacks</h2>
      </div>

      <div className="techstack">
        <span className="font-bold">@rishiyadav %</span> show techstacks

        {/* Table header */}
        <div className="label">
          <p className="w-32 font-semibold">Category</p>
          <p className="font-semibold">Technologies</p>
        </div>

        {/* Table rows */}
        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-center">
              <Check className="check" size={20} />
              <h3>{category}</h3>

              <ul>
                {items.map((item, index) => (
                  <li key={index}>{item}{index < items.length - 1 ? ',' : ''}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Footnote */}
        <div className="footnote">
          <p>
            <Check size={20} /> Verified skills & production-ready experience.
          </p>
          <p className="text-black">
<Flag size={20} /> Render time : 6ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;
