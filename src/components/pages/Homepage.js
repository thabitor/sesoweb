import React, { Fragment } from 'react';
// import Header from '../Header'
import Hero from '../Hero'
import MissionSection from '../MissionSection'
import AboutSection from '../AboutSection'
// import CaseSlide from '../CaseSlide'
// import PartnersSection from '../PartnersSection'
import Footer from '../Footer'
import Scrollbar from '../Scrollbar'
import PartnersSection from '../PartnersSection';
// import BlogSection from '../BlogSection';
// import Head from 'next/head'
// import { BrowserRouter } from 'react-router-dom'

function Homepage() {

    return (
        <Fragment>
            <Hero />
            <MissionSection subclass={'section-padding'} />
            <AboutSection buttonClass='btns'/>
            <PartnersSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default Homepage;