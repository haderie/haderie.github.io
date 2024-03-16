import { React } from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import {Link} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import logo2 from '../assets/logo2.png'
import navIcon1 from '../assets/nav-icon1.svg'
import navIcon3 from '../assets/dec.png'
import email from '../assets/ema.jpg'
import github from '../assets/github.png'
import {Element, animateScroll as scroll } from 'react-scroll';


const Navbar = () => {
  
  const openMailto = (e) => {
    window.location.href = "mailto:aderie.h@northeastern.edu";
    e.preventDefault();
  };

  const navigateToProject= useNavigate();

  const scrollToProjects = () => {
    navigateToProject('/');
  
    setTimeout(() => {
      scroll.scrollTo('#projects', {
        duration: 800,
        smooth: true,
        offset: -100, // Adjust the offset as needed to accommodate your header or navbar
      });
    }, 800); // Delay the second scroll by 800 milliseconds to ensure the navigation to the home page completes first
  };
    
  return (
    <section className='Navbar'>
			<nav class="navbar background">
					<div class="logo">
                    <Link to="/">  {/* Use Link instead of a */}
                        <img src={logo2} alt="logo" />
                    </Link>
					</div>
          <ul class="nav-list">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to='/random'>Random</Link></li>
				</ul>
        <div className="social-icon">
              <a href="https://www.linkedin.com/in/hareg-aderie-a4ab51288" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/haderie" target="_blank" ><img src={github} alt="" /></a>
              <a href="#" onClick={openMailto}> <img src={email} alt=""/> </a>
              <a href="#"><img src={navIcon3} alt="" /></a>
        </div>        
			</nav>
		
		</section>
  );
}

export default Navbar;