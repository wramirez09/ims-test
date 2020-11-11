import React, { Fragment } from 'react';
import ContenNegotation from '../components/ContenNegotation';
import Weather from '../components/Weather';

const Home = () => {
    return (
        <Fragment>
            <ContenNegotation></ContenNegotation>
            <Weather></Weather>
        </Fragment>
    );
};

export default Home;
