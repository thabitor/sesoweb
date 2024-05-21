import { Link } from "react-router-dom";

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
              </div>
            </div>
          </div>
        </div>
        <div className="grid-container">
        <div></div>
          <div className="partners-item-box">
            <Link to="/" className="partner-item">
              <img src="images/partners/cocom-logo@1.5x_fr.png" alt="" />
            </Link>
          </div>
          <div className="partners-item-box">
            <Link to="/" className="partner-item">
              <img src="images/partners/logo-vivalis.svg" alt="" />
            </Link>
          </div>
          <div className="partners-item-box">
            <Link to="/" className="partner-item">
              <img src="images/partners/fedasil_fr_0.png" alt="" />
            </Link>
          </div>
          
          <div className="partners-item-box">
            <Link to="/" className="partner-item">
              <img src="images/partners/SPFJustice-fr.png" alt="" />
            </Link>
          </div>
        
         
          <div className="partners-item-box">
            <Link to="/" className="partner-item">
              <img src="images/partners/Bruxelles Accueil - Brussel Onthaal.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SponsorsSection;
