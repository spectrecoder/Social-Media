import React from 'react'

export default function Next(props) {
    const { onClick } = props;
    return (
            <i className={`fas fa-caret-right slick-arrow nextBtn btn`} onClick={onClick}></i>
    )
}
