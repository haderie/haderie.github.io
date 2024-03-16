import React, {ReactElement, useRef } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import './App.css';
import headerImg from "./assets/typing.avif";
import { Container, Row, Col } from "react-bootstrap";
import PageComponents from './components/pageComponent';
import About from './pages/About';

import Navbar from './pages/Navbar';
import Homepage from './pages/Homepage';
import Footer from './pages/Footer'


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
			<Routes> 
				<Route path='/' element={<Homepage />} />
				<Route path='/about' element={<About />} />
			</Routes>

	
		{/*<section class="section">
			<div class="box">
				<div class="sec">
					<h1 class="text-big" id="program">
						
					</h1>
					<p class="text-small">
						
					</p>
				</div>
			</div>
	</section>*/}
		<Footer/>
	</div>
	
	)
}

export default App
