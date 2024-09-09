import React from "react";

export default function NavContentDetails({ selected }) {
    const renderContent = () => {
        switch (selected) {
            case 'mostwanted':
                return (
                    <>
                        <section className="navcontent--left">
                            <h2>Discover Bestsellers</h2>
                            <ul>
                                <li>Back In Stock</li>
                                <li>Bestseller Water Butts</li>
                                <li>Bestseller Water Butts</li>
                                <li>Bestseller Water Butts</li>
                            </ul>
                        </section>
                        <section className="navcontent--right">
                            <img src={require('../assets/download.jpeg')} alt="Brands" />
                            <span>
                                <p>Discover our Evengreener Brands</p>
                                <h3>Planet Saving Solutions</h3>
                                <button>SHOP OUR BESTSELLERS</button>
                            </span>
                        </section>
                    </>
                );
            case 'composting':
                return (
                    <>
                        <section className="navcontent--left">
                            <h2>Composting Tips</h2>
                            <ul>
                                <li>How to Compost</li>
                                <li>Composting Benefits</li>
                                <li>Composting Guide</li>
                                <li>Composting Tools</li>
                            </ul>
                        </section>
                        <section className="navcontent--right">
                            <img src={require('../assets/tab2.jpeg')} alt="Brands" />
                            <span>
                                <p>Discover our Composting Range</p>
                                <h3>Become a Composting Hero</h3>
                                <button>SHOP COMPOSTING</button>
                            </span>
                        </section>
                    </>
                );
            case 'watersaving':
                return (
                    <>
                        <section className="navcontent--left">
                            <h2>Water Saving Tips</h2>
                            <ul>
                                <li>Saving Water at Home</li>
                                <li>Water Saving Devices</li>
                                <li>Water Saving Guide</li>
                                <li>Water Saving Tips</li>
                            </ul>
                        </section>
                        <section className="navcontent--right">
                            <img src={require('../assets/download.jpeg')} alt="Brands" />
                            <span>
                                <p>Discover our Evengreener Brands</p>
                                <h3>Planet Saving Solutions</h3>
                                <button>SHOP OUR BESTSELLERS</button>
                            </span>
                        </section>
                    </>
                );
            case 'gardening':
                return (
                    <>
                        <section className="navcontent--left">
                            <h2>Gardening Tips</h2>
                            <ul>
                                <li>Gardening Basics</li>
                                <li>Gardening Tools</li>
                                <li>Gardening Guide</li>
                                <li>Gardening Tips</li>
                            </ul>
                        </section>
                        <section className="navcontent--right">
                            <img src={require('../assets/download.jpeg')} alt="Brands" />
                            <span>
                                <p>Discover our Evengreener Brands</p>
                                <h3>Planet Saving Solutions</h3>
                                <button>SHOP OUR BESTSELLERS</button>
                            </span>
                        </section>
                    </>
                );
            case 'recycling':
                return (
                    <>
                        <section className="navcontent--left">
                            <h2>Recycling Tips</h2>
                            <ul>
                                <li>How to Recycle</li>
                                <li>Recycling Benefits</li>
                                <li>Recycling Guide</li>
                                <li>Recycling Tips</li>
                            </ul>
                        </section>
                        <section className="navcontent--right">
                            <img src={require('../assets/download.jpeg')} alt="Brands" />
                            <span>
                                <p>Discover our Evengreener Brands</p>
                                <h3>Planet Saving Solutions</h3>
                                <button>SHOP OUR BESTSELLERS</button>
                            </span>
                        </section>
                    </>
                );
            case 'brands':
                return (
                    <>
                        <section className="navcontent--left">
                            <h2>Popular Brands</h2>
                            <ul>
                                <li>Brand 1</li>
                                <li>Brand 2</li>
                                <li>Brand 3</li>
                                <li>Brand 4</li>
                            </ul>
                        </section>
                        <section className="navcontent--right">
                            <img src={require('../assets/download.jpeg')} alt="Brands" />
                            <span>
                                <p>Discover our Evengreener Brands</p>
                                <h3>Planet Saving Solutions</h3>
                                <button>SHOP OUR BESTSELLERS</button>
                            </span>
                        </section>
                    </>
                );
            case 'learn':
                return (
                    <>
                        <section className="navcontent--left">
                            <h2>Learn More</h2>
                            <ul>
                                <li>Learning Resources</li>
                                <li>Learning Tips</li>
                                <li>Learning Guide</li>
                                <li>Learning Tools</li>
                            </ul>
                        </section>
                        <section className="navcontent--right">
                            <img src={require('../assets/download.jpeg')} alt="Brands" />
                            <span>
                                <p>Discover our Evengreener Brands</p>
                                <h3>Planet Saving Solutions</h3>
                                <button>SHOP OUR BESTSELLERS</button>
                            </span>
                        </section>
                    </>
                );
            case 'support':
                return (
                    <>
                        <section className="navcontent--left">
                            <h2>Support</h2>
                            <ul>
                                <li>Support Center</li>
                                <li>Support Tips</li>
                                <li>Support Guide</li>
                                <li>Support Tools</li>
                            </ul>
                        </section>
                        <section className="navcontent--right">
                            <img src={require('../assets/download.jpeg')} alt="Brands" />
                            <span>
                                <p>Discover our Evengreener Brands</p>
                                <h3>Planet Saving Solutions</h3>
                                <button>SHOP OUR BESTSELLERS</button>
                            </span>
                        </section>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <>
            {renderContent()}
        </>
    );
}
