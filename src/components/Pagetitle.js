

import { useState } from 'react';

function PageTitle (props) {
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        if (!props.photoCredit) {
            return;
        }

        const rect = event.currentTarget.getBoundingClientRect();
        setTooltipPosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        });
    };

    return(
        <div
            className= {`wpo-breadcumb-area ${props.pageTitlebg}`}
            onMouseMove={handleMouseMove}
            style={{
                '--credit-x': `${tooltipPosition.x}px`,
                '--credit-y': `${tooltipPosition.y}px`,
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{props.pageTitle}</h2>
                            {/* <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><span>{props.pagesub}</span></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
            {props.photoCredit && (
                <div className="page-title-credit">
                    Photo: <a href={props.photoCredit.authorUrl} target="_blank" rel="noreferrer">{props.photoCredit.author}</a> /{' '}
                    <a href="https://unsplash.com/?utm_source=sesoweb&utm_medium=referral" target="_blank" rel="noreferrer">
                        Unsplash
                    </a>
                </div>
            )}
        </div>
    )
}

export default PageTitle;
