import React from 'react'

export const CategoryCard = (props) => {
  return (
    <div className='cateogrycard--main'>
        <img src={require (`../assets/${props.img}`)}/>
        <h3>{props.category}</h3>
    </div>
  )
}
