import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Person(props) { 
  return (
    <div className="person">
      <h1>{props.name}</h1> 
      <p>My age is:{props.age}</p>
    </div>
  );
}

const app = ( 
  <div>
  <Person name="Max" age="28" />
  <Person name="Abay" age="53" />  
    </div>
);

ReactDOM.render(app, document.querySelector("#root"));