import React, {Component} from 'react'

export default class Form1 extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: "",
            comments: "",
            choise: 'react'
        }
    }

    newUserName = e => this.setState({username: e.target.value})
    newComments = e => this.setState({comments: e.target.value})  
    newChoise = e => this.setState({choise: e.target.value}) 
    newSubmit = e => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.choise}`) 
        e.preventDefault() // page doesn't refresh !
    }


    render(){
        return (
            <>
                <form  onSubmit={this.newSubmit}>
                    <div>
                        <label>Username</label>
                        <input 
                            type="text" 
                            value={this.state.username} 
                            onChange={this.newUserName}
                        />
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea 
                            value={this.state.comments} 
                            onChange={this.newComments}>
                        </textarea>
                    </div>
                    <div>
                        <label>Your choice</label>
                        <select value={this.state.choise} onChange={this.newChoise}>
                            <option value='react'>React</option>
                            <option value='angular'>Angular</option>
                            <option value='vue'>Vue</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }
}
