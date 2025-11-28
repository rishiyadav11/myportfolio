"use client"
import React from "react";
import {navIcons, navLinks} from "@/constants/index";
import dayjs from "dayjs";
import useWindowStore from "@/store/window";

const Navbar = () => {

  const {openWindow} = useWindowStore();
  return <nav>
    <div className="">
        <img src="/images/logo.svg" alt="Logo" width={50} height={50} />
        <p className="font-bold">Rishi yadav's Portfolio</p>
        <ul>
          {
            navLinks.map((link ) => (
              <li key={link.id} onClick={()=>openWindow(link.type )}>
                <p>{link.name}</p>
              </li>
            ))
          }
        </ul>
        <div className="">
            <ul>
                {navIcons.map((icon) => (
                    <li key={icon.id}>
                        <img src={icon.img} className="icon-hover" alt={`icon-${icon.id}`} />
                    </li>
                ))}
            </ul>
            <time>{dayjs().format('ddd MMM D H:mm A')}</time>
        </div>
      
    </div>
  </nav>;
};

export default Navbar;
