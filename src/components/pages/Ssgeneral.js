
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TeamSSG from '../TeamSSG';
import Footer from '../Footer';

function Ssgeneral()  {

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
                                    <h2>Service Social Général</h2>
                                </div>
                                <p>
                                Le Service Social des Solidarités (SESO) a pour but l'aide
individualisée et personnalisée à toute personne et, en particulier,
aux personnes en migration, dans le respect de l'autonomie de la
personne, des droits fondamentaux, du droit à la vie familiale et à
l'intimité. Nous promouvons la tolérance, le respect des droits, la
lutte contre tout type de discrimination, le libre examen, la justice
sociale et l'émancipation.                                </p>
                                <p>Notre Service Social Général (SSG) offre une aide sociale
généraliste de première ligne aux personnes en difficulté. Nous
assurons un premier accueil lors d’entretiens individuels ou de nos
permanences en français, néerlandais, anglais ou espagnol. En cas
de besoin, nous travaillons également avec des interprètes.
Nous analysons la situation de la personne, mettons en place un
suivi social et administratif. Si nécessaire, nous orientons les
personnes vers un service spécialisé en fonction de la
problématique (logement, médiation de dettes, avocats, …). Notre
accompagnement vise à promouvoir l’accès de notre public à ses
droits fondamentaux : droits sociaux, administratifs et droits de
séjour.</p>
                                <p>Depuis de longues années, notre Service Social Général a développé
une expertise en matière de droit des étrangers, c’est pourquoi
nous sommes consultés principalement par un public d’origine
allochtone. Nous soutenons les intéressé.e.s, en matière, entre
autres d’asile, de regroupement familial, de demande de permis
unique, de régularisation de séjour ou d’accès à la nationalité …
Nous informons largement notre public sur la législation en vigueur
en termes d’accès au droit de séjour et aux droits et devoirs qui en
découlent.</p>
                               
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

            <TeamSSG/>
            <Footer/>
     
          
          </>
            );
        }
    
    export default Ssgeneral;
          
          
          
          
