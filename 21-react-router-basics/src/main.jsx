import React from 'react'
import { HashRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'

// function index() {
//   return (
//     <div>index</div>
//   )
// }

// export default index

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <HashRouter>
         <App />
    </HashRouter>
  </React.StrictMode>
)

//HistoryRouter is used for server side rendering and HashRouter is used for client side rendering. In HashRouter, the URL will have a # symbol in it.
//unstable_HistoryRouter is used for server side rendering and HashRouter is used for client side rendering. In HashRouter, the URL will have a # symbol in it.
//memoryRouter is used for testing purpose and HashRouter is used for client side rendering. In HashRouter, the URL will have a # symbol in it.
// Stores inside memory and does not read or write to the address bar. It is useful in tests and non-browser environments like React Native.
//StaticRouter is used for server side rendering and HashRouter is used for client side rendering. In HashRouter, the URL will have a # symbol in it.
// Where it specifies the location and context properties. It is useful in tests and non-browser environments like React Native.
//NativeRouter is used for server side rendering and HashRouter is used for client side rendering. In HashRouter, the URL will have a # symbol in it.
//navigation is handled by the native platform. It is useful in tests and non-browser environments like React Native.
//searchParams is used to get the query parameters from the URL. It is useful in tests and non-browser environments like React Native.
//RouteParams is used to get the dynamic parameters from the URL.
//changable section of route and same component shown for every variation & can be used for different routes.