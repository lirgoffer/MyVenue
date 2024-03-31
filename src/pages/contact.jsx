import React from "react";


import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput
}
    from 'mdb-react-ui-kit';

const Contact = () => {
    return (
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden' dir="rtl" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjAlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

            <MDBRow>

                <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center' dir="rtl" >

                    <h2 className="my-5 display-3 fw-bold ls-tight px-3" dir="rtl" style={{ color: 'hsl(218, 81%, 85%)' }}>
                        <span>בואו נעבוד יחד כדי ליצור אירועים בלתי נשכחים</span>
                    </h2>

                    <p className='px-3' dir="rtl" style={{ color: 'hsl(218, 81%, 75%)' }}>
                        בעלי אולם אירועים ורוצים שאולמכם יופיעו באתרנו? ההצטרפות לפלטפורמה שלנו פותחת דלתות לקהל מגוון המחפש את המקום המושלם לאירוע שלו. על ידי רישום האולם שלך אצלנו, תוכל לקבל נראות והזדמנות להציג  ללקוחות פוטנציאליים המחפשים מקומות לאירועים. צור קשר איתנו עוד היום ואנחנו נחזור אלייך על מנת להכניס את אולמך לאתר.   </p>

                </MDBCol>

                <MDBCol md='6' className='position-relative' dir="rtl">

                    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                    <MDBCard className='my-5 bg-glass'>
                        <MDBCardBody className='p-5'>

                            <MDBRow>
                                <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' label='שם פרטי' id='form1' type='text' />
                                </MDBCol>

                                <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' label='שם משפחה' id='form2' type='text' />
                                </MDBCol>
                            </MDBRow>

                            <MDBInput wrapperClass='mb-4' label='אימייל' id='form3' type='email' />



                            <MDBBtn className='w-100 mb-4' size='md'>צור קשר</MDBBtn>


                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
};

export default Contact;



