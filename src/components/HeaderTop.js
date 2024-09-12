import React from "react";
import { useTranslation } from "react-i18next";
import classNames from 'classnames';
// import cookies from 'js-cookie'

function HeaderTop() {
  
  const locales = [
    {
      code: 'fr',
      name: 'Français'
    },
    {
      code: 'en',
      name: 'English'
    }
  ];
  
  const { i18n } = useTranslation();
  const currentLanguageCode = localStorage.i18nextLng || 'fr'
  const currentLanguageName = locales.find((l) => l.code === currentLanguageCode).name

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
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                 
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {currentLanguageName}
                </button>
                <ul className="dropdown-menu" >
              {locales.map(({ code, name }) => (
                <li key={code}>
                  <button
                    
                    className={classNames('dropdown-item', {
                      disabled: currentLanguageCode === code,
                    })}
                    onClick={() => {
                      i18n.changeLanguage(code)
                    }}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
