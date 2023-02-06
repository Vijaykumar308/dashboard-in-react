import { Link } from "react-router-dom";
import "./projectcard.css";

export default function ProjectCard(props) {
  return (
    <div className='project-card'>
      <div className="featured-img">
        <img src={props.image} alt="featuredImage" className="img-responsive" />
      </div>
      <div className="project-card-contant">
        <h2 className="project-title">{props.projectTitle}</h2>
        <p className="project-descp">{props.projectDescription}</p>
        <div className="readmore-duration">
          <p className="project-duration">{props.duration}</p>
          <Link to = {props.url} >
            <button className="readmore-btn" id={props.url}>Read More...</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
