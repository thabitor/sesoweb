import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import HeaderTop from '../components/HeaderTop'
import MobileMenu from '../components/MobileMenu'
import { useTranslation } from "react-i18next";

function Header(props) {

    const { t } = useTranslation();
    
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className="middle-header header-style-3">
            <HeaderTop Lang={props.Lang}/>
            <div className="container">
                <div className="header-content">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                            <div className="logo">
                                <Link to="/" title="">
                                    <img src='images/logo/logo-seso18-9-19.jpg' alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8 d-lg-block d-none">
                            <nav>
                                <ul>
                                    <li><Link to="/" title="">SESO</Link>
                                        <ul className='submenu'>
                                            <li><HashLink to="/aboutus" title="">{t('main.header.navItems.AboutUs')}</HashLink></li>
                                            <li><HashLink to="/aboutus#historique" title="">{t('main.header.navItems.OurHistory')}</HashLink></li>
                                            <li><Link to="/ourteam" title="">{t('main.header.navItems.OurTeam')}</Link>
                                            <ul>
                                                    <li><HashLink to="/ourteam#con" title="">{t('Services.board')}</HashLink></li>
                                                    <li><HashLink to="/ourteam#dir" title="">{t('Services.dir')}</HashLink></li>
                                                    <li><HashLink to="/ourteam#ssg" title="">{t('Services.SSG')}</HashLink></li>
                                                    <li><HashLink to="/ourteam#dpi" title="">{t('Services.DPI')}</HashLink></li>
                                                    <li><HashLink to="/ourteam#mena" title="">{t('Services.MENA')}</HashLink></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link to="/services" title="">{t('main.header.navItems.OurServices')}</Link>
                                    <ul className='submenu'>
                                            <li><Link to="/ssg" title="">{t('Services.SSG')}</Link></li>
                                            <li><Link to="/sdpi" title="">{t('Services.DPI')}</Link></li>
                                            <li><Link to="/smena" title="">{t('Services.MENA')}</Link></li>
                                            <li><Link to="/sreab" title="">{t('Services.REAB')}</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/ourpartners" title="">{t('main.header.navItems.OurPartners')}</Link></li>
                                    
                                    <li><Link to="/contact" title="">{t('main.header.navItems.Contact')}</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-1 col-md-6 col-sm-6 col-6">
                            <div className="contact">
                                <div className="cart-search-contact">
                                    <div className="header-search-form-wrapper">
                                        <button className="search-toggle-btn"><i className="fi flaticon-magnifying-glass"></i></button>
                                        <div className="header-search-form">
                                            <form onSubmit={SubmitHandler}>
                                                <div>
                                                    <input type="text" className="form-control" placeholder="Search here..." />
                                                    <button type="submit"><i className="ti-search"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-2">
                            <MobileMenu />
                        </div>
                    </div>

                    <div className="clearfix"></div>
                </div>

            </div>
        </div>
    )
}

export default Header;