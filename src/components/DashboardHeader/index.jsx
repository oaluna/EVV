import React from 'react';
import './styles.css';
import NotificationIcon from '../../assets/icons/notification.svg';
import SettingsIcon from '../../assets/icons/settings.svg';

function DashboardHeader ({ btnText, onClick }) {
    return(
        <div className='dashbord-header-container'>
            {btnText &&  
                <button className='dashbord-header-btn' onClick={onClick}>{btnText}</button>
            }
<h3 style={{display: 'flex', textAlign:'left', width: '100%', color: '#ffffff'}}>Electronic Visit Verification (EVV)</h3>
            <div className='dashbord-header-right'>
                <img 
                    src={NotificationIcon}
                    alt='notification-icon'
                    className='dashbord-header-icon'
										style={{color: '#ffffff'}} />
                <img 
                    src={SettingsIcon}
                    alt='settings-icon'
                    className='dashbord-header-icon'
										style={{color: '#ffffff'}} />
                <img
                    className='dashbord-header-avatar'
                    src='https://reqres.in/img/faces/9-image.jpg' />
            </div>
        </div>
    )
}

export default DashboardHeader;