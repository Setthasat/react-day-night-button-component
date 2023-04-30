import React, { useState, useEffect } from "react";

function LiveTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, );

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-[2rem]">
      {time.toLocaleTimeString()}
    </div>
  );
}

export default LiveTime;
