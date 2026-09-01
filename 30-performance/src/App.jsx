import { useCallback, useMemo, useState } from 'react'
import './App.css'
import Sum from './component/Sum'
import Post from './component/Post'

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1000);

  const handleClick = useCallback(() => {
    console.log("Handle Click", count);
  }, [count]);

  const prime = useMemo(() => {
    let total = 0;
    if (number > 1) {
      total++;
    }
    for (let i = 3; i <= number; i++) {
      total++;
      for (let j = 2; j < 1; j++) {
        if (i % j == 0) {
          total--;
          break;
        }
      }
    }
    return total;
  }, [number]);

  const obj = useMemo(() => {
    return { name: "Harsh", age: 23 };
  }, []);

  console.log("app render");

  return (
    <>
      <h1>Counter:</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>Your current number: {number}</h2>
      <button onClick={() => setNumber(number + 100)}>Increment Number</button>
      <h3>Total Prime number: {prime}</h3>
      <button onClick={handleClick}>Click</button>
      <Sum />
      <Sum number={1000}></Sum>
      <Post value={obj}></Post>
    </>
  );
}

export default App;