import React from 'react'

export default function Logo({black}) {
    return (
        <div className="logo flex items-center">
            <i className="fab fa-phoenix-framework text-7xl text-red-400"></i>
            <h1 className={`${black?'text-gray-800':'text-white'} text-half pl-2 lowercase font-cursive tracking-widest`}>flame</h1>
        </div>
    )
}
