import React from 'react';
import Footer from '../footer';
import Header from '../header';
import Middle from '../middle';
import Nav from '../nav';
import Right from '../right';
import './App.css';

function App() {
  return (
    <div id="app-wrapper">
        <Header/>
        <Footer/>
        <Nav/>
        <Right/>
        <Middle/>
    </div>

  );
}

export default App;
