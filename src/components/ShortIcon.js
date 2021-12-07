import React from 'react'

export default function ShortIcon({icon, name}) {
    return (
        <div className="shortIcon flex gap-3 items-center group">
            <i className={`${icon} text-gray-500 group-hover:text-red-500 text-3xl`}></i>
            <h3 className="group-hover:text-red-500 cursor-pointer text-gray-500 text-xl">{name}</h3>
        </div>
    )
}
