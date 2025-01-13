import { Link } from 'react-router-dom';
import React from 'react';

import CTAButton from '../components/CTAButton';
import { Cross as Hamburger } from 'hamburger-react';
import Headroom from 'react-headroom';
import IconArrowDown from '../components/icons/IconArrowDown';

import links from '../assets/texts/links.json';
import logo from '../assets/images/logo.webp';
import useZustand from '../hooks/useZustand';

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
            <Link to="policy">Studio Policy</Link>
            <Link to="disqualifications">Disqualifications</Link>
            <Link to="faq">FAQ</Link>
        </aside>
    );
}

function Navbar(): React.ReactElement {
    const isHamburger = useZustand(s => s.isHamburger);
    const setIsHamburger = useZustand(s => s.setIsHamburger);
    const [isOpenMenu1, setIsOpenMenu1] = React.useState(false);
    const [isOpenMenu2, setIsOpenMenu2] = React.useState(false);

    return (
        <Headroom disable={isHamburger} pinStart={43}>
            <nav className="navbar">
                <div className="navbar__logo">
                    <Link to="/">
                        <img alt="Logo" src={logo} />
                    </Link>
                </div>

                <div className="navbar__pages">
                    <div onMouseLeave={() => setIsOpenMenu1(false)}>
                        <a onMouseEnter={() => setIsOpenMenu1(true)}>
                            Services & Pricing
                            <IconArrowDown />
                        </a>

                        {isOpenMenu1 ? <Menu1 /> : null}
                    </div>

                    <Link to="portfolio">Portfolio</Link>

                    <div onMouseLeave={() => setIsOpenMenu2(false)}>
                        <a onMouseEnter={() => setIsOpenMenu2(true)}>
                            Getting Ready
                            <IconArrowDown />
                        </a>

                        {isOpenMenu2 ? <Menu2 /> : null}
                    </div>

                    <Link to="aftercare">Aftercare</Link>
                    <Link to="bio">Artist Bio</Link>
                </div>

                <div className="navbar__cta">
                    <CTAButton href={links.bookings} text="Book A Service" />
                </div>

                <div className="navbar__hamburger">
                    <Hamburger
                        distance="lg"
                        label="Menu"
                        rounded
                        size={48}
                        toggle={setIsHamburger}
                        toggled={isHamburger}
                    />
                </div>
            </nav>
        </Headroom>
    );
}

export default Navbar;
