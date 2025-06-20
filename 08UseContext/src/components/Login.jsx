import UserContext from '../context/UserContext'
import React, {useState, useContext} from 'react'

function Login(){
    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const {setData} = useContext(UserContext)  
      function Submit(e){
        e.preventDefault();
        setData({userName, password})
    }
    return(
        <div className="flex flex-col gap-2 p-2 bg-orange-500">
            <div>
                <input type="text" placeholder="Enter Your Name" onChange={(e)=>{setUserName(e.target.value)}}></input>
            </div>
            <div>
                <input type="text" placeholder ="Enter Your Password" onChange = {(e)=>{setPassword(e.target.value)}}></input>
            </div>
            <button onClick={Submit}>submit</button>
        </div>
    );
}

export default Login;