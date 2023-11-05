import AnchorLink from 'react-anchor-link-smooth-scroll'

const Scrollbar = () => {

    return(
        <div className="col-lg-12">
            <div className="header-menu">
                <ul className="smothscroll">
                    <li><AnchorLink to='#__next'><i className="fa fa-arrow-up"/></AnchorLink></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Scrollbar;
