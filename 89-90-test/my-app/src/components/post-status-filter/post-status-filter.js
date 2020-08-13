import React, {Component} from 'react';

import './post-status-filter.css'


export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props)
        this.buttons = [
            {name: 'all', label: 'Total'},
            {name: 'like', label: 'Liked'}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props
            const actv =  filter === name   // this.props.filter
            const classActive = actv ? 'btn-info' : 'btn-outline-secondary '
            return(
                <button 
                    key={name} 
                    type="button" 
                    className={`btn ${classActive}`}
                    onClick={() => onFilterSelect(name)}  // this.props.onFilterSelect
                    >{label}</button>
            )
        })



    return(
        <div className="btn-group">
            {buttons}
        </div>
    )
    }
}