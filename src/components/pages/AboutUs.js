import React, {Fragment} from 'react';
import PageTitle from '../Pagetitle'
import AboutSection from '../AboutSection'
import Footer from '../Footer'
import Scrollbar from '../Scrollbar'
import Timeline from '../Timeline';
import AboutPublic from '../AboutPublic';

function AboutUs() {
    return(
        <Fragment>
            <PageTitle pageTitle={'Qui sommes-nous?'} pagesub={'About'}/> 
            <AboutSection buttonClass={'hidden'} subclass={'grey-bg'}/>
            <Timeline />
            <AboutPublic />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutUs;