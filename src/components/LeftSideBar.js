import React from 'react'
import SideItem from './SideItem'

export default function LeftSideBar({leftSide}) {
    return (
        <section ref={leftSide} className="leftSideBar h-screen md:w-32 w-28 bg-white fixed top-0 lg:left-0 -left-32 shadow-md lg:pt-44 pt-64 text-center overflow-y-scroll hideScrollBar trans">
            <div className="leftSideBar__container inline-block space-y-6">
                <SideItem iconName="fas fa-bars" fill/>
                <SideItem iconName="fas fa-rss"/>
                <SideItem iconName="fab fa-forumbee"/>
                <SideItem iconName="far fa-user"/>
                <SideItem iconName="far fa-star"/>
                <SideItem iconName="far fa-envelope"/>
                <SideItem iconName="far fa-bell"/>
                <SideItem iconName="fas fa-chart-line"/>
                <SideItem iconName="far fa-question-circle"/>
                <SideItem iconName="far fa-lightbulb"/>
            </div>
        </section>
    )
}
