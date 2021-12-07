import React from 'react'
import LeftHeader from './LeftHeader'
import TwitterPost from './TwitterPost'

export default function Twitter() {
    return (
        <div className="twitter rounded-lg overflow-hidden h-105 bg-white mb-8">
            <LeftHeader text="twitter feed"/>
            <div className="twitter__post p-5 overflow-y-scroll h-100 myScroll">
                <TwitterPost name="drac hellsing"/>
                <TwitterPost name="laxus drayer"/>
                <TwitterPost name="red riot"/>
                <TwitterPost name="all might"/>
                <TwitterPost name="lawliet l" last/>
            </div>
        </div>
    )
}
