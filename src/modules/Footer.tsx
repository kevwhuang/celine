import { Link } from 'react-router-dom';
import React from 'react';

import CTAAnchor from '../components/CTAAnchor';

import links from '../assets/texts/links.json';
import texts from '../assets/texts/texts.json';

import '../styles/modules/Footer.scss';

function Footer(): React.ReactElement {
    return (
        <footer className="footer">
            <div className="footer__resources">
                <h5>Resources</h5>
                <Link to="policy">Studio Policy</Link>
                <Link to="disqualifications">Disqualifications</Link>
                <Link to="faq">FAQ</Link>
                <Link to="pricing">Pricing</Link>
                <Link to="aftercare">Aftercare</Link>
                <div className="footer__resources--gutter" />
                <div className="footer__resources--gutter" />
                <Link to="bio">Artist Bio</Link>
                <Link to="portfolio">Portfolio</Link>
            </div>

            <div className="footer__location">
                <h5>Location</h5>

                <p>
                    7960 Silverton Ave, Unit 209
                    <br />
                    San Diego, CA 92126
                </p>

                <CTAAnchor href={links.directions} text="Get Directions" />
            </div>

            <div className="footer__hours">
                <h5>Hours</h5>

                <table>
                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td>Closed</td>
                        </tr>

                        <tr>
                            <td>Tuesday</td>
                            <td>{texts.footerHours}</td>
                        </tr>

                        <tr>
                            <td>Wednesday</td>
                            <td>{texts.footerHours}</td>
                        </tr>

                        <tr>
                            <td>Thursday</td>
                            <td>{texts.footerHours}</td>
                        </tr>

                        <tr>
                            <td>Friday</td>
                            <td>{texts.footerHours}</td>
                        </tr>

                        <tr>
                            <td>Saturday</td>
                            <td>{texts.footerHours}</td>
                        </tr>

                        <tr>
                            <td>Sunday</td>
                            <td>Closed</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="footer__contact">
                <h3>Celine's Beauty Studio</h3>

                <a href={`tel:${texts.footerPhone.replace(' ', '')}`}>
                    {texts.footerPhone}
                </a>

                <a href={`mailto:${texts.footerEmail}`}>
                    {texts.footerEmail}
                </a>

                <p>
                    <a href={links.instagram}>Instagram</a>
                    <span> / </span>
                    <a href={links.facebook}>Facebook</a>
                    <span> / </span>
                    <a href={links.yelp}>Yelp</a>
                </p>
            </div>

            <div className="footer__info">
                <p>
                    Designed by Ana ✨
                    {' '}
                    <span>/</span>
                    {' '}
                    All Rights Reserved
                    {' '}
                    <span>/</span>
                    {' '}
                    Celine's Beauty Studio 2024
                </p>
            </div>
        </footer>
    );
}

export default Footer;
