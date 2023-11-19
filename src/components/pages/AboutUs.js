import React, {Fragment} from 'react';
import PageTitle from '../Pagetitle'
import AboutSection from '../AboutSection'
import Footer from '../Footer'
import Scrollbar from '../Scrollbar'
import Timeline from '../Timeline';
import Team from '../Team';

function AboutUs() {
    return(
        <Fragment>
            <PageTitle pageTitle={'Qui sommes-nous?'} pagesub={'About'}/> 
            <AboutSection buttonClass={'hidden'} subclass={'grey-bg'}/>
            <Timeline />
            <Team subclass={'grey-bg'} />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutUs;