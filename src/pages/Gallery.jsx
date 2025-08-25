import React from 'react';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { slides } from './data.jsx';
import './Gallery.css';
import { Captions, Download, Fullscreen, Thumbnails } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Images from './Images.jsx';
import { HashLink } from "react-router-hash-link";
import { useEffect } from 'react';

export default function Gallery() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [index, setIndex] = useState(-1);

    return (
        <div className="gallery">
            <div className="gallery_title">Gallery</div>

            <Images data = {slides} onClick={(currentIndex) => setIndex(currentIndex)}/>
            <Lightbox
                plugins={[Download, Fullscreen, Thumbnails]}
                captions={{
                    showToggle: true,
                }}
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={slides}
            />
            <div className="gallery_order">
                <p>Like what you see? Order today!</p>
            </div>

            <HashLink smooth to ="/#contact">
                <button className="contact_button">Contact Us</button>
            </HashLink>

        </div>
    );
}

