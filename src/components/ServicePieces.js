
import { Link } from 'react-router-dom'

function ServicePieces(props) {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <>
            <div className="wpo-servicepage-area white-bg service-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="wpo-about-text">
                                <div className="wpo-service-title">
                                    <h2>Service Social Général</h2>
                                </div>
                                <p>
                                    Notre Service Social Général offre une aide sociale généraliste de première ligne aux personnes en difficulté. Nous assurons un premier accueil lors d’un entretien individuel en français, néerlandais, anglais et espagnol. Nous analysons la situation de l’usager, mettons en place un accompagnement social et un suivi et, si nécessaire, nous orientons les personnes vers un service spécialisé en fonction de la problématique.
                                </p>
                                <p>Depuis de longues années, notre Service Social Général a développé une expertise en matière du droit des étrangers, c’est pourquoi nous sommes consultés principalement par un public d’origine allochtone. Nous soutenons les intéressés, entre autres, en matière de séjour, sécurité sociale, droit au travail, formation et études, logement, endettement et santé.</p>
                                <p>Notre accompagnement vise à favoriser le développement du lien social et un meilleur accès de la personne aux équipements collectifs et à ses droits fondamentaux.</p>
                                <div className="btns">
                                    <Link to="/ssg">
                                        <div className="theme-btn" onClick={ClickHandler}>En savoir plus</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="wpo-service-img">
                                <img src='images/gallery/ssg.jpg' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='wpo-servicepage-area grey-bg service-padding'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="wpo-service-img">
                                <img src='images/gallery/ssg.jpg' alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="wpo-about-text">
                                <div className="wpo-service-title">
                                    <h2>Accueil et accompagnement pour demandeurs d'asile</h2>
                                </div>
                                <p>
                                SESO a mis en place une structure d'accueil destinée aux demandeurs d'asile, dans le cadre d'une convention conclue avec Fedasil.
                                </p>
                                <p>
                                Cet accueil a pour base la loi du 12 janvier 2007, sur l’accueil des demandeurs d’asile et certaines autres catégories d’étrangers.                                
                                </p>
                                <p>
                                Sur le plan pratique, ce type d'accueil est réalisé par le biais d’habitations individuelles (maisons, appartements, studios, chambres), et est bien sûr soumis à un éventail de normes de qualité, concertées avec d'autres partenaires. Nous avons des logements à Bruxelles, en Flandre (Gand, Alost, Menin, Koksijde) et à Charleroi.                                
                                </p>
                                <p>
                                Les assistants sociaux organisent un accompagnement social, administratif, juridique, psychologique, médical et logistique. Ce soutien s’exerce tout au long de leur procédure d’asile et pendant le temps de leur droit à l’aide matérielle.  
                                </p>
                                <p>
                                Depuis 2014, nous accueillons principalement des demandeurs d’asile ayant un profil spécifique. En particulier, il s’agit d’une part de demandeurs d’asile confrontés des besoins médicaux sérieux et d’autre part, des mineurs non-accompagnés (MENA).
                                </p>
                                <div className="btns">
                                    <Link to="/DonatePage">
                                        <div className="theme-btn" onClick={ClickHandler}>En savoir plus</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-servicepage-area white-bg service-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="wpo-about-text">
                                <div className="wpo-service-title">
                                    <h2>Mineurs Etrangers Non Accompagnés (Mena)</h2>
                                </div>
                                <p>
                                Ce service s'occupe de la situation des Mineurs Etrangers Non Accompagnés (Mena). Notre asbl, consciente de l'urgence sociale de ce public, a inauguré en juin 2007 ce service composé de trois travailleurs sociaux « tuteurs ».                                
                                </p>
                                <p>
                                Notre objectif est : la recherche de la solution durable en collaboration avec le jeune. Nous l'accompagnons tout au long de son parcours jusqu'à sa majorité et ou jusqu'à la fin de sa procédure. Nous offrons le service suivant:                                </p>
                                <ul className='customlist-1'>
                                     <li>
                                    Mise en 'oeuvre des moyens juridiques, sociaux, culturels, éducatifs en collaboration avec le Service des Tutelles (Ministère de la Justice) et sous la supervision d'un Juge de Paix
                                    </li>
                                    <li>
                                    Assister le mineur dans tous les stades de sa procédure d'asile ou, à défaut, dans l'ensemble des démarches lui garantissant son droit au séjour, à l'aide et à l'éducation   
                                    </li>
                                    <li>
                                    Veiller à ce que le jeune bénéficie d'une scolarité, du soutien psychologique nécessaire, de l'hébergement adéquat et de l'aide médicale
                                    </li>
                                    <li>
                                    Agir en concertation avec le mineur et les personnes d'accueil et d'hébergement (famille, centres communautaires fédéraux ou de l'Aide à la Jeunesse')
                                    </li>
                                </ul>
                                <div className="btns">
                                    <Link to="/DonatePage">
                                        <div className="theme-btn" onClick={ClickHandler}>En savoir plus</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="wpo-service-img">
                                <img src='images/gallery/ssg.jpg' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='wpo-servicepage-area grey-bg service-padding'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="wpo-service-img">
                                <img src='images/gallery/ssg.jpg' alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="wpo-about-text">
                                <div className="wpo-service-title">
                                    <h2>Retour volontaire (REAB)</h2>
                                </div>
                                <p>
                                <b>L'aide au retour volontaire</b> consiste en un ticket de retour, pouvant être accompagné d'une prime, ainsi que d'une aide à la réintégration. L'obtention de ces différents types d'aides dépend du profil « administratif » du demandeur. Ce dernier introduira son dossier auprès de notre service REAB, où il passera un premier entretien afin de l'informer des différentes possibilités qui pourraient lui être proposées. Si le candidat peut bénéficier de ces aides (en plus de son ticket), c'est à l'O.I.M. qu'il se rendra afin de s'entretenir avec les différents conseillers après prise une de rendez-vous.                                </p>
                                <p>
                                Ces fonds pourront être destinés à l'enseignement régulier, à des formations spécifiques, à la création de micro-entreprises, aux frais de logement, au frais de marchandises, à la traduction de documents, de l'aide à la recherche d'emploi, etc.                                </p>
                                <div className="btns">
                                    <Link to="/DonatePage">
                                        <div className="theme-btn" onClick={ClickHandler}>En savoir plus</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>



    )

}

export default ServicePieces;