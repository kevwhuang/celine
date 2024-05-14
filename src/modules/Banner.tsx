import React from 'react';

import IconActionClose from '../components/icons/IconActionClose';
import texts from '../assets/texts.json';
import '../styles/modules/Banner.scss';

function close(ref: React.MutableRefObject<null>): void {
    const e = ref.current as unknown;
    if (!(e instanceof HTMLElement)) return;
    e.style.display = 'none';
}

function Banner(): React.ReactElement {
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
                {text === 0 && <p dangerouslySetInnerHTML={{ __html: texts.banner1 }} />}
                {text === 1 && <p dangerouslySetInnerHTML={{ __html: texts.banner2 }} />}
            </div>
            <div className="banner__close" onClick={() => close(ref)}>
                <IconActionClose />
            </div>
        </aside>
    );
}

export default Banner;
