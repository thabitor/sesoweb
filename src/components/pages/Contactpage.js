import React, { Fragment } from "react";
import PageTitle from "../Pagetitle";
import Footer from "../Footer";
import Scrollbar from "../Scrollbar";
import Location from "../Location";
import { useTranslation } from "react-i18next";
import Contactform from "../Contactform";
import contactContent from "../../content/contact.json";

function Contactpage() {
  const { t } = useTranslation();
  return (
    <Fragment>
      <PageTitle
        pageTitle={t("main.header.navItems.Contact")}
        pageTitlebg={"bg-contact"}
        pagesub={"Contact"}
      />
      <div className="contact-page-refresh section-padding">
        <div className="container">
          <div className="contact-intro-panel">
            <span>{t("Contact.kicker")}</span>
            <h2>{t("Contact.title")}</h2>
            <p>{t("Contact.intro")}</p>
          </div>
          <div className="row align-items-stretch">
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="contact-details-panel">
                <div className="contact-detail-item">
                  <i className="fi flaticon-pin"></i>
                  <div>
                    <h3>{t("Contact.addressLabel")}</h3>
                    <p>{contactContent.address}</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <i className="fi flaticon-call"></i>
                  <div>
                    <h3>{t("Contact.phoneLabel")}</h3>
                    <p>{contactContent.phone}</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <i className="fi flaticon-envelope"></i>
                  <div>
                    <h3>{t("Contact.emailLabel")}</h3>
                    <p>{contactContent.email}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12">
              <Contactform />
            </div>
          </div>
          <Location />
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
}

export default Contactpage;
