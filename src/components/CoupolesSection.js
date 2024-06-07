import partners from "../data/allPartners";
import PartnerUnit from "./PartnerUnit";

const Coupoles = partners.filter((Coupole) => Coupole.type === 'coupole');

function CoupolesSection(props) {
  return (
    <>
      <div className={`wpo-case-area partners section-padding`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="wpo-section-title">
                <span></span>
                <h2>Nos coupoles</h2>
              </div>
                <div className="grid-container prt-display-grid-2">

                  {Coupoles.map((Coupole) => {
                    return (
                    <PartnerUnit 
                    img={Coupole.img} />
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

export default CoupolesSection;
