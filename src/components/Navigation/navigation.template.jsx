import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/header.template';
import Footer from '../Footer/footer.template';

const Navigation = () => (
    <Fragment>
        <Header />
        <Outlet />
        <Footer />
    </Fragment>
);

export default Navigation;