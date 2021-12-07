import React from 'react'
import Activities from './Activities'
import Birthday from './Birthday'
import Discount from './Discount'
import Followers from './Followers'
import ShortCuts from './ShortCuts'
import Twitter from './Twitter'
import Weather from './Weather'

export default function MainLeft() {
    return (
        <div className="mainLeft">
            <Weather/>
            <Birthday/>
            <Followers/>
            <Twitter/>
            <Discount/>
            <Activities/>
            <ShortCuts/>
        </div>
    )
}
