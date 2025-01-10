import React from 'react';

import '../styles/pages/Error.scss';

function Error(): React.ReactElement {
    scroll(0, 0);

    return (
        <main id="error">
            <title>Error</title>

            <section className="error">
                <div className="error__header">
                    <h1>Error</h1>
                </div>

            </section>
        </main>
    );
}

export default Error;
