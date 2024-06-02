import React from 'react'
import Skills from './Skills';


const About = () => {
  return (
    <div className='pt-20 px-6 sm:pl-28 '>
        <h1 className='font-black text-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>Hello, I'm <span className='blue-gradient_text'>Rishi yadav</span></h1>
        <p className='mt-2 text-md mb-6'>Frontend web developer and BTech student <br className='sm:hidden' /> with a passion for crafting visually stunning <br /> and user-friendly digital experiences.</p>
       <h1 className='sm:mt-28 mb-6 text-4xl font-semibold text-center sm:text-start'>My Skills </h1>
        <Skills/>
    </div>
  )
}

export default About;