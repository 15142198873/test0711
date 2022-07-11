import React from 'react'
import store from '../../redux/store'
import { useState } from 'react'
export default function PcMainContentComponent({ selectChange, change, value, index }) {

    return (
        <div>
            <div className='content'>
                <div className={selectChange === index ? 'content-header-change' : 'content-header'}>
                    <p className='content-header-text'>{value.title}</p>
                    <span className='money'>{value.money}</span>
                    <span className='month'>{value.month}</span>
                </div>
                <div className='content-center'>
                    <div className='content-centers'>
                        <span className='content-center-title'>{value.centerTitle}</span>
                        <span className='number'>{value.number}</span>
                    </div>

                    <div className='content-center-title-outside'>
                        <span className='content-center-title'>{value.centerTitleSecond}</span>
                        <span className='number'>{value.numberSecond}</span>
                    </div>

                </div>

                <div className={selectChange === index ? 'content-bottom-change' : 'content-bottom'}>
                    <ul>
                        <li>Augmented reality editor</li>
                        <li>Content management system</li>
                        <li>Content management system</li>
                        <li>AR projects Dashboard</li>
                        <li>Product maintenance and access to releases</li>
                        <li>Product maintenance and access to releases</li>
                    </ul>
                </div>
                <div>
                    <div className={selectChange === index ? 'content-bottom-button-change' : 'content-bottom-button'} onClick={() => change(index)}>Buy now</div>
                </div>
            </div>
        </div>
    )
}
