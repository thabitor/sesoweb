import React, { Fragment } from "react";
import PageTitle from "../Pagetitle";
import Footer from "../Footer";
import Scrollbar from "../Scrollbar";
import Location from "../Location";
import { useTranslation } from "react-i18next";
import Contactform from "../Contactform";

function Contactpage() {
  const { t } = useTranslation();
  return (
    <Fragment>
      <PageTitle
        pageTitle={t("main.header.navItems.Contact")}
        pagesub={"Contact"}
      />
      <div className="topbottom-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <Location />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <Contactform />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
}

export default Contactpage;
