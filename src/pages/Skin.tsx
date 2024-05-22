import React from 'react';
import { Helmet } from 'react-helmet-async';

function Skin(): React.ReactElement {
    scroll(0, 0);

    return (
        <main id="skin">
            <Helmet>
                <title>Skin | Celine's Beauty Studio</title>
            </Helmet>
        </main>
    );
}

export default Skin;
