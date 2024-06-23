import Partners from '../data/allPartners';
import PartnerUnit from './PartnerUnit';

function ReseauxSection() {

  const Reseaux = Partners.filter((reseau) => reseau.type === 'reseau');

  return (
    <>
    <div className="wpo-case-area section-padding white-bg partners">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wpo-section-title">
              <span></span>
              <h2>Notre reseau</h2>
              </div>
              <div className="grid-container prt-display-grid-4">
              {Reseaux.map((reseau) => {
                    return (
                    <PartnerUnit 
                    img={reseau.img} />
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

export default ReseauxSection;
