import React from 'react';
import { Helmet } from 'react-helmet-async';

function Policy(): React.ReactElement {
    scroll(0, 0);

    return (
        <main id="policy">
            <Helmet>
                <title>Policy | Celine's Beauty Studio</title>
            </Helmet>
        </main>
    );
}

export default Policy;
