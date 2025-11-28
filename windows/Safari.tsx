"use client";

import WindowControl from "@/components/WindowControl";
import WindowWrapper from "@/hoc/WindowWrapper";
import useWindowStore from "@/store/window";
import { motion } from "framer-motion";

import {
  ChevronLeft,
  ChevronRight,
  Copy,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const Safari = () => {
  const { windows, toggleMaximizeWindow } = useWindowStore();
  const isDesktop = typeof window !== "undefined" && window.innerWidth > 640;
  const safariWindow = windows.safari;
  const hasMaximizedRef = useRef(false);

  useEffect(() => {
    if (
      isDesktop &&
      safariWindow?.isOpen &&
      !safariWindow?.isMaximized &&
      !hasMaximizedRef.current
    ) {
      toggleMaximizeWindow("safari");
      hasMaximizedRef.current = true;
    }
    if (!safariWindow?.isOpen) {
      hasMaximizedRef.current = false;
    }
  }, [
    safariWindow?.isOpen,
    safariWindow?.isMaximized,
    isDesktop,
    toggleMaximizeWindow,
  ]);

  const [projects] = useState([
    {
      name: "Dash – Your AI Teammate 🤖",
      href: "https://usedash.vercel.app/",
      imgsrc: "assets/projectpics/dash.png",
      description:
        "Dash is an AI-powered personal agent that connects to Gmail, Slack, Calendar, and more to automate workflows.",
    },
    {
      name: "YouShift – Smart Shift Scheduling ⚡",
      href: "https://youshift.vercel.app/",
      imgsrc: "assets/projectpics/youshift.png",
      description:
        "YouShift is an AI-powered workforce scheduling platform for managing shifts easily.",
    },

    {
      name: "RB Health club 🏥",
      href: "https://www.rbhealthclub.com/",
      imgsrc: "assets/projectpics/rb.png",
      description:
        "A modern fitness platform offering workout plans, nutrition tracking, and more.",
    },
    {
      name: "Baemark 💖",
      href: "https://www.baemark.com/",
      imgsrc: "assets/projectpics/baemark.png",
      description:
        "A stylish e-commerce fashion store with personalized shopping.",
    },
    {
      name: "Pariksha Career Institute 🎓",
      href: "https://www.parikshacareerinstitute.in/",
      imgsrc: "assets/projectpics/pariksha.png",
      description:
        "Coaching institute for NEET, JEE, Olympiads, and foundational classes.",
    },

    {
      name: "Happy Laptops and computers 💻",
      href: "https://www.happylaptops.in/",
      imgsrc: "assets/projectpics/happy.png",
      description: "A tech store for laptops, desktops, and accessories.",
    },

    {
      name: "Chattrix 📳",
      href: "https://chattrix.tech/",
      imgsrc: "assets/projectpics/chattrix.png",
      description: "A real-time chat app with group and private chat support.",
    },

    {
      name: "Neuronotes 📳",
      href: "https://neuronote-blog.vercel.app/",
      imgsrc: "assets/projectpics/neuronote.png",
      description: "A platform to write, share, and read articles.",
    },

    {
      name: "Zelt app 💻",
      href: "https://zelt-app.vercel.app/",
      imgsrc:
        "https://github.com/rishiyadav11/myportfolio/blob/main/public/assets/projectpics/zelt.png?raw=true",
      description: "A minimalist task management app.",
    },

    {
      name: "Apple web clone 📱",
      href: "https://apple-iphone-web.vercel.app/",
      imgsrc:
        "https://github.com/rishiyadav11/myportfolio/blob/main/public/assets/projectpics/applepic.png?raw=true",
      description: "A clean Apple website clone with animations + 3D.",
    },

    {
      name: "Rayben future.. 💻",
      href: "https://rishiyadav11.github.io/rayben-clone-website/",
      imgsrc:
        "https://github.com/rishiyadav11/myportfolio/blob/main/public/assets/projectpics/rayban.png?raw=true",
      description: "A Ray-Ban homepage design clone.",
    },

    {
      name: "Miranda Paper 📜",
      href: "https://miranda-paperstyle-website.vercel.app/",
      imgsrc:
        "https://github.com/rishiyadav11/myportfolio/blob/main/public/assets/projectpics/mirandapic.png?raw=true",
      description: "A vintage themed animated portfolio website.",
    },

    {
      name: "Khatabook 💻",
      href: "https://khatabook-teal.vercel.app/",
      imgsrc:
        "https://github.com/rishiyadav11/myportfolio/blob/main/public/assets/projectpics/khatabook.png?raw=true",
      description: "Fullstack clone of Khatabook with new features.",
    },

    {
      name: "Mapday 💻",
      href: "https://map-day.vercel.app/",
      imgsrc:
        "https://github.com/rishiyadav11/myportfolio/blob/main/public/assets/projectpics/mapday.png?raw=true",
      description: "Keep track of content you want to watch.",
    },

    {
      name: "TextTomoji 💻",
      href: "https://texttomoji-1.vercel.app/",
      imgsrc:
        "https://github.com/rishiyadav11/myportfolio/blob/main/public/assets/projectpics/txtmojipic.png?raw=true",
      description: "Convert any text to emoji art.",
    },

    {
      name: "Dukaan ui 💻",
      href: "https://dukaan-ui-seven.vercel.app/",
      imgsrc:
        "https://github.com/rishiyadav11/myportfolio/blob/main/public/assets/projectpics/dukaanui.png?raw=true",
      description: "UI clone of Dukaan.",
    },

    {
      name: "New gen web 🎮",
      href: "https://newgenwebdesgin.vercel.app/",
      imgsrc:
        "https://github.com/rishiyadav11/myportfolio/blob/main/public/assets/projectpics/newgenpic.png?raw=true",
      description: "Next-gen animated website.",
    },

    {
      name: "Refokuss 👨‍💻",
      href: "https://refokuss.vercel.app/",
      imgsrc:
        "https://github.com/rishiyadav11/myportfolio/blob/main/public/assets/projectpics/refokusspic.png?raw=true",
      description: "React + Framer Motion animated UI.",
    },
  ]);

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* HEADER */}
      <div
        id="window-header"
        className="flex flex-wrap items-center gap-3 justify-between sticky top-0 z-10 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800"
      >
        <WindowControl target="safari" />
        <PanelLeft className="ml-10 icon max-sm:hidden" />
        <div className="flex items-center gap-1 ml-2">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>
        <div className="flex-1 flex-center gap-3 max-sm:flex-col max-sm:items-stretch">
          <ShieldHalf className="icon max-sm:hidden" />
          <div className="search max-sm:w-full">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search Projects..."
              className="flex-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon max-sm:hidden" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

   {/* PROJECT LIST */}
<div className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-6 space-y-10">
  <h2 className="text-3xl font-bold mb-5 text-center">My Projects</h2>

  {projects.map((p, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1, y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="bg-gray-900/20 border border-gray-700/50 rounded-xl p-6 md:grid md:grid-cols-2 md:h-[24rem] gap-6 shadow-lg"
    >
      <img
        src={p.imgsrc}
        alt={p.name}
        className="w-full h-72 md:h-full object-cover rounded-lg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold">{p.name}</h3>
        <p className="text-gray-300 text-lg">{p.description}</p>
        <a
          href={p.href}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg w-max hover:bg-green-600 transition-colors text-lg"
        >
          Live Link
        </a>
      </div>
    </motion.div>
  ))}
</div>

    </div>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow;
