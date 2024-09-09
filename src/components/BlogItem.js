import React from 'react'

export const BlogItem = (props) => {
    return (
        <div className='blogitem--body'>
            <div>
                <img src={require(`../assets/${props.img}`)} />
            </div>
            <span>
                <h3>{props.title}</h3>
                <p>{props.time}</p>
            </span>
        </div>
    )
}
