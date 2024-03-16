import React, {Fragment} from 'react';
import PageTitle from '../Pagetitle'
import AboutSection from '../AboutSection'
import Footer from '../Footer'
import Scrollbar from '../Scrollbar'
import Timeline from '../Timeline';
import AllTeamSection from '../AllTeamSection';
import { useTranslation } from 'react-i18next';
import AboutPublic from '../AboutPublic';

function AboutUs() {

    const { t } = useTranslation();    
    
    return(
        <Fragment>
            <PageTitle pageTitle={t('main.header.navItems.AboutUs')} pagesub={'About'}/> 
            <AboutSection buttonClass={'hidden'} subclass={'grey-bg'}/>
            {/* <AboutPublic buttonClass={'hidden'} subclass={'white-bg'}/> */}
            <Timeline />
            <AllTeamSection subclass={'grey-bg'} />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutUs;