import React from 'react'
import LeftHeader from './LeftHeader'

export default function Intro() {
    return (
        <div className="create h-88 bg-white rounded-lg overflow-hidden mb-8">
            <LeftHeader text="profile intro"/>
            <div className="intro__content px-7 flex flex-col justify-center h-83">
                <div className="about pb-5 border-0 border-b border-solid border-gray-200">
                    <h3 className="text-2xl text-gray-600 font-semibold pb-2">about</h3>
                    <p className="text-xl font-normal text-gray-500 leading-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti possimus inventore accusamus!</p>
                </div>
                <div className="tv py-5 border-0 border-b border-solid border-gray-200">
                    <h3 className="text-2xl text-gray-600 font-semibold pb-2"> Fav Tv Show</h3>
                    <p className="text-xl font-normal text-gray-500 leading-8">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                </div>
                <div className="music pt-5">
                    <h3 className="text-2xl text-gray-600 font-semibold pb-2">  Favourit Music</h3>
                    <p className="text-xl font-normal text-gray-500 leading-8">Lorem ipsum dolor, sit amet</p>
                </div>
            </div>
        </div>
    )
}
