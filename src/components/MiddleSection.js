import React from 'react'
import MainLeft from './MainLeft'
import MainMiddle from './MainMiddle'
import MainRight from './MainRight'

export default function MiddleSection() {
    return (
        <section className="middleSection max-w-xxl mx-auto pt-14">
            <MainLeft/>
            <MainMiddle/>
            <MainRight/>
        </section>
    )
}
