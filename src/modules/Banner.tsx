import React from 'react';

import IconActionClose from '../components/icons/IconActionClose';
import texts from '../assets/texts.json';
import '../styles/modules/Banner.scss';

function Banner(): React.ReactElement {
    function handleClose(ref: React.MutableRefObject<null>): void {
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
        <section className="banner" ref={ref}>
            <div className="banner--gutter" />
            <div className="banner__text">
                {text === 0 && <p dangerouslySetInnerHTML={{ __html: texts.banner1 }} />}
                {text === 1 && <p dangerouslySetInnerHTML={{ __html: texts.banner2 }} />}
            </div>
            <div className="banner__close" onClick={() => handleClose(ref)}>
                <IconActionClose />
            </div>
        </section>
    );
}

export default Banner;
