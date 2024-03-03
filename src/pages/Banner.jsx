import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={15} md={5} xl={7}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Hareg`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{"||"}</span></span></h1>
                  
          {/* About Me button */}
          <button className = "aboutMeButton" color="" >
            Learn more about me!
          </button>
        </Col>
      </Row>
	</Container>
	</section>
  );
}

export default Banner;