import React from 'react'
import { Link } from 'react-router-dom'
import HeaderTop from '../components/HeaderTop'
import MobileMenu from '../components/MobileMenu'

function Header() {
    
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className="middle-header header-style-3">
            <HeaderTop />
            <div className="container">
                <div className="header-content">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                            <div className="logo">
                                <Link to="/HomePage" title="">
                                    <img src='images/logo/logo-seso18-9-19.jpg' alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8 d-lg-block d-none">
                            <nav>
                                <ul>
                                    <li><Link to="/AboutPage" title="">Qui sommes-nous ?</Link>
                                        <ul className='submenu'>
                                            <li><Link to="/CasePage" title="">Missions</Link></li>
                                            <li><Link to="/CaseSinglePage" title="">Historique</Link></li>
                                            <li><Link to="/CasePage" title="">Philosophie</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/CasePage" title="">Nos services</Link>
                                    <ul className='submenu'>
                                            <li><Link to="/CasePage" title="">Service Social Général</Link></li>
                                            <li><Link to="/CaseSinglePage" title="">Accueil DPI (convention Ciré-
                                                Fédasil)</Link></li>
                                            <li><Link to="/CasePage" title="">Tutelles MENA</Link></li>
                                            <li><Link to="/CaseSinglePage" title="">Retour volontaire (REAB)</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/EventPage" title="">Nos projets</Link>
                                    <ul className='submenu'>
                                            <li><Link to="/EventPage" title="">Culture</Link></li>
                                            <li><Link to="/EventPageSingle" title="">Logement</Link></li>
                                            <li><Link to="/EventPageSingle" title="">Communautaire</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/HomePage" title="">Nos partenaires</Link></li>
                                    <li><Link to="/BlogPage">Actualités</Link>
                                    <ul className='submenu'>
                                            <li><Link to="/BlogPage">Blog</Link></li>
                                            <li><Link to="/BlogPageLeft">Blog Left sidebar</Link></li>
                                            <li><Link to="/BlogPageFullwidth">Blog full width</Link></li>
                                            <li><i className="fa fa-angle-right"></i><Link to="/BlogDetails" title="">Blog Details</Link>
                                                <ul>
                                                    <li><Link to="/BlogDetails" title="">Blog single</Link></li>
                                                    <li><Link to="/BlogDetailsLeftSiide" title="">Blog single Left sidebar</Link></li>
                                                    <li><Link to="/BlogDetailsFull" title="">Blog single full width</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link to="/ContactPage" title="">Contact</Link></li>
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