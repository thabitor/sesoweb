import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import ServiceImage from './ServiceImage';

function ServicePieces() {
    const { t } = useTranslation();

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const services = [
        {
            key: 'ssg',
            path: '/ssg',
            image: 'images/gallery/ssg.jpg',
            imageFirst: false,
            background: 'white-bg'
        },
        {
            key: 'dpi',
            path: '/sdpi',
            image: 'images/gallery/img-serv-2.jpg',
            imageFirst: true,
            background: 'grey-bg'
        },
        {
            key: 'mena',
            path: '/smena',
            image: 'images/gallery/img-serv-3.jpg',
            imageFirst: false,
            background: 'white-bg'
        },
        {
            key: 'reab',
            path: '/sreab',
            image: 'images/gallery/img-serv-4.jpg',
            imageFirst: true,
            background: 'grey-bg'
        }
    ];

    const renderText = (service) => (
        <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="wpo-about-text">
                <div className="wpo-service-title">
                    <h2>{t(`ServicePage.${service.key}.title`)}</h2>
                </div>
                {t(`ServicePage.${service.key}.paragraphs`, { returnObjects: true }).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
                <div className="btns">
                    <Link to={service.path}>
                        <div className="theme-btn" onClick={ClickHandler}>{t('ServicePage.learnMore')}</div>
                    </Link>
                </div>
            </div>
        </div>
    );

    const renderImage = (service) => (
        <div className="col-lg-6 col-md-12 col-sm-12 servicepieces-section">
            <ServiceImage serviceKey={service.key} src={service.image} maskClass="mask2" extraClass="top-30" />
        </div>
    );

    return (
        <>
            {services.map((service) => (
                <div className={`wpo-servicepage-area ${service.background} service-padding`} key={service.key}>
                    <div className="container">
                        <div className="row">
                            {service.imageFirst ? renderImage(service) : renderText(service)}
                            {service.imageFirst ? renderText(service) : renderImage(service)}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ServicePieces;
