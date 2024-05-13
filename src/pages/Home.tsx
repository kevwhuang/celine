import React from 'react';
import { Helmet } from 'react-helmet-async';

function Home(): React.ReactElement {
    return (
        <main id="home">
            <Helmet>
                <title>Celine's Beauty Studio</title>
            </Helmet>
        </main>
    );
}

export default Home;
