import React,{useState,useContext,useEffect} from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import AllData from "../contexApi";
import imgWaze from './images/waze.png'
import { TextField, Container, Button ,Checkbox ,FormControl,InputLabel,Select,MenuItem} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { BorderLeft } from "@mui/icons-material";
import imgRemove from './images/remove.png'
import imgEditing from './images/commentAdite.png'
import { useNavigate } from "react-router-dom";


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
    const [guests,setGuests] = useState(0)
    const [searchValue, setSearchValue] = useState('');
    const {setHallEditing} = useContext(AllData)


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
            let user2 = JSON.parse(user)
            if(user2.Permissions == true){
                return <>
                <img src={imgRemove} style={{cursor:'pointer'}} onClick={(evant)=>{checkSend(evant,venue.IdVailu)}}/>
                <img src={imgEditing} style={{cursor:'pointer'}} alt="" onClick={(event)=>{editingHall(event,venue)}} />
                </>
            }
        }


    // מבצע סינון כל פעם שיש שינוי באחד מהגדרות הסינון
    useEffect(()=>{

        let arr = [...allHall]

        if(garden == true || hall == true){
            arr = arr.filter((val)=> filterGarend(val) || filterHall(val))
        }
        if(kosher == true){
            arr = arr.filter((val)=> val.kosher == true)
        }
        if(guests > 0){
            console.log('Ok');
            arr.forEach((val)=>{
                if( Number(val.minNumberGuest) <= guests){
                    console.log(true);
                }
                else{
                    console.log(false);
                }
            })
            arr = arr.filter((val)=> Number(val.minNumberGuest) <= guests && guests <= Number(val.maxNumberGuest))
        }
        arr = arr.filter((val)=> val.nameHall.indexOf(searchValue) != -1)


        setArrShowHall([...arr])

    },[garden,hall,kosher,guests,searchValue])

    


  return (
      <div style={{width:'100%'}}>



          <div className="mt-4" dir="rtl" >

              {
                  arrShowHall.map((venue) => (
                      <Card className="card2" onClick={() => { setShowHall(true); setHallCh(venue) }}  >
                          <Card.Img variant="top" src={venue.imgUrl} />
                          <Card.Body>
                              <Card.Title>{venue.nameHall}</Card.Title>
                              <Card.Text>{venue.descriptionHall.slice(0, 100)}...</Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                              <ListGroup.Item>{venue.addersHall}</ListGroup.Item>
                              {/* <ListGroup.Item>{venue.moreDetails}</ListGroup.Item> */}
                          </ListGroup>
                          <Card.Body dir="ltr">
                              <a href={venue.linkToWaze}>
                                  <img src={imgWaze} />
                              </a>
                              {
                                showAdmin(venue)
                              }
                              {/* <Card.Link href={venue.link}>קישור לעמוד המציג את האולם</Card.Link> */}
                          </Card.Body>
                      </Card>
                  ))

              }</div>


          <div style={{ width: '100%',justifyContent:'space-between',paddingLeft:30 ,position: 'fixed', top: 70, display: 'flex', flexDirection: 'row', alignItems:'center' ,borderBottomWidth: 1, height: 55, borderBottomColor: 'gray', borderBottomStyle: 'solid', paddingRight: 15 ,background:'white' }}>
             
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

                  <FormControl fullWidth style={{width:100,height:30,marginTop:7,padding:0}}>
                      <InputLabel id="demo-simple-select-label">  אורחים </InputLabel>
                      <Select 
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={guests}
                          label="Age"
                          onChange={(e)=>{setGuests(e.target.value);console.log(e.target.value);}}
                          style={{height:30,margin:0,padding:0}}
                      >
                          <MenuItem value={100}>100</MenuItem>
                          <MenuItem value={300}>300</MenuItem>
                          <MenuItem value={500}>500</MenuItem>
                          <MenuItem value={0}>הכל</MenuItem>

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
