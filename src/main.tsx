import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

import Aftercare from './pages/Aftercare';
import Bio from './pages/Bio';
import Brows from './pages/Brows';
import Display from './layouts/Display';
import Disqualifications from './pages/Disqualifications';
import Error from './pages/Error';
import Faq from './pages/Faq';
import Home from './pages/Home';
import Lips from './pages/Lips';
import Policy from './pages/Policy';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Skin from './pages/Skin';
import Unknown from './pages/Unknown';

import './styles/rectify.scss';
import './styles/main.scss';
import './styles/media.scss';
import './styles/tablet.scss';
import './styles/mobile.scss';
import './styles/keyframes.scss';
import './styles/dev.scss';

const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Display />} errorElement={<Error />} path="">
        <Route element={<Aftercare />} path="aftercare" />
        <Route element={<Bio />} path="bio" />
        <Route element={<Brows />} path="brows" />
        <Route element={<Disqualifications />} path="disqualifications" />
        <Route element={<Error />} path="error" />
        <Route element={<Faq />} path="faq" />
        <Route element={<Home />} index />
        <Route element={<Lips />} path="lips" />
        <Route element={<Policy />} path="policy" />
        <Route element={<Portfolio />} path="portfolio" />
        <Route element={<Pricing />} path="pricing" />
        <Route element={<Skin />} path="skin" />
        <Route element={<Unknown />} path="*" />
    </Route>,
));

ReactDOM.createRoot(document.getElementById('main')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
