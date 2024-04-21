import React from 'react'
import { useState } from 'react';
import textemoji from "../projectImages/txtmojipic.png"

const Projects = () => {
  const [data, setdata] = useState([
    {name :"TextTomoji 💻", href:"https://texttomoji-1.vercel.app/",imgsrc:textemoji, description:
    "TextToMoji is a delightful web app that transforms your text into vibrant emoji art! Express yourself in a fun and creative way by converting plain text into colorful emoji compositions. With a simple and intuitive interface, TextToMoji offers endless possibilities for adding a touch of whimsy to your messages, social media posts, and more. Try it now and unleash your inner emoji artist!"},
    {name :"TextTomoji 💻", href:"https://texttomoji-1.vercel.app/",imgsrc:textemoji, description:
    "TextToMoji is a delightful web app that transforms your text into vibrant emoji art! Express yourself in a fun and creative way by converting plain text into colorful emoji compositions. With a simple and intuitive interface, TextToMoji offers endless possibilities for adding a touch of whimsy to your messages, social media posts, and more. Try it now and unleash your inner emoji artist!"},
  ])
  return (
  <div className='flex flex-col items-center gap-5'>
  <div className="heading">
  <h1 className='font-black text-black  lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-20 sm:mt-10'>MY <span className='blue-gradient_text'>Projects section</span></h1>
  </div>

  {data.map((elem,index)=>(
     <section key={index} className=" dark:bg-gray-900 border  bg-sky-200 bg-[url('https://img.freepik.com/premium-vector/abstract-3d-art-background-holographic-floating-liquid-blobs-soap-bubbles-metaballs_1142-8589.jpg')] bg-no-repeat bg-cover w-[80%]  rounded-md">
     <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
     <img  className="w-[95%] dark:hidden h-80 object-contain" src={elem.imgsrc} alt="dashboard image" />
    <div className="mt-4 md:mt-0 sm:ml-20">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{elem.name}</h2>
        <p className="mb-6 font-medium text-white md:text-lg dark:text-gray-400">{elem.description}</p>
        <a href={elem.href} className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
            Live link
        </a>
    </div>
    </div>
    </section>
  ))}

     



  </div>
  )
}

export default Projects;