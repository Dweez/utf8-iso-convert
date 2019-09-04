import React, { useState } from 'react'
import './App.css'

import useConverted from './useConverted'

function App() {
  const [ input, setInput ] = useState('')

  const converted = useConverted(input)

  return (
    <div className="App">
      <input value={input} onChange={event => setInput(event.target.value)} />
      <h3>{converted}</h3>
    </div>
  );
}

export default App;
