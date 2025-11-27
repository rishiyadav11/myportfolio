import Dock from '@/components/Dock'
import Navbar from '@/components/Navbar'
import Welcome from '@/components/Welcome'
import React from 'react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import Terminal from '@/windows/Terminal'

gsap.registerPlugin(Draggable)

const page = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
    </main>
  )
}

export default page