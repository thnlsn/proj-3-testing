import React from './node_modules/react';
import '../../App.css';
import { Link } from './node_modules/react-router-dom';

function PlanetApp() {
    return (
        <div>
            <h1>Planet App</h1>
            <Link to='/mainapp'>
                <div className='back-arrow'></div>
            </Link>
        </div>
    );
}

export default PlanetApp;
