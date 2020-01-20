import React from './node_modules/react';
import '../../App.css';
import { Link } from './node_modules/react-router-dom';

function ColorApp() {
    return (
        <div>
            <h1>Color App</h1>
            <Link to='/mainapp'>
                <div className='back-arrow'></div>
            </Link>
        </div>
    );
}

export default ColorApp;
