import partners from '../data/allPartners';
import PartnerUnit from './PartnerUnit';

function PartnersSection() {



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
              <div className="grid-container">
              {partners.map((partner) => {
                    return (
                    <PartnerUnit 
                    img={partner.img} />
                  )
                  })}
            
          </div>
        </div>
        </div>

      </div>
      </div>
  </>
  );
}

export default PartnersSection;
