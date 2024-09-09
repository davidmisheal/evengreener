import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faYoutube, faInstagram, faFacebookF, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'; // Import the solid icons
import Ads from "./Ads";
import NavContent from "./NavContent";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Nav() {
    const [isHovered, setIsHovered] = useState(false);
    const [selected, setSelected] = useState(null)
    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }
    return (
        <>
            <div className="whole--nav">
                <Ads name='ads--dark' content='FREE UK Delivery Over $10*' />
                <section className="nav--title">
                    <span className="nav--socialmedia">
                        <FontAwesomeIcon icon={faTiktok} size="lg" />
                        <FontAwesomeIcon icon={faYoutube} size="lg" />
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                        <FontAwesomeIcon icon={faFacebookF} size="lg" />
                        <FontAwesomeIcon icon={faPinterest} size="lg" />
                    </span>
                    <span className="nav--logo">
                        <Link to={'/'}>
                            <img src={require('../assets/image-removebg-preview (2).png')} />
                        </Link>
                    </span>
                    <span className="nav--search">
                        <span>
                            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                            <p>Search</p>
                        </span>
                        <FontAwesomeIcon icon={faUser} size="lg" />
                        <FontAwesomeIcon icon={faCartShopping} size="lg" />
                    </span>
                </section>
                <section className="nav--tabs">
                    <ul>
                        <li onMouseEnter={() => {
                            handleMouseEnter()
                            setSelected('mostwanted')
                        }} onMouseLeave={handleMouseLeave}>
                            MOST WANTED
                        </li>
                        <li onMouseEnter={() => {
                            handleMouseEnter()
                            setSelected('composting')
                        }} onMouseLeave={handleMouseLeave}>
                            <Link to={'/composting'}>
                                COMPOSTING                   </Link></li>
                        <li onMouseEnter={() => {
                            handleMouseEnter()
                            setSelected('watersaving')
                        }} onMouseLeave={handleMouseLeave}>
                            <Link to={'/watersaving'}>
                                WATER SAVING                   </Link> </li>
                        <li onMouseEnter={() => {
                            handleMouseEnter()
                            setSelected('gardening')
                        }} onMouseLeave={handleMouseLeave}>
                            GARDENING                    </li>
                        <li onMouseEnter={() => {
                            handleMouseEnter()
                            setSelected('recycling')
                        }} onMouseLeave={handleMouseLeave}>
                            RECYCLING                    </li>
                        <li onMouseEnter={() => {
                            handleMouseEnter()
                            setSelected('brands')
                        }} onMouseLeave={handleMouseLeave}>
                            BRANDS                    </li>
                        <li onMouseEnter={() => {
                            handleMouseEnter()
                            setSelected('learn')
                        }} onMouseLeave={handleMouseLeave}>
                            LEARN                    </li>
                        <li onMouseEnter={() => {
                            handleMouseEnter()
                            setSelected('support')
                        }} onMouseLeave={handleMouseLeave}>
                            SUPPORT
                        </li>
                    </ul>
                </section>
                <Ads name='ads--light' content='20+ Years Trading Online' />
            </div>
            {/* <NavContent name={`whole--navcontent ${isHovered ? 'show' : ''}`} selected={selected}/> */}
        </>
    );
}
