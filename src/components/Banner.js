import React from "react";
import banner from '../images/main_banner.png';
import './Banner.css'

export default function Banner() {
    return (
        <div className="banner--wrapper">
            <div className="banner-wrapper-inner">
                <img src={banner} />
            </div>
            <div className="heading--wrap">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )

}

