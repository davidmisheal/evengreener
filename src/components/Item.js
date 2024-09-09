import React, { useState } from 'react';

export const Item = (props) => {
    const [hover, setHover] = useState(false);

    return (
        props.viewFull ?
            <div
                className={props.mini ? 'item--main--mini' : "item--main"}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <section className='item--details'>
                    <img src={require(`../assets/${props.img}`)} alt={props.name} />
                    <h4>{props.name}</h4>
                    <p className='item--price'>{props.price}</p>
                </section>

                {/* Always render the hover section, but control its visibility with CSS */}
                <section
                    className={`
    ${props.size === 'small' ? 'item--details--hover--small' : 'item--details--hover'} 
    ${hover ? 'fade-in' : ''}
  `}
                >
                    <div>
                        <p>desc</p>
                        <ul>
                            <li>list 1</li>
                            <li>list 2</li>
                            <li>list 3</li>
                        </ul>
                    </div>
                    <button>Quick Add</button>
                </section>


                <section className='item--capreviews'>
                    <p className='item--capacity'>{props.capacity}</p>
                    <p className='item--reviews'>( {props.reviews} )</p>
                </section>
            </div> :
            <div className='item--viewfull'>
                <h2>View full collection</h2>
                <p className='p--shopnow'>SHOP NOW</p>
            </div>
    );
};
