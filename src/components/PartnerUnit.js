import { Link } from "react-router-dom";

function PartnerUnit(props) {
return (
  
  <div className="partners-item-box">
      <Link to="/" className="partner-item">
        {props.img ? <img src={props.img} alt={props.name || ""} /> : <span>{props.name}</span>}
      </Link>
    </div>
)
    

}

export default PartnerUnit;
