import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    Navigate,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import { SWRConfig } from 'swr';

import Display from './layouts/Display';

import Aftercare from './pages/Aftercare';
import Bio from './pages/Bio';
import Brows from './pages/Brows';
import Disqualifications from './pages/Disqualifications';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import Lips from './pages/Lips';
import Policy from './pages/Policy';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Skin from './pages/Skin';

import Error from './pages/statuses/Error';
import Fallback from './pages/statuses/Fallback';
import Unknown from './pages/statuses/Unknown';

import './styles/rectify.scss';
import './styles/root.scss';
import './styles/pages.scss';
import './styles/keyframes.scss';
import './styles/media/media.scss';
import './styles/dev.scss';

if (navigator.userAgent.search(/Macintosh|Windows NT/) === -1) {
    import('./styles/media/mobile.scss');
}

const config = {
    errorRetryCount: 5,
    refreshInterval: 600000,
    revalidateOnReconnect: true,
    shouldRetryOnError: true,
};

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="" element={<Display />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Unknown />} />
        <Route path="aftercare" element={<Aftercare />} />
        <Route path="bio" element={<Bio />} />
        <Route path="brows" element={<Brows />} />
        <Route path="disqualifications" element={<Disqualifications />} />
        <Route path="error" element={<Error />} />
        <Route path="fallback" element={<Fallback />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="home" element={<Navigate to="/" replace={true} />} />
        <Route path="lips" element={<Lips />} />
        <Route path="policy" element={<Policy />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="skin" element={<Skin />} />
    </Route>
));

ReactDOM.createRoot(document.getElementById('main') as HTMLElement).render(
    <React.StrictMode>
        <SWRConfig value={config}>
            <RouterProvider router={router} fallbackElement={<Fallback />} />
        </SWRConfig>
    </React.StrictMode>
);
