import React from 'react';

import CTAAnchor from '../../components/CTAAnchor';
import Observer from '../../components/Observer';

import image from '../../assets/images/brows_about.webp';
import texts from '../../assets/texts/texts.json';

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
                <img alt="Brows comparison" loading="lazy" src={image} />
            </Observer>
        </section>
    );
}

export default About;
