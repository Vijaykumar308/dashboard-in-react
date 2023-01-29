import { Facebook } from "@mui/icons-material";
import { Google } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
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
            bgColor="#3b5998"
          />

          <Socialmedia 
            name="twitter"
            icon={<TwitterIcon className="icon"/>}
            feeds={365}
            friends="758"
            bgColor="#00aced"
          />

          <Socialmedia 
            name="linkedin"
            icon={<LinkedInIcon className="icon"/>}
            feeds={160}
            friends="358"
            bgColor="#0077B5"
          />
          <Socialmedia 
            name="googleplus"
            icon={<Google className="icon"/>}
            feeds={528}
            friends="50k"
            bgColor="#d34836"
          />
        </div>
    </div>
  )
}
