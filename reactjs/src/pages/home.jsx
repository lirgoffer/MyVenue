// home.jsx
import React from "react";
import Button from 'react-bootstrap/Button';
import "../styles/home.css";

const Home = () => {
    return (
        <section id="about">
            <div className="home-container mx-auto flex px-10 py-20 md:flex-row flex-col items-center" dir="rtl">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font text-4xl md:text-5xl mb-4 font-medium text-black">
                        ברוכים הבאים ל- MyVenue!
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-black leading-relaxed">
                        כאן תוכלו למצוא את אולם האירועים האידיאלי עבורכם
                    </p>
                    <div className="flex justify-center">
                        <Button href='./venues' variant="outline-secondary">בואו נתחיל</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
