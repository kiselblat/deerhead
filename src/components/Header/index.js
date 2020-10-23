import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const Header = (props) => {

    const [orderPopup, setOrderPopup] = useState(false)

    return(
        <div className={`Header`}>
            <nav disabled className={`hamburger`}>
                {/* <Link to='/'>Home</Link>
                <Link to='/our-story'>Our Story</Link>
                <Link to='/contact'>Contact Us</Link> */}

            </nav>

            <button className={`orderbutton`} onClick={props.orderClick}>Order Now</button>

        </div>
    )
}