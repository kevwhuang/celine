import React from 'react';

import CTAAnchor from '../../components/CTAAnchor';

import texts from '../../assets/texts/texts.json';

import '../../styles/modules/home/Hero.scss';

function Hero(): React.ReactElement {
    return (
        <section className="hero">
            <div className="hero--container">
                <div className="hero__location">
                    <h5>{texts.homeHeroLocation}</h5>
                </div>

                <div className="hero__header">
                    <h1>{texts.homeHeroHeader}</h1>
                </div>

                <div className="hero__description">
                    <p>{texts.homeHeroDescription}</p>
                </div>

                <div className="hero__cta">
                    <CTAAnchor href="bio#contact" text={texts.homeHeroCTA} />
                </div>
            </div>
        </section>
    );
}

export default Hero;
