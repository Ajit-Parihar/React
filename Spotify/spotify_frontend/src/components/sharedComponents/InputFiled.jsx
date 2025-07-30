import React from 'react'

export function InputFiled({type, labelText, placeholder, value, setValue, ...props}) {
  return (
    <div className="flex flex-col p-4 h-16 justify-around">
        <label className="text-white" htmlFor={labelText}>{labelText}</label>
        <input type={`${type}`} className="bg-gray-600 w-66" placeholder={`${placeholder}`} id={`${labelText}`}
        value = {value}
        onChange={(e)=>{
           setValue(e.target.value)
        }}
        />  
    </div>
  )
}

export default InputFiled