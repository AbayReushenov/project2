import React, {Component} from 'react';
// import logo from '../../../src/logo.svg';
import './App.css';
import Timer from '../timer';
import Hello from '../hello';
import Navbar from '../navbar';
import Time1 from '../time1';
import Time from '../time';
import Time2 from '../time2'
import Test from '../test';

class App extends Component {
  render() {
    return (
      <>
         
          <Navbar/>
          <Time1/> 
          <Time/>
          <Time2
          desk="The time now in Moscow" 
          timezone="Russia/Moscow"/>
          <Time2 
          desk="The time now in New York"
          timezone="America/New_York"/>
          <Time2 
          desk="The time now in Los Angeles"
          timezone="America/Los_Angeles"/>
          <Timer/> 
          <Hello
          name="World"/>
          <Test/>
    </>
    );
  }
}

export default App;
