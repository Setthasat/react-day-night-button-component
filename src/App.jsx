import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { BsSun, BsFillMoonFill } from 'react-icons/bs';
import LiveTime from './components/LiveTime';




function App() {

  document.title = "Day / Night"

  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    event.preventDefault();
    setOpen((prev) => prev = !prev);
  };


  return (
    <div className='w-full h-screen '>
      {open === false ? (
        <motion.img src='../public/day.jpeg' className='absolute h-screen w-auto object-cover sm:w-screen bg-black/40' />
      ) : (
        <motion.img src='../public/night.webp' className='absolute h-screen object-cover w-auto sm:w-screen  bg-black/40' />
      )}
      <div className='relative text-white font-sans flex justify-center sm:justify-end items-center pt-[2rem] sm:mx-[4rem] sm:pt-[2rem]'>
      <LiveTime />
      </div>
      <div className='flex justify-center items-center h-[90%]'>
        <div className='bg-transparent backdrop-blur-md shadow-2xl duration-300 w-[18rem] mx-2 h-[6rem] rounded-full px-2 flex items-center'>
          {open === true ? (
            <motion.button onClick={handleOpen} className='bg-black/30 duration-[1s] h-[5rem] w-[5rem] rounded-full flex justify-center items-center' animate={{ x: 185 }} ><BsFillMoonFill color='white' size={40} /></motion.button>
          ) : (
            <motion.button onClick={handleOpen} className='bg-white/80 duration-[1s] h-[5rem] w-[5rem] rounded-full flex justify-center items-center' ><BsSun size={40} /></motion.button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
