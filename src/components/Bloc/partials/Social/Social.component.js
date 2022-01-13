import React from 'react'
import './Social.style.scss'
import {BsThreeDots} from 'react-icons/bs';

const Social = () => {
    return (
        <div className="social-component">
            <div className="social-wrapper">
                <div className="social-image">
                    <img src="images/icon-social.svg"/>
                </div>

                <div className="social-information">
                    <div className="header-information">
                        <div className="header-tile">Social</div>
                        <div className="header-icon"><BsThreeDots/></div>
                    </div>

                    <div className="body-information">
                        <div className="body-time">5 hrs</div>
                    </div>

                    <div className="footer-information">
                        <div className="footer-time">Last Week - 10 hrs</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social
