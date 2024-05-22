import React from 'react';

import useZustand from '../hooks/useZustand';
import '../styles/modules/Menu.scss';

function Menu(): React.ReactElement {
    const openHamburger = useZustand(s => s.openHamburger);
    const setOpenHamburger = useZustand(s => s.setOpenHamburger);

    if (!openHamburger) return <></>;
    return (
        <section className="menu" onClick={setOpenHamburger}>
        </section>
    );
}

export default Menu;
