import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

import Banner from '../modules/Banner';
import Footer from '../modules/Footer';
import Navbar from '../modules/Navbar';

function Display(): React.ReactElement {
    return (
        <>
            <Banner />
            <Navbar />
            <HelmetProvider>
                <Outlet />
            </HelmetProvider>
            <Footer />
        </>
    );
}

export default Display;
