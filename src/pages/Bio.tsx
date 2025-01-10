import React from 'react';

import About from '../modules/bio/About';
import Contact from '../modules/bio/Contact';
import Credentials from '../modules/bio/Credentials';
import Hero from '../modules/bio/Hero';

import '../styles/pages/Bio.scss';

function Bio(): React.ReactElement {
    scroll(0, 0);

    return (
        <main id="bio">
            <title>Bio | Celine's Beauty Studio</title>
            <Hero />
            <About />
            <Credentials />
            <Contact />
        </main>
    );
}

export default Bio;
