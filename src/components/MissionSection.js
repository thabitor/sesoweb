import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function MissionSection(props) {
    const { t } = useTranslation();
    const services = [
        {
            path: '/ssg',
            iconClass: 'wpo-mission-icon-5',
            title: `${t('Services.SSG')} ${t('Services.SSG+')}`,
            description: t('Services.descriptions.SSG')
        },
        {
            path: '/sdpi',
            iconClass: 'wpo-mission-icon-6',
            title: t('Services.DPI'),
            description: t('Services.descriptions.DPI')
        },
        {
            path: '/smena',
            iconClass: 'wpo-mission-icon-7',
            title: t('Services.MENA'),
            description: t('Services.descriptions.MENA')
        },
        {
            path: '/sreab',
            iconClass: 'wpo-mission-icon-8',
            title: t('Services.REAB'),
            description: t('Services.descriptions.REAB')
        }
    ];

    return (
        <div className={`wpo-mission-area ${props.subclass}`} id="services">
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
                                        <span className="service-link-label">{t('Services.discover')}</span>
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
