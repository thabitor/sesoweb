import React from 'react';
import { useTranslation } from "react-i18next";
import TeamREAB from '../TeamREAB';
import Footer from '../Footer';

function Sreab() {
    const { t } = useTranslation();
    const paragraphs = t('ServiceDetails.reab.paragraphs', { returnObjects: true });
    const categories = t('ServiceDetails.reab.categories', { returnObjects: true });

    return (
        <>
            <div className="wpo-servicepage-area white-bg service-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="wpo-about-text">
                                <div className="wpo-service-title">
                                    <h2>{t('ServiceDetails.reab.title')}</h2>
                                </div>
                                {paragraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                                <ul className="customlist-1">
                                    {categories.map((category) => (
                                        <li key={category.label}>
                                            <b>{category.label}</b>{category.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="wpo-service-img mask1 top-120">
                                <img src="images/gallery/img-serv-4.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <TeamREAB />
            <Footer />
        </>
    );
}

export default Sreab;
