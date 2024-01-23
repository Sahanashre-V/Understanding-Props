import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Datacomp from './Components/Datacomponents';
// import AppClass from "./AppClass";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />    */}
    <Datacomp/>
    {/* change the above line - for interchaning between App and AppClass */}
  </React.StrictMode>
);
