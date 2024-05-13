import React from 'react';
import { Helmet } from 'react-helmet-async';

import '../../styles/statuses/Unknown.scss';

function Unknown(): React.ReactElement {
    return (
        <main id="unknown">
            <Helmet>
                <title>Unknown</title>
            </Helmet>
        </main>
    );
}

export default Unknown;
