import "./read-more.css";
import Readmore from '../../components/Readmore/Readmore'
import { useParams } from "react-router-dom";

import timeCalculator from "../../images/time-calculator.png";
import lavulator from "../../images/lavulator.png";
import collegeSite from "../../images/clg-site.png";
import chooseOne from "../../images/choose-one.png";
import guessTheNumber from "../../images/game-project.png";
import webSiteTemplate from "../../images/e-boots.png";

export default function ReadMore() {
  const params = useParams();
  return (
    <div className='page-readmore'>

      {params.name === "time-calculator" && 
        <Readmore 
          title="Time Calculator"
          featuredImg={timeCalculator}
          websiteLink="https://vijaykumar308.github.io/timeCalculate/"
          timeTaken="2 weeks"
          descp="Time calculator is the simple web application which is helpful to calculate time.
          Bassically, it is not fully time calculator app rather, It is created for a specific use.
          
          This website is helpfull where we have to check wether we've completed our
          weekly hours or not.
          
          I created this website for used in organization where we've to complete 45 hr for a week
          so that we can check our time is fullfilled or not."
        />
      }

      {params.name === "relationship" && 
        <Readmore 
        title="Relationship"
        featuredImg={lavulator}
        websiteLink="https://vijaykumar308.github.io/Relationship/"
        timeTaken="1 weeks"
        descp="This is a simple relationship check program which can be used to check the
        relationship pecentage. Basically, There is a algorithm which is running behind it.
        The algorithm I found one of my friend he used to calculate percentage and I thought it would be 
        good program therefore I converted that into this application."
      />
      }

      {params.name === "clg-site" && 
        <Readmore 
        title="College Site"
        featuredImg={collegeSite}
        websiteLink="https://gnduclgverka-demo.netlify.app/"
        timeTaken="3 weeks"
        descp="This is just webpage design which I created for improve my HTML and CSS
        For this template I take the reference for few college websites and then
        I create my own template and trying to design it."
      />
      }

      {params.name === "choose-one" && 
        <Readmore 
        title="Choose One"
        featuredImg={chooseOne}
        websiteLink="https://vijaykumar308.github.io/ChooseOne/"
        timeTaken="3 weeks"
        descp="Choose one is the project which is like a game where we've to choose
        one famouse personality between the both. This is a responsive webiste which
        helps me a lots to improve my CSS as responsive design and javascript logics as well."
      />
      } 

      {params.name === "guess-the-number" && 
        <Readmore 
        title="Guess The Number"
        featuredImg={guessTheNumber}
        websiteLink="https://vijaykumar308.github.io/Guss-the-Number/"
        timeTaken="2 weeks"
        descp="The Guess the number project we've created a lots of time in different-differenet programming
        language but I thought it would greate to be in GUI mode so that It can be a fun."
      />
      } 

      {params.name === "web-template-clone" && 
        <Readmore 
        title="Web Template Clone"
        featuredImg={webSiteTemplate}
        websiteLink="https://eboost-webdesign.netlify.app/"
        timeTaken="1 weeks"
        descp="This website is just for practices my CSS and I improved a lot by created it.
        I found this template over the internet and then trying to clone it. Its helps me
        a lots to improve my CSS and desiging skills."
      />
      } 
    </div>
  )
}
