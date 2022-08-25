import logo from '../src/airbnb_logo.png';
import './App.css';
import Joke from './components/Joke';
import jokesData from './jokesData';

function App() {
  console.log(jokesData);
  const jokesElement = jokesData.map(joke => {
    return <Joke setup = {joke.setup} punchline = {joke.punchline} />
  })
  return (
    <div className="app--wrapper">
      <header className="app-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* {jokesElement} */}
    </div>
  );
}

export default App;
