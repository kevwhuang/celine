import React from 'react';

import IconActionClose from '../components/icons/IconActionClose';

import '../styles/modules/Banner.scss';

function Banner(): React.ReactElement {
    function handleClose(ref: React.RefObject<null>): void {
        const e = ref.current as unknown;
        if (e instanceof HTMLElement) e.setAttribute('hidden', '');
    }

    const ref = React.useRef(null);
    const [text, setText] = React.useState(0);

    React.useEffect(() => {
        const id = setInterval(() => setText(text === 0 ? 1 : 0), 5000);
        return () => clearInterval(id);
    });

    return (
        <section ref={ref} className="banner">
            <div className="banner__text">
                {
                    text === 0 &&
                    <p>
                        Lip and Brow Bundle:
                        {' '}
                        <b>Save $250</b>
                        {' '}
                        by getting your lips and brows done in the same session
                    </p>
                }

                {
                    text === 1 &&
                    <p>
                        Saline Tattoo Removal Bundle:
                        {' '}
                        <b>Save $50</b>
                        {' '}
                        by committing to 3 sessions
                    </p>
                }
            </div>

            <div className="banner__close" onClick={() => handleClose(ref)}>
                <IconActionClose />
            </div>
        </section>
    );
}

export default Banner;
