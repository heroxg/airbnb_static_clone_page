import React from "react";
import Data from '../Data'
import Card from "./Card";


export default function CardDetails() {
    // console.log(openSpots);
    const productData = Data.map(item => {
        return <Card 
            key= {item.id}
            item = {item}
            />
    })
    return (
        <div className="card__box">
            <div className="card__box-wrap">
                {productData}
            </div>
        </div>
    )
}