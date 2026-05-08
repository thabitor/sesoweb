import React from 'react';
import { useTranslation } from "react-i18next";
import TeamMENA from '../TeamMENA';
import Footer from '../Footer';
import ServiceImage from '../ServiceImage';

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
                            <ServiceImage serviceKey="mena" src="images/gallery/img-serv-3.jpg" maskClass="mask1" extraClass="top-60" />
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
