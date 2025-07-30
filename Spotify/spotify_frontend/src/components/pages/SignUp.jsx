import React from 'react'
import {useState} from 'react'
import {InputFiled} from '../sharedComponents/InputFiled'
import { useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from '../../utils/serverHelper';

export function SignUp() {
    const navigate = useNavigate()
    const [email,setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username , setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const getSignUp=async()=>{
        if(confirmPassword == password){
            const data={email, username, password, confirmPassword, firstName, lastName}
            const response = await makeUnauthenticatedPOSTRequest("/auth/register", data,)
            if(response && !response.error){
                alert("successfully Account Created")
                localStorage.setItem("token", response.token);        
                navigate('/home')
            }else{
                alert(response.error)
            }
        }else{
          alert("Password and Confirm Password are Not Same")
        }
    }
  return (
<div className="flex justify-center">        
    <div className="flex flex-col gap-2 bg-gray-900 border-2 border-white ">
        <h1 className="text-white ml-28">SignUP</h1>
        <InputFiled
               type = "email"
               placeholder = "Enter Email"
               labelText = "Email"
               value={email}
               setValue={setEmail}
            />
            <InputFiled
               type = "text"
               placeholder = "Enter User Name"
               labelText = "UserName"
               value={username}
               setValue={setUsername}
            />
            <InputFiled
               type = "Password"
               placeholder = "Enter Password"
               labelText = "Password"
               value={password}
               setValue={setPassword}
            />
             <InputFiled
               type = "Password"
               placeholder = "Enter Confirm Password"
               labelText = "Confirm Password"
               value={confirmPassword}
               setValue={setConfirmPassword}
            />
            <InputFiled
               type = "text"
               placeholder = "Enter First Name"
               labelText = "First Name"
               value={firstName}
               setValue={setFirstName}
            />
            <InputFiled
               type = "text"
               placeholder = "Enter Last Name"
               labelText = "Last Name"
               value={lastName}
               setValue={setLastName}
            />
         <button onClick={getSignUp} className="text-white bg-gray-600 rounded ml-28 w-20">SignUP</button> 
        </div>
    </div>
  )
}

export default SignUp