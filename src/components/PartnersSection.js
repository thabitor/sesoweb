import partners from '../data/allPartners';
import PartnerUnit from './PartnerUnit';

function PartnersSection() {

  const Partners = partners.filter((partner) => partner.type === 'partner');

  return (
    <>
    <div className="wpo-case-area section-padding white-bg partners">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wpo-section-title ">
              <span></span>
              <h2>Nos partenaires</h2>
              </div>
              <div className="grid-container prt-display-grid-6">
              {Partners.map((partner) => {
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
