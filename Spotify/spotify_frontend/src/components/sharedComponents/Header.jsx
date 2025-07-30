import React from "react";
import { IconDesign } from "./IconDesign";
import { useNavigate } from "react-router-dom";


export function Header() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate()
  const getLogIn=()=>{
      navigate('/login')
  }
  const getSignUP=()=>{
    navigate('/sign_up')
  }
  return (
    <div className="flex justify-between p-4 bg-gray-700 text-white">
      <div>
        <IconDesign
          iconName="mdi:music"
          width="34"
          height="34"
          iconText="Music"
          textStyling="text-2xl"
        />
      </div>
      <div>
        <div className="flex gap-4">
          {token ? (
            <>
              <button>Profile</button>
            </>
          ) : (
            <>
              <button onClick={getLogIn}>Login</button>
              <button onClick={getSignUP}>SignUp</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
