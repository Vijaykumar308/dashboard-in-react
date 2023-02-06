import ProjectCard from "../../components/projects-card/ProjectCard";
import lavulator from "../../images/lavulator.png";
import clgSite from "../../images/clg-site.png";
import timeCalculator from "../../images/time-calculator.png";
import chooseOne from "../../images/choose-one.png";
import gameProject from "../../images/game-project.png";
import eboots from "../../images/e-boots.png";
import "./projects.css"
import { Link, Outlet } from "react-router-dom";

export default function  Projects() {
  return (
    <div className='projects'>
        <h3 className="heading">Projects</h3>
      <div className="project-wrapper">
      <Link to={"time-calculator"}>
        <ProjectCard
            image={timeCalculator}
            projectTitle="Time Calculator"
            projectDescription="Time calculator is a simple app to calculate 5 days time. Basically it is used for working professinal who's has to complete their time for the week."
            duration="2 Weeks"
            url="time-calculator"
          />
        </Link>

        <Link to={"relationship"}>
          <ProjectCard
            image={lavulator}
            projectTitle="Relationship"
            projectDescription="This Project is for check the relationship. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
            duration="1 Week"
            url="relationship"
          />
        </Link>
        <ProjectCard
          image={clgSite}
          projectTitle="College Site"
          projectDescription="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis "
          duration="3 Weeks"
          url="clg-site"
        />
       
        <ProjectCard
          image={chooseOne}
          projectTitle="Choose One"
          projectDescription="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis "
          duration="3 Weeks"
          url=""
        />
        <ProjectCard
          image={gameProject}
          projectTitle="Guess The Numbar"
          projectDescription="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis "
          duration="2 Weeks"
          url=""
        />

        <ProjectCard
          image={eboots}
          projectTitle="Web Template clone"
          projectDescription="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis "
          duration="1 Week"
          url=""
        />
      </div>
    </div>
  )
}
