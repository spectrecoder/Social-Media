import React from 'react'

export default function ProfIcons({icon, name}) {
    return (
        <div className="profIcons text-center">
            <i className={`${icon} text-2xl text-gray-500 leading-none`}></i>
            <h3 className="text-lg font-normal text-gray-600 leading-none">{name}</h3>
        </div>
    )
}
