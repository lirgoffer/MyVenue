import React,{useState,useContext,useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import imgComent from './images/addComment.png'
import AllData from '../contexApi';
import Comment from './Comment';


export default function ListComment({IdVailu,editing,setEditing}) {
    const {getComment} = useContext(AllData)
    const {user} = useContext(AllData)
    const [arrComment,setArrComment]= useState([])


    useEffect(()=>{
        const get = async ()=>{
            let ret = await getComment(IdVailu)
            setArrComment(ret)
            console.log(arrComment);
        }

        get()
    },[editing])
  return (
      <div className='commentStyle'>
          <Card.Img  className='imgButtonComment' onClick={()=>{setEditing(true)}} variant="top" src={imgComent} />
          
          <div style={{display:'flex',flexWrap:'wrap',flexDirection:'row'}}>

          {
            arrComment.map((val)=>{
                return(
                    <Comment val={val}/>
                )
            })
          }
          </div>
      </div>
  )
}
