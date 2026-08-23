import { useEffect, useRef, useState } from 'react';
import LoginForm from './components/LoginForm';

function AutoFocus() {
  const searchInput = useRef(null);

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  return (
    <div>
      <h2>Auto-Focus Search</h2>
      <input ref={searchInput} type="text" placeholder="Search here" />
    </div>
  );
}

function Timer() {
  const timerId = useRef(null);
  const [seconds, setSeconds] = useState(0);

  function setTimer() {
    if (timerId.current) return;
    timerId.current = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerId.current);
    timerId.current = null;
  }

  return (
    <div>
      <h2>Timer using useRef for interval ID</h2>
      <h1>Sec: {seconds}</h1>
      <button onClick={setTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Manual Focus (button click)</h2>
      <LoginForm />
      <hr />
      <AutoFocus />
      <hr />
      <Timer />
    </div>
  );
};

export default App;