import React from 'react'
import './Profile.style.scss'
import Bloc from '../Bloc/Bloc.component';

const Profile = () => {
    return (
        <div className="profile-component">
            <div className="profile-wrapper">
                <div className="profile-background">
                    <div className="time-frequency">
                        <div className="time-name hover:text-white">Daily</div>
                        <div className="time-name hover:text-white">Weekly</div>
                        <div className="time-name hover:text-white">Monthly</div>
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

            <div><Bloc/></div>
        </div>
    )
}

export default Profile
