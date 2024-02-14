import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 5

  const addValue = () => {
    if (counter < 60) {
      counter += 1
      setCounter(counter)
      // console.log(counter);
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      counter -= 1
      setCounter(counter)
      // console.log(counter);
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value {counter}</button>
      <br />
      <br />
      <button
        onClick={removeValue}
      >Remove value {counter}</button>
      <h3>Footer: {counter}</h3>
    </>
  )
}

export default App
