import React, { Fragment } from 'react';
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import MissionSection from '../src/components/MissionSection'
import About from '../src/components/AboutSection'
import CaseSlide from '../src/components/CaseSlide'
import CounterSection from '../src/components/CounterSection'
import TeamSection from '../src/components/Team'
import WorldSection from '../src/components/World'
import BlogSection from '../src/components/BlogSection'
import Footer from '../src/components/Footer'
import Scrollbar from '../src/components/Scrollbar'
import Head from 'next/head'
import { BrowserRouter } from 'react-router-dom'

function Homepage() {
    return (
        <Fragment>
            <BrowserRouter>
            <Head>
                <title>SESO WEB</title>
            </Head>
            <Header />
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
            </BrowserRouter>
        </Fragment>
    )
};
export default Homepage;