import React, { useState } from "react";
import { Jumbotron } from '../../components'
import './style.scss';

export const Home = (props) => {

    const contact = props.data.contact;

    const [showOrder, setShowOrder] = useState(false);

    return (
        <div className='Home'>
            <Jumbotron 
                name={props.data.name}
                location={props.data.location.intersection}
                hours={props.data.hours.summary}
                contact={contact.phone}
            />


            <div className={`content-row`}>
                <div className={`card content-card story-card`}><p>Our Story</p></div>
                <div className={`card content-card menu-card`}><p>View Menu</p></div>
                <div className={`card flip-card order-card`}>
                    <div className={`flip-card-inner`}>
                        <div className={`flip-card-front`}>
                            <p>Order Now</p>
                        </div>
                        <div className={`flip-card-back`}>
                            <a href={contact.pickupLink}>Pickup</a>
                            <a href={contact.deliveryLink}>Delivery</a>
                        </div>
                    </div>
                </div>
                {/* <div
                    className={`content-card order-card ${showOrder ? 'mouseover' : ''}`}
                    onMouseEnter={() => setShowOrder(true)}
                    onMouseLeave={() => setShowOrder(false)}
                >
                    {!showOrder && <p>Order Online</p>}

                    {showOrder && <div className={`order-links`}>
                        <a href={contact.pickupLink}>Pickup</a>
                        <a href={contact.deliveryLink}>Delivery</a>
                    </div>}
                </div> */}
            </div>

            <div className={`content-row`}>
                <div className={`card content-card`}>

                </div>
            </div>

        </div>
    )
}
