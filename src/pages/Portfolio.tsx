import React from 'react';
import { Helmet } from 'react-helmet-async';

function Portfolio(): React.ReactElement {
    scroll(0, 0);

    return (
        <main id="portfolio">
            <Helmet>
                <title>Portfolio | Celine's Beauty Studio</title>
            </Helmet>
        </main>
    );
}

export default Portfolio;
