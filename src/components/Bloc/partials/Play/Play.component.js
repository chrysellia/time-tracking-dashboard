import React from 'react'
import './Play.style.scss'
import {BsThreeDots} from 'react-icons/bs';

const Play = () => {
    return (
        <div className="play-component">
            <div className="play-wrapper">
                <div className="play-image">
                    <img src="images/icon-play.svg"/>
                </div>

                <div className="play-information">
                    <div className="header-information">
                        <div className="header-tile">Play</div>
                        <div className="header-icon" style={{color:'#6f76c8'}}><BsThreeDots/></div>
                    </div>

                    <div className="body-information">
                        <div className="body-time">10 hrs</div>
                    </div>

                    <div className="footer-information">
                        <div className="footer-time">Last Week - 8 hrs</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Play
