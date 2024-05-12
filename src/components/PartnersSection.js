import { Link } from "react-router-dom";

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
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="partners-item-box">
                <Link to="/" className="partner-item">
                  <img src="images/partners/logo_cire_rvb3.svg" alt="" />
                </Link>
              </div>
            </div>
            </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="partners-item-box">
                <Link to="/" className="partner-item">
                  <img src="images/partners/logo_vlctwerk2.svg" alt="" />
                </Link>
              </div>
            </div>
        </div>
    </>
  );
}

export default PartnersSection;
