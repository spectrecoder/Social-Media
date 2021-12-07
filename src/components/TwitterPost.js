import React from 'react'

export default function TwitterPost({name, last}) {
    return (
        <div className={`tPost ${last?'mb-0':'mb-6'} group`}>
            <div className="tPost__header flex gap-6">
                <i className="fab fa-twitter text-3xl text-blue-400 group-hover:text-red-500"></i>
                <div className="tPost__name">
                    <h3 className="text-2xl text-gray-700 font-semibold">{name}</h3>
                    <p className="text-lg text-gray-400 font-medium">{`@${name}`}</p>
                </div>
            </div>
            <p className="pt-4 pb-2 text-lg text-gray-400 font-medium">tomorrow with the company we were working and 5 child run away from the working place. <span className="text-red-500 cursor-pointer">#daydream5k</span></p>
            <p className="font-normal text-gray-800 text-lg">2 hours ago</p>
        </div>
    )
}
