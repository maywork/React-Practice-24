import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-slate-500 text-slate-800  font-bold p-4 rounded-xl mb-4'>Tailwind Test</h1>

      <Card username='Mayesha' btnTxt='Click me' />
      <Card username='Hitesh' btnTxt='Visit me' />
      <Card username='Jitesh' />


    </>
  )
}

export default App
