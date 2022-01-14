import React from 'react'
import './Exercise.style.scss'
import {BsThreeDots} from 'react-icons/bs';

const Exercise = () => {
    return (
        <div className="exercise-component">
            <div className="exercise-wrapper">
                <div className="exercise-image">
                    <img src="images/icon-exercise.svg"/>
                </div>

                <div className="exercise-information">
                    <div className="header-information">
                        <div className="header-tile">Exercise</div>
                        <div className="header-icon" style={{color:'#6f76c8'}}><BsThreeDots className="hover:text-white"/></div>
                    </div>

                    <div className="body-information">
                        <div className="body-time">4 hrs</div>
                    </div>

                    <div className="footer-information">
                        <div className="footer-time">Last Week - 5 hrs</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exercise
