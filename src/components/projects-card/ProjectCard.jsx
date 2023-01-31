import "./projectcard.css";
import lavolator from "../../images/lavulator.png";
export default function ProjectCard(props) {
  return (
    <div className='project-card'>
        <div className="featured-img">
            <img src={props.image} alt="featuredImage" className="img-responsive"/>
        </div>
        <div className="project-card-contant">
            <h2 className="project-title">Relationship</h2>
            <p className="project-descp">dignissimos natus omnis voluptatem esse fugit placeat! Odio explicabo obcaecati molestias maxime, facere sit possimus? Dignissimos dolor voluptatibus quo sint sunt quia ullam. Nisi, assumenda fugit!</p>
            <div className="readmore-duration">
                <p className="project-duration">1 Weeks</p>
                <button className="readmore-btn">Read More...</button>    
            </div>
        </div>
    </div>
  )
}
