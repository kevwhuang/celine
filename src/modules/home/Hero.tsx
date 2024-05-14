import React from 'react';

import IconArrowRight from '../../components/icons/IconArrowRight';
import texts from '../../assets/texts.json';
import '../../styles/modules/home/Hero.scss';

function Hero(): React.ReactElement {
    return (
        <section className="hero">
            <div className="hero--container">
                <div className="hero__location">
                    <h5>San Diego, CA</h5>
                </div>
                <div className="hero__header">
                    <h1>Permanent Makeup for Brows and Lips</h1>
                </div>
                <div className="hero__text">
                    <p>{texts.hero}</p>
                </div>
                <div className="hero__cta">
                    <a className="cta" href="https://celinesbeautystudio.square.site">
                        <span>Schedule a Free Consultation</span>
                        <IconArrowRight />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
