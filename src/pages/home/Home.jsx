import { Facebook } from "@mui/icons-material";
import { Google } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Socialmedia from "../../components/socialMedia/Socialmedia";
import "./home.css";

export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo />
        <div className="socialMedia-container">
          <Socialmedia 
            name="facebook"
            icon={<Facebook className="icon"/>}
            feeds={128}
            friends="35k"
          />
          <Socialmedia 
            name="linkedin"
            icon={<LinkedInIcon className="icon"/>}
            feeds={128}
            friends="35k"
          />
          <Socialmedia 
            name="googleplus"
            icon={<Google className="icon"/>}
            feeds={128}
            friends="35k"
          />
        </div>
    </div>
  )
}
