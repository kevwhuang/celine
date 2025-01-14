import { Link } from 'react-router-dom';
import React from 'react';

import '../styles/components/CTAButton.scss';

interface Props {
    readonly href: string;
    readonly text: string;
}

function CTAButton(props: Props): React.ReactElement {
    const { href, text } = props;

    return (
        <button className="cta-button" type="button">
            <Link to={href}>{text}</Link>
        </button>
    );
}

export default CTAButton;
