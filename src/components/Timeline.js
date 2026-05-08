import React from "react";
import { useTranslation } from "react-i18next";
import historyContent from "../content/history.json";

function getLocalizedValue(value, language) {
    if (!value || typeof value !== 'object') {
        return value;
    }

    const normalizedLanguage = language?.split('-')[0] || 'fr';
    return value[normalizedLanguage] || value.fr || '';
}

function Timeline() {
    const { t, i18n } = useTranslation();
    const language = i18n.resolvedLanguage || i18n.language;

    return (
        <div className='wpo-mission-area section-padding white-bg history-section' id="historique">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>{getLocalizedValue(historyContent.kicker, language)}</span>
                            <h2>{t('main.header.navItems.OurHistory')}</h2>
                        </div>
                    </div>
                    <div className="timeline">
                        {historyContent.items.map((item, index) => (
                            <div className={`containerTimeline ${index % 2 === 0 ? 'left' : 'right'}`} key={item.year}>
                                <div className="date">{item.year}</div>
                                <i className={`icon fa ${item.icon}`}></i>
                                <div className="content">
                                    <h2>{getLocalizedValue(item.title, language)}</h2>
                                    <p>{getLocalizedValue(item.text, language)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline;
