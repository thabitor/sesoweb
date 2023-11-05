const CounterSection = (props) => {
    return(
<div className="container">
        <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Nos partenaires</span>
                            <h2>assistance humanitaire aux populations vulnérables</h2>
                        </div>
                    </div>
        <div className={`wpo-counter-area ${props.countclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="wpo-counter-grids">
                            <div className="grid">
                                <div>
                                    <img src='images/partners/logo_cire_rvb3.svg'/>
                                </div>
                            </div>
                            <div className="grid">
                            <div>
                                    <img src='images/partners/logo_vlctwerk2.svg'/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default CounterSection;