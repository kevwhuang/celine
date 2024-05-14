import React from 'react';
import { Helmet } from 'react-helmet-async';

import Hero from '../modules/home/Hero';

function Home(): React.ReactElement {
    return (
        <main id="home">
            <Helmet>
                <title>Celine's Beauty Studio</title>
            </Helmet>
            <Hero />
        </main>
    );
}

export default Home;
