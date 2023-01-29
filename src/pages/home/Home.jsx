import { Facebook } from "@mui/icons-material";
import { Google } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Socialmedia from "../../components/socialMedia/Socialmedia";

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "./home.css";

export default function Home() {
  return (
    <div className='home'>
      <div className="featured">
        <FeaturedInfo 
          heading="Revanue"
          price="$2,415"
          rate="-11.4"
          title= "Compared to last month"
          icon={<ArrowDownwardIcon className="arrow downArrow"/>}
        />
       <FeaturedInfo 
          heading="Sales"
          price="$4,454"
          rate="-1.4"
          title= "Compared to last month"
          icon={<ArrowDownwardIcon className="arrow downArrow"/>}
        />

        <FeaturedInfo 
          heading="Cost"
          price="$2,023"
          rate="+2.1"
          title= "Compared to last month"
          icon={<ArrowUpwardIcon className="arrow upArrow"/>}
        />
      </div>

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
