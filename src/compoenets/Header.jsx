import React from "react";
import { Link } from "react-router-dom";
import './Components.css'

const Header = () => {
    return(
        <div className="header">
            <Link to='/jaeyoung'>
           <button className="home-btn">Home</button> 
            </Link>
        </div>
    );
};

export default Header;