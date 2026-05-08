import React from 'react';
import TeamSSG from '../TeamSSG';
import Footer from '../Footer';

const languageLabels = {
    FR: 'Français',
    NL: 'Néerlandais',
    EN: 'Anglais',
    ES: 'Espagnol',
};

const languageFlags = {
    FR: '🇫🇷',
    NL: '🇳🇱',
    EN: '🇬🇧',
    ES: '🇪🇸',
};

const days = [
    'LUNDI MAANDAG LUNES MONDAY',
    'MARDI DINSDAG MARTES TUESDAY',
    'MERCREDI WOENSDAG MIERCOLES WEDNESDAY',
    'JEUDI DONDERDAG JUEVES THURSDAY',
    'VENDREDI VRIJDAG VIERNES FRIDAY',
];

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

function LanguageBadges({ languages }) {
    if (!languages.length) {
        return null;
    }

    return (
        <div className="permanence-languages">
            {languages.map((language) => (
                <span
                    className="language-flag"
                    key={language}
                    title={languageLabels[language]}
                    aria-label={languageLabels[language]}
                >
                    <span aria-hidden="true">{languageFlags[language]}</span>
                    <span>{language}</span>
                </span>
            ))}
        </div>
    );
}

function PermanencesSection() {
    return (
        <section className="ssg-permanences section-padding">
            <div className="container">
                <div className="wpo-section-title">
                    <span>Accueil SSG</span>
                    <h2>Permanences</h2>
                </div>
                <div className="permanence-table-wrap">
                    <table className="permanence-table">
                        <thead>
                            <tr>
                                <th>Horaire</th>
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
                <p className="permanence-note">
                    Les langues sont indiquées selon les informations disponibles dans le tableau des permanences.
                </p>
            </div>
        </section>
    );
}

function Ssgeneral() {
    return (
        <>
            <div className="wpo-servicepage-area white-bg service-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="wpo-about-text">
                                <div className="wpo-service-title">
                                    <h2>Service Social Général</h2>
                                </div>
                                <p>
                                    Le Service Social des Solidarités (SESO) a pour but l'aide individualisée et personnalisée à toute personne et, en particulier, aux personnes en migration, dans le respect de l'autonomie de la personne, des droits fondamentaux, du droit à la vie familiale et à l'intimité. Nous promouvons la tolérance, le respect des droits, la lutte contre tout type de discrimination, le libre examen, la justice sociale et l'émancipation.
                                </p>
                                <p>
                                    Notre Service Social Général (SSG) offre une aide sociale généraliste de première ligne aux personnes en difficulté. Nous assurons un premier accueil lors d'entretiens individuels ou de nos permanences en français, néerlandais, anglais ou espagnol. En cas de besoin, nous travaillons également avec des interprètes. Nous analysons la situation de la personne, mettons en place un suivi social et administratif. Si nécessaire, nous orientons les personnes vers un service spécialisé en fonction de la problématique (logement, médiation de dettes, avocats, ...). Notre accompagnement vise à promouvoir l'accès de notre public à ses droits fondamentaux : droits sociaux, administratifs et droits de séjour.
                                </p>
                                <p>
                                    Depuis de longues années, notre Service Social Général a développé une expertise en matière de droit des étrangers, c'est pourquoi nous sommes consultés principalement par un public d'origine allochtone. Nous soutenons les intéressé.e.s, en matière, entre autres d'asile, de regroupement familial, de demande de permis unique, de régularisation de séjour ou d'accès à la nationalité. Nous informons largement notre public sur la législation en vigueur en termes d'accès au droit de séjour et aux droits et devoirs qui en découlent.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 inservicepage-section">
                            <div className="wpo-service-img mask1 top-120">
                                <img src="images/gallery/ssg.jpg" alt="" />
                            </div>
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
