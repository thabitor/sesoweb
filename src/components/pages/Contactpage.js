import React, { Fragment } from 'react';
import PageTitle from "../Pagetitle";
import Footer from "../Footer";
import Scrollbar from "../Scrollbar";
import Location from '../Location';
import { useTranslation } from "react-i18next";

function Contactpage() {

    const { t } = useTranslation();
    return (

        <Fragment>
            <PageTitle pageTitle={t('main.header.navItems.Contact')} pagesub={'Contact'}/>
            <Location /> 
            <Footer />
            <Scrollbar />
        </Fragment>

    )
}

export default Contactpage;
