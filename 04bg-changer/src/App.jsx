import { useState } from "react"


function App() {
  const [color, setColor] = useState('palegreen')

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-transparent px-3 py-2 rounded-full">

            <button
              className="outline-none px-4 py-1 rounded-full text-gray-800 shadow-lg"
              style={{ backgroundColor: '#FFB534' }}
            >Yellow</button>
            <button
              className="outline-none px-4 py-1 rounded-full text-gray-800 shadow-lg"
              style={{ backgroundColor: '#FBF6EE' }}
            >Cream</button>
            <button
              className="outline-none px-4 py-1 rounded-full text-gray-800 shadow-lg"
              style={{ backgroundColor: 'palegreen' }}
            >Light Green</button>
            <button
              className="outline-none px-4 py-1 rounded-full text-gray-800 shadow-lg"
              style={{ backgroundColor: '#65B741' }}
            >Green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
