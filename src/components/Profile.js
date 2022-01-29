import React from 'react'
import LeftHeader from './LeftHeader'
import ProfButton from './ProfButton'
import ProfIcons from './ProfIcons'
import SideItem from './SideItem'
import {useSelector} from 'react-redux'
import {profile} from '../slices/profileSlice'

export default function Profile() {
    const user = useSelector(profile)

    return (
        <div className="profile overflow-hidden mb-8 rounded-lg bg-white h-100">
            <LeftHeader text="your page"/>
            <div className="profile__info h-89 pt-8 px-6">

                <div className="profile__avatar flex items-center gap-4 border-0 border-b border-gray-300 border-solid pb-8">
                    {user.info.photoURL ? <img src={user.info.photoURL} alt="avatar" className="h-20 w-20 border border-gray-400 border-solid rounded-full object-cover"/> : <i className={`w-16 h-16 rounded-full border-0 cursor-pointer bg-blue-500 text-white text-3xl font-semibold flex items-center justify-center not-italic overflow-hidden normal-case`}>{user.info.displayName?.split(" ")[0][0]}</i>}
                    <div className="desc">
                        <h3 className="text-gray-500 text-2xl font-semibold cursor-pointer hover:text-red-500 relative buttonUp">my creative page</h3>
                        <div className="text-lg text-gray-400 mt-1"><i className="far fa-comment dots"></i> messages</div>
                        <div className="text-lg text-gray-400 mt-1"><i className="far fa-bell"></i> notifications</div>
                    </div>
                </div>

                <div className="profile__icons py-3 px-6 flex justify-between border-0 border-b border-gray-300 border-solid">
                    <ProfIcons icon="far fa-edit" name="publish"/>
                    <ProfIcons icon="fas fa-camera-retro" name="photo"/>
                    <ProfIcons icon="far fa-paper-plane" name="live"/>
                    <ProfIcons icon="fas fa-user-plus" name="friends"/>
                </div>

                <div className="profile__buttons py-8 flex">
                    <ProfButton text="likes"/>
                    <ProfButton text="view more" outline/>
                </div>

                <div className="profile__likes text-center">
                    <h3 className="like text-gray-600 text-3xl"><i className="far fa-heart cursor-pointer"></i> <span className="font-medium">740</span></h3>
                    <p className="text-red-500 text-xl font-normal py-2 hover:underline cursor-pointer">29 new likes this week</p>
                    <div className="image__container flex mt-4 justify-center">
                        <SideItem avatar="pic1.png"/>
                        <SideItem avatar="pic2.png" margin="-ml-5"/>
                        <SideItem avatar="pic3.png" margin="-ml-5"/>
                        <SideItem avatar="pic4.png" margin="-ml-5"/>
                        <SideItem avatar="hot.jpg" margin="-ml-5"/>
                        <SideItem avatar="pic1.png" margin="-ml-5"/>
                        <SideItem avatar="pic2.png" margin="-ml-5"/>
                    </div>
                </div>

            </div>
        </div>
    )
}
