import React from 'react'
import './Topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import klinton from '../../assets/klinton.JPG'

function Topbar() {
    return (
        <div className='topbar__container'>
            <div className="topbar__left">
                <span className='logo'>Klinton</span>
            </div>

            <div className="topbar__center">
                <div className="searchbar">
                    <SearchIcon className='search__icon'/>
                    <input placeholder='search for friends,post or video' className='serachInput'/>
                </div>
            </div>

            <div className="topbar__right ">
                <div className="topbar__links">
                    <span className='topbar__link'> HomePage</span>
                    <span className='topbar__link'>Timeline</span>
                </div>
                <div className="topbar__icon__items">
                    <div className="topbar__icons">
                        <div className="topbar__icon__item">
                            <PersonIcon />
                        <span className='topbar__icon__badge'>9</span>
                        </div>
                    </div>
                    
                    <div className="topbar__icons">
                        <div className="topbar__icon__item">
                            <ChatIcon />
                            <span className="topbar__icon__badge">2</span>
                        </div>
                    </div>

                    <div className="topbar__icons">
                        <div className="topbar__icon__item">
                            <NotificationsActiveIcon />
                            <span className="topbar__icon__badge">1</span>
                        </div>
                    </div>
                </div>
               
                <div className="topbar__img">
                    <img src={klinton} alt="" className='topbar__img__img'/>
                </div>
              
            </div>
        </div>
    )
}

export default Topbar
