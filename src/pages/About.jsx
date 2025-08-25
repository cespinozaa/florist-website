/* eslint-disable no-unused-vars */
import './About.css';
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true, amount: 0.5 }} 
        >
            <div className="about_title">About</div>
        </motion.div>

        <div className="about_container">
            <div className="about_text">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }} 
                >
                    At YasssFlorecitas, we believe every bouquet should tell a story. 
                    Whether it’s for a birthday, anniversary, or just because, we create 
                    handcrafted floral arrangements that make moments unforgettable. 
                    Each bouquet is thoughtfully designed with added touches like 
                    delicate paper butterflies, sparkling faux diamonds, elegant ribbons,
                    and personalized phrases to reflect the occasion and your sentiment. 
                    Let us help you brighten someone’s day with flowers that speak 
                    from the heart. 
                </motion.div>
                

            </div>
        </div>

    </section>
  );
}