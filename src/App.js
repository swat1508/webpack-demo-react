// src/App.js

import React from "react";
import "./App.css";
import reactImg from "./assets/react.svg";
import SampleComponent from './SampleComponent';

const App = () => {
  return (
    <div>
      <div>Welcome to React Webpack</div>
      <img src={reactImg} />
      <SampleComponent/>
    </div>
  )
};

export default App;