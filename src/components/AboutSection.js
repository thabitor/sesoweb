import VideoModal from '../components/ModalVideo'
import { Link } from 'react-router-dom'

function AboutSection(props) {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
     
    return(
        <div className="wpo-about-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <span>Qui sommes-nous ?</span>
                                <h2>Contre les inégalités sociales et les discriminations.</h2>
                            </div>
                            <p>
                            Le SESO est une organisation belge qui lutte contre les inégalités sociales et les discriminations. Nous sommes convaincus que chacun a le droit de vivre dans une société juste et équitable, et nous travaillons pour rendre cela possible.
                            </p>
                            <p>Nous nous concentrons sur trois domaines principaux :</p>
                            <ul>
                            <li><p><b>Lutter contre les violences conjugales et intrafamiliales.</b> Nous soutenons les victimes, sensibilisons le public et travaillons à la prévention de ces violences.</p></li>
                            <li><p><b>Promouvoir l'inclusion des personnes migrantes et réfugiées.</b> Nous luttons contre les préjugés et les discriminations, et nous travaillons à favoriser l'intégration des personnes migrantes et réfugiées dans la société belge.</p></li>
                            <li><p><b>Promouvoir la participation citoyenne.</b> Nous encourageons les citoyens à s'impliquer dans la vie démocratique et à faire entendre leur voix.</p></li>
                            </ul>
                         
                        <p>Le SESO est une organisation pluraliste et indépendante. Nous sommes financés par des fonds publics et privés, et nous comptons plus de 200 membres associatifs.
                            
                            Notre équipe est composée de professionnels qualifiés et passionnés. Nous travaillons en étroite collaboration avec les pouvoirs publics, les associations et les citoyens pour construire une société plus juste et plus équitable.
                            
                            Ensemble, nous pouvons faire la différence !</p>
                            <div className="btns">
                                <Link to="/DonatePage">
                                        <div  className="theme-btn" onClick={ClickHandler}>En savoir plus</div>
                                </Link>
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal/>
                                    </li>
                                    <li className="video-text">
                                        Regardez notre video
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-img-3">
                            <img src='images/gallery/student-refugee-sm.jpg' alt="Photo by Oluwakemi Solaja on Unsplash"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;