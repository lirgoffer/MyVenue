import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';

function Register() {
    return (
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519750783826-e2420f4d687f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

            <MDBRow>

                <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                    <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
                        MyVenue<br />
                        <span style={{ color: 'hsl(218, 81%, 75%)' }}>!הצטרפו אלינו</span>
                    </h1>

                    <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
                        הצטרפו אלינו ותוכלו לשתף את החוויות והביקורות שלכם, ובכך נוכל לעזור לאחרים לבחור את האולם האידיאלי עבורם. בין אם מחפשים את המקום המושלם לחתונה, אירוע חברה או כל מפגש אחר, הביקורות שלכם יעשירו את הקהילה שלנו ויעצימו משתמשים אחרים בחיפושם אחר האולם האידיאלי.                     </p>

                </MDBCol>

                <MDBCol md='6' className='position-relative'>

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
                            <MDBInput wrapperClass='mb-4' label='סיסמא' id='form4' type='password' />



                            <MDBBtn className='w-100 mb-4' size='md'>הירשם</MDBBtn>

                            <div className="text-center">

                                <p>or sign up with:</p>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='facebook-f' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='twitter' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='google' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='github' size="sm" />
                                </MDBBtn>

                            </div>

                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default Register;
