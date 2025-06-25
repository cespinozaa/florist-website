// Carousel.jsx
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./carousel.css"; // import custom CSS

const Carousel = ({ children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="carousel">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {React.Children.map(children, (child, index) => (
            <div className="embla__slide" key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className="carousel__buttons">
        <button onClick={scrollPrev}>←</button>
        <button onClick={scrollNext}>→</button>
      </div>
    </div>
  );
};

export default Carousel;
