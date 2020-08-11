1. convertation css to sass
https://css2sass.herokuapp.com/

2. installion
npm install node-sass --save

or

npm i node-sass

3. information
https://www.npmjs.com/package/node-sass

4. 
reacr-style/src/components/app/App.module.css

import style from './App.module.css'

5.
React Bootstrap - OLD!!!!

***1**. reactstrap  !!!!
Easy to use React Bootstrap 4 components
https://reactstrap.github.io/

- ++++++++++++++++++++++++++++
 npm install reactstrap bootstrap@4 --save
- -++++++++++++++++++++++++++++++++++++
import React from 'react';
import { Button } from 'reactstrap';

export default (props) => {
  return (
    <Button color="danger">Danger!</Button>
  );
};

*****2*****. Components
-- Buttons

https://reactstrap.github.io/components/alerts/

*******3*******. 
Import required reactstrap components within src/App.js 
file or your custom component files:

import { Button } from 'reactstrap';

******4******. 
Import Bootstrap CSS in the src/index.js file:

import 'bootstrap/dist/css/bootstrap.min.css';
******5*******
 <Button color="info">Total</Button>

*****6****
----List Group
----https://reactstrap.github.io/components/listgroup/
post-list.js

import {ListGroup} from 'reactstrap';
        <ListGroup className="app-list">
            {elements}
        </ListGroup>

6. CSS in JS
-1-: styled component


https://styled-components.com/

--0-------------------------

npm install --save styled-components
--+-----------------------------------
import styled from 'styled-components'
+-+-+-+-+-+-+-+-
const Button = styled.button``
+-+-+------------
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`
---------------+------------------------------+-------
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`
--------------------
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
`

render(
  <Container>
    <Button>Normal Button</Button>
    <Button primary>Primary Button</Button>
  </Container>
-*----------------------------------------------------

=> reacr-style/src/components/app/app.js


-*----------app-header.js---------------------************-
import styled from 'styled-components'

const Header = styled.div`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        h1 {
            /* width: 150px;
            height: 150px; */
            font-size: 26px;
            :hover {
                color: blue
            }
        }
`

function AppHeader() {
return (
        // <div className="app-header d-flex">
        <Header>
                <h1>Abay Reushenov</h1>
                <h2>5 records, liked 0</h2>
        </Header>
        )
}
-*****************************

