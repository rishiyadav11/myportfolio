import Dock from '@/components/Dock'
import Navbar from '@/components/Navbar'
import Welcome from '@/components/Welcome'
import React from 'react'

const page = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
    </main>
  )
}

export default page