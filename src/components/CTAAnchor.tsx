import { HashLink } from 'react-router-hash-link';
import React from 'react';

import IconArrowRight from './icons/IconArrowRight';

import '../styles/components/CTAAnchor.scss';

interface Props {
    readonly href: string;
    readonly text: string;
}

function CTAAnchor(props: Props): React.ReactElement {
    const { href, text } = props;

    return (
        <HashLink className="cta-anchor" to={href}>
            <span>{text}</span>
            <IconArrowRight />
        </HashLink>
    );
}

export default CTAAnchor;
