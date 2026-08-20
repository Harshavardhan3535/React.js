import "./Counter.css";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(prev => prev + 1);
  }

  function handleDecrease() {
    setCount(prev => prev - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="counter">
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button className="btn-inc" onClick={handleIncrease}>INCREASE</button>
        <button className="btn-dec" onClick={handleDecrease}>DECREASE</button>
        <button className="btn-reset" onClick={handleReset}>RESET</button>
      </div>
      <p className="msg">{count >= 10 && "Amazing you have reached count of 10"}</p>
    </div>
  );
}