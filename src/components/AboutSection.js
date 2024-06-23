
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

function AboutSection(props) {

    const { t } = useTranslation();

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
     
    return(
        <div className={`wpo-about-area ${props.subclass} section-padding`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <span>{t('AboutUs.maintext.smallTitle')}</span>
                                <h2>{t('AboutUs.maintext.bigTitle')}</h2>
                            </div>
                            <p>{t('AboutUs.maintext.p1')}</p>
                            <p>{t('AboutUs.maintext.p2')}</p>
                            <p>{t('AboutUs.maintext.p3')}</p>
                            <div className={props.buttonClass}>
                                <Link to="/aboutus">
                                        <div  className="theme-btn" onClick={ClickHandler}>{t('main.elements.seeMore')}</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-img-3">
                            <img src='images/sesobuilding.jpg' alt='by Oluwakemi Solaja on Unsplash'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;