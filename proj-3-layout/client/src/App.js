import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import setAuthToken from './utils/setAuthToken';

// layout
import Nav from './components/Nav';
import Alerts from './components/layout/Alerts';

// pages
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import MainApp from './components/MainApp';

// game modules
import ABCApp from './components/gameModules/ABCApp';
import AnimalApp from './components/gameModules/AnimalApp';
import ClockApp from './components/gameModules/ClockApp';
import ColorApp from './components/gameModules/ColorApp';
import MathApp from './components/gameModules/MathApp';
import NumApp from './components/gameModules/NumApp';
import PlanetApp from './components/gameModules/PlanetApp';
import ShapeApp from './components/gameModules/ShapeApp';

// context
import UserState from './context/user/UserState';
import AlertState from './context/alert/AlertState';

if (localStorage.token) {
    setAuthToken(localStorage.token);
} // saving the users token to local storage

function App() {
    return (
        <UserState>
            <AlertState>
                <Router>
                    <div className='App'>
                        <Nav />
                        <div className='container'>
                            <Alerts />
                            <Switch>
                                <Route path='/' exact component={Home} />
                                <Route path='/register' component={Register} />
                                <Route path='/login' component={Login} />
                                <Route path='/mainapp' component={MainApp} />

                                <Route path='/abc' component={ABCApp} />
                                <Route path='/animals' component={AnimalApp} />
                                <Route path='/clock' component={ClockApp} />
                                <Route path='/colors' component={ColorApp} />
                                <Route path='/math' component={MathApp} />
                                <Route path='/numbers' component={NumApp} />
                                <Route path='/planets' component={PlanetApp} />
                                <Route path='/shapes' component={ShapeApp} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </AlertState>
        </UserState>
    );
}

const Home = () => (
    <div>
        <h1>Home Page!</h1>
        <Link to='/register'>
            <h3>Register</h3>
        </Link>
        <Link to='/login'>
            <h3>Login</h3>
        </Link>
    </div>
);

export default App;
