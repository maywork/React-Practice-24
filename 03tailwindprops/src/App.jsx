import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: 'May',
    age: 21
  }

  return (
    <>
      <h1 className='bg-slate-500 text-slate-800  font-bold p-4 rounded-xl mb-4'>Tailwind Test</h1>

      <Card channel='chaiaurcode' someObj={myObj} />


    </>
  )
}

export default App
