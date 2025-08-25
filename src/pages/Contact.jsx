/* eslint-disable no-unused-vars */
import './Contact.css';
import { motion } from "framer-motion";
import { FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }} 
        >
        <div className="contact_title">Interested in Ordering? Contact Us</div>
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true, amount: 0.5 }} 
        >
            <div className="contact_section">
                <p>Hi there! Ready to place an order? Have questions?</p>
                <p>DM us on instagram  
                    <a 
                        href="https://www.instagram.com/yasssflorecitas/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social_link"
                    >  @yasssflorecitas</a>
                </p>
                <p>Shoot us an email at yasssflorecitas@gmail.com</p>
            </div>
        </motion.div>


    </section>
  );
}