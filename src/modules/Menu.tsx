import React from 'react';

import useZustand from '../hooks/useZustand';

import '../styles/modules/Menu.scss';

function Menu(): React.ReactElement {
    const isHamburger = useZustand(s => s.isHamburger);
    const setIsHamburger = useZustand(s => s.setIsHamburger);

    return (
        <section className="menu" hidden={!isHamburger} onClick={setIsHamburger} />
    );
}

export default Menu;
