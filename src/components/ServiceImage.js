import { useState } from 'react';

const servicePhotoCredits = {
    ssg: {
        author: 'KOBU Agency',
        authorUrl: 'https://unsplash.com/@kobuagency?utm_source=sesoweb&utm_medium=referral',
    },
    dpi: {
        author: 'Brooke Cagle',
        authorUrl: 'https://unsplash.com/@brookecagle?utm_source=sesoweb&utm_medium=referral',
    },
    mena: {
        author: 'Mario Heller',
        authorUrl: 'https://unsplash.com/@marioheller?utm_source=sesoweb&utm_medium=referral',
    },
    reab: {
        author: 'Spencer Plouzek',
        authorUrl: 'https://unsplash.com/@theguccer2100?utm_source=sesoweb&utm_medium=referral',
    },
};

function ServiceImage({ serviceKey, src, alt = '', maskClass = 'mask1', extraClass = '' }) {
    const credit = servicePhotoCredits[serviceKey];
    const maskClasses = ['wpo-service-img', maskClass, extraClass].filter(Boolean).join(' ');
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setTooltipPosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        });
    };

    return (
        <figure
            className="service-image-frame"
            onMouseMove={handleMouseMove}
            style={{
                '--credit-x': `${tooltipPosition.x}px`,
                '--credit-y': `${tooltipPosition.y}px`,
            }}
        >
            <div className={maskClasses}>
                <img src={src} alt={alt} />
            </div>
            {credit && (
                <figcaption className="service-image-credit">
                    Photo: <a href={credit.authorUrl} target="_blank" rel="noreferrer">{credit.author}</a> /{' '}
                    <a href="https://unsplash.com/?utm_source=sesoweb&utm_medium=referral" target="_blank" rel="noreferrer">
                        Unsplash
                    </a>
                </figcaption>
            )}
        </figure>
    );
}

export default ServiceImage;
