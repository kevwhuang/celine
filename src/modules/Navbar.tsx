import React from 'react';
import { Link } from 'react-router-dom';

import IconArrowDown from '../components/icons/IconArrowDown';
import logo from '../assets/logo.png';
import '../styles/modules/Navbar.scss';

function Menu1(): React.ReactElement {
    return (
        <div>
            <Link to="brows">Brows</Link>
            <Link to="lips">Lips</Link>
            <Link to="skin">Skin</Link>
            <Link to="pricing">Pricing</Link>
        </div>
    );
}

function Menu2(): React.ReactElement {
    return (
        <div>
            <Link to="brows">Brows</Link>
            <Link to="lips">Lips</Link>
            <Link to="skin">Skin</Link>
            <Link to="pricing">Pricing</Link>
        </div>
    );
}

function Navbar(): React.ReactElement {
    function toggleMenus(state1: boolean, state2: boolean): void {
        setOpenMenu1(state1);
        setOpenMenu2(state2);
    }

    const [openMenu1, setOpenMenu1] = React.useState(false);
    const [openMenu2, setOpenMenu2] = React.useState(false);

    return (
        <nav className="navbar" onMouseLeave={() => toggleMenus(false, false)}>
            <div className="navbar__logo" onMouseEnter={() => toggleMenus(false, false)}>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="navbar__pages">
                <div className="navbar__pages--menu1">
                    <a className="pointer" onMouseEnter={() => toggleMenus(true, false)}>
                        Services & Pricing
                        <IconArrowDown />
                    </a>
                    {openMenu1 && <Menu1 />}
                </div>
                <Link to="portfolio" onMouseEnter={() => toggleMenus(false, false)}>
                    Portfolio
                </Link>
                <div className="navbar__pages--menu2">
                    <a className="pointer" onMouseEnter={() => toggleMenus(false, true)}>
                        Getting Ready
                        <IconArrowDown />
                    </a>
                    {openMenu2 && <Menu2 />}
                </div>
                <Link to="aftercare" onMouseEnter={() => toggleMenus(false, false)}>
                    Aftercare
                </Link>
                <Link to="bio" onMouseEnter={() => toggleMenus(false, false)}>
                    Artist Bio
                </Link>
            </div>
            <div className="navbar__cta" onMouseEnter={() => toggleMenus(false, false)}>
                <button>
                    <a href="https://celinesbeautystudio.square.site">
                        Book A Service
                    </a>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
