import React,{useContext,useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import imgWaze from './images/waze.png'
import imgLoction from './images/location.png'
import imgUsers from './images/users.png'
import imgYoutube from './images/youtube.png'
import Imgwebsite from './images/website.png'
import AllData from '../contexApi';
import ListComment from './ListComment';
import AddComment from './AddComment';
import imgBac from './images/arrow.png'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';




export default function HallShow({val,handleInnerClick,setShowHall}) {
    const navigate = useNavigate()
    const {getComment} = useContext(AllData)
    const {user} = useContext(AllData)
    const [editing,setEditing] = useState(false)
    const {sethallConent} = useContext(AllData)

    const sendkosher = ()=>{
        if(val.kosher == true){
            return 'כן'
        }
        else{
            return 'לא'
        }
    }


  return (
      <div style={{width:'100%',height:'100%'}}>
        <img src={imgBac} style={{height:40,margin:20,cursor:'pointer'}} onClick={()=>{setShowHall(false)}} alt="" />
         {
            editing ?(
                <AddComment val={val} setEditing={setEditing}/>
            ):(
                <div  className='mainShoHall'>
                <div className="contanerShowHall" onClick={handleInnerClick}>
      
                    <div className='descripionShowHall'>
                        <h3 className='titlePageHall'>{val.nameHall} </h3>
                        <p>{val.descriptionHall} </p>
                        <div className='properti' >
                            <h4 className='titleProperty'>מיקום <LocationOnIcon/></h4>
                            <p>{val.addersHall}</p>
                        </div>
      
                        <div className='properti' >
                            <h4 className='titleProperty'>כמות <PeopleIcon/> </h4>
                            <p>{val.minNumberGuest}- {val.maxNumberGuest} אורחים</p>
                        </div>
      
                        <div className='properti' >
                            <h4 className='titleProperty'>כשר ?</h4>
                            <p>{sendkosher()}</p>
                        </div>
      
                        <div className='properti' >
                            <h4 className='titleProperty'>סוג</h4>
                            <p>{val.typeHall}</p>
                        </div>
      
                        <Card.Body dir="ltr" className='navBarnetworks'>
                            <a href={val.linkToWaze}>
                                <img style={{ width: 30, height: 30,marginRight:15 }} src={imgWaze} />
                            </a>
                            <a href={val.linkVidioFromYouTube}>
                                <img src={imgYoutube} style={{ width: 30, height: 30, marginRight:15 }} />
                            </a>
                            <a href={val.linkToSite}>
                                <img style={{ width: 30, height: 30 ,marginRight:15}} src={Imgwebsite} />
                            </a>
                        </Card.Body>
                        <Button variant='contained' onClick={()=>{navigate('/conectToHall');sethallConent(val)}}>צור קשר</Button>

      
                    </div>
      
                    <Card.Img className='imgPageHall' variant="top" src={val.imgUrl} />
      
      
      
                </div>
      
                <ListComment IdVailu={val.IdVailu} editing={editing} setEditing={setEditing}/>
                </div>
            )
          }

         
      </div>
  )
}
