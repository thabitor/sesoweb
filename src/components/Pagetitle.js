

function PageTitle (props) {
    return(
        <div className= {`wpo-breadcumb-area ${props.pageTitlebg}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{props.pageTitle}</h2>
                            {/* <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><span>{props.pagesub}</span></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitle;