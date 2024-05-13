import React from 'react';

import IconActionClose from '../components/icons/IconActionClose';
import '../styles/modules/Banner.scss';

function Banner(): React.ReactElement {
    function handleClose() {
        const e = ref.current as unknown;
        if (!(e instanceof HTMLElement)) return;
        e.style.display = 'none';
    }

    const [text, setText] = React.useState(0);
    const ref = React.useRef(null);

    React.useEffect(() => {
        const id = setInterval(() => setText(text === 0 ? 1 : 0), 5000);
        return () => clearInterval(id);
    });

    return (
        <aside className="banner" ref={ref}>
            <div className="banner__gutter" />
            <div className="banner__text">
                {text === 0 &&
                    <p>
                        Lip and Brow Bundle:
                        {'\u00A0'}
                        <b>Save $250</b>
                        {'\u00A0'}
                        by getting your lips and brows done in the same session
                    </p>
                }
                {text === 1 &&
                    <p>
                        Saline Tattoo Removal Bundle:
                        {'\u00A0'}
                        <b>Save $50</b>
                        {'\u00A0'}
                        by committing to 3 sessions
                    </p>
                }
            </div>
            <div className="banner__close" onClick={handleClose}>
                <IconActionClose />
            </div>
        </aside>
    );
}

export default Banner;
