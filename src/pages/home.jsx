import React from "react";
import Button from 'react-bootstrap/Button';
import "../styles/home.css";

const Home = () => {
    return (
        <section id="about">
            <div className="home-container mx-auto flex px-10 py-20 md:flex-row flex-col items-center" dir="rtl" >
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                        ברוכים הבאים ל- MyVenue!
                        <br className="hidden lg:inline-block" />כאן תוכלו למצוא את אולם האירועים האידיאלי עבורכם
                    </h1>
                    <div className="flex justify-center">
                        <Button href='./venues' variant="outline-secondary">בואו נתחיל</Button>{' '}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;


