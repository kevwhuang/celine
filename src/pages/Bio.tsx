import React from 'react';
import { Helmet } from 'react-helmet-async';

function Bio(): React.ReactElement {
    return (
        <main id="bio">
            <Helmet>
                <title>Bio | Celine's Beauty Studio</title>
            </Helmet>
        </main>
    );
}

export default Bio;
