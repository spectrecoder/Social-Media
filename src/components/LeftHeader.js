import React from 'react'

export default function LeftHeader({text, noBorder, extra}) {
    return (
        <h2 className={`mainLeft__header ${!noBorder && 'border-b border-solid border-gray-300'} border-0 text-2xl text-gray-600 font-semibold bg-white px-6 h-20 relative flex items-center justify-between`}>
            {text}
            {extra && <span className="text-red-500 text-xl font-medium hover:text-gray-700 cursor-pointer">see all</span>}
        </h2>
    )
}
