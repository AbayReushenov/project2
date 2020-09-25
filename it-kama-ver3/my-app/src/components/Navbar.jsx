import React from 'react';
import s002 from './Navbar.module.css';
//console.log(s);
// let s = {
//     'nav': 'Navbar_nav__3ou9Q',
//     'item': 'Navbar_item__3qaF3',
//     'active' : 'Baksndakdn_actve'
 // }

let c1 = "item";
let c2 = "active";
// "item active"
let classes = c1 + " " + c2;
let classesNew = `${s002.item} ${c2}`;


const Navbar = () => {
    return <nav className={s002.nav}>
        <div className={s002.item}>
            <a>Profile</a>
        </div>
        <div className={`${s002.item} ${s002.active}`}>
            <a>Messages</a>
        </div>
        <div className={s002.item}>
            <a>News</a>
        </div>
        <div className={s002.item}>
            <a>Music</a>
        </div>
        <div className={s002.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;