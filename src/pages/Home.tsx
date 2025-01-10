import React from 'react';

import Bio from '../modules/home/Bio';
import Clients from '../modules/home/Clients';
import Hero from '../modules/home/Hero';
import Portfolio from '../modules/home/Portfolio';
import Readiness from '../modules/home/Readiness';
import Services from '../modules/home/Services';
import Studio from '../modules/home/Studio';
import Testimonials from '../modules/home/Testimonials';

import '../styles/pages/Home.scss';

function Home(): React.ReactElement {
    scroll(0, 0);

    return (
        <main id="home">
            <title>Celine's Beauty Studio</title>
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
