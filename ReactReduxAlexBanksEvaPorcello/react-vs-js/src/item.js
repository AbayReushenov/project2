import React from 'react'

export default function Item(props) {
    return (
        <li className="item-li">
        <span className="item-span">
            {props.propertiesLabel}
        </span>
        </li>
    )
}

function Item2 ({label}) {
    return (
        <li className="item-li">
        <span className="item-span">
            {label}
        </span>
        </li>
    )
}
export {Item2} 