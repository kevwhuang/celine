import React from 'react';
import { useInView } from 'react-intersection-observer';

import '../styles/components/Observer.scss';

interface Props {
    readonly children: React.ReactNode;
    readonly className: string;
}

const config = {
    delay: 1000,
    threshold: 0,
    triggerOnce: false,
};

function Observer(props: Props): React.ReactElement {
    const { className, children } = props;
    const { inView, ref } = useInView(config);

    return (
        <div ref={ref} className={className + (inView ? '' : ' observer')}>
            {children}
        </div>
    );
}

export default Observer;
