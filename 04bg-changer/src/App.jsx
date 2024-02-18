import { useState } from "react"


function App() {
  const [color, setColor] = useState('palegreen') // or 'palegreen'

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-gray-50 bg-opacity-20  px-3 py-2 rounded-full">

            <button
              onClick={() => setColor('#FFB534')}
              className="outline-none px-4 py-1 rounded-full text-gray-800 shadow-lg"
              style={{ backgroundColor: '#FFB534' }}
            >Yellow</button>
            <button
              onClick={() => setColor('#FBF6EE')}
              className="outline-none px-4 py-1 rounded-full text-gray-800 shadow-lg"
              style={{ backgroundColor: '#FBF6EE' }}
            >Cream</button>
            <button
              onClick={() => setColor('#C1F2B0')}
              className="outline-none px-4 py-1 rounded-full text-gray-800 shadow-lg"
              style={{ backgroundColor: '#C1F2B0' }}
            >Light Green</button>
            <button
              onClick={() => setColor('#65B741')}
              className="outline-none px-4 py-1 rounded-full text-gray-800 shadow-lg"
              style={{ backgroundColor: '#65B741' }}
            >Green</button>
            <button
              onClick={() => setColor('#E86A33')}
              className="outline-none px-4 py-1 rounded-full text-gray-800 shadow-lg"
              style={{ backgroundColor: '#E86A33' }}
            >Brick</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
