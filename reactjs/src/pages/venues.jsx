import React,{useState,useContext,useEffect} from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AllData from "../contexApi";
import imgWaze from './images/waze.png'
import HallShow from "./HallShow";
import ListHall from "./ListHall";

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
                    ): (
                        <ListHall setHallCh={setHallCh} setShowHall={setShowHall}/>
                    )

                }

                
        </div>
    );
}

export default Venues;