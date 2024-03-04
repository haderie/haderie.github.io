import React from "react";
import navIcon1 from '../assets/nav-icon1.svg'
import navIcon3 from '../assets/dec.png'
import email from '../assets/ema.jpg'
import github from '../assets/github.png'

const Footer = () => {
    const openMailto = (e) => {
        window.location.href = "mailto:aderie.h@northeastern.edu";
        e.preventDefault();
      };
    return (
        <section className="footer">
			<p className="text-footer">
				Hareg Aderie © All rights are hopefully reserved
			</p>
			<div className="footer-icon">
              <a href="https://www.linkedin.com/in/hareg-aderie-a4ab51288" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/haderie" target="_blank"><img src={github} alt="" /></a>
              <a href="#" onClick={openMailto}><img src={email} alt="" /></a>
              <a href="#"><img src={navIcon3} alt="" /></a>
        </div> 
		</section>
    );
}

export default Footer