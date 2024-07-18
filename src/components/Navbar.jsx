import React,{useContext,useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import imgUser from '../pages/images/user.png'
import AllData from '../contexApi'


const CustomNavbar = () => {
    const [userShow,setUserShow]=useState('אינך מחובר')
    const {user} = useContext(AllData)


    useEffect(()=>{
        if(user != null){
            let user2  = JSON.parse(user)
            setUserShow(user2.username)
        }
    },[user])
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" dir="rtl" >
            <Container style={{display:'flex',justifyContent:'space-between',padding:0,width:'100%'}}>
            <div style={{display:'flex',alignItems:'center',flexDirection:'row',justifyContent:'space-around'}}>
                <img src={imgUser} style={{ height: 40,margin:10 }} />
                <p style={{margin:'auto'}}>{userShow}</p>
            </div>
                <Navbar.Brand as={Link} to="/"></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto text-right">
                        <Nav.Link as={Link} to="/">דף הבית</Nav.Link>
                        <Nav.Link as={Link} to="/venues">אולמות האירועים</Nav.Link>
                        <Nav.Link as={Link} to="/login">התחברות</Nav.Link>
                        <Nav.Link as={Link} to="/register">הרשמה</Nav.Link>
                        <Nav.Link as={Link} to="/about">קצת עלינו</Nav.Link>
                        <Nav.Link as={Link} to="/contact">צור קשר</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default CustomNavbar;
