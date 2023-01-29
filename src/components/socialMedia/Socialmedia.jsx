import "./socialmedia.css";
import { Facebook } from "@mui/icons-material";
export default function (props) {

    const styles = {
        backgroundColor: props.bgColor
    }
  return (
    <div className='socialMedia-full'>
        <div className="socialMedia-icon" style={styles}>
            {props.icon}
        </div>
        <div className="contant">

            <div className="text friends">
                <div className="num">{props.friends}</div>
                <div>Friends</div>
            </div>

            <div className="text posts">
                <div className="num">{props.feeds}</div>
                <div>Feeds</div>
            </div>

        </div>
    </div>
  )
}
