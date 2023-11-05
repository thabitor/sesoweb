import React, { Fragment } from 'react';
import Header from '../Header'
import Hero from '../Hero'
import MissionSection from '../MissionSection'
import About from '../AboutSection'
import CaseSlide from '../CaseSlide'
import CounterSection from '../CounterSection'
import TeamSection from '../Team'
import WorldSection from '../World'
import BlogSection from '../BlogSection'
import Footer from '../Footer'
import Scrollbar from '../Scrollbar'
// import Head from 'next/head'
// import { BrowserRouter } from 'react-router-dom'

function Homepage() {
    return (
        <Fragment>
            
            
            <Hero />
            <MissionSection subclass={'section-padding'} />
            <About />
            <CaseSlide />
            <CounterSection countclass={'wpo-counter-style-2'} />
            <TeamSection />
            <WorldSection worldclass={'wpo-world-area-2'} />
            <BlogSection />
            <Footer />
            <Scrollbar />
        
        </Fragment>
    )
};
export default Homepage;