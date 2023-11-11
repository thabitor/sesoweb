import React from 'react'


function HeaderTop() {
    return (
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-call"></i>02 533 39 84</li>
                                <li><i className="fi flaticon-envelope"></i>info@seso.be</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="select-lang">
                            <div class="dropdown-container">
                                <select class="language-menu">
                                    <option value="fr">fr</option>
                                    <option value="nl">nl</option>
                                    <option value="en">en</option>
                                    <option value="es">es</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;