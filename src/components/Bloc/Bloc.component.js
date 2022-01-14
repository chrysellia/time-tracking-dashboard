import React from 'react'
import Work from './partials/Work/Work.component'
import Play from  './partials/Play/Play.component'
import Study from './partials/Study/Study.component'

import Exercise from './partials/Exercise/Exercise.component'
import Social from  './partials/Social/Social.component'
import SelfCare from './partials/SelfCare/SelfCare.component'
import './Bloc.style.scss';

const Bloc = () => {
    return (
        <div className="bloc-component">
            <div className="bloc-wrapper">
                <div className="first-bloc">
                    <Work/>
                    <Play/>
                    <Study/>
                </div>

                <div className="second-bloc">
                    <div className="second-wrapper">
                        <Exercise/>
                        <Social/>
                        <SelfCare/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bloc
