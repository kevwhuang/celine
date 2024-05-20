import React from 'react';
import { Helmet } from 'react-helmet-async';

import Bio from '../modules/home/Bio';
import Clients from '../modules/home/Clients';
import Hero from '../modules/home/Hero';
import Portfolio from '../modules/home/Portfolio';
import Readiness from '../modules/home/Readiness';
import Services from '../modules/home/Services';
import Studio from '../modules/home/Studio';
import Testimonials from '../modules/home/Testimonials';

function Home(): React.ReactElement {
    return (
        <main id="home">
            <Helmet>
                <title>Celine's Beauty Studio</title>
            </Helmet>
            <Hero />
            <Bio />
            <Services />
            <Readiness />
            <Portfolio />
            <Testimonials />
            <Clients />
            <Studio />
        </main>
    );
}

export default Home;
