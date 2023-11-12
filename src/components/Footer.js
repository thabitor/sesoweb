import React from 'react'
import { Link } from 'react-router-dom'
import Newsletter from './Newsletter'

function Footer (props) {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        {/* <Newsletter/> */}
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <img src='images/logo/logo-seso-xlg.png' alt=""/>
                            </div>
                            {/* <p>Build and Earn with your online store with lots of cool and exclusive wpo-features </p> */}
                            <ul>
                                <li><Link onClick={ClickHandler} to="/homepage"><i className="ti-facebook"/></Link></li>
                                <li><Link onClick={ClickHandler} to="/homepage"><i className="ti-twitter-alt"/></Link></li>
                                <li><Link onClick={ClickHandler} to="/homepage"><i className="ti-instagram"/></Link></li>
                                <li><Link onClick={ClickHandler} to="/homepage"><i className="ti-google"/></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget resource-widget">
                            <div className="widget-title">
                                <h3>Actualités</h3>
                            </div>
                            <div className="news-wrap">
                                <div className="news-img">
                                    <img src='images/footer/img-1.jpg' alt=""/>
                                </div>
                                <div className="news-text">
                                    <h3><Link onClick={ClickHandler} to="/BlogPage">Une campagne pour sensibiliser le public aux violences conjugales</Link></h3>
                                    <span>12 Jan, 2021</span>
                                </div>
                            </div>
                            <div className="news-wrap">
                                <div className="news-img">
                                    <img src='images/footer/img-2.jpg' alt=""/>
                                </div>
                                <div className="news-text">
                                    <h3><Link onClick={ClickHandler} to="/BlogPage">Réfugiés & étrangers: petit guide anti-préjugés – édition 2023</Link></h3>
                                    <span>12 Jan, 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Liens utils</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/aboutus">Qui sommes-nous?</Link></li>
                                <li><Link onClick={ClickHandler} to="/CasePage">Nos services</Link></li>
                                <li><Link onClick={ClickHandler} to="/CasePage">Nos projets</Link></li>
                                <li><Link onClick={ClickHandler} to="/ContactPage">Nos partenaires</Link></li>
                                <li><Link onClick={ClickHandler} to="/EventPage">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 offset-lg-1 col-md-6 col-sm-12 col-12">
                        <div className="widget market-widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact </h3>
                            </div>
                            {/* <p>online store with lots of cool and exclusive wpo-features</p> */}
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-pin"></i>Rue de Parme 26, 1060 Bruxelles</li>
                                    <li><i className="fi flaticon-call"></i>02 533 39 84</li>
                                    <li><i className="fi flaticon-envelope"></i>info@seso.be</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright">&copy; 2023 SESO</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;