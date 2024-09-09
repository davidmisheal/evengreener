import React from 'react'

export const ShopCollection = (props) => {
  return (
    <div className='shopcollection--main'>
        <section className='shopcollection--section'>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <button>SHOP COLLECTION</button>
        </section>
        <section className='shopcollection--img'>
            <img src={require (`../assets/${props.img}`)}/>
        </section>
    </div>
  )
}
