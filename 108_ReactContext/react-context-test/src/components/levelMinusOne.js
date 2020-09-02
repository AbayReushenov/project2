import React, { Component } from 'react'
import LevelMinusTwo from './levelMinusTwo'

export default class LevelMinusOne extends Component {
    render() {
        return (
            <div>
            <h1> Hello from "Level Minus One"</h1>
            <LevelMinusTwo/>
            </div>
        )       
    }
}