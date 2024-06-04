import { Link } from "react-router-dom";

function PartnerUnit(props) {
return (
  
  <div className="partners-item-box">
      <Link to="/" className="partner-item">
        <img src={props.img} alt="" />
      </Link>
    </div>
)
    

}

export default PartnerUnit;
