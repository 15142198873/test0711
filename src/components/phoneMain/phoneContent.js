import React from 'react'
import Banner from '../../phoneImage/banner.png'
import ContentComponent from './contentComponent'
import PhoneButtonDown from './phoneButtonDown'
import PhoneButtonUp from './phoneButtonUp'
import { useState } from 'react'
import store from '../../redux/store'
import Plates from './plates'
export default function PhoneContent() {


    return (
        <div>
            <div className='banner'>
                <img src={Banner} alt='' />
            </div>
            {
                store.getState().array.map((item, index) => {
                    return <Plates key={index} value={item} />
                })
            }
        </div>
    )
}
