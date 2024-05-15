import React from 'react';

import CTAAnchor from '../../components/CTAAnchor';
import links from '../../assets/links.json';
import texts from '../../assets/texts.json';
import '../../styles/modules/home/Hero.scss';

function Hero(): React.ReactElement {
    return (
        <section className="hero">
            <div className="hero--container">
                <div className="hero__location">
                    <h5>{texts.heroLocation}</h5>
                </div>
                <div className="hero__header">
                    <h1>{texts.heroHeader}</h1>
                </div>
                <div className="hero__description">
                    <p>{texts.heroDescription}</p>
                </div>
                <div className="hero__cta">
                    <CTAAnchor href={links.bookings} text={texts.heroCTA} />
                </div>
            </div>
        </section>
    );
}

export default Hero;
