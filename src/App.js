import React from 'react';
import './App.css';
import logo from './airbnb_logo.png'
import Nav from './components/Nav';
import Joke from './components/Joke';
import jokesData from './jokesData';
import Card from './components/Card';
import Banner from './components/Banner';
import CardDetails from './components/CardDetails';
import productData from '../src/components/CardDetails'

function App() {

   //create state for the light and dark mode
   const [mode, setMode] = React.useState(true)

   //create the function to toggle mode:
   function toggleMode() {
    setMode(prevMode => !prevMode)
  }

  console.log(jokesData);
  const jokesElement = jokesData.map(joke => {
    return <Joke 
    key={joke.id}
    setup = {joke.setup} 
    punchline = {joke.punchline} 
    />
  })
  // const style = {
  //   backgroundColor: "#fff",
  // }
  let style;

  if (mode) {
    style = {
      backgroundColor: "#fff",
    }
  } else {
    style = {
      backgroundColor: "#000",
      color: "#fff"
    }
  }
  return (
    <div className="app--wrapper" style={style}>
      <header className="app-header">
        <div className='logo__wrap'>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Nav 
        mode = {mode}
        handleClick={toggleMode} 
        />
      </header>
      <Banner />
      {productData}
      <CardDetails />
      {/* {jokesElement} */}
    </div>
  );
}

export default App;
