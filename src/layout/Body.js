import "./Body.scss";
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './../pages/Home';
import About from './../pages/About';
import Gallery from './../pages/Gallery';
import ContactUs from './../pages/ContactUs';

export default function Body() {

  return (
      
    <div div className="body">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/gallery" element={<Gallery></Gallery>} />
          <Route path="/contact-us" element={<ContactUs></ContactUs>} />
        </Routes>
    </div>
  );
}
