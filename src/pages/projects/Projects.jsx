import ProjectCard from "../../components/projects-card/ProjectCard";
import lavulator from "../../images/lavulator.png";
import clgSite from "../../images/clg-site.png";
import timeCalculator from "../../images/time-calculator.png";
import chooseOne from "../../images/choose-one.png";
import gameProject from "../../images/game-project.png";
import eboots from "../../images/e-boots.png";
import "./projects.css"

export default function  Projects() {
  return (
    <div className='projects'>
        <h3 className="heading">Projects</h3>
      <div className="project-wrapper">
       <ProjectCard
          image={timeCalculator}
        />

        <ProjectCard
          image={lavulator}
        />
        <ProjectCard
          image={clgSite}
        />
       
        <ProjectCard
          image={chooseOne}
        />
        <ProjectCard
          image={gameProject}
        />
        <ProjectCard
          image={eboots}
        />
      </div>
    </div>
  )
}
