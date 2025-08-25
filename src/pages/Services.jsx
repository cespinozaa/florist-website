/* eslint-disable no-unused-vars */
import './Services.css';
import MySwiper from './Carousel';
import MySwiperAddOns from './CarouselAddOns';
import { motion } from "motion/react";

export default function Services() {
  return (
    <section id="services">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true, amount: 0.5 }} 
        >
            <div className="services_title">Services</div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true, amount: 0.5 }} 
        >
            <div className="styles_text">arrangement styles</div>
        </motion.div>
        
    <MySwiper />

    <div className="addons_text">add ons</div>

    <MySwiperAddOns />


    </section>
  );
}