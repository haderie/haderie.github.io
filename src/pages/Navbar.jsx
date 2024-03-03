import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.png'
import navIcon1 from '../assets/nav-icon1.svg'
import navIcon3 from '../assets/dec.png'
import email from '../assets/ema.jpg'
import headerImg from "../assets/typing.avif";
import PageComponents from '../components/pageComponent';
import About from './About';

const Navbar = () => {
  return (
    <section className='Navbar'>
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
                    <Link to="/Home">  {/* Use Link instead of a */}
                        <img src={logo} alt="logo" />
                    </Link>
					</div>
					<li><a href="/Home">Home</a></li>
					<li><a href="/about">About Me </a></li>
					<li><a href="/Projects" rout>Projects</a></li>
					<li><a href='/student'>Student</a></li>
				</ul>
        <div className="social-icon">
              <a href="https://www.linkedin.com/in/hareg-aderie-a4ab51288" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href=""><img src={email} alt="" /></a>
              <a href="#"><img src={navIcon3} alt="" /></a>
        </div>        
			</nav>
		
		</section>
  );
}

export default Navbar;