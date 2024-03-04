import React, {ReactElement, useRef } from 'react';
import { useState, useEffect } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useIsVisible } from 'react-is-visible'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Software Developer", "Software Engineer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const aboutMeRef = useRef(null);
	const projectRef = useRef(null);

	const navigate = useNavigate();

  const goToAboutMe = () => navigate('/about');

  return (
    
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
            <div className={useIsVisible ? "animate__animated animate__fadeIn" : ""}>
              <span className="tagline">。。。˚∆˙Welcome to my Portfolio˙∆˚。。。</span>
              {/*<h1 class="animate__animated animate__bounce">。</h1>*/}
              <h1 className='txt-rotate'>
                {`Hi! I'm Hareg,`} <br/>
                {`an aspiring`} <span className="wrap">{text}</span>

              </h1>
                <button className = "aboutMeButton" onClick={goToAboutMe}>Learn more about me!<ArrowRightCircle size={20}/></button>
          </div>
            </TrackVisibility>
        </Col>
      </Row>
	</Container>
	</section>
  );
}

export default Banner;