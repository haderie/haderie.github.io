import React, {ReactElement, useRef } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import './App.css';
import logo from './assets/logo.png'
import navIcon1 from './assets/nav-icon1.svg'
import navIcon3 from './assets/dec.png'
import email from './assets/ema.jpg'
import headerImg from "./assets/typing.avif";
import { Container, Row, Col } from "react-bootstrap";
import PageComponents from './components/pageComponent';
import About from './pages/About';
import Hompage from './pages/Homepage';
import Homepage from './pages/Homepage';

import Main from './pages/Main';
import Navbar from './pages/Navbar';
import Banner from './pages/Banner';

function App() {

	const aboutMeRef = useRef(null);
	const projectRef = useRef(null);

	const scrollToAboutMe = () => {
	  aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	const scrollToProjectRef = () => {
		projectRef.current.scrollIntoView({ behavior: 'smooth' });
	  };
  
	return (
		<div>
			<Navbar />
			<Main />
			
	<section class="section">
		<div class="box-main" ref={projectRef}>
			<div class="secondHalf">
				<h1 class="text-big" id="program">
					Projects!
				</h1>
				<p class="text-small">
					blah
				</p>
			</div>
		</div>
	</section>
		<section class="section">
			<div class="box-main">
				<div class="secondHalf">
					<h1 class="text-big" id="program">
						Rand 3
					</h1>
					<p class="text-small">
						sample text
					</p>
				</div>
			</div>
		</section>
		<footer className="footer">
			<p className="text-footer">
				Copyright ©-All rights are reserved
			</p>
		</footer>
	</div>
	
	)
}

export default App
