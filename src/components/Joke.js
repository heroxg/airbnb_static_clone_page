import React from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false)
  console.log(isShown);

  function toggleIshown(id) {
    console.log(id);
    setIsShown(previsShown => previsShown = !previsShown);
   }


    return (
        <>
            <h3>Setup: {props.setup}</h3>
            <p>PunchLine: {isShown && props.punchline}</p>
            <button onClick={toggleIshown}>{isShown ? "Hide" : "Show"} PunchLine</button>
        </>
    )
}