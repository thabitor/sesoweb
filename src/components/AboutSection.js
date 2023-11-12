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
                                <h2>Au Service des Réfugiés : Solidarité sans Frontières</h2>
                            </div>
                            <p>
                            Notre Service Social des Solidarités, héritier de la solidarité des brigades internationales de retour en Belgique après la guerre civile espagnole, tire ses racines d'une histoire riche, dédiée à l'aide aux réfugiés. Depuis la mise en place de camps pour les familles espagnoles fuyant leur pays jusqu'à son évolution en un système de soutien complet, notre parcours s'étend à travers des moments clés : de l'accueil des réfugiés hongrois, tchécoslovaques, chiliens, vietnamiens et d'autres.                            </p>
                            <p>
                                Aujourd'hui, notre portée s'étend à une diversité de nationalités, reflétant les dynamiques changeantes des demandeurs d'asile en Belgique. Avec une hausse de la demande en provenance de régions en conflit comme l'Irak, la Syrie et l'Afghanistan, nos services se sont adaptés pour accueillir ces nouvelles populations. Bien que notre focalisation demeure sur les demandeurs d'asile, notre action s'étend au-delà, venant en aide à des individus venant de l'Équateur, du Tibet, du Maroc et au-delà, reflétant une mosaïque mondiale d'assistance.
                            </p>
                            <p>
                            Au cœur de notre mission se trouvent des valeurs inébranlables : la tolérance, le respect des droits fondamentaux, la justice sociale et l'émancipation. Notre philosophie promeut l'autonomie, les droits fondamentaux, les échanges interculturels et une aide individualisée, favorisant un environnement bienveillant qui respecte les besoins et les antécédents diversifiés de ceux que nous aidons."
                            </p>
                            <div className={props.buttonClass}>
                                <Link to="/aboutus">
                                        <div  className="theme-btn" onClick={ClickHandler}>En savoir plus</div>
                                </Link>
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