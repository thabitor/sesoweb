import React from "react";

function AboutPublic(props) {
    return (
        <div className="wpo-mission-area" id="public">
            <div className={`wpo-counter-area ${props.countclass} section-padding`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wpo-section-title">
                                <span>Notre</span>
                                <h2>public</h2>
                            </div>
                        </div>
                        <div class="row justify-content-md-center">
                            <div className="col-12 col-md-6 colsm-6">
                                <div className="wpo-about-text">
                                    <p>
                                        Le public accueilli par SESO est de nationalités multiples.</p>

                                    <p>Le nombre de demandes d’asile introduites en Belgique en 2015 a doublé par rapport à 2014. En 2015,

                                        l’Office des Etrangers a enregistré 35.476 demandes d’asile. </p>

                                    <p>C’est surtout durant la seconde moitié de 2015 que le nombre de demandeurs d’asile a connu une forte hausse. Dans le passé, de nombreux demandeurs venaient des Balkans occidentaux,

                                        mais la plupart des demandeurs d’asile en Belgique viennent à présent de pays en proie à des conflits armés ou une guerre :

                                        les principaux pays d’origine sont l’Irak (21,8 % des demandeurs), la Syrie (21,3 %) et l’Afghanistan (20 %).

                                        Nous voyons ces chiffres reflétés dans les nationalités qui sont accueillies et accompagnées par nos services

                                        (service accueil et accompagnement demandeurs d’asile et service MENA).</p>

                                        <p>Notre service social général a un public différent : 19,71% des personnes aidées en 2015 sont venus de l'Equateur, 10,90%

                                            du Tibet, 7,97% du Maroc, 6,29% d’El Salvador, suivi par les Philippines, la Colombie, la Guinée, la RDC, la Somalie

                                            et la Bolivie.

                                            Notre service REAB a principalement aidé des Brésiliens à rentrer au pays.
                                        </p>

                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-md-center">
                        <div className="col-lg-10">
                                <div className="wpo-counter-grids wpo-counter-style-2">
                                    <div className="grid col">
                                        <div>
                                            <h2><span className="odometer" data-count="21,3">21,73</span>%</h2>
                                        </div>
                                        <p>la Syrie</p>
                                    </div>
                                    <div className="grid col">
                                        <div>
                                            <h2><span className="odometer" data-count="21,8">21,8</span>%</h2>
                                        </div>
                                        <p>l'Irak'</p>
                                    </div>
                                    <div className="grid col">
                                        <div>
                                            <h2><span className="odometer" data-count="20">20</span>%</h2>
                                        </div>
                                        <p>l'Afghanistan</p>
                                    </div>

                                </div>
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