import React, {Component} from 'react';

import './post-add-form.css'

export default class PostAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this)
        this.onSubmitFunction = this.onSubmitFunction.bind(this)
    }

    onValueChange(event) {
            this.setState({
            text: event.target.value
        })
    }

    onSubmitFunction(e) {
        e.preventDefault()
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmitFunction}>
                <input 
                    type="text"
                    placeholder="What about you are thiking?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Append
                    </button>
            </form>
        )
    } 
}

// export default PostAddForm;

// onClick={() => onAdd('Hello')}>
// onClick={() => {onAdd(document.querySelector('input.form-control.new-post-label').value)}}>
