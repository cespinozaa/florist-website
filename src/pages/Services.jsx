import './Services.css';
import Carousel from './Carousel';

export default function Services() {
  return (
    <section id="services">
        <h2>Services</h2>
        <p>arrangement styles</p>
        
    <Carousel>
      <img src="https://placekitten.com/800/400" alt="Kitten 1" />
      <img src="https://placekitten.com/801/400" alt="Kitten 2" />
      <img src="https://placekitten.com/802/400" alt="Kitten 3" />
    </Carousel>


    </section>
  );
}