
import React from "react"
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    // BEM convention 
    //Block: The main component (e.g., button).
    //Element: A part of the block (e.g., button__icon).
    //Modifier: A variation of the block or element (e.g., button--large).
    <div className="app">
      <h1>we will build a twitter clone using react js...</h1>

      {/* create a sidebar component and do all the functionalities */}
      {/* sidebar */}
      <Sidebar/>

      {/* feed */}

      {/* widgets */}
    </div>
  );
}

export default App;
