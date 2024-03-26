import { Link }  from 'react-router-dom';
import { useTranslation } from "react-i18next";

function MissionSection (props) {

    const {t} = useTranslation();

    return (
        <div className={`wpo-mission-area ${props.subclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>{t('main.header.navItems.OurServices')}</span>
                            <h2>assistance humanitaire aux populations vulnérables</h2>
                        </div>
                    </div>
                </div>
                <div className="wpo-mission-wrap">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item services-item-box">
                                <div className="wpo-mission-icon-5">
                                    <img src='images/mission/icon1.png' alt="" />
                                </div>
                                <Link to='/ssg' className="wpo-mission-content">
                                    <h2>{t('Services.SSG')}</h2>
                                    <p>Notre Service Social Général offre une aide sociale généraliste de première ligne aux personnes en difficulté.</p>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item services-item-box">
                                <div className="wpo-mission-icon-6">
                                    <img src='images/mission/icon2.png' alt="" />
                                </div>
                                <Link to='/sdpi' className="wpo-mission-content">
                                    <h2>{t('Services.DPI')}</h2>
                                    <p>SESO a mis en place une structure d'accueil destinée aux demandeurs d'asile, dans le cadre d'une convention conclue avec Fedasil.</p>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item services-item-box">
                                <div className="wpo-mission-icon-7">
                                    <img src='images/mission/icon3.png' alt="" />
                                </div>
                                <Link to='/smena' className="wpo-mission-content">
                                    <h2>{t('Services.MENA')}</h2>
                                    <p>Ce service s'occupe de la situation des Mineurs Etrangers Non Accompagnés (Mena).</p>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item services-item-box">
                                <div className="wpo-mission-icon-8">
                                    <img src='images/mission/icon4.png' alt="" />
                                </div>
                                <Link to='/sreab' className="wpo-mission-content">
                                    <h2>{t('Services.REAB')}</h2>
                                    <p>Notre Service Social travaille en partenariat avec l'OIM et aide son public à ouvrir un dossier de retour.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionSection;