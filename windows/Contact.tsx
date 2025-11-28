"use client"
import WindowControl from '@/components/WindowControl'
import { socials } from '@/constants'
import WindowWrapper from '@/hoc/WindowWrapper'
import React from 'react'

const Contact = () => {
  return (
    <div className="flex h-full flex-col max-sm:overflow-hidden">
      <div
        id="window-header"
        className="flex flex-wrap items-center gap-3 justify-between sticky top-0 z-10"
      >
        <WindowControl target="contact" />
        <h2 className="text-sm font-semibold text-gray-600">Contact Me</h2>
      </div>

      <div className="p-5 space-y-5 flex-1 max-sm:overflow-y-auto">
<div className="flex flex-col items-center gap-3">
          <img src="/images/1.jpg" alt="rishi yadav" className="w-40 h-40 object-cover object-top rounded-full" />
        <h3 className="text-xl font-semibold">Let's connect</h3>
</div>
        <p>Got an idea ? A bug to squash ? or just wana talk tech? I'm in.</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow