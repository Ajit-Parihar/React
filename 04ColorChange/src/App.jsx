import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")
  return (
    
    <div className="w-screen h-screen" style={{ backgroundColor: color }}>
      <div className="bg-white rounded-2xl flex justify-between p-4 align-bottom space-x-2">
        <button className="bg-red-500 text-white rounded-2xl p-2" onClick={() => setColor("red")}>Red</button>
        <button className="bg-green-500 text-white rounded-2xl p-2" onClick={() => setColor("green")}>Green</button>
        <button className="bg-blue-500 text-white rounded-2xl p-2" onClick={() => setColor("blue")}>Blue</button>
        <button className="bg-orange-500 text-white rounded-2xl p-2" onClick={() => setColor("orange")}>Orange</button>
        <button className="bg-yellow-500 text-white rounded-2xl p-2" onClick={() => setColor("yellow")}>Yellow</button>
        <button className="bg-pink-500 text-white rounded-2xl p-2" onClick={() => setColor("pink")}>Pink</button>
      </div>
    </div>
  )
}

export default App
