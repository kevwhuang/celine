import React from 'react';
import { Helmet } from 'react-helmet-async';

import About from '../modules/brows/About';
import Actions from '../modules/brows/Actions';
import Experience from '../modules/brows/Experience';
import Services from '../modules/brows/Services';
import Techniques from '../modules/brows/Techniques';

function Brows(): React.ReactElement {
    scroll(0, 0);

    return (
        <main id="brows">
            <Helmet>
                <title>Brows | Celine's Beauty Studio</title>
            </Helmet>
            <About />
            <Services />
            <Techniques />
            <Experience />
            <Actions />
        </main>
    );
}

export default Brows;
