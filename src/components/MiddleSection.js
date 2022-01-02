import React from 'react'
import MainLeft from './MainLeft'
import MainMiddle from './MainMiddle'
import MainRight from './MainRight'

export default function MiddleSection() {
    return (
        <section className="middleSection sm:max-w-mml md:max-w-mxl lg:max-w-sxl slg:max-w-xxl max-w-mml mx-auto pt-14">
            <MainLeft/>
            <MainMiddle/>
            <MainRight/>
        </section>
    )
}
