'use client'
import { useState } from "react";
import items from "./items.js";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Bootstrap.module.css";
import Link from "next/link";

const Hero = () => {
    const { bootstrap } = items;
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    // Change the button from red to green
    const buttonStyle = {
        backgroundColor: "green",
        color: "white",
    };

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {bootstrap.map((item) => (
                    <Carousel.Item key={item.id} className={styles.itemP} interval={2000}>
                        <div
                            className={styles.backgroundImage}
                            style={{
                                backgroundImage: `url(${item.imageUrl})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <Carousel.Caption className={`${styles.caption} ${styles.responsiveCaption}`}>
                            <div className={`${styles.container} ${styles.responsiveContainer}`}>
                                <div className="d-flex flex-column align-items-center justify-content-center h-100">
                                    <div className="p-3" style={{ maxWidth: '700px' }}>
                                        <hr className="p-2 border-solid border-2 border-yellow-500 bg-yellow-700" />
                                        <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Vacation Getaway</h6>
                                        <hr className="p-2" />
                                        <h1 className="display-3 text-white mb-4 animated slideInDown">Discover Vacation Getaway Guest House</h1>
                                        <p className="lead text-white mb-4 animated slideInDown">
                                            Our guest house is the perfect place to relax and unwind on your next vacation. We offer a variety of vacation amenities, including a kitchen and a TV.
                                        </p>
                                        <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Learn More</a>
                                        <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Room</a>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
}

export default Hero;
