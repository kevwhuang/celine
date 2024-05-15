import React from 'react';

import '../styles/components/CTAButton.scss';

function Anchor(props: { href: string, text: string }): React.ReactElement {
    const { href, text } = props;

    return (
        <button className="cta-button">
            <a href={href}>{text}</a>
        </button>
    );
}

export default Anchor;
