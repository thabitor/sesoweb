import React, {Fragment} from 'react';
import Header from '../Header'
import PageTitle from '../Pagetitle'
import VedioCta from '../Vediocta'
import MissionSection from '../MissionSection'
import About from '../AboutSection'
import CaseSlide from '../CaseSlide'
import PartnersSection from '../PartnersSection'
import TeamSection from '../Team'
import Footer from '../Footer'
import Scrollbar from '../Scrollbar'

function AboutUs() {
    return(
        <Fragment>
            <PageTitle pageTitle={'Qui sommes-nous?'} pagesub={'About'}/> 
            <VedioCta/>
            <MissionSection subclass={'section-padding'}/>
            <About/>
            <PartnersSection/>
            <TeamSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutUs;