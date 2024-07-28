import React, { useContext, useState } from 'react';
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
import { TextField, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AllData from '../contexApi';
import imgArrow from './images/arrow.png'

function Login() {

    const navigate = useNavigate()
    const { logIn } = useContext(AllData)
    const { sendCodeToUpdatePassword } = useContext(AllData)
    const { checkCode } = useContext(AllData)
    const { updatePsswordServer } = useContext(AllData)
    const [maile, setMaile] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [codeUser, setCodeUser] = useState('')
    const [showGetPassword, setShowGetPassword] = useState(false)


    // בןדק את הסיסמה
    const containsLettersAndNumbers = (str) => {
        return /[a-zA-Z]/.test(str) && /\d/.test(str);
    }


    const chackInfo = async () => {
        let userCheck = ''
        if (maile.indexOf('@') == -1 || maile.length < 6) {
            alert('כתובת המייל לא תקינה ')
        }
        else if (containsLettersAndNumbers(password) == false || password.length < 6) (
            alert('הסיסמה לא תקינה')
        )
        else {
            userCheck = await logIn(password, maile)
            if (userCheck == false) {
                alert('הנתונים שהזנת אינם תקינים')
            } else {
                navigate('/venues')
            }
        }
    }

    const checkMaileToUpdate = async () => {
        if (maile.indexOf('@') == -1 || maile.length < 6) {
            alert('כתובת המייל לא תקינה ')
        }
        else {
            let ret = await sendCodeToUpdatePassword(maile)
            if (ret == true) {
                console.log('pp');
                setShowGetPassword('2')

            }
            else (
                alert('המייל שהזנת לא תקין ')
            )
            console.log(ret);
        }
    }

    const sendCode = async () => {
        let ret = ''
        if (codeUser.length == 4) {
            ret = await checkCode(codeUser, maile)
            if (ret == true) {
                setShowGetPassword('3')
                setPassword('')
            }
            else {
                alert('הקוד לא תקין')
            }
        }
        else {
            alert('לא הוכנס קוד תקין ')
        }
    }

    const updatePassword = async () => {

        let ret = ''
        if (containsLettersAndNumbers(password) == false || password.length < 6) {
            alert('הסיסמה לא תקינה')
        }
        else if (password != checkPassword) {
            alert('הסיסמות אינם שוות')
        }
        else {
            ret = await updatePsswordServer(password, maile, codeUser)
        }

        if (ret == true) {
            setShowGetPassword(false)
            setPassword('')
            setCheckPassword('')
            setCodeUser('')
            setMaile('')
        }
        else {
            alert('משהו השתבש נסה שנית')
        }

    }


    return (
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden' dir="rtl" style={{ backgroundImage: `url(${require('../assets/home4.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

            <MDBRow className='mainContanerLogIn' >

                <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center' dir="rtl">

                    <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'black', fontSize: 40, fontWeight: 'bold', textAlign: 'right', paddingBottom: 100 }}>
                        MyVenue <br />
                        <span style={{ color: 'black' }}>כיף שחזרתם אלינו!</span>
                    </h1>


                </MDBCol>




                {
                    !showGetPassword ? (

                        <div className='signInCo'>
                            <h3 style={{ marginRight: 8, marginBottom: 6, paddingBottom: 0 }}>התחבר</h3>
                            <TextField value={maile} onChange={(e) => { setMaile(e.target.value) }} id="outlined-size-small" label="הכנס מייל" variant="filled" inputProps={{ dir: 'rtl' }}
                                sx={{
                                    '& .MuiInputLabel-root': {
                                        left: 'auto',
                                        right: 15,
                                        transformOrigin: 'top right',
                                    },
                                }}
                            />

                            <TextField value={password} onChange={(e) => { setPassword(e.target.value) }} id="outlined-size-small" label="הכנס סיסמה " type='password' variant="filled" inputProps={{ dir: 'rtl' }}
                                sx={{
                                    '& .MuiInputLabel-root': {
                                        left: 'auto',
                                        right: 15,
                                        transformOrigin: 'top right',
                                    },
                                    marginTop: 4
                                }}
                            />
                            <p style={{ margin: 0, padding: 0 }}>** על הסיסמה להיות בת 6 תווים לפחות, ולהכיל לפחות ספרה ואות אחת  **</p>
                            <p onClick={() => { setShowGetPassword(true) }} style={{ color: 'rgb(68, 208, 255)', cursor: 'pointer' }}>שכחתי סיסמה</p>

                            <div style={{ display: 'flex', justifyContent: 'space-around', padding: 35 }}>

                                <Button variant="contained" color="success" onClick={chackInfo}>
                                    התחבר
                                </Button>

                                <Button variant="contained" color="inherit" onClick={() => { navigate('/register') }}>
                                    הרשמה
                                </Button>
                            </div>


                        </div>

                    ) : showGetPassword == true ? (
                        <div className='signInCo' style={{ height: 300 }}>
                            <img onClick={() => { setShowGetPassword(false) }} className='imgBack' src={imgArrow} alt="back" />
                            <h4 style={{ marginRight: 8, marginTop: 23 }}>שחזר סיסמה</h4>
                            <TextField value={maile} onChange={(e) => { setMaile(e.target.value) }} id="outlined-size-small" label="הכנס מייל" variant="filled" inputProps={{ dir: 'rtl' }}
                                sx={{
                                    '& .MuiInputLabel-root': {
                                        left: 'auto',
                                        right: 15,
                                        transformOrigin: 'top right',
                                    },
                                    marginTop: 3
                                }}
                            />

                            <div style={{ display: 'flex', justifyContent: 'space-around', padding: 35 }}>

                                <Button variant="contained" color="success" onClick={checkMaileToUpdate}>
                                    שלח
                                </Button>

                            </div>


                        </div>
                    ) : showGetPassword == '2' ? (

                        <div className='signInCo' style={{ height: 300 }}>
                            <img onClick={() => { setShowGetPassword(true) }} className='imgBack' src={imgArrow} alt="back" />
                            <h4 style={{ marginRight: 8, marginTop: 23 }}>הכנס את הקוד</h4>
                            <TextField value={codeUser} onChange={(e) => { setCodeUser(e.target.value) }} id="outlined-size-small" label="הכנס את הקוד" variant="filled" inputProps={{ dir: 'rtl' }}
                                sx={{
                                    '& .MuiInputLabel-root': {
                                        left: 'auto',
                                        right: 15,
                                        transformOrigin: 'top right',
                                    },
                                    marginTop: 3
                                }}
                            />

                            <div style={{ display: 'flex', justifyContent: 'space-around', padding: 35 }}>

                                <Button variant="contained" color="success" onClick={sendCode}>
                                    שלח
                                </Button>

                            </div>


                        </div>
                    ) : (

                        <div className='signInCo' style={{ height: 300 }}>
                            <img onClick={() => { setShowGetPassword(true) }} className='imgBack' src={imgArrow} alt="back" />
                            <h4 style={{ marginRight: 30, marginTop: 28 }}>הכנס סיסמה החדשה </h4>
                            <TextField value={password} onChange={(e) => { setPassword(e.target.value) }} id="outlined-size-small" label="הכנס סיסמה" variant="filled" inputProps={{ dir: 'rtl' }}
                                sx={{
                                    '& .MuiInputLabel-root': {
                                        left: 'auto',
                                        right: 15,
                                        transformOrigin: 'top right',
                                    },
                                    marginTop: 3
                                }}
                            />

                            <TextField value={checkPassword} onChange={(e) => { setCheckPassword(e.target.value) }} id="outlined-size-small" label="הכנס סיסמה שוב" variant="filled" inputProps={{ dir: 'rtl' }}
                                sx={{
                                    '& .MuiInputLabel-root': {
                                        left: 'auto',
                                        right: 15,
                                        transformOrigin: 'top right',
                                    },
                                    marginTop: 3
                                }}
                            />

                            <div style={{ display: 'flex', justifyContent: 'space-around', padding: 35 }}>

                                <Button variant="contained" color="success" onClick={updatePassword}>
                                    עדכן סיסמה
                                </Button>

                            </div>


                        </div>

                    )
                }

            </MDBRow>

        </MDBContainer>
    );
}

export default Login;
