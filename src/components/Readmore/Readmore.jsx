import "./readmore.css";
import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";
export default function Readmore(props) {
    const navigate = useNavigate();
  return (
    <div className='projects'>
        <h3 className="heading">Read More</h3>

        <div className="readmore-wrapper">
            <h1 className="title">{props.title}</h1>

            <div className="featured-image">
                <img src={props.featuredImg} alt="featured-img"/>
            </div>

            <div className="readmore-contant">
                <div className="basic-details">
                    <span className="block">
                        <a href={props.websiteLink} target="_blank" rel="noreferrer">
                            <Button variant="contained">View Project</Button>
                        </a>
                    </span>
                    <span className="block">Time taken: {props.timeTaken}</span>
                </div>

                <p className="para">
                    {props.descp}
                </p>
                <Button variant="outlined" onClick={()=>navigate(-1)}>Go Back</Button>
            </div>
        </div>
    </div>
  )
}
