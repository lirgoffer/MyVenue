import React,{useState,useContext,useEffect} from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import AllData from "../contexApi";
import imgWaze from './images/waze.png'
import { TextField, Container, Button ,Checkbox ,FormControl,InputLabel,Select,MenuItem,Rating} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { BorderLeft } from "@mui/icons-material";
import imgRemove from './images/remove.png'
import imgEditing from './images/commentAdite.png'
import { useNavigate } from "react-router-dom";
import Hall from "./Hall";


export default function ListHall({setHallCh,setShowHall}) {
    const naviget = useNavigate()
    const {allHall} = useContext(AllData)
    const {arrShowHall}= useContext(AllData)
    const {setArrShowHall}= useContext(AllData)
    const {user} = useContext(AllData)
    const {deleteHall} = useContext(AllData)
    const [garden,setGarden]=useState(false)
    const [hall,setHall] = useState(false)
    const [kosher,setKosher] = useState(false)
    const [guests,setGuests] = useState(JSON.stringify([0]))
    const [searchValue, setSearchValue] = useState('');
    const {setHallEditing} = useContext(AllData)
    const [arrCitys,setArrCitys] = useState([])
    const [city,setCity] =useState('הכל')
    const {getComment} = useContext(AllData)


    const filterGarend = (val)=>{
        if(garden == true){
            console.log('pp');
            if(val.typeHall == 'גן'){
                return true
            }
            else{
                return false
            }
        }
        else{
            return(
                false
            )
        }
    }

    const filterHall = (val)=>{
        if(hall == true){
            console.log('pp');
            if(val.typeHall == 'אולם'){
                return true
            }
            else{
                return false
            }
        }
        else{
            return(
                false
            )
        }
    }

    const filterKosher = (val)=>{
        if(kosher == true){
            console.log('pp');
            if(val.kosher == true){
                return true
            }
            else{
                return false
            }
        }
        else{
            return(
                false
            )
        }
    }
    
    const checkSend = async (event,IdVailu) =>{
        let user2 = JSON.parse(user)
        event.stopPropagation();
        let userChoice = window.confirm("Do you want to proceed?");
        if(userChoice == true){
            let ret = await deleteHall(IdVailu,user2.userId)
            if(ret == true){
                alert("האולם נמחק בהצלחה")
            }
            else if(ret == false){
                alert('קרתה תקלה')
            }
            else{
                alert(ret)
            }
        }
    }

    const editingHall = (event,venue)=>{
        event.stopPropagation();
        setHallEditing(venue)
        naviget('/aditingHall')
    }
    
    
    const showAdmin  = (venue)=>{
        try{

            let user2 = JSON.parse(user)
            if(user2.Permissions == true){
                return <>
                <img src={imgRemove} style={{cursor:'pointer',height:30,margin:2}} onClick={(evant)=>{checkSend(evant,venue.IdVailu)}}/>
                <img src={imgEditing} style={{cursor:'pointer',height:30,margin:2}} alt="" onClick={(event)=>{editingHall(event,venue)}} />
                </>
            }
        }
        catch{
            console.log('not conect');
        }
        }

    useEffect(()=>{
        let arrCityN = []

        arrShowHall.forEach((val)=>{
            if(arrCityN.includes(val.cityHall) == false){
                arrCityN.push(val.cityHall) 
            }
        })

        arrCityN = arrCityN.sort()

        arrCityN.unshift('הכל')

        setArrCitys([...arrCityN])
    },[arrShowHall])

    


    // מבצע סינון כל פעם שיש שינוי באחד מהגדרות הסינון
    useEffect(()=>{

        let arr = [...allHall]



        if(garden == true || hall == true){
            arr = arr.filter((val)=> filterGarend(val) || filterHall(val))
        }
        if(kosher == true){
            arr = arr.filter((val)=> val.kosher == true)
        }
        if(guests != '[0]'){
            let arrNumber = JSON.parse(guests)
            console.log(arrNumber[0]);
            if(arrNumber[0] != 500){
                arr = arr.filter((val)=> Number(val.minNumberGuest) <= arrNumber[1] &&  arrNumber[0] <= Number(val.maxNumberGuest))
            }
            else{
                arr = arr.filter((val)=> Number(val.maxNumberGuest) >= arrNumber[1])
            }

        }
        if(city != 'הכל' ){
            arr = arr.filter((val)=> val.cityHall == city)
        }

        arr = arr.filter((val)=> val.nameHall.indexOf(searchValue) != -1)





        setArrShowHall([...arr])

    },[garden,hall,kosher,guests,searchValue,city])

    


  return (
      <div style={{width:'100%'}}>



          <div className="mt-4" dir="rtl" >

              {
                  arrShowHall.map(venue => (
                    <Hall venue={venue} setShowHall={setShowHall} setHallCh={setHallCh} showAdmin={showAdmin} />
                  ))

              }
              
              </div>


          <div className="search">
             
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div>
                      גן
                      <Checkbox defaultChecked checked={garden} onChange={(e) => { setGarden(e.target.checked) }} />
                  </div>
                  <div>
                      אולם
                      <Checkbox defaultChecked checked={hall} onChange={(e) => { setHall(e.target.checked) }} />
                  </div>
                  <div>
                      כשר
                      <Checkbox defaultChecked checked={kosher} onChange={(e) => { setKosher(e.target.checked) }} />
                  </div>

                  <FormControl fullWidth style={{width:110,height:30,marginTop:7,padding:0}} >
                      <InputLabel id="demo-simple-select-label" style={{background:'white'}}>  אורחים </InputLabel>
                      <Select 
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={guests}
                          label="Age"
                          onChange={(e)=>{setGuests(e.target.value)}}
                          style={{height:30,margin:0,padding:0}}
                      >
                          <MenuItem value={JSON.stringify([0, 100])}>0-100</MenuItem>
                          <MenuItem value={JSON.stringify([100, 250])}>100-250</MenuItem>
                          <MenuItem value={JSON.stringify([250, 500])}>250-500</MenuItem>
                          <MenuItem value={JSON.stringify([500, 500])}>500+</MenuItem>
                          <MenuItem value={JSON.stringify([0])}>הכל</MenuItem>


                      </Select>
                  </FormControl>

                  
                  <FormControl fullWidth style={{width:100,height:30,marginTop:7,marginRight:10,padding:0}}>
                      <InputLabel id="demo-simple-select-label" style={{background:'white'}}>  בחר עיר </InputLabel>
                      <Select 
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={city}
                          label="Age"
                          onChange={(e)=>{setCity(e.target.value);console.log(e.target.value);}}
                          style={{height:30,margin:0,padding:0}}
                      >
                          {arrCitys.map((val,index) => (
                              <MenuItem key={index} value={val}>
                                  {val}
                              </MenuItem>
                          ))}
                      </Select>
                  </FormControl>

              </div>

              <div>
                  <div className="inputSearch">
                      <input type="text" value={searchValue} onChange={(e)=>(setSearchValue(e.target.value))} style={{borderWidth:0,borderLeftWidth:0,borderRadius:0,outline: 'none',marginRight:3}}/>
                      <SearchIcon/>
                  </div>
              </div>

          </div>

      </div>

  )
}
