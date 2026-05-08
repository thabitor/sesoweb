import { useTranslation } from "react-i18next";
import partners from "../data/allPartners";
import PartnerUnit from "./PartnerUnit";

const Sponsors = partners.filter((sponsor) => sponsor.type === 'sponsor');

function SponsorsSection() {
  const { t } = useTranslation();

  return (
    <div className="wpo-case-area section-padding white-bg partners">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wpo-section-title">
              <h2>{t('OurPartners.Maintext.OurSponsors')}</h2>
            </div>
            <div className="grid-container prt-display-flex">
              {Sponsors.map((sponsor) => (
                <PartnerUnit img={sponsor.img} key={sponsor.img} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SponsorsSection;
