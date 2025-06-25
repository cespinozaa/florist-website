
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Order from "./pages/Order";
import Navbar from './pages/Navbar';
import './App.css'


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <main className="app">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/order" element={<Order />} />
        </Routes>

        </main>

      </Router>
  
    </>

  );
}

export default App;
