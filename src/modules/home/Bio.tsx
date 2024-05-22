import React from 'react';

import CTAAnchor from '../../components/CTAAnchor';
import Observer from '../../components/Observer';
import celine from '../../assets/images/home-celine.webp';
import texts from '../../assets/texts.json';
import '../../styles/modules/home/Bio.scss';

function Bio(): React.ReactElement {
    return (
        <section className="bio">
            <Observer className="bio--container">
                <div className="bio__header">
                    <h2>Meet the Artist</h2>
                </div>
                <div className="bio__text">
                    <p>{texts.bio1}</p>
                    <p>{texts.bio2}</p>
                </div>
                <div className="bio__cta">
                    <CTAAnchor href="bio" text={texts.bioCTA} />
                </div>
            </Observer>
            <Observer className="bio__image">
                <img src={celine} alt="Celine" loading="lazy" />
            </Observer>
        </section>
    );
}

export default Bio;
