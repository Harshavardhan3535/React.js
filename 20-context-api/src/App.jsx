import { createContext, useContext, useState } from 'react';

// ===== Context setup =====
const ThemeContext = createContext();

// ===== Prop drilling version (the problem) =====
function DeepChildDrilled({ theme }) {
  return <p>Prop-drilled theme: {theme}</p>;
}

function MiddleDrilled({ theme }) {
  // Middle never uses theme itself, just passes it along
  return <DeepChildDrilled theme={theme} />;
}

function PropDrillingDemo() {
  const [theme, setTheme] = useState("light");
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "20px" }}>
      <h3>Prop Drilling (the problem)</h3>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
      <MiddleDrilled theme={theme} />
    </div>
  );
}

// ===== Context API version (the fix) =====
function DeepChildContext() {
  const { theme } = useContext(ThemeContext);
  return <p>Context theme: {theme}</p>;
}

function MiddleContext() {
  // Middle doesn't touch theme at all - never imports/uses ThemeContext
  return <DeepChildContext />;
}

function ContextDemo() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={{ border: "1px solid #ccc", padding: "16px" }}>
        <h3>Context API (the fix)</h3>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </button>
        <MiddleContext />
      </div>
    </ThemeContext.Provider>
  );
}

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Prop Drilling vs Context API</h1>
      <PropDrillingDemo />
      <ContextDemo />
    </div>
  );
}

export default App;