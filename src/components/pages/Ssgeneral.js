import React from 'react';
import { useTranslation } from "react-i18next";
import TeamSSG from '../TeamSSG';
import Footer from '../Footer';
import ServiceImage from '../ServiceImage';

const permanences = [
    {
        time: '09h00 -> 12h00',
        slots: [
            null,
            { name: 'Sandra', languages: ['FR', 'NL', 'EN'] },
            null,
            { name: 'Nicolas', languages: ['ES', 'FR'] },
            { name: 'Giuliana', languages: ['ES', 'FR'] },
        ],
    },
    {
        time: '12h00 -> 14h00',
        slots: [null, null, null, null, null],
    },
    {
        time: '14h00 -> 17h00',
        slots: [
            null,
            { name: 'Gabriel', languages: ['ES', 'FR'] },
            null,
            null,
            { name: 'Lilian', languages: ['ES', 'FR'] },
        ],
    },
];

const languageFlags = {
    FR: '🇫🇷',
    NL: '🇳🇱',
    EN: '🇬🇧',
    ES: '🇪🇸',
};

function LanguageBadges({ languages }) {
    const { t } = useTranslation();

    if (!languages.length) {
        return null;
    }

    return (
        <div className="permanence-languages">
            {languages.map((language) => (
                <span
                    className="language-flag"
                    key={language}
                    title={t(`Permanences.languages.${language}`)}
                    aria-label={t(`Permanences.languages.${language}`)}
                >
                    <span aria-hidden="true">{languageFlags[language]}</span>
                    <span>{language}</span>
                </span>
            ))}
        </div>
    );
}

function PermanencesSection() {
    const { t } = useTranslation();
    const days = t('Permanences.days', { returnObjects: true });

    return (
        <section className="ssg-permanences section-padding">
            <div className="container">
                <div className="wpo-section-title">
                    <span>{t('Permanences.kicker')}</span>
                    <h2>{t('Permanences.title')}</h2>
                </div>
                <div className="permanence-table-wrap">
                    <table className="permanence-table">
                        <thead>
                            <tr>
                                <th>{t('Permanences.schedule')}</th>
                                {days.map((day) => (
                                    <th key={day}>{day}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {permanences.map((row) => (
                                <tr key={row.time}>
                                    <th scope="row">{row.time}</th>
                                    {row.slots.map((slot, index) => (
                                        <td key={`${row.time}-${days[index]}`} data-label={days[index]}>
                                            {slot ? (
                                                <div className="permanence-person">
                                                    <strong>{slot.name}</strong>
                                                    <LanguageBadges languages={slot.languages} />
                                                </div>
                                            ) : (
                                                <span className="permanence-empty">-</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="permanence-note">{t('Permanences.note')}</p>
            </div>
        </section>
    );
}

function Ssgeneral() {
    const { t } = useTranslation();
    const paragraphs = t('ServiceDetails.ssg.paragraphs', { returnObjects: true });

    return (
        <>
            <div className="wpo-servicepage-area white-bg service-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="wpo-about-text">
                                <div className="wpo-service-title">
                                    <h2>{t('ServiceDetails.ssg.title')}</h2>
                                </div>
                                {paragraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 inservicepage-section">
                            <ServiceImage serviceKey="ssg" src="images/gallery/ssg.jpg" maskClass="mask1" extraClass="top-60" />
                        </div>
                    </div>
                </div>
            </div>

            <PermanencesSection />
            <TeamSSG />
            <Footer />
        </>
    );
}

export default Ssgeneral;
