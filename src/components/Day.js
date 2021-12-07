import React from 'react'

export default function Day({dayName, degree}) {
    return (
        <div className="day text-center">
            <h4 className="day__style">{dayName}</h4>
            <i className="fas fa-cloud-moon text-2xl text-white"></i>
            <div className="day__degree day__style"><span className="relative">{+degree.toFixed(1)}</span></div>
        </div>
    )
}
