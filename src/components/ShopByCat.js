import React from 'react'

export const ShopByCat = (props) => {
    return (
        <div className="shopbycat--body">
            <span>
                <img src={require(`../assets/${props.img}`)} />
            </span>
            <h3>{props.name}</h3>
            <p className="p--shopby">SHOP NOW</p>
        </div>
    )
}
