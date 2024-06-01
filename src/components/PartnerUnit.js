import { Link } from "react-router-dom";

function PartnerUnit(props) {

<div className="grid-container">
        <div className="partners-item-box">
          <Link to="/" className="partner-item">
            <img src={props.img} alt="" />
          </Link>
        </div>
    </div>
}


    export default PartnerUnit;