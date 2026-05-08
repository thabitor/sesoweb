import React from 'react';
import { useTranslation } from "react-i18next";
import TeamMENA from '../TeamMENA';
import Footer from '../Footer';

function Smena() {
    const { t } = useTranslation();
    const paragraphs = t('ServiceDetails.mena.paragraphs', { returnObjects: true });
    const services = t('ServiceDetails.mena.services', { returnObjects: true });

    return (
        <>
            <div className="wpo-servicepage-area white-bg service-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="wpo-about-text">
                                <div className="wpo-service-title">
                                    <h2>{t('ServiceDetails.mena.title')}</h2>
                                </div>
                                {paragraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                                <ul className="customlist-1">
                                    {services.map((service) => (
                                        <li key={service}>{service}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 inservicepage-section">
                            <div className="wpo-service-img mask1 top-60">
                                <img src="images/gallery/img-serv-3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <TeamMENA />
            <Footer />
        </>
    );
}

export default Smena;
