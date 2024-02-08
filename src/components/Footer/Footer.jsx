import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="categories">
        <h3>Category</h3>
        <ul className="ctg-list">
          <Link to='/boys'><li className="lists">Boys images</li></Link>
          <Link to='cars'><li className="lists">Cars images</li></Link>
          <Link to='animals'><li className="lists">Animals images</li></Link>
          <Link to='/flowers'><li className="lists">Flowers images</li></Link>
          <Link to='/birds'><li className="lists">Birds images</li></Link>
          <Link to='/girls'><li className="lists">Girls images</li></Link>
          <Link to='/insects'><li className="lists">Insects images</li></Link>
          <Link to='/fish'><li className="lists">Fish images</li></Link>
          <Link to='/nature'><li className="lists">Nature images</li></Link>
          <Link to='/food'><li className="lists">Foods images</li></Link>
        </ul>
      </div>
      <div className="contact-info">
        <h3>Contact Us</h3>
        <address>
          <p>Website name: Imagine Hub</p>
          <p>Address: Noida</p>
          <p>Contact Number: +91 9810298566</p>
          <p>Email: imaginehub@gmail.com</p>
        </address>
      </div>
      <div className="contact-form">
        <div className="form">
          <form name="contact" netlify>
            <h2>Share Your Experience</h2>
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" placeholder="Enter your name" />
            <input type="email" name="email" placeholder="Enter your email" />
            <input
              type="tel"
              name="number"
              placeholder="Enter your contact number"
            />
            <textarea name="message" placeholder="Message..."></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
