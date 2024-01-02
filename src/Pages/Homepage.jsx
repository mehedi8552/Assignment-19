import React from 'react';
import NavBar from './NavBar'
import Slider from '../Component/Slider';
import Add from '../Component/add'
import Com_Product from '../Component/Com_Product';
const Homepage = () => {
    return (
    <NavBar>
    <Slider/>
    <Com_Product/>
    </NavBar>

    );
};

export default Homepage;