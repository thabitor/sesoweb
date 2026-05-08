import React from 'react';

function Scrollbar() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="col-lg-12">
            <div className="header-menu">
                <ul className="smoothscroll">
                    <li>
                        <button type="button" onClick={scrollToTop} aria-label="Retour en haut de page">
                            <i className="fa fa-arrow-up" aria-hidden="true" />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Scrollbar;
