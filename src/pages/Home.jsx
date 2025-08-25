/* eslint-disable no-unused-vars */
import sunsetflowers from "../assets/flowerscape.png";
import gradient from "../assets/gradient1.png";
import "./Home.css";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import { motion } from "motion/react";
import { useEffect, useState } from "react";



export default function Home() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffset(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="home">
            <div className="hero_section">
                <img src={sunsetflowers} alt="flowers" className="hero_image" style={{ transform: `translateY(${offset * 0.4}px)` }}/>
               
                <div className="hero_text">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }} 
                >
                    <h1>Curated Flower Arrangements</h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }} 
                >
                    <p>Fresh blooms for every moment</p>
                    <p>Based in Greensboro, NC</p>
                </motion.div>

                </div>
            </div>
            <div className="explore_gallery">
                <img src={gradient} alt="pastel background" />
                <div className="gallery_button_container">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.5 }} 
                    >
                        <Link to="/gallery">
                            <button className ="gallery_button">explore the gallery</button>
                        </Link>
                    </motion.div>
                </div>    
            </div>

            <About />

            <Services />

            <Contact />
        

            <Footer />

        </div>
    );
}