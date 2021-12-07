import React from 'react'

export default function ProfButton({text, outline}) {
    return (
        <div className={`profButton w-2/4 ${outline?'bg-gray-200' : 'bg-red-500'} ${outline?'text-gray-700': 'text-white'} py-3 text-center rounded-3xl text-xl font-medium cursor-pointer hover:${outline?'bg-gray-300': 'bg-red-700'} transition duration-300`}>
            {text}
        </div>
    )
}
