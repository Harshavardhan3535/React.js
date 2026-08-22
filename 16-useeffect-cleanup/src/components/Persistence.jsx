import { useState, useEffect } from 'react';

const Persistence = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("myCounter");
    return savedCount ? Number(savedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("myCounter", count);
    console.log("count is getting stored in local storage:", count);
  }, [count]);

  return (
    <div style={{
      padding: '30px',
      textAlign: 'center',
      background: '#1a1a2e',
      borderRadius: '10px',
      margin: '20px auto',
      maxWidth: '400px',
      color: 'white'
    }}>
      <h2>Counter</h2>
      <p style={{ fontSize: '4rem', margin: '20px 0', color: '#00d4ff' }}>{count}</p>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button
          onClick={() => setCount(prev => prev + 1)}
          style={{ padding: '12px 25px', fontSize: '1rem', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
        >
          + Increase
        </button>
        <button
          onClick={() => setCount(prev => prev - 1)}
          style={{ padding: '12px 25px', fontSize: '1rem', background: '#f44336', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
        >
          Decrease
        </button>
        <button
          onClick={() => setCount(0)}
          style={{ padding: '12px 25px', fontSize: '1rem', background: '#ff9800', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Persistence;