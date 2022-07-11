import React from 'react'
import '../../style/style.scss'
import Logo from '../../image/pcLogo.png'
import Line from '../../image/partingLine.png'
import Photo from '../../image/profilePhoto.png'
import Choose from '../../image/choose.png'
export default function pcHeader() {
    return (
        <div>
            <div className='pc-header'>
                <div className='pc-logo'>
                    <img src={Logo} alt='' />
                </div>
                <div>
                    <ul className='list-title'>
                        <li>Campaigns</li>
                        <li>Roars</li>
                        <li>Statistic</li>
                        <li>Teams</li>
                    </ul>
                </div>
                <div className='parting-line'>
                    <img src={Line} alt='' />
                </div>
                <div>
                    <ul className='list-title-right'>
                        <li>Plans</li>
                        <li>Mobile App</li>
                    </ul>
                </div>

                <div className='create-button'>
                    <button>Create ROAR</button>
                </div>
                <div className='parting-line-button'>
                    <img src={Line} alt='' />
                </div>
                <div className='profile-photo'>
                    <img src={Photo} alt='' />
                </div>
                <div className='name'>
                    <span>John Dou</span>
                </div>
                <div className='choose-img'>
                    <img src={Choose} alt='' />
                </div>
            </div>
        </div>
    )
}
