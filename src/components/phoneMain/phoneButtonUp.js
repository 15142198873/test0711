import React, { useState } from 'react'

export default function PhoneButtonUp() {
  const [isShow, setIsShow] = useState(false)
  return (
    <div>

      <div className='first-button' onClick={() => { setIsShow(!isShow) }}>Plan info</div>
      {isShow && <div className='list'>
        <ul>
          <li>Augmented reality editor</li>
          <li>Content management system</li>
          <li>Content management system</li>
          <li>AR projects Dashboard</li>
          <li>Product maintenance and access to releases</li>
          <li>Product maintenance and access to releases</li>
        </ul>
      </div>}
    </div>
  )
}
