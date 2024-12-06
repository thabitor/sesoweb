import React, { Fragment } from 'react';
// import Header from '../Header'
// import Hero from '../Hero';
// import CaseSlide from '../CaseSlide'
// import PartnersSection from '../PartnersSection'
import Footer from '../Footer'
import Scrollbar from '../Scrollbar'
import PartnersSection from '../PartnersSection';
import CoupolesSection from '../CoupolesSection';
import ReseauxSection from '../ReseauxSection';
import SponsorsSection from '../SponsorsSection';
import PageTitle from '../Pagetitle';
import { useTranslation } from "react-i18next";
// import BlogSection from '../BlogSection';
// import Head from 'next/head'
// import { BrowserRouter } from 'react-router-dom'

function OurPartners() {

    const { t } = useTranslation();

    return (
        <Fragment>
            <PageTitle pageTitle={t('main.header.navItems.OurPartners')} pageTitlebg ={'bg-partners'} pagesub={'Partners'}/> 
            <ReseauxSection className={'white-bg'}/>
            <SponsorsSection className={'white-bg'}/>
            <CoupolesSection className={'white-bg'} />
            <PartnersSection className={'white-bg'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default OurPartners;