import partners from "../data/allPartners";
import PartnerUnit from "./PartnerUnit";

const Sponsors = partners.filter((sponsor) => sponsor.type === 'sponsor');

function SponsorsSection(props) {
  return (
    <>
      <div className={`wpo-case-area section-padding white-bg partners`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="wpo-section-title">
                <span>Nos pouvoirs subsidiants</span>
                <h2>Dans l'aide aux réfugiés</h2>
              </div>
                <div className="grid-container prt-display-flex">

                  {Sponsors.map((sponsor) => {
                    return (
                    <PartnerUnit 
                    img={sponsor.img} />
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
