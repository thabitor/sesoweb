
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TeamMENA from '../TeamMENA';
import Footer from '../Footer';

function Smena()  {

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
                        <h2>Mineurs Non-Accompagnés</h2>
                      </div>
                      <p>
                        Ce service s'occupe de la situation des Mineurs
                        Etrangers Non Accompagnés (Mena). Notre asbl, consciente
                        de l'urgence sociale de ce public, a inauguré en juin
                        2007 ce service composé de trois travailleurs sociaux «
                        tuteurs ».
                      </p>
                      <p>
                        Notre objectif est : la recherche de la solution durable
                        en collaboration avec le jeune. Nous l'accompagnons tout
                        au long de son parcours jusqu'à sa majorité et ou
                        jusqu'à la fin de sa procédure. Nous offrons le service
                        suivant:{" "}
                      </p>
                      <ul className="customlist-1">
                        <li>
                          Mise en 'oeuvre des moyens juridiques, sociaux,
                          culturels, éducatifs en collaboration avec le Service
                          des Tutelles (Ministère de la Justice) et sous la
                          supervision d'un Juge de Paix
                        </li>
                        <li>
                          Assister le mineur dans tous les stades de sa
                          procédure d'asile ou, à défaut, dans l'ensemble des
                          démarches lui garantissant son droit au séjour, à
                          l'aide et à l'éducation
                        </li>
                        <li>
                          Veiller à ce que le jeune bénéficie d'une scolarité,
                          du soutien psychologique nécessaire, de l'hébergement
                          adéquat et de l'aide médicale
                        </li>
                        <li>
                          Agir en concertation avec le mineur et les personnes
                          d'accueil et d'hébergement (famille, centres
                          communautaires fédéraux ou de l'Aide à la Jeunesse')
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="wpo-service-img">
                      <img src="images/gallery/ssg.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <TeamMENA />
            
            <Footer />
          </>
        );
        }
    
    export default Smena;
          
          
          
          
