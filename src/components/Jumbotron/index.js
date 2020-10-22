import React from 'react';
import './style.scss';

export const Jumbotron = (props) => {
    return (
        <div className={`Jumbotron`}>
            <div className={`jumbo-background`}>
                <div className={`scrim`} />
                <img src='//unsplash.it/1200/700' alt="FPO" />
            </div>
            <h1 className={`jumbo-name`}>Black Forest Inn</h1>
            <p className={`jumbo-hours`}>3 - 9pm Daily</p>
            <p className={`jumbo-location`}>26th & Nicollet</p>
            <p className={`jumbo-contact`}>612-872-0812</p>
        </div>
    )
}