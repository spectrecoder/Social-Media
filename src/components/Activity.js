import React from 'react'

export default function Activity({time}) {
    return (
        <div className="activity border-l-2 border-0 border-red-500 border-solid pl-3">
            <p className="text-lg text-gray-500 font-medium pb-1">{time}</p>
            <h3 className="text-xl text-gray-500 font-semibold">Lorem ipsum dolor sit amet <span className="text-red-500">consecte adipis.</span></h3>
        </div>
    )
}
