// Get Time on button click and refresh
import React, { useState } from "react";

const Time = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCTime] = useState(time);

  const getTime = () => {
    let newTime = new Date().toLocaleTimeString();
    setCTime(newTime);
  };

//   setInterval(getTime , 1000);
  return (
    <div>
      {ctime}
      <button onClick={getTime}>Get Time</button>
    </div>
  );
};

export default Time;
