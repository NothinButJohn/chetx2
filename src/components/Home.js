import React, { Component, useState } from 'react';
import Header from './Header';

function Home(){
    return(
        <div>
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
export default Home;