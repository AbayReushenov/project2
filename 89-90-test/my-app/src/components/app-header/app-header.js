import React from 'react';

import './app-header.css'

function AppHeader({liked, allPosts}) {
return (
        <div className="app-header d-flex">
                <h1>Abay Reushenov</h1>
                <h2>{allPosts} records, liked {liked}</h2>
        </div>
        )
} 

export default AppHeader;