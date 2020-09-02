import React, { useState, useEffect } from 'react';
import './hooks.css'

  function Hooks() {
  useEffect(() => {
        return console.log(x+1)
    })
    
    // Объявляем новую переменную состояния, которую назовём "count"
    const [x, functionHooks] = useState(10);
    

  
    return (
      <div className="hooks">
        <p>What is {x} that?</p>
        <button onClick={() => functionHooks(x * 4)}>
          Click me now!
        </button>
      </div>
    );
  }

  export default Hooks