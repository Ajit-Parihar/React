import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")
  return (
    
    <div className='w-screen h-screen bg-black-500' style={{backgroundColor: color}}>
       <div className = "bg-white rounded-2xl flex justify-between p-4 align-bottom">
       <button className="bg-red-500 text-white rounded-2xl p-2" onClick={()=>{setColor("red")}}>Red</button>
       <button className="bg-green-500 text-white rounded-2xl p-2" onClick={()=>{setColor("green")}}>green</button>
       <button className="bg-blue-500 text-white rounded-2xl p-2" onClick={()=>{setColor("blue")}}>blue</button>
       <button className="bg-orange-500 text-white rounded-2xl p-2" onClick={()=>{setColor("orange")}}>orage</button>
       <button className="bg-yellow-500 text-white rounded-2xl p-2" onClick={()=>{setColor("yellow")}}>yellow</button>
       <button className="bg-pink-500 text-white rounded-2xl p-2" onClick={()=>{setColor("pink")}}>pink</button>
       </div>
    </div>
    
  )
}

export default App
