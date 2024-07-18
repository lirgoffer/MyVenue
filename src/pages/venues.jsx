import React,{useState,useContext,useEffect} from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AllData from "../contexApi";
import imgWaze from './images/waze.png'
import HallShow from "./HallShow";

function Venues() {
    const {allHall}= useContext(AllData)
    const [hallCh,setHallCh] = useState(allHall[0])
    const [showHall,setShowHall] = useState(false)


    const handleOuterClick = () => {
        console.log('Clicked outer div');
        setShowHall(false);
    };

    const handleInnerClick = (e) => {
        e.stopPropagation(); // לעצור את ההתפשטות של האירוע
        console.log('Clicked inner div');
        setShowHall(true);
    };
    
    useEffect(()=>{
        let str = 'ooo0000'
        let result = str.slice(0, 5); // "Hello"
        console.log(result);

    },[])
    
    

    return (

        <div className="mt-4" dir="rtl">
              

                {
                    showHall ? (
                            <HallShow val={hallCh} handleInnerClick={handleInnerClick} setShowHall={setShowHall}/>
                    ): allHall.map((venue) => (
                        <Card className="card2" onClick={()=>{setShowHall(true);setHallCh(venue)}}  >
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
                                <img src={imgWaze}/>
                                </a>
                                {/* <Card.Link href={venue.link}>קישור לעמוד המציג את האולם</Card.Link> */}
                            </Card.Body>
                        </Card>
                ))

                }

                
        </div>
    );
}

export default Venues;