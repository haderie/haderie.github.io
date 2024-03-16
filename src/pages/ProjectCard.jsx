import { Col, Ro } from "react-bootstrap";
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export const ProjectCard = ({ title, description, imgUrl, page}) => {
  const navigateToProject= useNavigate();

  const scrollToProjects = () => {
    navigateToProject(page);
  }
  return (
    <Col xs={3} sm={1} md={2} lg={3}>
      <Link to={page}></Link>
      <div className="proj-imgbx" onClick={scrollToProjects}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
