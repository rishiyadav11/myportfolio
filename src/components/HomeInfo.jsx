import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
  return (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I'm
      <span className='font-semibold mx-2 text-white'>Rishi yadav</span>
      👋
      <br />
      A Frontend Web Developer 👨‍💻
    </h1>
  );

if (currentStage === 4) {
  return (
    <div className='info-box  sm:w-[30vw] '>
      <p className='font-medium sm:text-xl text-center'>
       Let's play  Game 🎮
      </p>

      <Link to='/Game' className='neo-brutalism-white neo-btn'>
        Play Now
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
  );
}

if (currentStage === 2) {
  return (
    <div className='info-box'>
      <p className='font-medium text-center sm:text-xl'>
        Led multiple projects to success over the years. <br /> Curious about the impact?
      </p>

      <Link to='/Portfolio' className='neo-brutalism-white neo-btn'>
        Visit my portfolio
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
  );
}

if (currentStage === 3) {
  return (
    <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>
      Need a project done or looking for a dev? <br/> I'm just a  few taps away
    </p>

    <Link to='/contact' className='neo-brutalism-white neo-btn'>
      Let's talk
      <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
    </Link>
  </div>
  );
}

return null;
}

export default HomeInfo;