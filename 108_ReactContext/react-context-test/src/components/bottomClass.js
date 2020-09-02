import React, { Component } from 'react'
import ContextHelper from './contextHelper'


export default class BottomClass extends Component {

    render() {
        return (
            <div>
                <h5 >Hi there! My name is {this.context.name}, I am {this.context.age} years</h5>
            </div>
       )
    }
}

BottomClass.contextType = ContextHelper

