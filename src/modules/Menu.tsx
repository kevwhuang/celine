import React from 'react';

import useZustand from '../hooks/useZustand';

import '../styles/modules/Menu.scss';

function Menu(): React.ReactElement {
    const hamburger = useZustand(s => s.hamburger);
    const setHamburger = useZustand(s => s.setHamburger);

    if (!hamburger) return <></>;
    return (
        <section className="menu" onClick={setHamburger} />
    );
}

export default Menu;
