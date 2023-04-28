import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { BsSun, BsFillMoonFill } from 'react-icons/bs'

function App() {

  const [open, setOpen] = useState(false);

  const handleOpen= (event) => {
    event.preventDefault();
    setOpen((prev) => prev = !prev);
  };

  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <div className='bg-black/90  w-full h-screen flex justify-center items-center'>
      <div>
        <div className='bg-transparent backdrop-blur-3xl shadow-2xl duration-300 w-[18rem] mx-2 h-[6rem] rounded-full px-2 flex items-center'>
          {open === true ? (
            <motion.button onClick={handleOpen} className='bg-black/60 duration-[450ms] h-[5rem] w-[5rem] rounded-full flex justify-center items-center' animate={{x:185}}><BsFillMoonFill color='white' size={40}/></motion.button>
          ) : (
            <motion.button onClick={handleOpen} className='bg-white/60 duration-[450ms] h-[5rem] w-[5rem] rounded-full flex justify-center items-center' ><BsSun size={40}/></motion.button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
