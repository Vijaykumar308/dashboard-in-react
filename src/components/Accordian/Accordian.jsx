import "./Accordian.css";
export default function Accordian(props) {
  return (
    <div className='accordian'>
        <div className="icon-title">
          {props.labelIcon}
          <h2 className="title">{props.heading}</h2>
        </div>
        <hr className='line' />
        <div className='details'>
           <h4 className="details-title">{props.title1}</h4>
           <p className="detail-name">{props.para1}
            <span className="duration">{props.duration1}</span>
           </p>
           

           <h4 className="details-title">{props.title2}</h4>

           <p className="detail-name">{props.para2}
            <span className="duration">{props.duration2}</span>
           </p>
        </div>
    </div>
  )
}
