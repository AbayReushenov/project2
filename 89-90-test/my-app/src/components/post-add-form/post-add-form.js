import React from 'react';

import './post-add-form.css'

function PostAddForm() {
    return (
        <form className="bottom-panel d-flex">
            <input 
                type="text"
                placeholder="What about you are thiking?"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary">
                Append</button>
        </form>
    )
}

export default PostAddForm;