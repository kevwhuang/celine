import React from 'react';
import { Helmet } from 'react-helmet-async';

function FAQ(): React.ReactElement {
    scroll(0, 0);

    return (
        <main id="faq">
            <Helmet>
                <title>FAQ | Celine's Beauty Studio</title>
            </Helmet>
        </main>
    );
}

export default FAQ;
