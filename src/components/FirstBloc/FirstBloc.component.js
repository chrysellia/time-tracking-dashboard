import React from 'react'
import Work from './partials/Work/Work.component'
import Play from  './partials/Play/Play.component'
import Study from './partials/Study/Study.component'
import './FirstBloc.style.scss';

const FirstBloc = () => {
    return (
        <div className="firstbloc-wrapper">
            <Work/>
            <Play/>
            <Study/>
        </div>
    )
}

export default FirstBloc
