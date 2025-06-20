import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(15)

  const setIncrease = () => {
    setCount(count + 1)
  }

  const setDecrease = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Current: {count}</h1>
      <button onClick={setIncrease}>Increase: {count}</button>
      <br />
      <br />
      <button onClick={setDecrease}>Decrease: {count}</button>
    </>
  )
}

export default App
