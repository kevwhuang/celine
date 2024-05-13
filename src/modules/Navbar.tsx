import React from 'react';
import { Link } from 'react-router-dom';

import IconArrowDown from '../components/icons/IconArrowDown';
import logo from '../assets/logo.png';
import '../styles/modules/Navbar.scss';

function Navbar(): React.ReactElement {
    function handleReset() {
        setOpenMenu1(false);
        setOpenMenu2(false);
    }

    const [openMenu1, setOpenMenu1] = React.useState(false);
    const [openMenu2, setOpenMenu2] = React.useState(false);

    return (
        <nav className="navbar" onMouseLeave={handleReset}>
            <div className="navbar__logo" onMouseEnter={handleReset}>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="navbar__pages">
                <div className="navbar__pages--menu1">
                    <a
                        className="pointer"
                        onMouseEnter={() => { setOpenMenu1(true); setOpenMenu2(false); }}
                    >
                        Services & Pricing
                        <IconArrowDown />
                    </a>
                    {openMenu1 &&
                        <div>
                            <Link to="brows">Brows</Link>
                            <Link to="lips">Lips</Link>
                            <Link to="skin">Skin</Link>
                            <Link to="pricing">Pricing</Link>
                        </div>
                    }
                </div>
                <Link to="portfolio" onMouseEnter={handleReset}>Portfolio</Link>
                <div className="navbar__pages--menu2">
                    <a
                        className="pointer"
                        onMouseEnter={() => { setOpenMenu1(false); setOpenMenu2(true); }}
                    >
                        Getting Ready
                        <IconArrowDown />
                    </a>
                    {openMenu2 &&
                        <div>
                            <Link to="policy">Studio Policy</Link>
                            <Link to="disqualifications">Disqualifications</Link>
                            <Link to="faq">FAQ</Link>
                        </div>
                    }
                </div>
                <Link to="aftercare" onMouseEnter={handleReset}>Aftercare</Link>
                <Link to="bio" onMouseEnter={handleReset}>Artist Bio</Link>
            </div>
            <div className="navbar__cta" onMouseEnter={handleReset}>
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
