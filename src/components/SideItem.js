import React from 'react'

export default function SideItem({iconName, fill, avatar, margin}) {
    return (
        <>
            {avatar?
            (<div className={`w-14 h-14 rounded-full cursor-pointer ${margin?`-ml-${margin}` : ''}`}>
                <img src={`images/${avatar}`} alt="images" className="w-full h-full rounded-full object-cover border-none"/>
            </div>)
            :
            (<div className={`w-16 h-16 rounded-full ${fill ? 'bg-gray-700':'bg-gray-200 hover:bg-gray-300'} flex justify-center items-center cursor-pointer transition duration-500 ease-in-out group`}>
                <i className={`${iconName} text-3xl ${fill ? 'text-gray-100' : 'text-gray-500'} group-hover:text-red-400 transition duration-100 ease-in-out`}></i>
            </div>)}
        </>
    )
}
