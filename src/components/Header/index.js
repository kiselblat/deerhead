import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const Header = (props) => {
    return(
        <nav className={`Header`}>
            <Link to='/'>Home</Link>
            <Link to='/our-story'>Our Story</Link>
            <Link to='/contact'>Contact Us</Link>
        </nav>
    )
}