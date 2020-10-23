import React from 'react';
import './style.scss';

export const Jumbotron = (props) => {
    return (
        <div className={`Jumbotron`}>
            <div className={`jumbo jumbo-background`}>
                <div className={`scrim`} />
                <img src='//unsplash.it/1200/700' alt="FPO" />
            </div>
            <h1 className={`jumbo-name`}>{props.name}</h1>
            <p className={`jumbo jumbo-location`}>{props.location}</p>
            <p className={`jumbo jumbo-hours`}>{props.hours}</p>
            <p className={`jumbo jumbo-contact`}>{props.contact}</p>
        </div>
    )
}