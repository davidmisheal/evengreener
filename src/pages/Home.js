import React, { useRef, useState } from "react";
import Nav from "../components/Nav";
import Ads from "../components/Ads";
import { CategoryCard } from "../components/CategoryCard";
import { ShopCollection } from "../components/ShopCollection";
import { Item } from "../components/Item";
import { Footer } from "../components/Footer";
import { ShopByCat } from "../components/ShopByCat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft, faCircleRight, faStar } from "@fortawesome/free-solid-svg-icons";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { BlogItem } from "../components/BlogItem";

export default function Home() {
    const [isHovered, setIsHovered] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const sliderRef = useRef(null);

    const handleScrollRight = () => {
        if (sliderRef.current) {
            const newScrollPosition = scrollPosition + sliderRef.current.clientWidth;
            sliderRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });
            setScrollPosition(newScrollPosition);
        }
    };

    const handleScrollLeft = () => {
        if (sliderRef.current) {
            const newScrollPosition = scrollPosition - sliderRef.current.clientWidth;
            sliderRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });
            setScrollPosition(newScrollPosition);
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.bucket--img', {
            scrollTrigger: {
                trigger: ".img--hover--section", // Trigger the animation based on the section
                start: 'top 90%',  // Start when the top of the element reaches 80% of the viewport height
                end: 'bottom 20%', // Ends when the section's bottom hits the center of the viewport
                scrub: true, toggleActions: 'restart pause reverse none'// Smoothly follows the scrollbar's position
            },
            y: (index, target) => {
                return window.innerHeight * 0.3; // Moves the image by half the height of the viewport
            }
        });

    })
    return (
        <>
            <Nav />
            <div class="vertical-text">Reviews</div>
            <div className="whole--home">
                <div className="template--body">
                    <section className="landing--section">
                        <img src={require('../assets/home.webp')} />
                        <span>
                            <h2>Collect rain water in style</h2>
                            <p>Browse our stylish range of water butts</p>
                        </span>
                    </section>
                    <section className="shopbycat--section">
                        <h2>Shop by category</h2>
                        <div className="shopbycat--items">
                            <ShopByCat name='Bestselling Water Butts' img='waterbutt.webp' />
                            <ShopByCat name='Watering Cans & Plant Misters' img='watering_cans.webp' />
                            <ShopByCat name='Bestselling Compost Bins' img='compostbins.webp' />
                            <ShopByCat name='Food Waste Solutions' img='foodwaste.webp' />
                        </div>
                    </section>
                    <section
                        className="items--section--wrapper"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {isHovered && scrollPosition > 0 && (
                            <FontAwesomeIcon
                                icon={faCircleLeft}
                                size="2xl"
                                style={{ color: "#143323", cursor: 'pointer' ,position:'absolute',bottom:'200px',left:0 ,marginLeft:'100px'}}
                                onClick={handleScrollLeft}
                            />
                        )}
                        <div ref={sliderRef} className="slider--items">
                            <span>
                                <h3>Other people love those</h3>
                                <p>Discover our bestsellers</p>
                                <button>SHOP NOW</button>
                            </span>
                            <Item viewFull={true} size='small' mini='true' name='Harcostar 350 Litre Magnum Water Butt Kit' price='£150.00' reviews='0 review' capacity='450L | 750L' img='HarcostarMagnum5.webp' />
                            <Item viewFull={true} size='small' mini='true' name='Harcostar 1,050 Litre Magnum Water Butt Triple Kit' price='£340.00' reviews='4 reviews' capacity='1050 Litre' img='MagnumWaterButt.webp' />
                            <Item viewFull={true} size='small' mini='true' name='Cloudburst 200 Litre Water Butt Kit' price='£79.99' reviews='143 reviews' capacity='200 Litre' img='Cloudburst.webp' />
                            <Item viewFull={true} size='small' mini='true' name='Cloudburst 200 Litre Water Butt Kit' price='£79.99' reviews='143 reviews' capacity='200 Litre' img='Cloudburst.webp' />
                            <Item viewFull={true} size='small' mini='true' name='Cloudburst 200 Litre Water Butt Kit' price='£79.99' reviews='143 reviews' capacity='200 Litre' img='Cloudburst.webp' />
                        </div>
                        {isHovered && (
                            <FontAwesomeIcon
                                icon={faCircleRight}
                                size="2xl"
                                style={{ color: "#143323", cursor: 'pointer',position:'absolute',bottom:'200px' ,right:0,marginRight:'100px' }}
                                onClick={handleScrollRight}
                            />
                        )}
                    </section>
                    <section className="whatpplsaying--section">
                        <img src={require('../assets/whatpeoplesaying.webp')} />
                        <div>
                            <p>WHAT PEOPLE ARE SAYING</p>
                            <span>
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ededed", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ededed", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ededed", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ededed", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ededed", }} />
                            </span>
                            <h3>
                                These are the second and third water butts we have bought from EvenGreener. Good quality, come with everything you need to get them installed. Really quick delivery. Will definitely buy from you again.
                            </h3>
                            <h5>Karen W.</h5>
                            <button>SHOP RAINSAVERS</button>
                        </div>
                    </section>
                    <section className="img--hover--section">
                        <div>
                            <img src={require('../assets/GardenW_1_1_143x40.avif')} className="img--hover--logo" />
                            <h2>Voted the best 'BUDGET BUY' in Gardeners' World Magazine</h2>
                            <a href="#">GET YOURS NOW</a>
                        </div>
                        <img src={require('../assets/image-removebg-preview.png')} className="bucket--img" />
                        <div>
                            <h5>Blackwall 220 Litre Black Compost Converter.</h5>
                            <p>
                                With 3+ million sold to date, this is the UK’s best-selling compost bin, and for a reason. Expertly designed for simple use, transform all organic waste into nutritious, valuable feed to enrich your soil and nurture your garden.
                            </p>
                            <button>SHOP PRODUCT</button>
                        </div>
                    </section>
                    <section className="fromtheblog--section">
                        <div className="fromtheblog--left">
                            <p>FROM THE BLOG</p>
                            <h2>Helping you lead an EvenGreener lifestyle</h2>
                            <button>VIEW BLOG</button>
                        </div>
                        <div className="fromtheblog--right">
                            <BlogItem img='blog1.webp' title='Save Money and the Environment: How to fit a Water Butt' time='4 minute read.' />
                            <BlogItem img='blog2.webp' title='What Are Compost Bins & How Do They Work?' time='4 minute read.' />
                        </div>
                    </section>
                </div>

            </div >
            <Footer />
        </>
    )
}