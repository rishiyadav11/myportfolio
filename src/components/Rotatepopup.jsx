import React, { useEffect, useState } from 'react'

const Rotatepopup = () => {
  const [showPopUp, setShowPopUp] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []); // Run only once on component mount

  return (
    <div className={` z-20 fixed top-[80%] sm:top-[0%]  sm:left-[0%]  flex items-center justify-center  bg-gray-800 text-white rounded-2xl  h-28 w-full  sm:h-screen sm:w-[100vw] ${showPopUp ? ' block animate-pulse  transition-[3s]' : 'hidden'}`}>
   <h1 className='text-4xl sm:text-6xl text-center' > Rotate to explore </h1>
   <svg className='ml-2' width="20" height="20" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.16602 7.49984H12.8327M12.8327 7.49984L6.99935 1.6665M12.8327 7.49984L6.99935 13.3332" stroke="#fff" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  </div>
  );
}

export default Rotatepopup;