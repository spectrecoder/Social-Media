import React,{useEffect, useRef} from 'react'
import UpdatePost from './UpdatePost'
import {useSelector, useDispatch} from 'react-redux'
import {lb} from '../slices/profileSlice'
import {openBox} from '../slices/profileSlice'

export default function LightBox() {
    const lightBox = useSelector(lb)
    const lbRef = useRef()
    const dispatch = useDispatch()

    useEffect(()=>{
        const lbNode = lbRef.current
        lbNode.addEventListener('click', e=>{
            if(e.target.classList.contains('lightBox')){
                dispatch(openBox({class: 'hidden', postData:null}))
            }
        })

        return ()=>{
            lbNode.removeEventListener('click', e=>{
                if(e.target.classList.contains('lightBox')){
                    dispatch(openBox({class: 'hidden', postData:null}))
                }
            })
        }
    },[dispatch])

    return (
        <section ref={lbRef} className={`lightBox fixed top-0 left-0 w-full h-screen z-50 ${lightBox.class} justify-center items-center`}>
            <UpdatePost
            msg={lightBox.postInfo?.message}
            id={lightBox.postInfo?.docId} 
            url={lightBox.postInfo?.imgUrl} 
            imgName={lightBox.postInfo?.imgName} 
            userImgName={lightBox.postInfo?.userImgName}
             />
        </section>
    )
}
