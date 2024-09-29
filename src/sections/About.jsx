import React, { useState } from 'react'
import Button from "../components/Button"
import Globe from 'react-globe.gl'
import { Link } from 'react-router-dom';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText('Photonics54yadav@gmail.com');
      setHasCopied(true);
  
      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    };
  return (
    <section id='about' className='c-space my-20'>
<div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
    <div className="col-span-1  xl:row-span-3">
        <div className="grid-container">
            <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
            <div>
                    <p className='grid-headtext'>Hi,I'm Rishi Yadav</p>
                    <p className='grid-subtext'> a full-stack web developer who has honed my skills in both front-end and back-end development, creating dynamic and responsive websites. </p>
            </div>
        </div>
    </div>
    <div className="col-span-1 xl:row-span-3">
        <div className="grid-container">
            <img src="/assets/grid2.png" alt="grid2" className='w-full sm:w-[350px] h-fit object-contain '   />
            <div className="">
                <p className='grid-headtext'>Tech Stack</p>
                <p className='grid-subtext'>  I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications</p>
            </div>
        </div>
    </div>
    <div className="col-span-1 xl:row-span-4 ">
        <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] flex h-fit  justify-center items-center">
                <Globe height={326} width={326} backgroundColor="rgba(0,0,0,0)" backgroundImageOpacity={0.5} showAtmosphere showGraticules globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"   labelsData={[{ lat: 154, lng: -105, text: 'I am here (india)', color: 'white', size: 15 }]}/>
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Haryana, India and open to remote work worldwide.</p>
              <Link to="/contact">
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </Link>
            </div>
        </div>
    </div>

    <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>


        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">photonics54yadav@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
</div>
    </section>
  )
}

export default About