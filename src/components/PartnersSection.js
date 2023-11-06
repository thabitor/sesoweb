
import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom'

function PartnersSection() {


    return (
        <div className="wpo-case-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Nos partenaires</span>
                            <h2>Dans l'aide aux réfugiés</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='wpo-partners-area'>
            <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="wpo-partners-grids">
                                <div className='grid partners-item-box'>
                                    <Link to='/'>
                                        <img src='images/partners/logo_cire_rvb3.svg' />
                                    </Link>
                                </div>
                                <div className='grid partners-item-box'>
                                <Link to='/'>
                                        <img src='images/partners/logo_vlctwerk2.svg' />
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            
        </div>
    );
}


export default PartnersSection;

