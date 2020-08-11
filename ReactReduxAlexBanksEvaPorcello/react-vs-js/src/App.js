import React from 'react';
import ReactDOM from 'react-dom';
import Item from './item'
import {Item2 }from './item'
import './App.css';


const { render } = ReactDOM
const Welcome = () => (
    <div id="welcome">
        <h1>Hello World</h1>
    </div>
)

const Header = () => {
  return (
      <ul className="appHeader">
      <Item propertiesLabel="Hello world!" key='erwt'/>
      <Item2 label="Hi world!" key='dsdfg'/>
      <Item propertiesLabel="Halo world!" key='nntj'/>
      <Item2 label="WOOOp world!" key='dsdfjklg'/>
      </ul>
  )
}
  
render(
    <Welcome />,
    document.getElementById('target')
)


function App() {
  return (
    <div className="App">
    <Header />
    </div>
  );
}

export default App;
