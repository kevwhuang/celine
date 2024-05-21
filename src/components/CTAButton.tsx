import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/CTAButton.scss';

function Anchor(props: { href: string, text: string }): React.ReactElement {
    const { href, text } = props;

    return (
        <button className="cta-button">
            <Link to={href}>{text}</Link>
        </button>
    );
}

export default Anchor;
