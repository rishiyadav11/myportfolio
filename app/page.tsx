import Dock from '@/components/Dock'
import Navbar from '@/components/Navbar'
import Welcome from '@/components/Welcome'
import React from 'react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import Terminal from '@/windows/Terminal'
import Safari from '@/windows/Safari'
import Resume from '@/windows/Resume'
import FinderWindow from '@/windows/Finder'

gsap.registerPlugin(Draggable)

const page = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/>
      <Resume/>
      <FinderWindow/>
    </main>
  )
}

export default page