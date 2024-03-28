import React from "react";
import Button from 'react-bootstrap/Button';
import "../styles/home.css";

const Home = () => {
    return (
        <div className="home-container">
            <h1>MyVenue ברוכים הבאים ל</h1>
            <p>
                .כאן תוכלו למצוא את אולם האירועים האידיאלי עבורכם
            </p>
            <Button href='./venues' variant="outline-secondary">בואו נתחיל</Button>{' '}
        </div>
    );
};

export default Home;
