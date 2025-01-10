import { Outlet } from 'react-router-dom';
import React from 'react';

import Banner from '../modules/Banner';
import Footer from '../modules/Footer';
import Menu from '../modules/Menu';
import Navbar from '../modules/Navbar';

function Display(): React.ReactElement {
    return (
        <>
            <Menu />
            <Banner />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default Display;
