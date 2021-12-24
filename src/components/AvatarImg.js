import React from 'react'

export default function AvatarImg({border, image}) {
    return (
        <img src={image} alt="images" className={`w-18 h-18 rounded-full object-cover ${border?"border border-white border-solid p-1":"border-0"} cursor-pointer`}/>
    )
}
