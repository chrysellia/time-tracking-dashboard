import React from 'react'
import './Profile.style.scss'

const Profile = () => {
    return (
        <div className="profile-component">
            <div className="profile-wrapper">
                <div className="profile-background">
                    <div className="time-frequency">
                        <div className="time-name">Daily</div>
                        <div className="time-name text-white">Weekly</div>
                        <div className="time-name">Monthly</div>
                    </div>
                </div>
                <div className="profile-information">
                    <div className="profile-image">
                        <img src="images/image-jeremy.png"/>
                    </div>
                    <div className="profile-text">
                        <div className="profile-title">Report for</div>
                        <div className="profile-name">Jeremy <br/>Robson</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile