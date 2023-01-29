import "./featuredInfo.css"
export default function FeaturedInfo(props) {
  return (
        <div className="featuredItem">
            <span className="featuredTitle">{props.heading}</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoeny">{props.price}</span>
                <span className="featuredMoenyRate">{props.rate}</span>
                {props.icon}
            </div>
            <span className="featuredSub">{props.title}</span>
        </div>
  )
}
