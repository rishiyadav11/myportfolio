"use client"
import WindowControl from '@/components/WindowControl'
import { socials } from '@/constants'
import WindowWrapper from '@/hoc/WindowWrapper'
import React from 'react'

const Contact = () => {
  return (
    <>
    <div id='window-header' className="">
        <WindowControl target="contact" />
        <h2>Contact Me</h2>
      </div>
        <div className="p-5 space-y-5">
            <img src="/images/adrian.jpg" alt='rishi yadav' className='w-20 rounded-full'/>
            <h3>Let's connect</h3>
            <p> Got an idea ? A bug to squash ? or just wana talk tech? I'm in.</p>
            <ul>{
                socials.map(({id, bg , link , icon , text}) => (
                 <li key={id} style={{backgroundColor : bg}}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={icon} alt={text} className='size-5' />
                        <p>{text}</p>
                    </a>

                 </li>
                ))
            }</ul>
        </div></>
  )
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow