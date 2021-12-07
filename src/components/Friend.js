import React from 'react'

export default function Friend({pic, last}) {
    return (
        <div className={`friend flex justify-between items-center ${last?'mb-0':'mb-4'}`}>
            <div className="friend__name flex gap-3 items-center">
                <img src={`images/${pic}`} alt="friend" className="w-18 h-18 rounded-full object-cover border-none"/>
                <h3 className="text-xl font-semibold text-gray-500">red riot</h3>
            </div>
            <div className="friend__button buttonUp text-red-500 text-lg font-medium cursor-pointer relative leading-none">add friend</div>
        </div>
    )
}
