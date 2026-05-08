import React from 'react';
import { useTranslation } from "react-i18next";
import Footer from '../Footer';
import TeamDPI from '../TeamDPI';
import ServiceImage from '../ServiceImage';

function Sdpi() {
    const { t } = useTranslation();
    const paragraphs = t('ServiceDetails.dpi.paragraphs', { returnObjects: true });
    const objectives = t('ServiceDetails.dpi.objectives', { returnObjects: true });

    return (
        <>
            <div className="wpo-servicepage-area white-bg service-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="wpo-about-text">
                                <div className="wpo-service-title">
                                    <h2>{t('ServiceDetails.dpi.title')}</h2>
                                </div>
                                {paragraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                                <p><b>{t('ServiceDetails.dpi.objectivesTitle')}</b></p>
                                <ul className="customlist-1">
                                    {objectives.map((objective) => (
                                        <li key={objective}>{objective}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <ServiceImage serviceKey="dpi" src="images/gallery/img-serv-2.jpg" maskClass="mask1" extraClass="top-150" />
                        </div>
                    </div>
                </div>
            </div>

            <TeamDPI />
            <Footer />
        </>
    );
}

export default Sdpi;
