import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import classNames from 'classnames';

const locales = [
  {
    code: 'fr',
    name: 'Français'
  },
  {
    code: 'en',
    name: 'English'
  },
  {
    code: 'nl',
    name: 'Nederlands'
  },
  {
    code: 'es',
    name: 'Español'
  }
];

const languageAliases = {
  'fr-BE': 'fr',
  'fr-FR': 'fr',
  'en-US': 'en',
  'en-GB': 'en',
  'nl-BE': 'nl',
  'es-ES': 'es',
};

function normalizeLanguageCode(code) {
  if (!code) {
    return 'fr';
  }

  return languageAliases[code] || code.split('-')[0] || 'fr';
}

function getSavedLanguage() {
  try {
    return typeof window !== 'undefined' ? window.localStorage.getItem('i18nextLng') : null;
  } catch (error) {
    return null;
  }
}

function saveLanguage(code) {
  try {
    window.localStorage.setItem('i18nextLng', code);
  } catch (error) {
    // Ignore storage failures in strict privacy modes.
  }
}

function HeaderTop() {
  const { i18n } = useTranslation();
  const savedLanguage = getSavedLanguage();
  const currentLanguageCode = normalizeLanguageCode(i18n.resolvedLanguage || i18n.language || savedLanguage);
  const currentLanguage = locales.find((locale) => locale.code === currentLanguageCode) || locales[0];

  useEffect(() => {
    document.documentElement.lang = currentLanguage.code;
  }, [currentLanguage.code]);

  const handleLanguageChange = (code) => {
    if (code === currentLanguageCode) {
      return;
    }

    saveLanguage(code);
    i18n.changeLanguage(code);
  };

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
                  {currentLanguage.name}
                </button>
                <ul className="dropdown-menu">
                  {locales.map(({ code, name }) => (
                    <li key={code}>
                      <button
                        className={classNames('dropdown-item', {
                          disabled: currentLanguageCode === code,
                        })}
                        type="button"
                        aria-current={currentLanguageCode === code ? 'true' : undefined}
                        onClick={() => {
                          handleLanguageChange(code);
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
