import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";

function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero hero-style-3">
            <div className="hero-slider">
                <div className="slide">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-9 slide-caption">
                                <div className="slide-kicker">{t('main.elements.heroKicker')}</div>
                                <div className="slide-title">
                                    <h2>{t('main.elements.heroSlogan')}</h2>
                                </div>
                                <div className="slide-subtitle">
                                    <p>{t('main.elements.heroSubtitle')}</p>
                                </div>
                                <div className="btns hero-actions">
                                    <HashLink smooth to="/#services" className="theme-btn">{t('main.header.navItems.OurServices')}</HashLink>
                                    <Link to="/contact" className="theme-btn-s2">{t('main.elements.contactUs')}</Link>
                                </div>
                                <div className="hero-proof">
                                    <div>
                                        <strong>4</strong>
                                        <span>services spécialisés</span>
                                    </div>
                                    <div>
                                        <strong>100+</strong>
                                        <span>tutelles MENA</span>
                                    </div>
                                    <div>
                                        <strong>Bruxelles</strong>
                                        <span>ancrage local</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-vec"></div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
