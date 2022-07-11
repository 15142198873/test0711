import React from 'react'
import Background from '../../image/background.png'
import PcMainContentComponent from './pcMainContentComponent'
import store from '../../redux/store/index'
import { useState } from 'react'

export default function PcMainContent() {
  const [selectChange, setSelectChange] = useState(null);
  return (
    <div>
      <div className='main-content'>
        <div className='header-title'>
          <img src={Background} alt=''></img>
        </div>
        <div className='main-content-outside'>
          {
            store.getState().pcArray.map((item, index) => {
              return <PcMainContentComponent value={item} index={index} selectChange={selectChange} change={setSelectChange} />
            })
          }
        </div>
      </div>
    </div>
  )
}
