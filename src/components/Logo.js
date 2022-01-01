import React from 'react'

export default function Logo({black}) {
    return (
        <div className="logo flex items-center">
            <i className="fab fa-phoenix-framework sm:text-7xl text-6xl text-red-400"></i>
            <h1 className={`${black?'text-gray-800':'text-white'} text-half pl-2 lowercase font-cursive tracking-widest hidden md:block`}>flame</h1>
        </div>
    )
}
