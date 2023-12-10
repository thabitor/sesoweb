import React, {Fragment} from 'react';
import PageTitle from '../Pagetitle'
import Footer from '../Footer'
import Scrollbar from '../Scrollbar'
import TeamSSG from '../TeamSSG'
import TeamMENA from '../TeamMENA';
import TeamDir from '../TeamDir';
import TeamDPI from '../TeamDPI';
import TeamCON from '../TeamCON';
import { useTranslation } from 'react-i18next';

function OurTeam() {

    const { t } = useTranslation();

    return(
        <Fragment>
            <PageTitle pageTitle={t('main.header.navItems.OurTeam')} pagesub={'About'}/>
            <TeamCON subclass={'grey-bg'} />
            <TeamDir subclass={'white-bg'} />
            <TeamSSG subclass={'grey-bg'} />
            <TeamMENA subclass={'white-bg'} />
            <TeamDPI subclass={'grey-bg'} />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default OurTeam;