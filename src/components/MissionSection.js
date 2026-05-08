import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function MissionSection(props) {
    const { t } = useTranslation();
    const services = [
        {
            path: '/ssg',
            iconClass: 'wpo-mission-icon-5',
            title: `${t('Services.SSG')} ${t('Services.SSG+')}`,
            description: 'Aide sociale généraliste de première ligne pour les personnes et familles en difficulté.'
        },
        {
            path: '/sdpi',
            iconClass: 'wpo-mission-icon-6',
            title: t('Services.DPI'),
            description: 'Près de 100 places d’accueil en logement individuel, en partenariat avec le CIRÉ et Fedasil.'
        },
        {
            path: '/smena',
            iconClass: 'wpo-mission-icon-7',
            title: t('Services.MENA'),
            description: 'Accompagnement et tutelles pour mineurs étrangers non accompagnés, mandatés par le SPF Justice.'
        },
        {
            path: '/sreab',
            iconClass: 'wpo-mission-icon-8',
            title: t('Services.REAB'),
            description: 'Information et soutien dans l’ouverture de dossiers de retour volontaire avec l’OIM.'
        }
    ];

    return (
        <div className={`wpo-mission-area ${props.subclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title redColor">
                            <span></span>
                            <h2>{t('main.header.navItems.OurServices')}</h2>
                        </div>
                    </div>
                </div>
                <div className="wpo-mission-wrap">
                    <div className="row">
                        {services.map((service) => (
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid" key={service.path}>
                                <div className="wpo-mission-item services-item-box">
                                    <div className={service.iconClass}>
                                        <img src='images/gallery/icons/friends.png' alt="" />
                                    </div>
                                    <Link to={service.path} className="wpo-mission-content">
                                        <h2>{service.title}</h2>
                                        <p>{service.description}</p>
                                        <span className="service-link-label">Découvrir le service</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MissionSection;
