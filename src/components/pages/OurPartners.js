import React, { Fragment } from 'react';
// import Header from '../Header'
import Hero from '../Hero';
// import CaseSlide from '../CaseSlide'
// import PartnersSection from '../PartnersSection'
import Footer from '../Footer'
import Scrollbar from '../Scrollbar'
import PartnersSection from '../PartnersSection';
// import BlogSection from '../BlogSection';
// import Head from 'next/head'
// import { BrowserRouter } from 'react-router-dom'

function OurPartners() {

    return (
        <Fragment>
            <Hero />
            <PartnersSection subclass={'section-padding'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default OurPartners;