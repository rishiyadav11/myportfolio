

import React from "react";
import { useState } from "react";
import textemoji from "../projectImages/txtmojipic.png";
import zelt from "../projectImages/zelt.png";
import applepic from "../projectImages/applepic.png";
import mirandapic from "../projectImages/mirandapic.png";
import newgenpic from "../projectImages/newgenpic.png";
import refokusspic from "../projectImages/refokusspic.png"; 

const Projects = () => {
  const [data, setdata] = useState([
    
    {
      name: "Zelt app 💻",
      href: "https://zelt-app.vercel.app/",
      imgsrc: zelt ,
      description:
        " Zelt is a minimalist task management app designed to streamline your workflow. With its clean interface and intuitive features, Zelt helps you prioritize tasks and stay organized effortlessly. Say goodbye to clutter and hello to productivity with Zelt.",
    },
    {
      name: "TextTomoji 💻",
      href: "https://texttomoji-1.vercel.app/",
      imgsrc: textemoji,
      description:
        "TextToMoji is a delightful web app that transforms your text into vibrant emoji art! Express yourself in a fun and creative way by converting plain text into colorful emoji compositions. With a simple and intuitive interface, TextToMoji offers endless possibilities for adding a touch of whimsy to your messages, social media posts, and more. Try it now and unleash your inner emoji artist!",
    },
    {
      name: "Apple web clone 📱",
      href: "https://apple-iphone-web.vercel.app/",
      imgsrc: applepic ,
      description:
        "Apple Web Clone, a sleek React.js application replicating Apple's iconic website design. Experience smooth animations and intuitive navigation, capturing the elegance and innovation of Apple's online presence. Enhanced with Three.js, enjoy immersive 3D graphics for a truly captivating user experience.",
    },
    {
      name: "Miranda Paper  📜",
      href: "https://miranda-paperstyle-website.vercel.app/",
      imgsrc: mirandapic ,
      description:
        "Miranda Paper Portfolio is a website that combines a vintage aesthetic with modern animation. It showcases timeless designs on old-style paper, creating a nostalgic vibe. Experience the charm of the past brought to life through interactive elements.",
    },
    {
      name: "New gen web  🎮",
      href: "https://newgenwebdesgin.vercel.app/",
      imgsrc: newgenpic,
      description:
        "New Gen Web is a cutting-edge website that features next-generation effects and animations. It offers a dynamic and immersive user experience with state-of-the-art visual interactions. Explore the future of web  with animations and sleek aesthetics.",
    },
    {
      name: "Refokuss  👨‍💻",
      href: "https://refokuss.vercel.app/",
      imgsrc: refokusspic,
      description:
        "Refokuss is a modern React app enhanced with Framer Motion animations. It delivers a sleek, dynamic user experience through smooth, interactive visual effects. Discover the synergy of advanced web technologies and refined motion design.",
    },
  ]);
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="heading">
        <h1 className="font-black text-black  lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-20 sm:mt-10">
          MY <span className="blue-gradient_text">Projects section</span>
        </h1>
      </div>

      {data.map((elem, index) => (
        <section
          key={index}
          className={`dark:bg-gray-900 border bg-[url("https://img.freepik.com/premium-vector/abstract-3d-art-background-holographic-floating-liquid-blobs-soap-bubbles-metaballs_1142-8589.jpg")]  bg-cover w-[80%]  rounded-md`}
        >
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img
              className="w-[98%] object-contain dark:hidden border border-black-500 rounded-lg  h-80 sm:object-cover"
              src={elem.imgsrc}
              alt="dashboard image"
            />
            <div className="mt-4 md:mt-0 sm:ml-20">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                {elem.name}
              </h2>
              <p className="mb-6 font-medium text-white md:text-lg dark:text-gray-400">
                {elem.description}
              </p>
              <a
                href={elem.href}
                target="_blank"
                className="inline-flex items-center text-white bg-green-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
              >
                Live link
              </a>
            </div>
          </div>
        </section>

      ))}
    </div>
  );
};

export default Projects;