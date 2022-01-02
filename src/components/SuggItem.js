import React from 'react'
import MiniButton from './MiniButton'

export default function SuggItem({name, image, location}) {
    return (
        <div className="flex-col justify-between items-center slideItem">
            <img src={`images/${image}`} alt="suggested" className="w-32 h-32 object-cover border-2 border-solid border-red-600 rounded-xl"/>
            <section className="content text-center my-3">
                <p className="text-xl text-gray-700 font-semibold mb-1">{name}</p>
                <p className="text-lg text-gray-400 font-semibold">{location}</p>
            </section>
            <MiniButton text="Follow" bg/>
        </div>
    )
}
