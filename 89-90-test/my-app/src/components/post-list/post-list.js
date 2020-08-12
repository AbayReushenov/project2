import React from 'react'
import PostListItem from '../post-list-item';

import './post-list.css'

function PostList({posts, onDeleteFunction, importantOnOffFunction, likedOnOffFunction}) {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item
        return (
            <li key={id} className='list-group-item'>
                <PostListItem 
                    {...itemProps}
                    eraseRecords={() => onDeleteFunction(id)}
                    toggleImpotant={() => importantOnOffFunction(id)}
                    toggleLiked={() => likedOnOffFunction(id)}/> 
            </li>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;