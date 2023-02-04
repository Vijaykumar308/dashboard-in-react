import "./readmore.css";
import featuedImg from "../../images/e-boots.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
export default function Readmore() {
  return (
    <div className='projects'>
        <h3 className="heading">Read More</h3>

        <div className="readmore-wrapper">
            <h1 className="title">Title of the project</h1>

            <div className="featured-image">
                <img src={featuedImg} />
            </div>

            <div className="readmore-contant">
                <div className="basic-details">
                    <span className="block">Url:
                        <a href="https://www.google.com" target="_blank">Web-template</a>
                    </span>
                    <span className="block">Time taken: 2 weeks</span>
                </div>

                <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas sapiente ad facere reprehenderit illum consequuntur, ab nostrum quo voluptates enim earum atque commodi vitae itaque, placeat libero velit fugit provident in consequatur repellat expedita dolore! Quae commodi velit iusto quidem tempora voluptatum, mollitia quasi officia voluptate dicta ossimus facere laboriosam voluptatum voluptates alias sequi recusandae delectus sunt unde earum dolorem
                </p>
                <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas sapiente ad facere reprehenderit illum consequuntur, ab nostrum quo voluptates enim earum atque commodi vitae itaque, placeat libero velit fugit provident in consequatur repellat expedita dolore! Quae commodi velit iusto quidem tempora voluptatum, mollitia quasi officia voluptate dicta ossimus facere laboriosam voluptatum voluptates alias sequi recusandae delectus sunt unde earum dolorem
                </p>
            </div>

        </div>
    </div>
  )
}
