import React from "react";
import './Card.css'



function Card(props) {
    let badgeText;
    if(props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.item.location === "online") {
        badgeText = "ONLINE";
    }
    return (
            <div className="card__box-inner">
                <img src={props.item.image} />
                {badgeText && <a href="#">{badgeText}</a>}
                <div className="card--box-inner-text">
                    <p><i className="fa fa-star"></i> {props.item.rating} . ({props.item.reviewCount}) {props.item.location}</p>
                    <p>{props.item.name}</p>
                    <p>from ${props.item.price} /person</p>
                </div>
            </div>
    )
}

export default Card