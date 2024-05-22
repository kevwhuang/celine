import React from 'react';
import { Helmet } from 'react-helmet-async';

function Pricing(): React.ReactElement {
    scroll(0, 0);

    return (
        <main id="pricing">
            <Helmet>
                <title>Pricing | Celine's Beauty Studio</title>
            </Helmet>
        </main>
    );
}

export default Pricing;
