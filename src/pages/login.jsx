// login.jsx
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
} from 'mdb-react-ui-kit';

function Login() {
    return (
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551564874-2c247864797e?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3f')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

            <MDBRow>

                <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                    <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
                        MyVenue <br />
                        <span style={{ color: 'hsl(218, 81%, 75%)' }}>!כיף שחזרתם אלינו</span>
                    </h1>

                    <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
                        התחברו חזרה לחשבונכם
                    </p>

                </MDBCol>

                <MDBCol md='6' className='position-relative'>

                    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                    <MDBCard className='my-5 bg-glass'>
                        <MDBCardBody className='p-5'>

                            <MDBInput wrapperClass='mb-4' label='אימייל' id='form1' type='email' />
                            <MDBInput wrapperClass='mb-4' label='סיסמא' id='form2' type='password' />

                            <div className='d-flex justify-content-between align-items-center mb-4'>
                                <div>
                                    <input name='rememberMe' type='checkbox' id='rememberMe' className='form-check-input' />
                                    <label htmlFor='rememberMe' className='form-check-label'>זכור אותי</label>
                                </div>
                                <div>
                                    <a href='/forgot-password'>?שכחת סיסמא</a>
                                </div>
                            </div>

                            <MDBBtn className='w-100 mb-4' size='md'>התחבר</MDBBtn>

                            <div className="text-center">

                                <p>or sign in with:</p>

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

export default Login;
