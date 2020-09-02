import React from 'react';
import './App.css';
import LevelMinusOne from './components/levelMinusOne';
import ContextHelper from './components/contextHelper'

function App() {
  return (
    <div>
          <ContextHelper.Provider value={{
            name:'Abay',
            age: 53
            }}>
          <h1>Hello world!</h1>
          <LevelMinusOne/>
          </ContextHelper.Provider>

    </div>
 

  );
}

export default App;
