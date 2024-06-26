import React from 'react';

import CTAAnchor from '../../components/CTAAnchor';
import Observer from '../../components/Observer';
import image from '../../assets/images/brows-about.webp';
import texts from '../../assets/texts.json';
import '../../styles/modules/brows/About.scss';

function About(): React.ReactElement {
    return (
        <section className="about">
            <Observer className="about--container">
                <div className="about__header">
                    <h2>Brows</h2>
                </div>
                <div className="about__text">
                    <p>{texts.browsAbout1}</p>
                    <p>{texts.browsAbout2}</p>
                </div>
                <div className="about__cta">
                    <CTAAnchor href="../bio#contact" text={texts.browsAboutCTA} />
                </div>
            </Observer>
            <Observer className="about__image">
                <img src={image} alt="Brows comparison" loading="lazy" />
            </Observer>
        </section>
    );
}

export default About;
