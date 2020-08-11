import React from 'react'
import ReactDOM from 'react-dom';

const { render } = ReactDOM

function Welcome(props) {
    return <h1>Привет, {props.name}</h1>;
  }
  
const element = <Welcome name="Алиса" />;

render(
    element,
    document.getElementById('target2')
  );

//export default Welcome
