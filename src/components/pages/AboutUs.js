import React, {Fragment} from 'react';

import Header from '../Header'
import PageTitle from '../Pagetitle'
import VedioCta from '../Vediocta'
import MissionSection from '../MissionSection'
import AboutSection from '../AboutSection'
import CaseSlide from '../CaseSlide'
import PartnersSection from '../PartnersSection'
import TeamSection from '../Team'
import Footer from '../Footer'
import Scrollbar from '../Scrollbar'
import Timeline from '../Timeline';
import AboutPublic from '../AboutPublic';

function AboutUs() {
    return(
        <Fragment>
            <PageTitle pageTitle={'Qui sommes-nous?'} pagesub={'About'}/> 
            <AboutSection buttonClass={'hidden'}/>
            <Timeline />
            <AboutPublic />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutUs;