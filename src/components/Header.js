import React,{useState, useRef, useEffect} from 'react'
import AvatarImg from './AvatarImg'
import Icon from './Icon'
import Logo from './Logo'
import {auth, signOut } from '../firebase'
import {useSelector, useDispatch} from 'react-redux'
import {profile, setMessage} from '../slices/profileSlice'
import AllFriends from './AllFriends'

export default function Header({leftSide, rightSide}) {
    const user = useSelector(profile)
    const [open, setOpen] = useState(false)
    const spanRef = useRef()
    const sec__spanRef = useRef()
    const dispatch = useDispatch()
    const [menuOpen, setMenuOpen] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)
    const doubleMenu = useRef()

    useEffect(()=>{
        const menus = doubleMenu.current
        const left = leftSide.current
        const right = rightSide.current
        menus.addEventListener('click', ()=>{
            if(!left.classList.contains('leftShow') && !right.classList.contains('rightShow')){
                setMenuOpen(false)
                setOpen(false)
                setOpenSearch(false)
                left.classList.add('leftShow')
                right.classList.add('rightShow')
            }else{
                left.classList.remove('leftShow')
                right.classList.remove('rightShow')
            }
        })

        return ()=>{
            menus.removeEventListener('click', ()=>{
                if(!left.classList.contains('leftShow') && !right.classList.contains('rightShow')){
                    setMenuOpen(false)
                    setOpen(false)
                    setOpenSearch(false)
                    left.classList.add('leftShow')
                    right.classList.add('rightShow')
                }else{
                    left.classList.remove('leftShow')
                    right.classList.remove('rightShow')
                }
            })
        }
    },[leftSide, rightSide])

    function openModules(action){
        switch(action){
            case "OPEN__MENU":
                setMenuOpen(state=>!state)
                setOpen(false)
                setOpenSearch(false)
                break
            case "OPEN__FRIENDLIST":
                setOpen(state=>!state)
                setMenuOpen(false)
                setOpenSearch(false)
                break;
            case "OPEN__SEARCHBAR":
                setOpenSearch(state=>!state)
                setMenuOpen(false)
                setOpen(false)
                break;
            default:
                return
        }
    }

    return (
        <section className="header bg-gray-700 py-5 sticky top-0 left-0 w-full z-50">

            <div className="headerWrapper max-w-headerWrapper lg:flex mx-auto relative px-4">

                <div className="header__left lg:w-2/4 w-full border-0 lg:border-r-2 border-b-2 lg:border-b-0 border-solid border-gray-500 flex items-center justify-between lg:pr-6 mr-6 pb-6 lg:pb-0">
                    <Logo/>
                    
                    <form className={`header__form absolute trans top-112 left-0 w-full sm:static sm:top-auto sm:left-auto sm:w-90 sm:max-w-80% lg:w-25 xl:w-89 bg-gray-600 py-5 px-9 rounded-full flex items-center ${openSearch?'module__show':'module__hide'} sm:transition-none`}>
                        <input type="text" placeholder="Search People, Pages, etc" className="w-full bg-transparent text-xl text-white"/>
                        <i className="fas fa-search text-gray-400 text-2xl ml-4 cursor-pointer"></i>
                    </form>

                    <div ref={doubleMenu} className={`icon w-16 h-16 lg:hidden flex rounded-full bg-gray-800 justify-center items-center cursor-pointer hover:bg-red-400 transition duration-500 ease-in-out group`}>
                        <i className={`fas fa-sliders-h text-2xl text-gray-400 group-hover:text-gray-100`}></i>
                    </div>

                    <h3 className="text-white uppercase text-2xl font-semibold hidden lg:block">newsfeed</h3>
                </div>

                <div className="header__right lg:w-2/4 w-full flex items-center justify-between pt-6 lg:pt-0">
                    <div className={`icons trans sm:flex md:gap-6 sm:gap-3 sm:static sm:top-auto sm:left-auto absolute bg-gray-800 sm:bg-transparent top-110 left-0 w-full sm:w-auto ${menuOpen?'module__show':'module__hide'} sm:transition-none`}>
                        <Icon name="home" iconName="fas fa-home"/>
                        <Icon name="notifications" iconName="fas fa-bell"/>
                        <div onClick={()=>setOpen(state=>!state)} className="icon hidden w-16 h-16 rounded-full bg-gray-800 sm:flex justify-center items-center cursor-pointer hover:bg-red-400 transition duration-500 ease-in-out group">
                            <i className={`fas fa-user text-2xl text-gray-400 group-hover:text-gray-100 relative`}>
                                <span ref={spanRef} className="absolute -top-2 -right-4 w-5 h-5 rounded-full bg-blue-500 text-white font-semibold text-xs flex items-center justify-center">0</span>
                            </i>
                        </div>
                        <Icon name="news" iconName="fas fa-globe-europe"/>
                        <Icon name="sign out" iconName="fas fa-sign-out-alt" auth={auth} signOut={signOut} dispatch={dispatch} setMessage={setMessage}/>
                        <Icon name="faq" iconName="far fa-question-circle"/>
                    </div>

                    <div className="avatarSection flex items-center">
                        <div className="avatar flex items-center">
                            <h3 className="mr-3 text-xl text-gray-200 font-semibold normal-case hidden sm:block">{user.info.displayName?.split(" ")[0]}</h3>
                            <AvatarImg border image={user.info.photoURL} name={`${user.info.photoURL ? '': user.info.displayName?.split(" ")[0][0]}`}/>
                        </div>
                        <i className="fas fa-cog text-3xl text-gray-100 ml-6 cursor-pointer hidden md:block"></i>
                    </div>

                    <div className="toggleIcons sm:hidden sm:gap-0 gap-4 flex">
                        <div onClick={()=>openModules('OPEN__MENU')} className={`icon w-16 h-16 rounded-full bg-gray-800 flex justify-center items-center cursor-pointer hover:bg-red-400 transition duration-500 ease-in-out group`}>
                            <i className={`fas fa-bars text-2xl text-gray-400 group-hover:text-gray-100`}></i>
                        </div>
                        
                        <div onClick={()=>openModules('OPEN__FRIENDLIST')} className="icon w-16 h-16 rounded-full bg-gray-800 flex justify-center items-center cursor-pointer hover:bg-red-400 transition duration-500 ease-in-out group">
                            <i className={`fas fa-user text-2xl text-gray-400 group-hover:text-gray-100 relative`}>
                                <span ref={sec__spanRef} className="absolute -top-2 -right-4 w-5 h-5 rounded-full bg-blue-500 text-white font-semibold text-xs flex items-center justify-center">0</span>
                            </i>
                        </div>

                        <div onClick={()=>openModules('OPEN__SEARCHBAR')} className={`icon w-16 h-16 rounded-full bg-gray-800 flex justify-center items-center cursor-pointer hover:bg-red-400 transition duration-500 ease-in-out group`}>
                            <i className={`fas fa-search text-2xl text-gray-400 group-hover:text-gray-100`}></i>
                        </div>
                    </div>

                    
                </div>

                <AllFriends open={open} uid={user.info.uid} spanRef={spanRef} sec__spanRef={sec__spanRef}/>

            </div>

        </section>
    )
}
