import React from 'react';
import { Helmet } from 'react-helmet-async';

function Aftercare(): React.ReactElement {
    scroll(0, 0);

    return (
        <main id="aftercare">
            <Helmet>
                <title>Aftercare | Celine's Beauty Studio</title>
            </Helmet>
        </main>
    );
}

export default Aftercare;
