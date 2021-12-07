import React from 'react'
import Ad from './Ad'
import AllPosts from './AllPosts'
import BigAd from './BigAd'
import Post from './Post'
import Stories from './Stories'
import Suggested from './Suggested'

export default function MainMiddle() {
    return (
        <div className="mainMiddle">
            <Post/>
            <Ad/>
            <Stories/>
            <Suggested/>
            <BigAd/>
            <AllPosts/>
        </div>
    )
}
