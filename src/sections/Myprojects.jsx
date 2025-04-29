



import React from "react";
import { useState } from "react";

const Myprojects = () => {
  const [data, setdata] = useState([


    {
      name: "Baemark 💖",
      href: "https://www.baemark.com/",
      imgsrc: "assets/projectpics/baemark.png" ,
      description:
        "Baemark is a stylish and user-friendly e-commerce platform focused on curated fashion items. It features personalized shopping based on gender and size, a clean feminine-themed UI, and seamless category filtering.",
    },


    {
      name: "neuronotes 📳",
      href: "https://neuronote-blog.vercel.app/",
      imgsrc: "assets/projectpics/neuronote.png" ,
      description:
        "Neuronote is a platform that allows users to write, share, and discover insightful articles and notes. It offers a clean, intuitive interface for both writers and readers to engage with thought-provoking content.",
    },
    
    {
      name: "Zelt app 💻",
      href: "https://zelt-app.vercel.app/",
      imgsrc: "https://github.com/rishiyadav11/myportfolio/blob/main/public/assets/projectpics/zelt.png?raw=true" ,
      description:
        " Zelt is a minimalist task management app designed to streamline your workflow. With its clean interface and intuitive features, Zelt helps you prioritize tasks and stay organized effortlessly. Say goodbye to clutter and hello to productivity with Zelt.",
    },

    {
      name: "Apple web clone 📱",
      href: "https://apple-iphone-web.vercel.app/",
      imgsrc: "https://github.com/rishiyadav11/myportfolio/blob/main/public/assets/projectpics/applepic.png?raw=true" ,
      description:
        "Apple Web Clone, a sleek React.js application replicating Apple's iconic website design. Experience smooth animations and intuitive navigation, capturing the elegance and innovation of Apple's online presence. Enhanced with Three.js, enjoy immersive 3D graphics for a truly captivating user experience.",
    },
    ,
    {
      name: "Rayben future.. 💻",
      href: "https://rishiyadav11.github.io/rayben-clone-website/",
      imgsrc: "https://github.com/rishiyadav11/myportfolio/blob/main/public/assets/projectpics/rayban.png?raw=true",
      description:
        "I designed a Ray-Ban homepage featuring advanced functionalities, enhancing user engagement and showcasing the brand's stylish eyewear collection.",
    },
    {
      name: "Miranda Paper  📜",
      href: "https://miranda-paperstyle-website.vercel.app/",
      imgsrc: "https://github.com/rishiyadav11/myportfolio/blob/main/public/assets/projectpics/mirandapic.png?raw=true" ,
      description:
        "Miranda Paper Portfolio is a website that combines a vintage aesthetic with modern animation. It showcases timeless designs on old-style paper, creating a nostalgic vibe. Experience the charm of the past brought to life through interactive elements.",
    },
    {
      name: "Khatabook 💻",
      href: "https://khatabook-teal.vercel.app/",
      imgsrc: "https://github.com/rishiyadav11/myportfolio/blob/main/public/assets/projectpics/khatabook.png?raw=true",
      description:
        "My project is a fullstack clone of the Khatabook website with new features, improving usability and adding unique tools for managing personal and business finances efficiently.",
    },
    {
      name: "Mapday 💻",
      href: "https://map-day.vercel.app/",
      imgsrc: "https://github.com/rishiyadav11/myportfolio/blob/main/public/assets/projectpics/mapday.png?raw=true",
      description:
        "I created 'Mapday,' a platform to manage and track your content, helping you organize what you want to watch and maintain a record of what you've already watched.",
    },
    {
      name: "TextTomoji 💻",
      href: "https://texttomoji-1.vercel.app/",
      imgsrc: "https://github.com/rishiyadav11/myportfolio/blob/main/public/assets/projectpics/txtmojipic.png?raw=true",
      description:
        "TextToMoji is a delightful web app that transforms your text into vibrant emoji art! Express yourself in a fun and creative way by converting plain text into colorful emoji compositions. With a simple and intuitive interface, TextToMoji offers endless possibilities for adding a touch of whimsy to your messages, social media posts, and more. Try it now and unleash your inner emoji artist!",
    },
    {
      name: "Dukaan ui 💻",
      href: "https://dukaan-ui-seven.vercel.app/",
      imgsrc: "https://github.com/rishiyadav11/myportfolio/blob/main/public/assets/projectpics/dukaanui.png?raw=true",
      description:
        "I cloned a Dukaan UI, replicating its design and functionality to create an intuitive online store interface for seamless user interaction.",
    },
    {
      name: "New gen web  🎮",
      href: "https://newgenwebdesgin.vercel.app/",
      imgsrc: "https://github.com/rishiyadav11/myportfolio/blob/main/public/assets/projectpics/newgenpic.png?raw=true",
      description:
        "New Gen Web is a cutting-edge website that features next-generation effects and animations. It offers a dynamic and immersive user experience with state-of-the-art visual interactions. Explore the future of web  with animations and sleek aesthetics.",
    },
    {
      name: "Refokuss  👨‍💻",
      href: "https://refokuss.vercel.app/",
      imgsrc: "https://github.com/rishiyadav11/myportfolio/blob/main/public/assets/projectpics/refokusspic.png?raw=true",
      description:
        "Refokuss is a modern React app enhanced with Framer Motion animations. It delivers a sleek, dynamic user experience through smooth, interactive visual effects. Discover the synergy of advanced web technologies and refined motion design.",
    },
  ]);
  return (
    <div className="flex flex-col items-center gap-5 pt-10">
      <div className="heading">
        <h1 className="font-black text-white-500 cursor-pointer hover:text-white duration-700    lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-20 sm:mt-10">
          Project Section
        </h1>
      </div>

      {data.map((elem, index) => (
        <section
          key={index}
          className={`dark:bg-gray-900 border bg-[url("/assets/spotlight1.png")]  bg-cover w-[80%]  rounded-md`}
        >
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img
              className="w-[98%] object-contain  border-black-500 rounded-lg  h-80 sm:object-cover"
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

export default Myprojects;


