import sunsetflowers from "../assets/flowerscape.png";
import gradient from "../assets/gradient1.png";
import "./Home.css";
import Services from "./Services";
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home">
            <div className="hero_section">
                <img src={sunsetflowers} alt="flowers" />
            
                <div className="hero_text">
                    <h1>Curated Flower Arrangements</h1>
                    <p>Fresh blooms for every moment</p>
                    <p>Based in Greensboro, NC</p>
                </div>
            </div>
            <div className="explore_gallery">
                <img src={gradient} alt="pastel background" />
                <div className="gallery_button_container">
                    <Link to="/gallery">
                        <button className ="gallery_button">explore the gallery</button>
                    </Link>
                </div>    
            </div>
            <Services />

        </div>
    );
}