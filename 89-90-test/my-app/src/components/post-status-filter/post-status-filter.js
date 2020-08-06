import React from 'react';

import './post-status-filter.css'

function PostStatusFilter() {
    return(
        <div className="btn-group">
            <button type="button" className="btn btn-info">Total</button>
            <button type="button" className="btn-outline-secondary">Liked</button>
        </div>
    )
}

export default PostStatusFilter