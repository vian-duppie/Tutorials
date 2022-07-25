import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import LandingPage from './Pages/LandingPage';
import Profile from './Pages/Profile';

function App() {
    return (
        <div className="App">
            <div className='navbar'>
                <div className='links-container'>
                    <div>
                        <NavLink to='/landing'>Landing</NavLink>
                        <NavLink to='/profile'>Profile</NavLink>
                    </div>
                    <NavLink to='/'>Logout</NavLink>
                </div>
            </div>

            <Routes>
                <Route path="/" element={Login}/>
                <Route path="/landing" element={LandingPage}/>
                <Route path="/profile" element={Profile}/>
            </Routes>
        </div>
    );
}

export default App;
