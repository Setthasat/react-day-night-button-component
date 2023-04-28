import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

function App() {

  const [open, setOpen] = useState(false);

  const handleClose = (event) => {
    event.preventDefault();
    setOpen((prev) => prev = !prev);
  };

  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <div className='bg-black/90  w-full h-screen flex justify-center items-center'>
      <div>
        <div className='bg-white w-[18rem] h-[6rem] rounded-full flex items-center'>
          {open === true ? (
            <motion.button onClick={handleClose} className='bg-black h-[5rem] w-[5rem] mx-2 rounded-full' animate={{x:190}}></motion.button>
          ) : (
            <motion.button onClick={handleClose} className='bg-black h-[5rem] w-[5rem] mx-2 rounded-full' ></motion.button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
