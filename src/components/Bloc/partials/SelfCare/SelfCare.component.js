import React from 'react'
import './SelfCare.style.scss'
import {BsThreeDots} from 'react-icons/bs';

const Selfcare = () => {
    return (
        <div className="selfcare-component">
            <div className="selfcare-wrapper">
                <div className="selfcare-image">
                    <img src="images/icon-self-care.svg"/>
                </div>

                <div className="selfcare-information">
                    <div className="header-information">
                        <div className="header-title">SelfCare</div>
                        <div className="header-icon"><BsThreeDots/></div>
                    </div>

                    <div className="body-information">
                        <div className="body-time">2 hrs</div>
                    </div>

                    <div className="footer-information">
                        <div className="footer-time">Last Week - 2 hrs</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Selfcare
