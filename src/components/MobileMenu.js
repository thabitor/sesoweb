import React, { useState } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";

function MobileMenu() {
    const { t } = useTranslation();
    const [isMenuShow, setIsMenuShow] = useState(false);
    const [isOpen, setIsOpen] = useState(0);

    const menuHandler = () => {
        setIsMenuShow((isShown) => !isShown);
    };

    const toggleOpen = (id) => () => {
        setIsOpen((openId) => id === openId ? 0 : id);
    };

    const menus = [
        {
            id: 1,
            title: 'SESO',
            submenu: [
                { id: 11, title: t('main.header.navItems.AboutUs'), link: '/aboutus', hash: true },
                { id: 12, title: t('main.header.navItems.OurHistory'), link: '/aboutus#historique', hash: true },
                { id: 13, title: t('main.header.navItems.OurTeam'), link: '/ourteam' },
            ],
        },
        {
            id: 2,
            title: t('main.header.navItems.OurServices'),
            submenu: [
                { id: 21, title: t('Services.SSG'), link: '/ssg' },
                { id: 22, title: t('Services.DPI'), link: '/sdpi' },
                { id: 23, title: t('Services.MENA'), link: '/smena' },
                { id: 24, title: t('Services.REAB'), link: '/sreab' },
            ],
        },
        { id: 3, title: t('main.header.navItems.OurPartners'), link: '/ourpartners' },
        { id: 4, title: t('main.header.navItems.Publications'), link: '/publications' },
        { id: 5, title: t('main.header.navItems.News'), link: '/actualites' },
        { id: 6, title: t('main.header.navItems.Contact'), link: '/contact' },
    ];

    const MenuLink = ({ item }) => {
        const Component = item.hash ? HashLink : Link;
        return <Component to={item.link} onClick={menuHandler}>{item.title}</Component>;
    };

    return (
        <div>
            <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                <ul className="responsivemenu">
                    {menus.map((item) => (
                        <li key={item.id}>
                            {item.submenu ? (
                                <p onClick={toggleOpen(item.id)}>
                                    {item.title}
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                </p>
                            ) : (
                                <MenuLink item={item} />
                            )}
                            {item.submenu && (
                                <Collapse isOpen={item.id === isOpen}>
                                    <Card>
                                        <CardBody>
                                            <ul>
                                                {item.submenu.map((submenu) => (
                                                    <li key={submenu.id}>
                                                        <MenuLink item={submenu} />
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardBody>
                                    </Card>
                                </Collapse>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="showmenu" onClick={menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>
        </div>
    );
}

export default MobileMenu;
