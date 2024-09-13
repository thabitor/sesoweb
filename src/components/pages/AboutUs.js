import React, {Fragment} from 'react';
import PageTitle from '../Pagetitle'
import AboutSection from '../AboutSection'
import Footer from '../Footer'
import Scrollbar from '../Scrollbar'
import Timeline from '../Timeline';
import { useTranslation } from 'react-i18next';


function AboutUs() {

    const { t } = useTranslation();    
    
    return(
        <Fragment>
            <PageTitle pageTitle={t('main.header.navItems.AboutUs')} pagesub={'About'} pageTitlebg={'bg-team'}/> 
            <AboutSection buttonClass={'hidden'} subclass={'grey-bg'}/>
            <Timeline />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutUs;