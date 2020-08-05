import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';


// const elem = ( 
//   <div>


//   </div>
// )

const Header = () => {
  // const scr = '<script>alert("Error!")</script>'
  // return <h2>{scr}</h2>
  return <h2> Hello, world! </h2>
}

const Field = () => {
  const styledField = {
      width: "300px" 
  }
  const holder = 'Enter here'
  return <input 
              style={styledField}
              type="text" 
              placeholder={holder}
              autoComplete=""
              className="first"
              htmlFor=""
  />    
}

const Btn = () => {
  const text = "Log in"
  // const res = () => {
  //     return ' Log in, please'  
  // }
  // const p = <p>Log in</p>
  
  const logged = true

  return <button>{logged ? "Enter" : text}</button>   
}

const App = () => {
  return (
    <div>
      <Header/>
      <Field/>
      <Btn/>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// ReactDOM.render(
//   elem,
//   document.getElementById('root')
// );
// <React.StrictMode>
// <App />
// </React.StrictMode>

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();