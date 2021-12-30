import React,{useState, useRef} from 'react'
import AvatarImg from './AvatarImg'
import Icon from './Icon'
import Logo from './Logo'
import {auth, signOut } from '../firebase'
import {useSelector} from 'react-redux'
import {profile} from '../slices/profileSlice'
import AllFriends from './AllFriends'

export default function Header() {
    const user = useSelector(profile)
    const [open, setOpen] = useState(false)
    const spanRef = useRef()

    return (
        <section className="header bg-gray-700 py-5 fixed top-0 left-0 w-full z-50">

            <div className="headerWrapper max-w-headerWrapper flex mx-auto relative">

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
                        <div onClick={()=>setOpen(state=>!state)} className="icon w-16 h-16 rounded-full bg-gray-800 flex justify-center items-center cursor-pointer hover:bg-red-400 transition duration-500 ease-in-out group">
                            <i className={`fas fa-user text-2xl text-gray-400 group-hover:text-gray-100 relative`}>
                                <span ref={spanRef} className="absolute -top-2 left-full w-4 h-4 rounded-full bg-blue-500 text-white font-semibold text-xs flex items-center justify-center">0</span>
                            </i>
                        </div>
                        <Icon iconName="fas fa-globe-europe"/>
                        <Icon iconName="fas fa-sign-out-alt" auth={auth} signOut={signOut}/>
                        <Icon iconName="far fa-question-circle"/>
                    </div>

                    <div className="avatarSection flex items-center">
                        <div className="avatar flex items-center">
                            <h3 className="mr-3 text-xl text-gray-200 font-semibold normal-case">{user.info.displayName?.split(" ")[0]}</h3>
                            <AvatarImg border image={user.info.photoURL} name={`${user.info.photoURL ? '': user.info.displayName?.split(" ")[0][0]}`}/>
                        </div>
                        <i className="fas fa-cog text-3xl text-gray-100 ml-6 cursor-pointer"></i>
                    </div>
                </div>

                <AllFriends open={open} uid={user.info.uid} spanRef={spanRef}/>

            </div>

        </section>
    )
}
