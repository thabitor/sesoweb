import { Link } from "react-router-dom";
import allPartners from '../data/allPartners';
import PartnerUnit from './PartnerUnit';

function PartnersSection(props) {
  return (
    <>
    <div className="wpo-case-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wpo-section-title">
              <span>Nos partenaires</span>
              <h2>Dans l'aide aux réfugiés</h2>
            </div>
          </div>
        </div>
      </div>
<PartnerUnit 
name={props.name}
img={props.img}
/>

        
      </div>
  </>
  );
}

export default PartnersSection;
