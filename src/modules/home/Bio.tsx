import React from 'react';

import CTAAnchor from '../../components/CTAAnchor';
import Observer from '../../components/Observer';

import image from '../../assets/images/home-bio.webp';
import texts from '../../assets/texts/texts.json';

import '../../styles/modules/home/Bio.scss';

function Bio(): React.ReactElement {
    return (
        <section className="bio">
            <Observer className="bio--container">
                <div className="bio__header">
                    <h2>Meet the Artist</h2>
                </div>

                <div className="bio__text">
                    <p>{texts.homeBio1}</p>
                    <p>{texts.homeBio2}</p>
                </div>

                <div className="bio__cta">
                    <CTAAnchor href="bio" text={texts.homeBioCTA} />
                </div>
            </Observer>

            <Observer className="bio__image">
                <img alt="Celine" loading="lazy" src={image} />
            </Observer>
        </section>
    );
}

export default Bio;
