import React from 'react';
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Scrollbar() {

    return(
        <div className="col-lg-12">
            <div className="header-menu">
                <ul className="smoothscroll">
                    <li><AnchorLink to='#__next'><i className="fa fa-arrow-up"/></AnchorLink></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Scrollbar;
