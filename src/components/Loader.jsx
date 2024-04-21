import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  const {progress} = useProgress();
  return (
    <Html>
     <div className='flex justify-center items-center relative'>
             <div className="w-20 h-20 border-2 border-opacity-20   border-blue-500   border-t-blue-500 rounded-full  animate-spin">
             </div>
             <h1 className='absolute top-8'>{progress.toFixed(2)}%</h1>
    </div>
    </Html>
  )
}

export default Loader;
