import React from "react";
import {navIcons, navLinks} from "@/constants/index";
import dayjs from "dayjs";

const Navbar = () => {
  return <nav>
    <div className="">
        <img src="/images/logo.svg" alt="Logo" width={50} height={50} />
        <p className="font-bold">Rishi yadav's Portfolio</p>
        <ul>
          {
            navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.name}</a>
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
