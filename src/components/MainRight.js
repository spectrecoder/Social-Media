import React from 'react'
import Create from './Create'
import Events from './Events'
import Intro from './Intro'
import Profile from './Profile'
import Recent from './Recent'
import Video from './Video'

export default function MainRight() {
    return (
        <div className="mainRight">
            <Video/>
            <Profile/>
            <Events/>
            <Create/>
            <Intro/>
            <Recent/>
        </div>
    )
}
