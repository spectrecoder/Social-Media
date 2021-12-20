import React from 'react'

export default function MiniButton({text, bg, makeReset}) {
    return (
        <button onClick={(e)=>makeReset&&makeReset(e)} className={`miniButton w-28 h-12 ${bg?"bg-red-500 text-white":"hover:bg-red-500 hover:text-white hover:border-red-500 border border-solid border-gray-400 text-lg text-gray-500 transition duration-300"} font-semibold rounded-full text-center leading-extraLoose cursor-pointer text-xl`}>
            {text}
        </button>
    )
}
