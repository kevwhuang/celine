import React from 'react';
import { Helmet } from 'react-helmet-async';

import '../../styles/statuses/Unknown.scss';

function Unknown(): React.ReactElement {
    scroll(0, 0);

    return (
        <main id="unknown">
            <Helmet>
                <title>Unknown</title>
            </Helmet>
            <section className="unknown">
                <div className="unknown__header">
                    <h1>Unknown</h1>
                </div>
            </section>
        </main>
    );
}

export default Unknown;
