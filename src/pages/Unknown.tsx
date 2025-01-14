import React from 'react';

import '../styles/pages/Unknown.scss';

function Unknown(): React.ReactElement {
    scroll(0, 0);

    return (
        <main id="unknown">
            <title>Unknown</title>

            <section className="unknown">
                <div className="unknown__header">
                    <h1>Unknown</h1>
                </div>
            </section>
        </main>
    );
}

export default Unknown;
