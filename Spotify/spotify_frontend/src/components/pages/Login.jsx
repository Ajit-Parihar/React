import React from "react";
import { useState } from "react";
import {InputFiled} from '../sharedComponents/InputFiled'
import { useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../../utils/serverHelper";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const getLogIn = async() => {
      const data={email, password}
      const response = await makeUnauthenticatedPOSTRequest("/auth/login", data)
      console.log(response)
      if(response && !response.err){
         alert("successfully login")
         localStorage.setItem("token", response.token);        
         navigate("/home")
      }else{
        alert("Invalid you credentails")
      }
  }
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2 bg-gray-900 border-2 border-white ">
        <h1 className="text-white ml-28">LogIn</h1>
        <InputFiled
          type="email"
          placeholder="Enter Email"
          labelText="Email"
          value={email}
          setValue={setEmail}
        />

        <InputFiled
          type="Password"
          placeholder="Enter Password"
          labelText="Password"
          value={password}
          setValue={setPassword}
        />

        <button
          onClick={getLogIn}
          className="text-white bg-gray-600 rounded ml-28 w-20"
        >
          LogIn
        </button>
      </div>
    </div>
  );
}

export default Login;
