import React from "react";

export default function Ads(props){
    return(
        <a href="#" className={props.name}>{props.content}</a>
    )
}