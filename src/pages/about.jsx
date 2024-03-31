import React from "react";
import "../styles/home.css";
import Button from 'react-bootstrap/Button';


const About = () => {
    return (
        <div className="home-container" dir="rtl">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">אנו ב- MyVenue</h1>
            <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">  רוצים לחולל מהפכה בתהליך בחירת אולם אירועים. עם טכנולוגיית הבינה המלאכותית המתקדמת והממשק הידידותי שלנו, אנו מעוניינים לספק לכם חוויה חלקה במציאת המקום המושלם לאירוע שלכם.
            </h3>

            <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">

                <br className="hidden lg:inline-block" />הצטרפו אלינו עכשיו ונוכל לעשות את זה אחרת
            </h3>
            <div className="flex justify-center">
                <Button href='./register' variant="outline-secondary">הרשמה לאתר</Button>{' '}
            </div>
        </div>
    );
};

export default About;

