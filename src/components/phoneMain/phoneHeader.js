import React from 'react'
import '../../style/phoneStyle.scss'
import Logo from '../../phoneImage/phoneLogo.png'
import Shape from '../../phoneImage/Shape.png'
import Line from '../../image/partingLine.png'
import Head from '../../phoneImage/heads.png'
export default function phoneHeader() {
  return (
    <div>
      <div className='phoneHeader'>
        <div className='phone-logo'>
          <img src={Logo} alt='' />
        </div>
        <div className='center'>
          <span>MENU</span>
          <img src={Shape} alt='' className='center-image' />
        </div>
        <div className='line'>
          <img src={Line} alt='' />
        </div>
        <div className='head'>
          <img src={Head} alt='' />
        </div>
      </div>
    </div>
  )
}
