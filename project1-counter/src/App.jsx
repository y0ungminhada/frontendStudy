import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handleCount = (value) => {
    setCount(count + value);
  }

  return (
    <>
      <h1>Simple Counter</h1>
      <div className="counter-display">
        <h2>현재 카운트 : {count}</h2>
      </div>
      <div>
        <button className="counter-button" onClick={() => (handleCount(-1))}>-1</button>
        <button className="counter-button" onClick={() => (handleCount(-10))}>-10</button>
        <button className="counter-button" onClick={() => (handleCount(-100))}>-100</button>
        <button className="counter-button" onClick={() => (handleCount(+1))}>+1</button>
        <button className="counter-button" onClick={() => (handleCount(+10))}>+10</button>
        <button className="counter-button" onClick={() => (handleCount(+100))}>+100</button>
      </div>
    </>
  )
}

export default App
