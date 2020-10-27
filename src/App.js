import React, { Component, useState } from 'react';

function App(){
  return(
    <div>
      <h1>App</h1>
      <Counter />
    </div>
  )
}

function Counter() {
  const [counter, setCounter] = useState(0); // State: counter value, init 0
  const increment = () => { // Action: updates the counter 
    setCounter(prevCounter => prevCounter + 1);
  }
  // View: UI def
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  )
}

export default App;
