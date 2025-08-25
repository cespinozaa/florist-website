import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import './footer.css';
import { FaInstagram, FaFacebook } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_top">
                <h2 className="footer_brand">YasssFlorecitas</h2>
                <nav className="footer_nav">
                    <Link to="/">Home</Link>
                    <HashLink smooth to="/#services">Services</HashLink>
                    <HashLink smooth to="/#about">About</HashLink>
                    <Link to="/gallery">Gallery</Link>
                    <HashLink smooth to="/#contact">Contact</HashLink>
                </nav>
            </div>
            <div className="footer_bottom">
                
                <div className="footer_socials">
                    <a href="https://www.instagram.com/yasssflorecitas/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={24} />
                    </a>
                </div>

                <p className="rights">© {new Date().getFullYear()} Cynthia Espinoza-Arredondo. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;