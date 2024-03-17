
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer';
import TeamDPI from '../TeamDPI';

function Sdpi()  {

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
                                    <h2>Service social pour demandeurs d'asile dans le cadre de la Convention Fedasil</h2>
                                </div>
                                <p>
                                SESO a mis en place une structure d'accueil destinée aux demandeurs d'asile, dans le cadre d'une convention conclue avec Fedasil.                                </p>
                                <p>Cet accueil a pour base la loi du 12 janvier 2007, sur l’accueil des demandeurs d’asile et certaines autres catégories d’étrangers.</p>
                                <p>Sur le plan pratique, ce type d'accueil est réalisé par le biais d’habitations individuelles (maisons, appartements, studios, chambres), et est bien sûr soumis à un éventail de normes de qualité, concertées avec d'autres partenaires. Nous avons des logements à Bruxelles, en Flandre (Gand, Alost, Menin, Koksijde) et à Charleroi.</p>
                                <p>Les assistants sociaux organisent un accompagnement social, administratif, juridique, psychologique, médical et logistique. Ce soutien s’exerce tout au long de leur procédure d’asile et pendant le temps de leur droit à l’aide matérielle.</p>
                                <p>Depuis 2014, nous accueillons principalement des demandeurs d’asile ayant un profil spécifique. En particulier, il s’agit d’une part de demandeurs d’asile confrontés des besoins médicaux sérieux et d’autre part, des mineurs non-accompagnés (MENA).</p>
                                <p><b>Les objectifs principaux de notre accueil sont pour l’essentiel :</b></p>
                                <p>
                                    <ul className='customlist-1'>
                                        <li>garantir aux demandeurs d'asile la préservation de leur vie de famille et de leur intimité</li>
                                        <li>assurer l'autonomie et la responsabilisation des personnes</li>
                                        <li>préserver le développement personnel et psychique des personnes</li>
                                        <li>favoriser le contact entre citoyens autochtones et allochtones</li>
                                        <li>contribuer à sensibiliser la population à la problématique des demandeurs d'asile</li>
                                        <li>envisager l'accueil des demandeurs d'asile comme une composante du tissu social</li>
                                        <li>permettre une flexibilité dans la création de nouvelles places d'accueil.</li>
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

            <TeamDPI/>
            <Footer/>
     
          
          </>
            );
        }
    
    export default Sdpi;
          
          
          
          
