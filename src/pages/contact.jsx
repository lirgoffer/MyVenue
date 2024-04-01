import React from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput
} from 'mdb-react-ui-kit';

const Contact = () => {
    return (
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden' dir="rtl" style={{ backgroundImage: `url(${require('../assets/home4.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

            <MDBRow className='justify-content-center'>

                <MDBCol md='8' className='text-center text-md-start d-flex flex-column justify-content-center' >

                    <h2 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 85%)' }}>
                        <span>בואו נעבוד יחד כדי ליצור אירועים בלתי נשכחים</span>
                    </h2>

                    <p className='px-3' style={{ color: 'hsl(218, 81%, 75%)' }}>
                        בעלי אולם אירועים ורוצים שאולמכם יופיעו באתרנו? ההצטרפות לפלטפורמה שלנו פותחת דלתות לקהל מגוון המחפש את המקום המושלם לאירוע שלו. על ידי רישום האולם שלך אצלנו, תוכל לקבל נראות והזדמנות להציג  ללקוחות פוטנציאליים המחפשים מקומות לאירועים. צור קשר איתנו עוד היום ואנחנו נחזור אלייך על מנת להכניס את אולמך לאתר.   </p>

                    <MDBCard className='my-5 bg-glass'>
                        <MDBCardBody className='p-5'>

                            <MDBRow>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4' label='שם פרטי' id='form1' type='text' />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4' label='שם משפחה' id='form2' type='text' />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4' label='אימייל' id='form3' type='email' />
                                </MDBCol>
                            </MDBRow>

                            <MDBBtn className='w-100 mb-4' size='md'>צור קשר</MDBBtn>

                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
};

export default Contact;
