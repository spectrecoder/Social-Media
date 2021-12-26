import React from 'react'
import UpdatePost from './UpdatePost'
import {useSelector, useDispatch} from 'react-redux'
import {lb} from '../slices/profileSlice'

export default function LightBox() {
    const lightBox = useSelector(lb)
    // console.log(lightBox)

    return (
        <section className={`lightBox fixed top-0 left-0 w-full h-screen z-50 ${lightBox.class} justify-center items-center`}>
            <UpdatePost msg={lightBox.postInfo?.message} id={lightBox.postInfo?.docId} url={lightBox.postInfo?.imgUrl} imgName={lightBox.postInfo?.imgName}/>
        </section>
    )
}
