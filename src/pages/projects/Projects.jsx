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
            projectTitle="Time Calculator"
            projectDescription="Time calculator is the simple web application which is helpful to calculate time.
            Bassically..."
            duration="2 Weeks"
            url="time-calculator"
          />
        <ProjectCard
            image={lavulator}
            projectTitle="Relationship"
            projectDescription="This is a simple relationship check program which can be used to check the relationship pecentage. Bassically, There is a algorithm"
            duration="1 Week"
            url="relationship"
          />
        <ProjectCard
          image={clgSite}
          projectTitle="College Site"
          projectDescription="This is just webpage design which I created for improve my HTML and CSS
          For this..."
          duration="3 Weeks"
          url="clg-site"
        />
       
        <ProjectCard
          image={chooseOne}
          projectTitle="Choose One"
          projectDescription="Choose one is the project which is like a game where we've to choose one famouse personality between the both. This is a responsive "
          duration="3 Weeks"
          url="choose-one"
        />
        <ProjectCard
          image={gameProject}
          projectTitle="Guess The Numbar"
          projectDescription="The Guess the number project we've created a lots of time in different-differenet programming language but I thought it would greate "
          duration="2 Weeks"
          url="guess-the-number"
        />

        <ProjectCard
          image={eboots}
          projectTitle="Web Template clone"
          projectDescription="This website is just for practices my CSS and I improved a lot by created it. I found this template over the internet and then trying to"
          duration="1 Week"
          url="web-template-clone"
        />
      </div>
    </div>
  )
}
