import React, { Component } from 'react';
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



export default class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     showMe: true
  //   }
  // }

  state = {
    show: true
  }

  fun() {
    this.setState({
      show: !this.state.show
  })
  }

  render() {
  return (
    <div className="App">
    {this.state.show ? (<h1><Header /></h1>) :null }
    <button onClick={()=> this.fun()}>Click me</button>
    </div>
  );
}
}

