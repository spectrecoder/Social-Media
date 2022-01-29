import React from 'react'

export default function Prev(props) {
    const { onClick } = props;
    return (
            <i className={`fas fa-caret-left slick-arrow prevBtn btn z-10`} onClick={onClick}></i>
    )
}
