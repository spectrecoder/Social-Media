import React from 'react'
import SideItem from './SideItem'

export default function RightSideBar() {
    return (
        <section className="rightSideBar h-full w-32 bg-white fixed top-0 right-0 shadow-md pt-44 text-center">
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
