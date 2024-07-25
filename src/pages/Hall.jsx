import React,{useState,useContext,useEffect} from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import imgWaze from './images/waze.png'
import { TextField, Container, Button ,Checkbox ,FormControl,InputLabel,Select,MenuItem,Rating} from '@mui/material';
import AllData from "../contexApi";


export default function Hall({venue,setShowHall,setHallCh,showAdmin}) {
    const [rating,setRating] = useState(1)
    const {getComment} = useContext(AllData)
    const [sumComent,setSumComment] = useState(0)

    useEffect(()=>{
        const ratingSum = async (IdVailu) => {
            let arr = await getComment(IdVailu)
            let rating2 = 0
            let sum = 0
            if (arr != false) {
                arr.forEach((val) => {
                    rating2 += val.rating
                    sum++
                })

                setRating(rating2 / sum) 
            }
            else {
                setRating(2)
            }
            setSumComment(sum)

        }
        ratingSum(venue.IdVailu)
    },[])
  return (
      <Card className="card2" onClick={() => { setShowHall(true); setHallCh(venue) }}  >
          <Card.Img variant="top" src={venue.imgUrl}  style={{maxHeight:180}}/>
          <Card.Body>
              <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                  <Card.Title>{venue.nameHall}</Card.Title>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Rating
                          name="read-only"
                          value={rating}
                          readOnly
                      />
                      <span style={{ marginLeft: '10px' }}>{`(${sumComent})`}</span>
                  </div>
              </div>
              <Card.Text>{venue.descriptionHall.slice(0, 100)}...</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
              <ListGroup.Item>{venue.cityHall}</ListGroup.Item>
              {/* <ListGroup.Item>{venue.moreDetails}</ListGroup.Item> */}
          </ListGroup>
          <Card.Body dir="ltr">
              <a href={venue.linkToWaze}>
                  <img src={imgWaze} style={{height:30,cursor:'pointer',margin:2}}/>
              </a>
              {
                  showAdmin(venue)
              }
              {/* <Card.Link href={venue.link}>קישור לעמוד המציג את האולם</Card.Link> */}
          </Card.Body>
      </Card>
  )
}
