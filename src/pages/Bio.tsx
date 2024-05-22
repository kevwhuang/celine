import React from 'react';
import { Helmet } from 'react-helmet-async';

import About from '../modules/bio/About';
import Contact from '../modules/bio/Contact';
import Credentials from '../modules/bio/Credentials';
import Hero from '../modules/bio/Hero';

function Bio(): React.ReactElement {
    scroll(0, 0);

    return (
        <main id="bio">
            <Helmet>
                <title>Bio | Celine's Beauty Studio</title>
            </Helmet>
            <Hero />
            <About />
            <Credentials />
            <Contact />
        </main>
    );
}

export default Bio;
