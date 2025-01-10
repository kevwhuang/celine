import React from 'react';

import About from '../modules/brows/About';
import Actions from '../modules/brows/Actions';
import Experience from '../modules/brows/Experience';
import Services from '../modules/brows/Services';
import Techniques from '../modules/brows/Techniques';

import '../styles/pages/Brows.scss';

function Brows(): React.ReactElement {
    scroll(0, 0);

    return (
        <main id="brows">
            <title>Brows | Celine's Beauty Studio</title>
            <About />
            <Services />
            <Techniques />
            <Experience />
            <Actions />
        </main>
    );
}

export default Brows;
