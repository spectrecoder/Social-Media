import React from 'react'
import LeftHeader from './LeftHeader'

export default function Events() {
    return (
        <div className="events h-86 bg-white rounded-lg overflow-hidden mb-8">
            <LeftHeader text="events explorer" extra/>

            <div className="events__cards h-81 p-6 flex flex-col justify-between">
                <div className="event__card bg-purple-600 rounded-lg py-7 sm:py-10 md:py-6 text-center">
                    <i className="fas fa-gift text-white text-6xl mb-4"></i>
                    <h3 className="text-xl font-semibold text-white">Lorem ipsum, dolor sit amet consectetur adipisicing.</h3>
                </div>
                <div className="event__card bg-pink-500 rounded-lg py-7 sm:py-10 md:py-6 text-center">
                    <i className="fas fa-microphone text-white text-6xl mb-4"></i>
                    <h3 className="text-xl font-semibold text-white">Lorem ipsum, dolor sit amet consectetur adipisicing.</h3>
                </div>
            </div>
        </div>
    )
}
