import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (running) {
      timerId = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [running]);

  return (
    <div style={{ padding: "30px", textAlign: "center", background: "black", margin: "20px auto", fontFamily: "-apple-system", color: "aqua", width: "400px" }}>
      <h2>Timer</h2>
      <h1>{seconds}</h1>
      <div>
        <button onClick={() => setIsRunning(true)}>||START</button>
        <button onClick={() => setIsRunning(false)}>||STOP</button>
        <button onClick={() => { setIsRunning(false); setSeconds(0); }}>||RESET</button>
      </div>
    </div>
  );
};

export default Timer;