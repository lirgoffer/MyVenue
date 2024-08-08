import React,{useState,useContext,useEffect} from 'react';
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

function Register() {
    
    const navigate = useNavigate()
    const {signUp} = useContext(AllData)

    const [name,setName] = useState('')
    const [maile,setMaile] = useState('')
    const [password,setPassword] = useState('')
    const [password2,setPassword2] = useState('')


    // בןדק את הסיסמה
    const containsLettersAndNumbers = (str) => {
        return /[a-zA-Z]/.test(str) && /\d/.test(str);
    }


    const chackInfo = async () =>{
        let userCheck = ''
        if(name.length < 2){
            alert('שם המשתמש לא תקין')
        }
        else if(maile.indexOf('@')== -1 || maile.length < 6){
            alert('כתובת המייל לא תקינה ')
        }
        else if(containsLettersAndNumbers(password) == false || password.length < 6)(
            alert('הסיסמה לא תקינה')
        )
        else if(password != password2)(
            alert('הסיסמאות אינם שוות ')
        )
        else{
            userCheck = await signUp(name,password,maile)
            if(userCheck == false){
                alert('המשתמש הזה כבר קיים במערכת')
            }
            else{
                navigate('/venues')
            }
        }
    }



    return (
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden' dir="rtl" style={{ backgroundImage: `url(${require('../assets/home4.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

            <MDBRow className='mainContanerLogIn' style={{ marginTop: '3cm' }}>

                <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center' dir="rtl">

                    <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'black',fontSize:40,fontWeight:'bold',textAlign:'right',paddingBottom:200}}>
                        MyVenue <br />
                        <span style={{ color: 'black' }}>כיף שחזרתם אלינו!</span>
                    </h1>


                </MDBCol>



                    <div className='signInCo'>
                        <h3 style={{marginRight:8}}>הרשמה</h3>

                        <TextField value={name}   onChange={(e) => setName(e.target.value)}  id="outlined-size-small" label="שם" variant="filled" inputProps={{ dir: 'rtl' }}
                            sx={{
                                '& .MuiInputLabel-root': {
                                    left: 'auto',
                                    right: 15,
                                    transformOrigin: 'top right',
                                },
                            }}
                        />

                        <TextField value={maile} onChange={(e)=>{setMaile(e.target.value)}} id="outlined-size-small" label="הכנס מייל" variant="filled" inputProps={{ dir: 'rtl' }}
                            sx={{
                                '& .MuiInputLabel-root': {
                                    left: 'auto',
                                    right: 15,
                                    transformOrigin: 'top right',
                                },
                                marginTop: 3
                            }}
                        />
                    
                    <div style={{display:'flex',justifyContent:'space-between',marginTop:8}}>
                        <TextField value={password} onChange={(e)=>{setPassword(e.target.value)}} id="outlined-size-small" type='password' label="הכנס סיסמה" variant="standard" inputProps={{ dir: 'rtl' }}
                            sx={{
                                '& .MuiInputLabel-root': {
                                    left: 'auto',
                                    right: 15,
                                    transformOrigin: 'top right',
                                },
                                width:'48%'
                            }}
                        />

                        <TextField value={password2} onChange={(e)=>{setPassword2(e.target.value)}} id="outlined-size-small" type='password' label="בדיקת סיסמה" variant="standard" inputProps={{ dir: 'rtl' }}
                            sx={{
                                '& .MuiInputLabel-root': {
                                    left: 'auto',
                                    right: 15,
                                    transformOrigin: 'top right',
                                },
                                width:'48%'
                            }}
                        />

                    </div>
                    <p style={{margin:0,padding:0}}>** הסיסמה צריכה להכיל לפחות 6 תווים שמתוכם ספרה אחת ואות אחת **</p>


                    <div style={{display:'flex',justifyContent:'space-around',padding:35}}>
                        
                        <Button variant="contained" color="success" onClick={chackInfo}>
                            הרשמה
                        </Button>

                        <Button variant="contained" color="inherit" onClick={()=>{navigate('/login')}}>
                            התחבר
                        </Button>

                    </div>


                    </div>


            </MDBRow>

        </MDBContainer>
    );
}

export default Register;
