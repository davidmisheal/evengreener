import React from "react";
import NavContentDetails from "./NavContentDetails";

export default function NavContent(props) {
    return (
        <div className={props.name}>
           <NavContentDetails selected={props.selected}/>
        </div>
    )
}