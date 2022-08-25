import React from "react";

export default function Joke(props) {
    return (
        <>
            <h3>Setup: {props.setup}</h3>
            <p>PunchLine: {props.punchline}</p>
        </>
    )
}