import React from 'react';
import { Link } from 'react-router-dom';

import IconArrowRight from './icons/IconArrowRight';
import '../styles/components/CTAAnchor.scss';

function Anchor(props: { href: string, text: string }): React.ReactElement {
    const { href, text } = props;

    return (
        <Link className="cta-anchor" to={href}>
            <span>{text}</span>
            <IconArrowRight />
        </Link>
    );
}

export default Anchor;
