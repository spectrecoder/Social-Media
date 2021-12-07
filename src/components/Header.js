import React from 'react'
import AvatarImg from './AvatarImg'
import Icon from './Icon'
import Logo from './Logo'

export default function Header() {
    return (
        <section className="header bg-gray-700 py-5 px-4 fixed top-0 left-0 w-full z-50">

            <div className="headerWrapper max-w-headerWrapper flex mx-auto">

                <div className="header__left w-2/4 border-0 border-r-2 border-solid border-gray-500 flex items-center justify-between pr-6 mr-6">
                    <Logo/>
                    <form className="header__form w-100 bg-gray-600 py-5 px-9 rounded-full flex items-center">
                        <input type="text" placeholder="Search People, Pages, etc" className="w-full bg-transparent text-xl text-white"/>
                        <i className="fas fa-search text-gray-400 text-2xl ml-4"></i>
                    </form>
                    <h3 className="text-white uppercase text-2xl font-semibold">newsfeed</h3>
                </div>

                <div className="header__right w-2/4 flex items-center justify-between">
                    <div className="icons flex gap-6">
                        <Icon iconName="fas fa-home"/>
                        <Icon iconName="fas fa-bell"/>
                        <Icon iconName="far fa-comment-dots"/>
                        <Icon iconName="fas fa-globe-europe"/>
                        <Icon iconName="fas fa-sign-out-alt"/>
                        <Icon iconName="far fa-question-circle"/>
                    </div>

                    <div className="avatarSection flex items-center">
                        <div className="avatar flex items-center">
                            <h3 className="mr-3 text-xl text-gray-200 font-semibold">Alucard Hellsing</h3>
                            <AvatarImg border image="hot.jpg"/>
                        </div>
                        <i className="fas fa-cog text-3xl text-gray-100 ml-6 cursor-pointer"></i>
                    </div>
                </div>

            </div>

        </section>
    )
}
