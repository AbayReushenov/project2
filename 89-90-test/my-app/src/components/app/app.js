import React from 'react';

import AppHeader from '../app-header';
import PostList from '../post-list';
import PostStatusFilter from '../post-status-filter';
import SearchPanel from '../search-panel';
import PostAddForm from '../post-add-form';

import './app.css'

function App() {

    const data = [
        {label: "Test", important: false, id: "iuehf"},
        {label: "Going to learn React", important: true, id: "iwrehf" },
        {label: "That is so good", important: false, id: "3425gvf"},
        {label: "Going to learn React", important: false, id: "weopfkg"},
        ]

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}    

export default App;