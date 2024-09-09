import React from 'react'
import Nav from "../components/Nav";
import Ads from "../components/Ads";
import { Footer } from "../components/Footer";
export const PageTemplate = ({ children }) => {
    return (
        <>
            <Nav />
            <div class="vertical-text">Reviews</div>
            <div className="whole--home">
                <div className="home--body">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}
