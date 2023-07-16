'use client';
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import Image from 'next/image';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Bootstrap.module.css";
import items from "./items.js";

const Hero = () => {
    const { bootstrap } = items;
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {bootstrap.map((item) => (
                    <Carousel.Item key={item.id} className={styles.itemP} interval={1000}>
                        <div className={styles.backgroundImage}>
                            <Image src={item.imageUrl} alt="Carousel Image" layout="fill" objectFit="cover" />
                        </div>
                        <Carousel.Caption className={`${styles.caption} ${styles.responsiveCaption}`}>
                            <div className={`${styles.container} ${styles.responsiveContainer}`}>
                                <div className="d-flex flex-column align-items-center justify-content-center h-100">
                                    <div className="p-3" style={{ maxWidth: '700px' }}>
                                        
                                        <h6 className={`section-title text-white text-uppercase mb-3 animated slideInDown`}>
                                          Vacation Getaway
                                        </h6>
                                        <h1 className="display-3 text-white mb-4 animated slideInDown">Discover Vacation Getaway Guest House</h1>
                                        <p className="lead text-white mb-4 animated slideInUp">Our guest house is the perfect place to relax and unwind on your next vacation. We offer a variety of vacation amenities, including a kitchen and a TV.</p>
                                        <a href="" className="btn btn-primary py-md-3 px-md-5 me-3" style={{ backgroundColor: "#FEA116", color: "black" }}>Learn More</a>
                                        <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInUp">Book A Room</a>
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
