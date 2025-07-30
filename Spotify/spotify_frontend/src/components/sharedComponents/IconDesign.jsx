import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from 'react-router-dom'
export function IconDesign({iconName, width, height, iconText, isActive=true, mainDivStyling, targetLink}) {
  return (  
<Link to={targetLink}>
  <div className={`flex items-center p-1 ${mainDivStyling}`}>
      <div>
          <Icon icon={`${iconName}`} width={`${width}`} height={`${height}`} className={`${isActive?"text-white":"text-gray-500"}`} />  
      </div>
      <div>
         <p className={` font-bold ${isActive? "text-white":"text-gray-500"}`}>{iconText}</p>
      </div>
   </div>
</Link>
  )
}

export default IconDesign