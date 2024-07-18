import React,{useState,useEffect,useContext} from 'react'
import AllData from '../contexApi';
import img from './images/commentAdite.png'
import { Rating } from '@mui/material';



export default function Comment({val}) {
  const [nameUser,setNameUser]=useState('pp')
  const {getNameComment}=useContext(AllData)
  const {user}= useContext(AllData)
  const [dateComment,setDateComment] = useState('')
  const [date,setDate]=useState(new Date(val.timeAdd))
  const [editing,setEditing]= useState(false)

  useEffect(()=>{
    const get = async ()=>{
        let ret = await getNameComment(val.userId)
        console.log(ret);
        setNameUser(ret)
    }

    let user2 = JSON.parse(user) 
    if(user2.userId == val.userId){
        setEditing(true)
        console.log(true);
    }
    get()

    let dateComment1 = new Date(val.modified_last)
    let day = new Date()

    const timeDifference = day - dateComment1;


    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if(days == 0 ){
        setDateComment('היום')
    }
    else{
        setDateComment(`לפני ${days} ימים`)
    }


    console.log(val.timeAdd);
  },[])

  return (
    <div className='commentStyleOne'>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            
            <div className='sircelHeader'>
                {nameUser[0]}
            </div>

              <div style={{marginRight:10,padding:0}}>
                  <p style={{padding:0,margin:0,fontWeight:'600'}}>{dateComment}</p>
                  <p style={{padding:0,margin:0}}>{nameUser}</p>
              </div>

        </div>

        <p style={{margin:15,marginRight:30}}>
            "
            {val.text}
            "
        </p>


        <Rating
        name="read-only"
        value={val.rating}
        readOnly 
        style={{position:'absolute',bottom:50,left:10}}

      />

        <div style={{bottom:0,position:'absolute',borderTopColor:'gray',borderTopStyle:'solid',borderWidth:2,width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',padding:4,alignItems:'center'}}>
            <p style={{padding:0,margin:0}}>תאריך :{`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</p>
            {
                editing ?(
                    <img onClick={()=>{setEditing(true)}} src={img} alt="עריכה" style={{height:30,cursor:'pointer'}}/>
                ):(
                    <div></div>
                )
            }
        </div>

    </div>
  )
}