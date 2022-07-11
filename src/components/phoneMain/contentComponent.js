import React from 'react'

export default function contentComponent({ values }) {
  return (
    <div>
      <div className='title-content'>
        <p>{values?.title}</p>
        <p><span className='moneys'>{values?.money}</span><span className='time'>{values?.time}</span></p>
      </div>
      <div className='content-next'>
        <div className='first'>
          <span className='first-left'>{values?.firstLeft}</span>
          <span className='first-right'>{values?.firstRight}</span>
        </div>
        <div className='first'>
          <span className='first-left'>{values?.lastLeft}</span>
          <span className='first-right'>{values?.lastRight}</span>
        </div>

      </div>


    </div>
  )
}
