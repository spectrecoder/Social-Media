import React from 'react'

export default function AvatarImg({border, image, name}) {
    return (
        <>
            {image && <img src={image} alt="images" className={`w-18 h-18 rounded-full object-cover ${border?"border border-white border-solid p-1":"border-0"} cursor-pointer`}/>}
            {name && <i className={`w-18 h-18 rounded-full ${border?"border border-white border-solid p-1":"border-0"} cursor-pointer bg-blue-500 text-white text-4xl font-semibold flex items-center justify-center not-italic`}>{name}</i>}
        </>
    )
}
