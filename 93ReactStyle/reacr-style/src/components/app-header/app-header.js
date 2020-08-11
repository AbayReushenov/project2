import React from 'react';

import './app-header.css'

import styled from 'styled-components'

const Header = styled.div`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        h1 {
                /* width: 150px;
                height: 150px; */
                font-size: 26px;
                color: ${props => props.colored ? 'black' : 'red'};
                :hover {
                        color: blue
                    }
        }
        
        h2 {
                font-size: 1.2rem;
                color: grey;
                :hover {
                        color: red
                    }
        }
`

function AppHeader() {
return (
        // <div className="app-header d-flex">
        // as='a' сделали ссылку
        <Header as='a' colored={false} >
                <h1>Abay Reushenov</h1>
                <h2>5 records, liked 0</h2>
        </Header>
        )
}

export default AppHeader;