import React from 'react'
import SideItem from './SideItem'

export default function LeftSideBar() {
    return (
        <section className="leftSideBar h-full w-32 bg-white fixed top-0 left-0 shadow-md pt-44 text-center">
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
