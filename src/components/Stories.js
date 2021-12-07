import React from 'react'
import LeftHeader from './LeftHeader'
import Story from './Story'

export default function Stories() {
    return (
        <div className="stories h-88 bg-white rounded-lg overflow-hidden mb-8">
            <LeftHeader extra noBorder text="recent stories"/>
            <div className="stories__content h-83 px-8">
                <div className="storyContainer w-full h-full border-0 border-t border-solid border-gray-300 py-6 flex justify-between">
                    <Story bgImg="story-1.png"/>
                    <Story image="pic1.png" bgImg="story-2.png"/>
                    <Story image="pic2.png" bgImg="story-3.png"/>
                    <Story image="pic3.png" bgImg="story-4.png"/>
                </div>
            </div>
        </div>
    )
}
