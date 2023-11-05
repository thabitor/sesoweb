import React from 'react'
import { Link } from 'react-router-dom'
import HeaderTop from '../components/HeaderTop'
import MobileMenu from '../components/MobileMenu'
import { BrowserRouter } from 'react-router-dom'

const Header = () => {
    const SubmitHandler = (e) =>{
        e.preventDefault()
     }

    return(	
	<div className="middle-header header-style-3">
        <HeaderTop/>
        <div className="container">
            <div className="header-content">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                    <div className="logo">
                        <Link to="/HomePage" title="">
                           <img src='images/logo.png' alt=""/>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-8 d-lg-block d-none">
                    <nav>
                        <ul>
                            <li><Link className="active" to="/HomePage" title="">SESO WEB</Link>
                                <ul>
                                    <li><Link className="active" to="/HomePage">Home style 1</Link></li>
                                    <li><Link to="/HomePage2">Home style 2</Link></li>
                                    <li><Link to="/HomePage3">SESO</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/AboutPage" title="">About</Link></li>
                            <li><Link to="/CasePage" title="">Causes</Link>
                                <ul>
                                    <li><Link to="/CasePage" title="">Causes</Link></li>
                                    <li><Link to="/CaseSinglePage" title="">Causes Single</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/EventPage" title="">Event</Link>
                                <ul>
                                    <li><Link to="/EventPage" title="">Event</Link></li>
                                    <li><Link to="/EventPageSingle" title="">Event Single</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/HomePage" title="">Pages</Link>
                                <ul>
                                    <li><Link to="/AboutPage" title="">About</Link></li>
                                    <li><Link to="/DonatePage" title="">Donate</Link></li>
                                    <li><Link to="/volunteerPage" title="">Volunteer</Link></li>
                                    <li><Link to="/ErrorPage" title="">Error 404</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/BlogPage">Blog</Link>
                                <ul>
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
                                            <input type="text" className="form-control" placeholder="Search here..."/>
                                            <button type="submit"><i className="ti-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="mini-cart">
                                <button className="cart-toggle-btn"> <i className="fi flaticon-shopping-bag"></i> <span className="cart-count">02</span></button>
                                <div className="mini-cart-content">
                                    <div className="mini-cart-items">
                                        <div className="mini-cart-item clearfix">
                                            <div className="mini-cart-item-image">
                                                <Link to="/HomePage"><img src='images/shop/mini-cart/img-1.jpg' alt=""/></Link>
                                            </div>
                                            <div className="mini-cart-item-des">
                                                <Link to="/HomePage">Hoodi with zipper</Link>
                                                <span className="mini-cart-item-price">$20.15</span>
                                                <span className="mini-cart-item-quantity">x 1</span>
                                            </div>
                                        </div>
                                        <div className="mini-cart-item clearfix">
                                            <div className="mini-cart-item-image">
                                                <Link to="/HomePage"><img src='images/shop/mini-cart/img-2.jpg' alt=""/></Link>
                                            </div>
                                            <div className="mini-cart-item-des">
                                                <Link to="/HomePage">Ninja T-shirt</Link>
                                                <span className="mini-cart-item-price">$13.25</span>
                                                <span className="mini-cart-item-quantity">x 2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mini-cart-action clearfix">
                                        <span className="mini-checkout-price">$215.14</span>
                                        <Link to="/HomePage"><div className="view-cart-btn theme-btn"/> View Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-sm-2 col-2">
                    <MobileMenu/>
                </div>
            </div>
               
                <div className="clearfix"></div>
            </div>
            
        </div>
    </div>
    )
}

export default Header;