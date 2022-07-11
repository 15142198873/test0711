import React from 'react'
import ContentComponent from './contentComponent'
import PhoneButtonDown from './phoneButtonDown'
import PhoneButtonUp from './phoneButtonUp'
export default function plates({ value }) {
    return (
        <div>
            <div className='banner-next-content'>
                <ContentComponent values={value} />
                <PhoneButtonUp />
                <PhoneButtonDown />
            </div>
        </div>
    )
}
