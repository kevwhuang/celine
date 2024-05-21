import React from 'react';
import { useInView } from 'react-intersection-observer';

import '../styles/components/Observer.scss';

const options = {
    delay: 1000,
    threshold: 0,
    triggerOnce: false,
};

function Observer(props: { className: string, children: React.ReactNode }): React.ReactElement {
    const { className, children } = props;
    const { inView, ref } = useInView(options);

    return (
        <div className={className + (inView ? '' : ' observer')} ref={ref}>
            {children}
        </div>
    );
}

export default Observer;
