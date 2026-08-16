import "./App.css";
import Demo from "./Demo";

function App() {
  return (
    <>
      <Demo>
        {/* Children Props */}
        <h1>HELLO</h1>
        <h2>HI</h2>
        <h3>REACT</h3>
        <button>RUN</button>
      </Demo>
      <Demo>
        <button>SUBMIT</button>
      </Demo>
    </>
  );
}

export default App;