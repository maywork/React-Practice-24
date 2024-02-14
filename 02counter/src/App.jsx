import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 5

  const addValue = () => {
    counter += 1
    setCounter(counter)
    // console.log(counter);
  }

  const removeValue = () => {
    counter -= 1
    setCounter(counter)
    // console.log(counter);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value</button>
      <br />
      <br />
      <button
        onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
