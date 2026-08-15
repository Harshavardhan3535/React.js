// import "./index.css";
// //import the create Rootfunction
// import {createRoot} from "react-dom/client";

// let name="React JS";
// const d=new Date();
// //find the root element in the HTML file
// const Root = createRoot(document.getElementById("root")).render(
//   <div>
//     <h1>Hello React JS</h1>
//     <h2 className="head">Welcome to React JS</h2>
//     <p>This is a simple React application.</p>
//     <h1>My name is {name.toUpperCase()}</h1>
//     <h1>Current Date is {d.getDate()}</h1>
//   </div>
// );

// //Start Rendering the React application or Building the React application
// //Root.render();


//Day-3
import "./index.css";
import {createRoot} from  "react-dom/client";
const Root=createRoot(document.getElementById("root"));

Root.render(
  <div className="Card">
    <nav>
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" />
      <h1 className="heading">Rules of JSX</h1>
    </nav>
    <ul className="listitems">
      <li>Must Enclose within a parent or Fragment</li>
      <li>Close the tags properly</li>
      <li>Use camelCase for attribute names</li>
      <li>Use curly braces for JavaScript expressions</li>
      <li>Use className instead of class</li>
    </ul>
  </div>
);