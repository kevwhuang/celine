import React from 'react';
import { Helmet } from 'react-helmet-async';

import '../../styles/statuses/Error.scss';

function Error(): React.ReactElement {
    scroll(0, 0);

    return (
        <main id="error">
            <Helmet>
                <title>Error</title>
            </Helmet>
            <section className="error">
                <div className="error__header">
                    <h1>Error</h1>
                </div>
            </section>
        </main>
    );
}

export default Error;
