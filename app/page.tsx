import Dock from '@/components/Dock'
import Navbar from '@/components/Navbar'
import Welcome from '@/components/Welcome'
import ThemeSync from '@/components/ThemeSync'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { TerminalWindow, SafariWindow,GalleryWindow, ResumeWindow, FinderWindow, TextFileWindow, ImageFileWindow, ContactWindow } from '@/windows'
import Home from '@/components/Home'

gsap.registerPlugin(Draggable)

const page = () => {
  return (
    <main>
      <ThemeSync/>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <TerminalWindow/>
      <SafariWindow/>
      <ResumeWindow/>
      <FinderWindow/>
      <TextFileWindow/>
      <ImageFileWindow/>
      <ContactWindow/>
      <GalleryWindow/>
      <Home/>
    </main>
  )
}

export default page