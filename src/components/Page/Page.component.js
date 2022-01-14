import React from 'react'
import Profile from '../Profile/Profile.component'
import './Page.style.scss'

const Page = () => {
    return (
        <div className="page-wrapper">
            <div className="page-content">
                <Profile/>
            </div>
        </div>
    )
}

export default Page
