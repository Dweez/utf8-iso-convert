import React from 'react'
import './App.css'

import Converter from './components/converter'

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>Conversion ISO-8859-1 ← → UTF-8</h2>
        <Converter />
      </div>
    </div>
  );
}

export default App;
