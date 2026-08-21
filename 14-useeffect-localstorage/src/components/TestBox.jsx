import { useEffect, useState } from 'react';

const TestBox = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Count: ", count);
  }, [count]);

  useEffect(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div style={{ padding: "20px", background: "#333", margin: "20px", borderRadius: "10px" }}>
      <h2>This is a TestBox</h2>
      <h4>Count: {count}</h4>
      {/* Never set document.title directly in JSX render — always do side effects like this inside useEffect */}
      <p>Check your browser tab title...</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ padding: "10px 20px", fontSize: "1rem", cursor: "pointer" }}
      >
        CLICK HERE
      </button>
      <div>
        <h3>Name</h3>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter Your Name"
        />
      </div>
    </div>
  );
};

export default TestBox;