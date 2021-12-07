import React from 'react'
import Friend from './Friend'
import LeftHeader from './LeftHeader'

export default function Followers() {
    return (
        <div className="followers mb-8 rounded-lg overflow-hidden h-88 bg-white">
            <LeftHeader text="who is following"/>
            <div className="followers__friends p-5 overflow-y-scroll myScroll h-83">
                <Friend pic="pic1.png"/>
                <Friend pic="pic2.png"/>
                <Friend pic="pic3.png"/>
                <Friend pic="pic4.png"/>
                <Friend pic="hot.jpg"/>
                <Friend pic="pic1.png"/>
                <Friend pic="pic2.png" last/>
            </div>
        </div>
    )
}
