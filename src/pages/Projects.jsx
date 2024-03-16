import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Grid, IconButton, TextField, InputLabel } from '@mui/material';

import { ProjectCard } from "./ProjectCard";
import imgs from '../assets/back.jpg'
import logos from '../assets/logo.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

  const projects = [
    {
      title: "Maze Game",
      description: "Design & Development",
      imgUrl: imgs,
    },
    {
      title: "FloodIt",
      description: "Design & Development",
      imgUrl: imgs,
    },
    {
      title: "BattleSalvo",
      description: "Design & Development",
      imgUrl: imgs,
    },
    {
      title: "Summarizer + Anki",
      description: "Design & Development",
      imgUrl: imgs,
    },
    {
      title: "Java Bulletjournal",
      description: "Design & Development",
      imgUrl: imgs,
    },
    {
      title: "Shell scripting",
      description: "Design & Development",
      imgUrl: imgs,
    },
  ];

  return (
	<section className="project" id="projects">
	  <Container>
		<Row>
		  <Col size={12}>
			<TrackVisibility>
			  {({ isVisible }) =>
				<div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
				  <h2>Projects</h2>
				  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				 
          <Grid container rowSpacing={{ xs: 1, sm: 1, md: 2, lg:3 }} className={isVisible ? "animate__animated animate__fadeIn" : ""}>
          {projects.map((project, index) => (
            <TrackVisibility key={index}>
              {({ isVisible }) => (
                <Grid item xs={1} sm={3} md={3} lg={3.8} >
                  <ProjectCard {...project} />
                </Grid>
              )}
            </TrackVisibility>
          ))}
          </Grid>
				</div>}
			</TrackVisibility>
		  </Col>
		</Row>
	  </Container>
	</section>
  );
};

export default Projects;