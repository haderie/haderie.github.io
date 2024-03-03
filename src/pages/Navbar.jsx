import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import logo2 from '../assets/logo2.png'
import navIcon1 from '../assets/nav-icon1.svg'
import navIcon3 from '../assets/dec.png'
import email from '../assets/ema.jpg'
import github from '../assets/github.png'

const Navbar = () => {
  return (
    <section className='Navbar'>
			<nav class="navbar background">
					<div class="logo">
                    <Link to="/Home">  {/* Use Link instead of a */}
                        <img src={logo2} alt="logo" />
                    </Link>
					</div>
          <ul class="nav-list">
					<li><Link to="/Home">Home</Link></li>
					<li><Link to="/about">About Me</Link></li>
					<li><Link to="/Projects" >Projects</Link></li>
					<li><Link to='/student'>Student</Link></li>
				</ul>
        <div className="social-icon">
              <a href="https://www.linkedin.com/in/hareg-aderie-a4ab51288" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="#"><img src={navIcon3} alt="" /></a>
              <a href="#"><img src={email} alt="" /></a>
              <a href="#"><img src={github} alt="" /></a>
        </div>        
			</nav>
		
		</section>
  );
}

export default Navbar;