import React, {Component} from 'react'

export default class Counter1 extends Component {
  constructor(){
    super()
    this.state = {quanto: 0}
  }

  plus = () => this.setState({ quanto: this.state.quanto + 1 })
  minus = () => this.setState({ quanto: this.state.quanto - 1 })
  reset = () => this.setState({ quanto: 0})

  render(){
      return (
        <div>
          <h1>Counter: {this.state.quanto}</h1>
          <button onClick={this.plus}>+1</button>
          <button onClick={this.minus}>-1</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      );
  }
}


