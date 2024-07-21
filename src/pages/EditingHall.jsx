import React, { useContext,useState } from 'react'
import AllData from '../contexApi'
import { useNavigate } from 'react-router-dom'
import { TextField,FormControl,InputLabel,Select,MenuItem,Button,Checkbox } from '@mui/material'

export default function EditingHall() {
    const navigat = useNavigate()
    const {aditingHall} =useContext(AllData)
    const {user} = useContext(AllData)
    const {hallEditing} = useContext(AllData)
    const [nameHall,setNameHall] =useState(hallEditing.nameHall)
    const [addersHall,setAddersHall] =useState(hallEditing.addersHall)
    const [cityHall,setCityHall] =useState(hallEditing.cityHall)
    const [typeHall,setTypeHall] = useState(hallEditing.typeHall)
    const [descriptionHall,setDescriptionHall] = useState(hallEditing.descriptionHall)
    const [minNumberGuest,setMinNumberGuest] = useState(hallEditing.minNumberGuest)
    const [maxNumberGuest,setMaxNumberGuest] = useState(hallEditing.maxNumberGuest)
    const [kosher,setKosher] = useState(hallEditing.kosher)
    const [maile,setMaile] = useState(hallEditing.maile)
    const [linkVidioFromYouTube,setlinkVidioFromYouTube] = useState(hallEditing.linkVidioFromYouTube)
    const [linkToWaze,setLinkToWaze] = useState(hallEditing.linkToSite)
    const [imgUrl,setImgUrl] = useState(hallEditing.imgUrl)
    const [linkToSite,setLinkToSite] = useState(hallEditing.linkToSite)





    const checkAndSend = async () =>{
        if(nameHall.length < 2){
            alert('לא הוכנס שם אולם')
        }
        else if(addersHall.length < 4){
            alert('לא הוכנס כתובת')
        }
        else if(cityHall.length < 3){
            alert('לא הוכנסה עיר')
        }
        else{
            let user2 = JSON.parse(user)
            let ret = await aditingHall(nameHall,addersHall,cityHall,typeHall,descriptionHall,minNumberGuest,maxNumberGuest,kosher,maile,linkVidioFromYouTube,linkToWaze,imgUrl,linkToSite,user2.userId,hallEditing.IdVailu)
            if(ret == true){
                alert(' הפרטים עודכנו ')
                navigat('/venues')
            }
            else if(ret == false){
                alert('קרתה תקלה ')
            }
            else{
                alert(ret)
            }
        }
    }

  return (
    <div className='conectToAdmin' style={{justifyContent:'center'}}>
        <div>
            <p style={{margin:20, marginTop:25,fontWeight:'bold'}}>הוסף אולם</p>
            <div className='addHallShow'>
                  <TextField variant='filled' value={nameHall} onChange={(e)=>{setNameHall(e.target.value)}} label='הכנס את שם האולם' inputProps={{ dir: 'rtl' }} sx={{
                      '& .MuiInputLabel-root': {
                          left: 'auto',
                          right: 15,
                          transformOrigin: 'top right',
                      },
                      marginTop: 3,
                      width:'20%'
                  }} />
                  <TextField variant='filled' value={addersHall} onChange={(e)=>{setAddersHall(e.target.value)}} label='הכנס את  כתובת האולם' inputProps={{ dir: 'rtl' }} sx={{
                      '& .MuiInputLabel-root': {
                          left: 'auto',
                          right: 15,
                          transformOrigin: 'top right',
                      },
                      marginTop: 3,
                      width:'20%'

                  }} />
                  <TextField variant='filled' value={linkToSite} onChange={(e)=>{setLinkToSite(e.target.value)}}  label='הכנס כתובת אתר האולם' inputProps={{ dir: 'rtl' }} sx={{
                      '& .MuiInputLabel-root': {
                          left: 'auto',
                          right: 15,
                          transformOrigin: 'top right',
                      },
                      marginTop: 3,
                      width:'20%'

                  }} />
                   <TextField variant='filled' value={cityHall} onChange={(e)=>{setCityHall(e.target.value)}} label='הכנס עיר ' inputProps={{ dir: 'rtl' }} sx={{
                      '& .MuiInputLabel-root': {
                          left: 'auto',
                          right: 15,
                          transformOrigin: 'top right',
                      },
                      marginTop: 3,
                      width:'20%'

                  }} />
                  
                  <TextField variant='filled' value={descriptionHall} onChange={(e)=>{setDescriptionHall(e.target.value)}} label='הכנס תיאור אולם' multiline inputProps={{ dir: 'rtl' }} rows={5} ro sx={{
                      '& .MuiInputLabel-root': {
                          left: 'auto',
                          right: 15,
                          transformOrigin: 'top right',
                      },
                      marginTop: 3,
                      width:'100%',

                  }} />
                  <TextField variant='filled' value={minNumberGuest} onChange={(e)=>{setMinNumberGuest(e.target.value)}} label='הכנס מספר אורחים מינימלי' type='number' inputProps={{ dir: 'rtl' }} sx={{
                      '& .MuiInputLabel-root': {
                          left: 'auto',
                          right: 15,
                          transformOrigin: 'top right',
                      },
                      marginTop: 3,
                      width:'20%'

                  }} />
                  <TextField variant='filled' value={maxNumberGuest} onChange={(e)=>{setMaxNumberGuest(e.target.value)}} label='הכנס מספר אורחים מקסימלי' type='number' inputProps={{ dir: 'rtl' }} sx={{
                      '& .MuiInputLabel-root': {
                          left: 'auto',
                          right: 15,
                          transformOrigin: 'top right',
                      },
                      marginTop: 3,
                      width:'20%'

                  }} />

                  <TextField variant='filled' value={imgUrl} onChange={(e)=>{setImgUrl(e.target.value)}} label='הכנס קישור לתמונה'  inputProps={{ dir: 'rtl' }} sx={{
                      '& .MuiInputLabel-root': {
                          left: 'auto',
                          right: 15,
                          transformOrigin: 'top right',
                      },
                      marginTop: 3,
                      width: '20%'

                  }} />
                   <TextField variant='filled' value={linkVidioFromYouTube} onChange={(e)=>{setlinkVidioFromYouTube(e.target.value)}} label='הכנס קישור  ליוטיוב'  inputProps={{ dir: 'rtl' }} sx={{
                      '& .MuiInputLabel-root': {
                          left: 'auto',
                          right: 15,
                          transformOrigin: 'top right',
                      },
                      marginTop: 3,
                      width:'20%'

                  }} />
                   <TextField variant='filled' value={linkToWaze} onChange={(e)=>{setLinkToWaze(e.target.value)}} label='הכנס קישור לוויז'  inputProps={{ dir: 'rtl' }} sx={{
                      '& .MuiInputLabel-root': {
                          left: 'auto',
                          right: 15,
                          transformOrigin: 'top right',
                      },
                      marginTop: 3,
                      width:'23%'

                  }} />
                  <TextField variant='filled' value={maile} onChange={(e)=>{setMaile(e.target.value)}}  label='הכנס מייל ליצירת קשר '  inputProps={{ dir: 'rtl' }} sx={{
                      '& .MuiInputLabel-root': {
                          left: 'auto',
                          right: 15,
                          transformOrigin: 'top right',
                      },
                      marginTop: 3,
                      width:'70%'

                  }} />

                  <div style={{display:'flex',flexDirection:'row',width:'50%'}}>
                  <div style={{width:150}}>
                      <p style={{fontWeight:'bold',display:'inline'}}>כשר</p>
                      <Checkbox checked={kosher} onChange={(e)=>{setKosher(e.target.checked)}}/>
                  </div>
                  <FormControl fullWidth style={{width:'20%',height:50}}>
                      <InputLabel id="demo-simple-select-label">  בחר סוג  </InputLabel>
                      <Select 
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={typeHall}
                          label="Age"
                          onChange={(e)=>{setTypeHall(e.target.value);console.log(e.target.value);}}
                          style={{height:40}}
                      >
                          <MenuItem value={'גן'}>גן</MenuItem>
                          <MenuItem value={'אולם'}>אולם</MenuItem>

                      </Select>
                  </FormControl>
                 
                  </div>
                  <Button variant='contained' onClick={checkAndSend}>שלח</Button>


            </div>
        </div>
    </div>
  )
}
