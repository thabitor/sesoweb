import React from 'react'
import { Link } from 'react-router-dom'


function HeaderTop () {
    return(	
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-call"></i>02 533 39 84</li>
                                <li><i className="fi flaticon-envelope"></i> info@seso.be</li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><Link to="/LoginPage">Login</Link></li>
                                <li><Link to="/SignUpPage">Sign Up</Link></li>
                                <li><Link to="/DonatePage"><div className="theme-btn">Donate Now</div></Link></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;