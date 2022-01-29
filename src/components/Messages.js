import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {profile, setMessage} from '../slices/profileSlice'

export default function Messages() {
    const {message: {color1, color2, notice, icon, show}} = useSelector(profile)
    const dispatch = useDispatch()

    useEffect(()=>{
        const timer = setTimeout(()=>{
            dispatch(setMessage({color1: null, color2: null, notice: null, icon: null, show:false}))
        }, 2000)

        return ()=>clearTimeout(timer)
    },[dispatch, color1, color2, notice, icon, show])

    function hideMsg(){
        dispatch(setMessage({color1: null, color2: null, notice: null, icon: null, show:false}))
    }

    return (
        <div className={`msg ${show?'block':'hidden'} fixed top-20 right-18 ${color1} flex items-center pl-8 pr-12 py-4 rounded-lg`}>
            <span className={`absolute block rounded-lg w-full h-2 ${color2} -top-1 left-0 bar`}></span>
            <i className="fas fa-times-circle absolute top-1 right-2.5 text-white text-lg cursor-pointer" onClick={hideMsg}></i>
            <i className={`${icon} mr-4 text-white text-5xl`}></i>       
            <h3 className="text-xl text-white font-semibold">{notice}</h3>
        </div>
    )
}
