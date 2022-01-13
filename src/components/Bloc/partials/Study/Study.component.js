import React from 'react'
import './Study.style.scss'
import {BsThreeDots} from 'react-icons/bs';

const Study = () => {
    return (
        <div className="study-component">
            <div className="study-wrapper">
                <div className="study-image">
                    <img src="images/icon-study.svg"/>
                </div>

                <div className="study-information">
                    <div className="header-information">
                        <div className="header-tile">Study</div>
                        <div className="header-icon"><BsThreeDots/></div>
                    </div>

                    <div className="body-information">
                        <div className="body-time">4 hrs</div>
                    </div>

                    <div className="footer-information">
                        <div className="footer-time">Last Week - 7 hrs</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Study
