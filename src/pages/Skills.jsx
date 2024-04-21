import React, { useEffect, useState } from 'react'
import technologies from '../techlist'
import BallCanvas from '../model/Ball'
import { motion } from 'framer-motion';


const Mobilecompo = ({icon,name}) => {
  return (
           <motion.div 
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
           >
           <div className="  rounded-md p-4 flex items-center flex-col h-48 w-64 bg-zinc-200">
            <img className='w-[85%] h-[85%] object-contain' src={icon} alt="" />
            <h1 className='mt-2 text-lg'>{name}</h1>
           </div>
           </motion.div>
  )
}
const Desktop = ({icon,name}) => {
  return(
    <div className="w-60 h-40 rounded-md cursor-pointer   flex-col  flex ">
    <BallCanvas icon={icon} />
    <h1 className='text-center'>{name}</h1>
   </div>
  )
}

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // Example breakpoint, change as needed
    }

    handleResize(); // Set initial state based on window size

    window.addEventListener('resize', handleResize); // Add event listener

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on unmount
    };
  }, []);
  return (
    <div className='flex flex-row flex-wrap justify-center gap-5'>
        {technologies.map((technology,index)=>(
         <div className="" key={index}>
          {isMobile ? <Mobilecompo  icon={technology.icon} name={technology.name}/> :  <Desktop icon={technology.icon} name={technology.name} />}
         </div>
        ))}
    
    </div>
  )
}

export default Skills