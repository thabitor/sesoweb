import VideoModal from './ModalVideo'
import { Link } from 'react-router-dom'

function ServicePieces(props) {

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
                                <span>Nos services</span>
                                <h2>Service Social Général</h2>
                            </div>
                            <p>
                            Notre Service Social Général offre une aide sociale généraliste de première ligne aux personnes en difficulté. Nous assurons un premier accueil lors d’un entretien individuel en français, néerlandais, anglais et espagnol. Nous analysons la situation de l’usager, mettons en place un accompagnement social et un suivi et, si nécessaire, nous orientons les personnes vers un service spécialisé en fonction de la problématique.
                            </p>
                            <p>Depuis de longues années, notre Service Social Général a développé une expertise en matière du droit des étrangers, c’est pourquoi nous sommes consultés principalement par un public d’origine allochtone. Nous soutenons les intéressés, entre autres, en matière de séjour, sécurité sociale, droit au travail, formation et études, logement, endettement et santé.</p>
                            <p>Notre accompagnement vise à favoriser le développement du lien social et un meilleur accès de la personne aux équipements collectifs et à ses droits fondamentaux.</p>
                            <div className="btns">
                                <Link to="/DonatePage">
                                        <div  className="theme-btn" onClick={ClickHandler}>En savoir plus</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-service-img">
                            <img src='images/gallery/ssg.jpg' alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-9 mt-sm-20">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <span>Nos services</span>
                                <h2>Service Social Général</h2>
                            </div>
                            <p>
                            Notre Service Social Général offre une aide sociale généraliste de première ligne aux personnes en difficulté. Nous assurons un premier accueil lors d’un entretien individuel en français, néerlandais, anglais et espagnol. Nous analysons la situation de l’usager, mettons en place un accompagnement social et un suivi et, si nécessaire, nous orientons les personnes vers un service spécialisé en fonction de la problématique.
                            </p>
                            <p>Depuis de longues années, notre Service Social Général a développé une expertise en matière du droit des étrangers, c’est pourquoi nous sommes consultés principalement par un public d’origine allochtone. Nous soutenons les intéressés, entre autres, en matière de séjour, sécurité sociale, droit au travail, formation et études, logement, endettement et santé.</p>
                            <p>Notre accompagnement vise à favoriser le développement du lien social et un meilleur accès de la personne aux équipements collectifs et à ses droits fondamentaux.</p>
                            <div className="btns">
                                <Link to="/DonatePage">
                                        <div  className="theme-btn" onClick={ClickHandler}>En savoir plus</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-9 mt-sm-20">
                        <div className="wpo-service-img">
                            <img src='images/gallery/ssg.jpg' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )

}

export default ServicePieces;