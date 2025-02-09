import React from 'react';
import {Link} from "react-router-dom"


const Home = () => (
    <div>
        <h1>Welcome to the MERN Authentication App</h1>
        <p>Please log in or register to continue.</p>
        <Link to={"/Register"}> register</Link>
        <Link to={"/Login"}> login</Link>
    </div>
);

export default Home;
