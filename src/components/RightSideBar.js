import React from 'react'
import SideItem from './SideItem'

export default function RightSideBar({rightSide}) {
    return (
        <section ref={rightSide} className="rightSideBar trans h-screen md:w-32 w-28 bg-white fixed top-0 lg:right-0 -right-32 shadow-md lg:pt-44 pt-64 text-center overflow-y-scroll hideScrollBar z-40">
            <div className="SideBar__container inline-block space-y-6">
                <SideItem avatar="pic1.png"/>
                <SideItem avatar="pic2.png"/>
                <SideItem avatar="pic3.png"/>
                <SideItem avatar="pic4.png"/>
                <SideItem avatar="hot.jpg"/>
                <SideItem avatar="pic1.png"/>
                <SideItem avatar="pic2.png"/>
                <SideItem avatar="pic3.png"/>
                <SideItem avatar="pic4.png"/>
                <SideItem avatar="hot.jpg"/>
                <SideItem avatar="pic1.png"/>
            </div>
        </section>
    )
}
