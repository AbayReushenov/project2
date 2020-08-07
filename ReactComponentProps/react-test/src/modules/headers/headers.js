import React, {Component} from 'react'


class Header extends Component {
    constructor() {
      super()
      this.state = {name: "Will"}
    }
  
    render() {
        setTimeout(() => {
        this.setState({name: "Ionych Tyua"})
      }, 3000)
  
      return (
        <div>
       
        <p>Hello {this.state.name}</p>
     
        </div>
      )
    }
  }

  export default Header