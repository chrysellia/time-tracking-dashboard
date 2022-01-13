import React from 'react'
import './Work.style.scss'
import {BsThreeDots} from 'react-icons/bs';

const Work = () => {
    return (
        <div className="work-component">
            <div className="work-wrapper">
                <div className="work-image">
                    <img src="images/icon-work.svg"/>
                </div>

                <div className="work-information">
                    <div className="header-information">
                        <div className="header-tile">Work</div>
                        <div className="header-icon"><BsThreeDots/></div>
                    </div>

                    <div className="body-information">
                        <div className="body-time">32 hrs</div>
                    </div>

                    <div className="footer-information">
                        <div className="footer-time">Last Week - 36 hrs</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
