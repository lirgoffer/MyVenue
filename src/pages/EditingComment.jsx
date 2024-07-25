import React,{useState,useContext} from 'react'
import { TextField, Container, Button,Select ,MenuItem,em,InputLabel,FormControl,Switch } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { render } from 'react-dom'
import ReactStars from 'react-stars'
import AllData from '../contexApi';
import dayjs from 'dayjs'; 
import { useNavigate } from 'react-router-dom';


export default function EditingComment() {
    const navigate = useNavigate()
    const commentEditing = JSON.parse(sessionStorage.getItem('comment')) 
    const [selectedDate, setSelectedDate] = useState( dayjs(commentEditing.addTime) );
    const [unusualtime,setUnusualtime] = useState(commentEditing.unusualtime)
    const [reating,setRating] = useState(commentEditing.rating)
    const [upgrade,setUpgrade] =useState(commentEditing.upgrade)
    const [text,setText] = useState(commentEditing.text)
    const {user}= useContext(AllData)
    const {editingComment} = useContext(AllData)

    const ratingChanged = (newRating) => {
        setRating(newRating)
      }

    const handleDateChange = (date) => {
        let d = new Date(date)
        setSelectedDate(d);
      };
    
    
    const sendComment = async ()=>{
        if(selectedDate == null)(
            alert('לא הוכנס תאריך')
        )
        else if(text.length < 2){
            alert('לא הוכנסה תגובה')
        }
        else{
            let user2 = JSON.parse(user)
            let date= new Date(selectedDate)
            let ret = await editingComment(reating,text,date.getDay(),date.getFullYear(),unusualtime,upgrade,selectedDate,user2.userId,commentEditing.IdOpinion)
            if(ret == true){
                navigate('/venues')

            }
            else{
                alert('משהו השתבש נסה שוב')
            }

        }
      }

  return (
    <div className='addComment' style={{paddingTop:100}}>
            <div className='addCommentMaine' dir='rtl'>
            <p style={{fontSize:25,padding:20,fontWeight:'600'}}>הוסף תגובה</p>
            

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']} >
                      <DatePicker value={selectedDate} onChange={handleDateChange} />
                  </DemoContainer>
              </LocalizationProvider>

              
              <TextField
                  id="outlined-multiline-static"
                  label="הכנס תגובה "
                  multiline
                  rows={6}
                  defaultValue="הכנס תגובה "
                  style={{
                    width:'100%',
                    marginTop:20
                  }}
                  value={text}
                  onChange={(e)=>{setText(e.target.value)}}
              />

              <div style={{width:'100%',marginTop:10,display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                  <FormControl fullWidth style={{width:200}}>
                      <InputLabel id="demo-simple-select-label">זמן חריג</InputLabel>
                      <Select 
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={unusualtime}
                          label="Age"
                          onChange={(e)=>{setUnusualtime(e.target.value);console.log(e.target.value);}}
                      >
                          <MenuItem value={'קורנה'}>קורנה</MenuItem>
                          <MenuItem value={'מלחמה'}>מלחמה</MenuItem>
                          <MenuItem value={'חגים'}>חגים</MenuItem>
                      </Select>
                  </FormControl>

                  <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                    <p style={{margin:0,padding:0}}>שדרוג מנה</p>
                  <Switch defaultChecked checked={upgrade} onChange={(e)=>{setUpgrade(e.target.checked);console.log(e.target.checked);}}/>
                  </div>

              </div>

              <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:20}}>
                  <Button variant="contained" color="success" onClick={sendComment}>
                      שלח
                  </Button>
                  <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      color2={'#ffd700'}
                      value={reating} />
              </div>




            
            </div>
    </div>
  )
}
