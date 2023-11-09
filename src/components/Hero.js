// import { Link } from 'react-router-dom'

function Hero(props) {

    return(
        <section className="hero hero-style-3">
            <div className="hero-slider">
                <div className="slide">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-12 slide-caption">
                                <div className="slide-title">
                                    <h2>Solidaires pour un Avenir Meilleur</h2>
                                </div>
                                <div className="slide-subtitle">
                                    <p>...la tolérance, le respect des droits fondamentaux,</p>
                                    <p>le libre examen, la justice sociale et l'émancipation.</p>
                                </div>
                                {/* <div className="btns">
                                    <Link to="/DonatePage"><div className="theme-btn">Donate Now</div></Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="right-vec">
                    </div>  
                </div>
            </div>
    </section>
    )
}

export default Hero;