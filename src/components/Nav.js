import React from "react";
import Light from '../images/light__mode.png'
import Dark from '../images/dark__mode.png'

export default function Nav(props) { 
    const brightColor = {
        color: "#000"
    }
    const dollColor = {
        color: "#e5e5e5"
    }
    const whiteColor = {
        color: "#fff"
    }
    return (
        <nav>
            <ul>
                <li style={props.mode ? {brightColor} : {dollColor} }>light</li>
                <li className="color__mode">
                    {props.mode ? <img src={Light} onClick={props.handleClick}/> : <img src={Dark} onClick={props.handleClick}/>}
                </li>
                <li style={props.mode ? {whiteColor} : {dollColor} }>
                   dark 
                </li>
            </ul>
        </nav>
    )
}