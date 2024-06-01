
import allPartners from "../data/allPartners";
import PartnerUnit from "./PartnerUnit";

const Sponsors = allPartners.filter((sponsor) => sponsor.type === 'Sponsor')

function SponsorsSection() {
  return (
    <>
      <div className="wpo-case-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="wpo-section-title">
                <span>Nos pouvoirs subsidiants</span>
                <h2>Dans l'aide aux réfugiés</h2>
                {Sponsors.map((sponsor) => {
                    return (

                        <PartnerUnit 
                    
                     img={sponsor.img}
                    
                     />

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

export default SponsorsSection;
