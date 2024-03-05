import './App.css'
import { useState } from 'react';

import ShowCounter from './components/ShowCounter/ShowCounter';
import DecreaseButton from './components/DecreaseButton/DecreaseButton';

function App() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <section>
      <ShowCounter counter={ counter } />
      <button onClick={ handleClick }>Öka med 1</button>
      <DecreaseButton counter={ counter }  setCounter={ setCounter } />
    </section>
  )
}

export default App
