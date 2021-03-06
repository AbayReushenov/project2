import React, {Component} from 'react';

import AppHeader from '../app-header';
import PostList from '../post-list';
import PostStatusFilter from '../post-status-filter';
import SearchPanel from '../search-panel';
import PostAddForm from '../post-add-form';

import './app.css'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [
                {label: "Test", important: false, like: false, id: 1},
                {label: "Going to learn React", important: true, like: false, id: 2 },
                {label: "That is so good", important: false, like: false, id: 3},
                {label: "Going to learn React", important: false, like: false, id: 4},
                ],
                term: '',
                filter: 'all'
        }
        this.deleteItemMethod = this.deleteItemMethod.bind(this)
        this.addItem = this.addItem.bind(this)
        this.importantOnOff = this.importantOnOff.bind(this)
        this.likedOnOff = this.likedOnOff.bind(this)
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
        this.onFilterSelect = this.onFilterSelect.bind(this)
        this.maxId = 5

    }
    deleteItemMethod(id) {
        this.setState(({data}) => {
            const i = data.findIndex(item => item.id === id)
            const newData = [...data.slice(0, i), ...data.slice(i + 1)]
            return {
                data: newData
            }
        })
    }

    addItem(necto) {
        const newItem = {
            label: necto,
            important: false,
            id: this.maxId++
        } 
        this.setState(({data})=> {
            const newData = [...data, newItem]
            return {
                data: newData
            }
        })      
    }

    importantOnOff(id)  {
        this.setState(({data}) => {
            const i = data.findIndex(item => item.id === id)

            const old = data[i] // old object with id === i
            const newItem = {...old, important: !old.important}  // create new item where  {like: !old.like}

            const newData = [...data.slice(0, i), newItem, ...data.slice(i + 1)]
            return {
                data: newData
            }
        })
    }

    likedOnOff(id) {
        this.setState(({data}) => {
            const i = data.findIndex(item => item.id === id)

            const old = data[i] // old object with id === i
            const newItem = {...old, like: !old.like}  // create new item where  {like: !old.like}

            const newData = [...data.slice(0, i), newItem, ...data.slice(i + 1)]
            return {
                data: newData
            }
        })
    }
    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return  items.filter( (item) => {
            return item.label.indexOf(term) > -1
        })
    }

    filterPost(items, filter) {
        if (filter ==='like') {
            return items.filter(item =>  item.like)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    onFilterSelect(filter) {
        this.setState({filter})          
    }

    render() {   
        const {data, term, filter} =this.state
        const liked = data.filter(item => item.like).length
        const allPosts = data.length // or => this.state.data.length

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter)

        return ( 
            <div className="app">
                <AppHeader
                liked={liked}
                allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList
                posts={visiblePosts}  // this.state.data
                onDeleteFunction={this.deleteItemMethod}
                importantOnOffFunction={this.importantOnOff}
                likedOnOffFunction={this.likedOnOff}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        )
        }

}    
