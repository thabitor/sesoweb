import React, {Fragment} from 'react';
import { useTranslation } from "react-i18next";
import PageTitle from '../Pagetitle'
import ServicePieces from '../ServicePieces'
import Footer from '../Footer'
import Scrollbar from '../Scrollbar'


function Services() {
    const { t } = useTranslation();

    return(
        <Fragment>
            <PageTitle pageTitle={t('main.header.navItems.OurServices')} pageTitlebg={'bg-services'}/> 
            <ServicePieces />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default Services;
