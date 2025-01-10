import { HashLink } from 'react-router-hash-link';
import React from 'react';

import IconArrowRight from './icons/IconArrowRight';

import '../styles/components/CTAAnchor.scss';

function Anchor(props: { href: string; text: string }): React.ReactElement {
    const { href, text } = props;

    return (
        <HashLink className="cta-anchor" to={href}>
            <span>{text}</span>
            <IconArrowRight />
        </HashLink>
    );
}

export default Anchor;
