import React from 'react';
import { Link } from 'react-router-dom';

import CTAButton from '../components/CTAButton';
import IconArrowDown from '../components/icons/IconArrowDown';
import links from '../assets/links.json';
import logo from '../assets/logo.png';
import { Cross as Hamburger } from 'hamburger-react';
import '../styles/modules/Navbar.scss';

function Menu1(): React.ReactElement {
    return (
        <aside>
            <Link to="brows">Brows</Link>
            <Link to="lips">Lips</Link>
            <Link to="skin">Skin</Link>
            <Link to="pricing">Pricing</Link>
        </aside>
    );
}

function Menu2(): React.ReactElement {
    return (
        <aside>
            <Link to="policy">Policy</Link>
            <Link to="disqualifications">Disqualifications</Link>
            <Link to="faq">FAQ</Link>
        </aside>
    );
}

function Navbar(): React.ReactElement {
    const [openHamburger, setOpenHamburger] = React.useState(false);
    const [openMenu1, setOpenMenu1] = React.useState(false);
    const [openMenu2, setOpenMenu2] = React.useState(false);

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="navbar__pages">
                <div onMouseLeave={() => setOpenMenu1(false)}>
                    <a onMouseEnter={() => setOpenMenu1(true)}>
                        Services & Pricing
                        <IconArrowDown />
                    </a>
                    {openMenu1 && <Menu1 />}
                </div>
                <Link to="portfolio">Portfolio</Link>
                <div onMouseLeave={() => setOpenMenu2(false)}>
                    <a onMouseEnter={() => setOpenMenu2(true)}>
                        Getting Ready
                        <IconArrowDown />
                    </a>
                    {openMenu2 && <Menu2 />}
                </div>
                <Link to="aftercare">Aftercare</Link>
                <Link to="bio">Artist Bio</Link>
            </div>
            <div className="navbar__cta">
                <CTAButton href={links.bookings} text="Book A Service" />
            </div>
            <div className="navbar__hamburger">
                <Hamburger
                    size={48}
                    distance="lg"
                    rounded
                    label="Menu"
                    toggled={openHamburger}
                    toggle={setOpenHamburger}
                />
            </div>
        </nav>
    );
}

export default Navbar;
