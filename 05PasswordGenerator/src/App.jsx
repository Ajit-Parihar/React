import { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [number, setNumber] = useState(false)
  const [charactor, setCharactor] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)
  
  console.log(`print number ${number} print charactor ${charactor} print length ${length}`)

  const passwordGenerate = useCallback(() => {
    let str = "ABCDEFGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
         
         if(charactor)  str += "`!@#$%^&*(){}[]/:;.,";
         if(number) str += '0123456789';
     let pass = ""
     for(let i = 0; i<=length; i++){
      const randomCharactor = Math.floor(Math.random()*str.length + 1) 
       pass += str.charAt(randomCharactor)
     }
     console.log(`print password ${pass}`)
     setPassword(pass)
  }, [length, number, charactor, setPassword])

  useEffect(()=>{
    passwordGenerate(length, number, charactor, setPassword)
  },[length, number, charactor]);

  const copyPassword = useCallback(()=>{
     passwordRef.current?.select();
     passwordRef.current?.setSelectionRange(0,100)
     window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
    <div className ="w-3xl h-30 bg-green-500">
      <p className = "text-black font-medium text-xl">Generate Password</p>
        <div className = "w-3xl flex">
          <div>
          <input type="text" value={password} className="bg-white text-black rounded h-12 ml-2" placeholder="password" readOnly ref={passwordRef}></input>
          </div>
          <div>
            <button className="h-12" onClick={copyPassword}>Copy</button>
          </div>
        </div>
        <div>
           <div className = "flex justify-around">
            <input type="range" min={6} max={100} onChange={(e)=>{setLength(e.target.value)}}></input>
            <p>Length: {length}</p>
            <div>
                <label>Add Numbers</label>
                <input type="checkBox" onChange = {(e) => setNumber(e.target.checked)}></input>
            </div>
            <div>
              <label>Add Special Charactor</label>
              <input type="checkBox" onChange = {(e) => setCharactor(e.target.checked)}></input>
            </div>
           </div>
        </div>
    </div>
    </>
  )
}

export default App
