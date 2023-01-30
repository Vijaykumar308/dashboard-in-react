import Accordian from "../../components/Accordian/Accordian";
import "./aboutme.css";

export default function AboutMe() {
  return (
    <div className='aboutMe'>
        <h3 className="heading">About Me</h3>
      <div className="wrapper">
          <Accordian
            heading="Education"
            title1= "Degree"
            title2 = "Courses"
            para1="Bachelor of Computer Application"
            para2="Computer Programming (C++, PHP, Javascript)"
            duration1="Year of Graduation: 2018-2022"
            duration2="Duration: 6 Months"
          />
           <Accordian
            heading="Skills"
            title1= "Web Development"
            para1="HTML, CSS, Javascipt, React, PHP, MySQL"
            duration1="Duration: 1.5 Years"
            title2= "Fundamentals"
            para2="OPPS, Computer Networking, Git, Github"
            duration2="Duration: 6 Months "
          />
          
          <Accordian 
            heading="Experience"
            title1="Kochar Tech"
            para1="I'm working here since the last year 2022, Working as a Backend Developer where my role & responsibilities are to make modules for the application and fixed bugs for the smooth working application."
            duration1="Experince: 1 Year"
            
            title2 = "Intership"
            para2="Completed Internship from Kochar tech and converted to as a full time employee."
            duration2="Duration: 3 Months"
          />
      </div>
    </div>
  )
}
