import React from 'react';
import { Link } from 'react-router-dom';

export const Header = (props) => {
    return(
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/our-story'>Our Story</Link>
            <Link to='/contact'>Contact Us</Link>
        </nav>
    )
}