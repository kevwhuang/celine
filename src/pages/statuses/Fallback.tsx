import React from 'react';
import { Helmet } from 'react-helmet-async';

import '../../styles/statuses/Fallback.scss';

function Fallback(): React.ReactElement {
    return (
        <main id="fallback">
            <Helmet>
                <title>Fallback</title>
            </Helmet>
            <section className="fallback">
                <div className="fallback__header">
                    <h1>Fallback</h1>
                </div>
            </section>
        </main>
    );
}

export default Fallback;
