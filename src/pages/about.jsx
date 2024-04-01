// about.jsx
import React from "react";
import "../styles/home.css";
import Button from 'react-bootstrap/Button';

const About = () => {
    return (
        <div className="home-container" dir="rtl">
            <div className="text-center">
                <h1 className="title-font text-4xl md:text-5xl mb-4 font-medium text-black">אנו ב- MyVenue</h1>
                <p className="text-lg md:text-xl mb-8 text-black leading-relaxed">
                    רוצים לחולל מהפכה בתהליך בחירת אולם אירועים. עם טכנולוגיית הבינה המלאכותית המתקדמת והממשק הידידותי שלנו, אנו מעוניינים לספק לכם חוויה חלקה במציאת המקום המושלם לאירוע שלכם.
                </p>
                <p className="text-lg md:text-xl mb-8 text-black leading-relaxed">
                    הצטרפו אלינו עכשיו ונוכל לעשות את זה אחרת
                </p>
                <div className="flex justify-center">
                    <Button href='./register' variant="outline-secondary">הרשמה לאתר</Button>
                </div>
            </div>
        </div>
    );
};

export default About;
