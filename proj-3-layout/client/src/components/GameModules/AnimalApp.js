import React from './node_modules/react';
import '../../App.css';
import { Link } from './node_modules/react-router-dom';

function AnimalApp() {
    return (
        <div>
            <h1>Animal App</h1>
            <Link to='/mainapp'>
                <div className='back-arrow'></div>
            </Link>
        </div>
    );
}

export default AnimalApp;
