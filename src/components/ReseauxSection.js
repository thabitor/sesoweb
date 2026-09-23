import Partners from '../data/allPartners';
import PartnerUnit from './PartnerUnit';
import { useTranslation } from "react-i18next";

function ReseauxSection() {
  const { t } = useTranslation();

  const Reseaux = Partners.filter((reseau) => reseau.type === 'reseau');

  return (
    <>
    <div className="wpo-case-area section-padding partners">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wpo-section-title">
              <span></span>
              <h2>{t('OurPartners.Maintext.OurNetwork')}</h2>
              </div>
              <div className="grid-container prt-display-grid-4">
              {Reseaux.map((reseau) => {
                    return (
                    <PartnerUnit 
                    img={reseau.img}
                    name={reseau.name} />
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
