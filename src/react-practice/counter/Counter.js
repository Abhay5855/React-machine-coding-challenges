import { useState, useEffect } from "react";

const Counter = () => {
  //create counter that should run on every second when clicked.

  const [counter, setCounter] = useState(0);

  const [stop , setStop] = useState(false);

  let timerId = null;

  const handleCounter = () => {
    // if (timerId === null) {
    //   timerId = setInterval(() => {
    //     setCounter((counter) => counter + 1);
    //   }, 1000);
    // }


    setStop(true);
  };

  const StopCounter = () => {
    // if (timerId !== null) {
    //   clearInterval(timerId);
    // }

    // timerId = null;
    setStop(false);
  };


  useEffect(() => {

       let timer;

       if(stop){

            timer = setInterval(() => {

              setCounter(counter => counter + 1);


           }, 1000)

           
       }

       return () => clearInterval(timer);
  })

  return (
    <>
      <p>{counter}</p>

      <button onClick={handleCounter}>Start</button>
      <button onClick={StopCounter}>Stop</button>
    </>
  );
};

export default Counter;
