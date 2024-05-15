import React from 'react';

import IconArrowRight from './icons/IconArrowRight';
import '../styles/components/CTAAnchor.scss';

function Anchor(props: { href: string, text: string }): React.ReactElement {
    const { href, text } = props;

    return (
        <a className="cta-anchor" href={href}>
            <span>{text}</span>
            <IconArrowRight />
        </a>
    );
}

export default Anchor;
