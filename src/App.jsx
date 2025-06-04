
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css'


function App() {

  return (
 
    <Router>
      <nav className="bg-gray-100 p-4 flex gap-4">
        <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        <Link to="/about" className="text-green-500 hover:underline">About</Link>
        <Link to="/contact" className="text-purple-500 hover:underline">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>

  );
}

export default App;
