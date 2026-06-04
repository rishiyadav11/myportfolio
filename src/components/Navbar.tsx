"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/ventures", label: "Ventures" },
    { href: "/techstack", label: "Tech Stack" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 sm:px-8 py-3 max-w-[1280px] w-[90%] md:w-full mt-4 rounded-full liquid-glass glass-stroke shadow-[0_0_40px_rgba(188,197,237,0.1)] transition-all duration-300 ${
          scrolled ? "py-2 mt-2 bg-black/40 backdrop-blur-2xl" : "py-3 mt-4"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 hover:opacity-85 transition-opacity py-1.5">
          <img
            src="/LOGO.png"
            alt={portfolioData.personal.name}
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-jetbrains-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:text-tertiary ${
                isActive(item.href)
                  ? "text-tertiary border-b-2 border-tertiary pb-1"
                  : "text-on-surface-variant"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/hire-me"
            className="hidden sm:inline-block bg-tertiary text-on-tertiary font-jetbrains-mono text-[10px] sm:text-xs font-bold uppercase px-5 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Hire Me
          </Link>

          {/* Hamburger Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-on-surface hover:text-tertiary transition-colors focus:outline-none p-1.5 rounded-lg border border-white/10 bg-white/5"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/85 backdrop-blur-2xl md:hidden transition-all duration-500 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`flex flex-col items-center justify-center h-full gap-8 transition-transform duration-500 ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-12"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-anton text-3xl uppercase tracking-wider transition-all duration-300 hover:text-tertiary ${
                isActive(item.href) ? "text-tertiary" : "text-on-surface-variant"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/hire-me"
            className="mt-4 bg-tertiary text-on-tertiary font-jetbrains-mono text-xs font-bold uppercase px-8 py-4 rounded-full shadow-[0_0_20px_rgba(111,255,0,0.3)]"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </>
  );
}
