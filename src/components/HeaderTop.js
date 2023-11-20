import React from "react";
import { useState } from "react";
import i18n from "../i18n";

const locales = {
  en: "en",
  fr: "fr",
  nl: "nl",
  es: "es",
};

function HeaderTop(props) {
  const getLang = i18n.language

  console.log(getLang)

  const [Lang, setLang] = useState(getLang);

  console.log(Lang);

  function onChange(e) {
    setLang(i18n.changeLanguage(e.target.value));
    
  }

  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col col-md-6 col-sm-12 col-12">
            <div className="contact-intro">
              <ul>
                <li>
                  <i className="fi flaticon-call"></i>02 533 39 84
                </li>
                <li>
                  <i className="fi flaticon-envelope"></i>info@seso.be
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-md-6 col-sm-12 col-12">
            <div className="select-lang">
              <div class="dropdown-container">
                <select class="language-menu" onChange={onChange}>
                  {Object.keys(locales).map((locale) => (
                    <option key={locale} value={locale}>
                      {locales[locale]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
