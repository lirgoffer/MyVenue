import React,{useEffect,useState,useContext} from "react";
import { TextField, Container, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput
} from 'mdb-react-ui-kit';
import AllData from "../contexApi";

export default function ConectToHall() {
    const navigate = useNavigate()
    const [mail,setMaile]= useState('')
    const [nameConect,setNameConect]= useState('')
    const [lastName,setLastName]= useState('')
    const [phone,setPhone]= useState('')
    const {conectNewHall}= useContext(AllData)
    const {hallConent} = useContext(AllData)

    function isValidEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
    function isValidPhoneNumber(phoneNumber) {
        const pattern = /^\+?[1-9]\d{1,14}$/;
        return pattern.test(phoneNumber);
    }

    // useEffect(()=>{
    //     console.log(isValidPhoneNumber(phone.slice(1)));
    // },[])



    const checkAConect = async ()=>{
        if(nameConect.length < 2){
            alert('השם שהוזן לא תיקני')
        }
        else if(lastName.length < 2){
            alert('שם משפחה לא תקין')
        }
        else if(isValidEmail(mail)== false){
            console.log(mail)
            alert('המייל שהוזן הוא לא תקין')
        }
        else if(isValidPhoneNumber(`+972${phone.slice(1)}`) == false || `+972${phone.slice(1)}`.length < 13 ){
            alert('מספר הפאלפון לא תקין')
        }
        else{
            console.log(isValidPhoneNumber(`+972${phone.slice(1)}`));
            let ret = await conectNewHall(mail,nameConect,lastName,phone,hallConent.maile) 
            if(ret == true){
                alert('תודה על פנייתך בעלי האולם יצור איתך קשר בהקדם ')
                navigate('/venues')
            }
            else{
                alert('אופס קרתה תקלה ')
            }
        }
    }
    return (


            <div className='conectToAdmin'>

                    <div className="conectPart1" >
                    <h2 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'black',fontSize:30,fontWeight:'bold'}}>
                        <span>בואו ניצור יחד את האירוע המושלם!
                        </span>
                    </h2>

                    <p className='px-3' style={{ color: 'black' ,fontWeight:'bold',fontSize:20}}>{`אצלנו באולם האירועים ${hallConent.nameHall}, אנחנו מבינים שאירוע מיוחד מתחיל בתכנון מושלם ובשירות אישי ומקצועי. בין אם אתם מתכננים חתונה, בר/בת מצווה, אירוע חברה או כל אירוע אחר – אנחנו כאן כדי להגשים את החלום שלכם.`}   </p>
                    <p className='px-3'  style={{ color: 'black' ,fontWeight:'bold',fontSize:20}}>
                    הגיע הזמן להפוך את החזון למציאות. השאירו את הפרטים שלכם כאן, ונחזור אליכם עם כל המידע הדרוש לתכנון האירוע המושלם שלכם
                    </p>

                    </div>

                    <MDBCard className='conectPart2' >
                        <MDBCardBody className='p-5' style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                            <h4>צור קשר עם האולם</h4>

                            <MDBRow>
                                <MDBCol >
                                    <MDBInput value={nameConect} onChange={(e)=>{setNameConect(e.target.value)}} dir="rtl" style={{borderWidth:1,borderStyle:'solid',borderColor:'gray', direction:'rtl'}} wrapperClass='mb-4' label='שם פרטי' id='form1' type='text' />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol>
                                    <MDBInput value={lastName} onChange={(e)=>{setLastName(e.target.value)}} wrapperClass='mb-4' label='שם משפחה' id='form2' type='text' />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol>
                                    <MDBInput value={mail} onChange={(e)=>{setMaile(e.target.value)}} wrapperClass='mb-4' label='אימייל' id='form3' type='email' />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol>
                                    <MDBInput value={phone} onChange={(e)=>{setPhone(e.target.value)}} wrapperClass='mb-4' label='פאלפון' id='form3' type='email' />
                                </MDBCol>
                            </MDBRow>

                            <Button variant="contained" color="success" onClick={checkAConect}>צור קשר</Button>




                        </MDBCardBody>
                    </MDBCard>


            </div>

    );
};
