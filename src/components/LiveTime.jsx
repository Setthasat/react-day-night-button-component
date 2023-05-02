import React, { useState, useEffect } from "react";

function LiveTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const delay = setInterval(() => {
      setTime(new Date());
    },0);

    return () => clearInterval(delay);
  }, []);

  return (
    <div className="text-[2rem]">
      {time.toLocaleTimeString()}
    </div>
  );
}

export default LiveTime;
