import React from 'react'
import UpdatePost from './UpdatePost'

export default function LightBox() {
    return (
        <section className="lightBox fixed top-0 left-0 w-full h-screen z-50 flex justify-center items-center">
            <UpdatePost/>
        </section>
    )
}
