import React, {Component} from 'react';
import logo from '../../../src/logo.svg';
import './App.css';
import Timer from '../timer';
import Hello from '../hello';
import Navbar from '../navbar';
import Time1 from '../time1';
import Time from '../time';

//import Clock from 'react-digital-clock';

let t = "Время";
class App extends Component {
  render() {
    return (
      <>
         
          <Navbar/>
          <Time1/> 
          <Time/>
          <Hello name="World"/>
          <Timer/> 
  

    </>
    );
  }
}

export default App;
