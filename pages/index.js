import React, { useState } from 'react';
import getJoke from '../api/jokeData';

function Home() {
  const [btn, setBtn] = useState('Get a Joke');
  const [joke, setJoke] = useState({});

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });

      setBtn('Get Punchline');
    });
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Welcome Home!</h1>
      {btn === 'Get a Joke' || btn === 'Get Another Joke'
        ? <button type="button" onClick={() => getAJoke()}> {btn} </button> : <button type="button" onClick={() => setBtn('Get Another Joke')}> {btn} </button>}
      <div>{btn === 'Get Punchline' ? joke.setup : [joke.setup, joke.punchline]}</div>
    </div>
  );
}

export default Home;
