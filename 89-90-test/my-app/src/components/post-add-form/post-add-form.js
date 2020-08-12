import React from 'react';

import './post-add-form.css'

function PostAddForm({onAdd}) {
    
    
    return (
        <div className="bottom-panel d-flex">
            <input 
                type="text"
                placeholder="What about you are thiking?"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={() => {onAdd(document.querySelector('input.form-control.new-post-label').value)}}>
                Append</button>
        </div>
    )
}

export default PostAddForm;

// onClick={() => onAdd('Hello')}>