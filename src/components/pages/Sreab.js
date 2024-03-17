
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer';

function Sreab()  {

    const ClickHandler = () =>{
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
                                    <h2>Retour et réintégration des demandeurs d'asile à partir de la BELGIQUE</h2>
                                </div>
                                <p>Depuis 1984,'État belge a confié à l'O.I.M le programme REAB (« Retour et Réintégration des Demandeurs d'asile à partir  de la Belgique »). Notre Service Social travaille en partenariat avec l'OIM et aide son public à ouvrir un dossier de retour.</p>
                                <p><b>L'aide au retour volontaire</b> consiste en un ticket de retour, pouvant être accompagné d'une prime, ainsi que d'une aide à la réintégration. L'obtention de ces différents types d'aides dépend du profil « administratif » du demandeur. Ce dernier introduira son dossier auprès de notre service REAB, où il passera un premier entretien afin de l'informer des différentes possibilités qui pourraient lui être proposées. Si le candidat peut bénéficier de ces aides (en plus de son ticket), c'est à l'O.I.M. qu'il se rendra afin de s'entretenir avec les différents conseillers après prise une de rendez-vous.</p>
                                <p>Ces fonds pourront être destinés à l'enseignement régulier, à des formations spécifiques, à la création de micro-entreprises, aux frais de logement, au frais de marchandises, à la traduction de documents, de l'aide à la recherche d'emploi, etc.</p>
                                <p>Ce programme humanitaire assiste les migrants dans le besoin qui souhaitent rentrer volontairement et se réintégrer dans leur pays d’origine. Ce programme s’adresse à trois catégories de migrants en Belgique :</p>
                                <p>Depuis 2014, nous accueillons principalement des demandeurs d’asile ayant un profil spécifique. En particulier, il s’agit d’une part de demandeurs d’asile confrontés des besoins médicaux sérieux et d’autre part, des mineurs non-accompagnés (MENA).</p>
                                <p>
                                    <ul className='customlist-1'>
                                        <li><b>Demandeurs d’asile :</b> migrants ayant introduit une demande d’asile et attendant d’une réponse définitive </li>
                                        <li><b>Demandeurs d’asile déboutés :</b> migrants ayant introduit une demande d’asile et ayant reçu une réponse négative </li>
                                        <li><b>Migrants en situation irrégulière.</b></li>
                                    </ul>
                                </p>
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

            <Footer/>
     
          
          </>
            );
        }
    
    export default Sreab;
          
          
          
          
