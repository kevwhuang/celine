import React from 'react';
import { useInView } from 'react-intersection-observer';

import '../styles/components/Observer.scss';

const options = {
    delay: 1000,
    threshold: 0,
    triggerOnce: false,
};

function Observer(props: { children: React.ReactNode; className: string }): React.ReactElement {
    const { className, children } = props;
    const { inView, ref } = useInView(options);

    return (
        <div ref={ref} className={className + (inView ? '' : ' observer')}>
            {children}
        </div>
    );
}

export default Observer;
