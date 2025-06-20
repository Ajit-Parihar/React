import './App.css'
import Cart from './components/Cart.jsx'

function App() {
     
  return (
    <>
        <h1 className="bg-green-500 text-black p-4 rounded-xl ">!</h1>
        <Cart shoppingStatus = "Pending"/>
        <Cart shoppingStatus = "Approved"/>
    </>
  )
}

export default App;
