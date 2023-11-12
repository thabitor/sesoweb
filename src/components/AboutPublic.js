import React from "react";

function AboutPublic(props) {
    return(
        <div className="wpo-mission-area">
        <div className={`wpo-counter-area ${props.countclass} section-padding`}>
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="wpo-section-title">
                        <span>Notre</span>
                    <h2>public</h2>
                    </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="wpo-counter-grids wpo-counter-style-2">
                            <div className="grid">
                                <div>
                                    <h2><span className="odometer" data-count="21,8">19,7</span>%</h2>
                                </div>
                                <p>l'Equateur</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span className="odometer" data-count="10,90">10,9</span>%</h2>
                                </div>
                                <p>le Tibet</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span className="odometer" data-count="7,97">7,97</span>%</h2>
                                </div>
                                <p>le Maroc</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span className="odometer" data-count="6,29">6,29</span>%</h2>
                                </div>
                                <p>El Salvador</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AboutPublic;