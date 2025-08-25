import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";
import './Navbar.css';


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    return (
        <>
        <header className="header">
            <div className="container">

                {/* Hamburger Icon */}
                <button className="menu_toggle" onClick={toggleMenu}>
                    ☰
                </button>

                <div className="nav_option_name" onClick={closeMenu}>
                    <Link to="/">YasssFlorecitas</Link>
                </div>

                <div className="spacer" />
        
       
                <div className={`nav_elements ${isMenuOpen ? 'open' : ''}`}>

                    <div className="close_button" onClick={closeMenu}>
                        ×
                    </div>

                    <ul>
                        <li className="nav_option">
                            <Link to ="/" onClick={closeMenu}>home</Link>
                        </li>
                        <li className="nav_option">
                            <HashLink smooth to ="/#services" onClick={closeMenu}>services</HashLink>
                        </li>
                        <li className="nav_option">
                            <Link to ="/gallery" onClick={closeMenu}>gallery</Link>
                        </li>
                        <li className="nav_option">
                            <HashLink smooth to ="/#about" onClick={closeMenu}>about</HashLink>
                        </li>
                        <li className="nav_option">
                            <HashLink smooth to ="/#contact" onClick={closeMenu}>contact</HashLink>
                        </li>
                        

                    </ul>
                </div>
                </div>
        </header>
            
        </>


        


    );
}
