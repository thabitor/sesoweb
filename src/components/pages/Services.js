import React, {Fragment} from 'react';
import PageTitle from '../Pagetitle'
import ServicePieces from '../ServicePieces'
import Footer from '../Footer'
import Scrollbar from '../Scrollbar'


function Services() {
    return(
        <Fragment>
            <PageTitle pageTitle={'Nos services'}/> 
            <ServicePieces />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default Services;