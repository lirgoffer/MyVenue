const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');


const urlMongoose = 'mongodb+srv://lirg177:q3ovlV6MzAoVTpJL@cluster0.x2dftog.mongodb.net/hall';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

mongoose.connect(urlMongoose, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('db is on');
    })
    .catch(err => {
        console.log('Failed to connect to MongoDB:', err.message);
    });

// Function to create ID
const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

const schemaHall = new mongoose.Schema({
    IdVailu: String,
    nameHall: String,
    addersHall: String,
    cityHall: String,
    typeHall: String,
    descriptionHall: String,
    minNumberGuest: String,
    maxNumberGuest: String,
    kosher: Boolean,
    maile: String,
    linkVidioFromYouTube: String,
    linkToWaze: String,
    imgUrl: String,
    linkToSite: String
});

const schemaUser = new mongoose.Schema({
    userId: String,
    Permissions: Boolean, // user / manager
    username: String,
    password: String,
    maile: String,
    codePssword:String
});

const schemaOpinion = new mongoose.Schema({ 
    IdOpinion: String,
    userId: String,
    rating: Number,
    text: String,
    pricePortion: String,
    eventDay: String,
    eventYear: String,
    unusualtime: String,
    upgrade: Boolean,
    timeAdd: Date,
    modified_last: Date,
    IdVailu: String
});

const collectionHall = mongoose.model('hall', schemaHall);
const collectionUser = mongoose.model('user', schemaUser);
const collectionOpinion = mongoose.model('opinion', schemaOpinion);

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, '../build')));

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
// });

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ranan97531@gmail.com',
        pass: 'azkhraqcilpsmxqw'
    }
});


app.get('/allHall', async (req, res) => {
    try {
        let arrHall = await collectionHall.find();
        res.json( arrHall );
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/newUser', async (req, res) => {

    ret = {
        userId: generateUUID(),
        Permissions: false, // user / manager
        username: req.body.username,
        password:  req.body.password,
        maile:  req.body.maile,
        codePssword:''
    }
    
    let checkUser = await collectionUser.findOne({maile:ret.maile})

    if(checkUser == null){
        await collectionUser.insertMany(ret)
        let user = await collectionUser.findOne({maile:ret.maile})
        res.json(user)
    }
    else(
        res.json(false)
    )


});


app.post('/logIn', async (req,res)=>{

    let ret = {
        password:  req.body.password,
        maile:  req.body.maile,
    }

    let checkUser = await collectionUser.findOne({maile:ret.maile,password:ret.password})

    if(checkUser == null){
        res.json(false)
    }
    else{
        res.json(checkUser)
    }
})


// update password user
app.post('/getCodeToSebd', async (req,res)=>{
    let ret = {
        maile : req.body.maile
    }

    
    let checkUser = await collectionUser.findOne({maile:ret.maile})

    if(checkUser == false){
        return false
    }
    else{
        let code = Math.floor(Math.random() * (9999-1111)) + 1111
        let check = await collectionUser.updateOne({maile:ret.maile},{$set:{codePssword:code}})

        if(check.modifiedCount == 1){

            try{
                let mailOptions = {
                    from: 'ranan97531@gmail.com',
                    to: ret.maile,
                    subject: 'קיבלת קוד לאיפוס סיסמה',
                    text: `הכנס את הקוד הזה ${code}`
                };
                
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                res.json(true)
            } catch {
               res.json(false) 
            }
        }
        else{
            res.json(false)
        }


    }
})

app.post('/checkCodePasswrd',async (req,res)=>{
    ret={
        codePssword:req.body.codePssword,
        maile:req.body.maile
    }

    let checkCode =  await collectionUser.findOne({maile:ret.maile,codePssword:ret.codePssword})

    if(checkCode == null){
        res.json(false)
    }
    else(
        res.json(true)
    )
})


app.post('/updatePssword',async (req,res)=>{
    let ret = {
        password: req.body.password,
        maile: req.body.maile,
        codePssword:req.body.codePssword
    }

    let checkCode =  await collectionUser.findOne({maile:ret.maile,codePssword:ret.codePssword})

    if(checkCode == null){
        res.json(false)
    }
    else{
        checkCode = await collectionUser.updateOne({maile:ret.maile},{$set:{password:ret.password}})
        res.json(true)
    }

})



app.post('/getCommentHall', async (req,res)=>{
    let ret = {
        IdVailu: req.body.IdVailu
    }
    let arrComment = await collectionOpinion.find({IdVailu:ret.IdVailu})
    res.json(arrComment)
})


app.post('/getNameUserComment', async (req,res)=>{
    let ret ={
        userId: req.body.userId
    }
    let user = await collectionUser.findOne({userId:ret.userId})
    if(user != null){
        res.json({nameUser:user.username})
    }
    else{
        res.json({name:'anonimy'})
    }
})


app.post('/addNewComment', async (req,res)=>{
    try{
        ret = {
            IdOpinion: generateUUID(),
            userId: req.body.userId,
            rating: req.body.rating,
            text:req.body.text,
            pricePortion:  '',
            eventDay: req.body.eventDay,
            eventYear: req.body.eventYear,
            unusualtime: req.body.unusualtime,
            upgrade: req.body.upgrade,
            timeAdd: req.body.timeAdd,
            modified_last: new Date(),
            IdVailu: req.body.IdVailu
        }

        let check = await collectionOpinion.insertMany(ret)

        res.json(true)
    }
    catch{
        res.json(false)
    }

})


app.post('/conectToAdmin', async (req,res)=>{
    let ret =  {
        mail: req.body.mail,
        nameConect: req.body.nameConect,
        lastName:req.body.lastName,
        phone:req.body.phone
    }

    let mailOptions = {
        from: 'ranan97531@gmail.com',
        to: 'ranan97531@gmail.com',
        subject: 'לקוח חדש',
        text: `שם : ${ret.nameConect} ${ret.lastName} \n פאלפון : ${ret.phone} \n מייל : ${ret.mail}`
    };

    try{

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.json(false)
            }
            else {
                console.log('Email sent: ' + info.response);
                res.json(true)
            }
        });
    }
    catch{
        res.json(false)
    }



})

app.post('/addNewHall', async (req,res)=>{
    let ret = {
        IdVailu: generateUUID(),
        nameHall: req.body.nameHall,
        addersHall: req.body.addersHall,
        cityHall: req.body.cityHall,
        typeHall: req.body.typeHall,
        descriptionHall: req.body.descriptionHall,
        minNumberGuest: req.body.minNumberGuest,
        maxNumberGuest: req.body.maxNumberGuest,
        kosher: req.body.kosher,
        maile: req.body.maile,
        linkVidioFromYouTube: req.body.linkVidioFromYouTube,
        linkToWaze: req.body.linkToWaze,
        imgUrl: req.body.imgUrl,
        linkToSite: req.body.linkToSite
    }

    let userIdCheck = req.body.userId

    let checkUser = await collectionUser.findOne({userId:userIdCheck})
    if(checkUser.Permissions == true){
        try{
            await collectionHall.insertMany(ret)
            res.json(true)
        }
        catch{
            res.json(false)
        }
    }
    else{
        res.json('למשתמש שלך אין הרשאה')
    }
})

app.post('/deleteHall', async (req,res)=>{
    let IdVailuCheck = req.body.IdVailu
    let userIdCheck = req.body.userId

    let checkUser = await collectionUser.findOne({userId:userIdCheck})
    if(checkUser.Permissions == true){
        try{
            await collectionHall.deleteOne({IdVailu:IdVailuCheck})
            res.json(true)
        }
        catch{
            res.json(false)
        }
    }
    else{
        res.json('למשתמש שלך אין הרשאה')
    }
})

app.post('/editingHall', async (req,res)=>{
    let ret = {
        nameHall: req.body.nameHall,
        addersHall: req.body.addersHall,
        cityHall: req.body.cityHall,
        typeHall: req.body.typeHall,
        descriptionHall: req.body.descriptionHall,
        minNumberGuest: req.body.minNumberGuest,
        maxNumberGuest: req.body.maxNumberGuest,
        kosher: req.body.kosher,
        maile: req.body.maile,
        linkVidioFromYouTube: req.body.linkVidioFromYouTube,
        linkToWaze: req.body.linkToWaze,
        imgUrl: req.body.imgUrl,
        linkToSite: req.body.linkToSite
    }

    let userIdCheck = req.body.userId
    let IdVailuCheck = req.body.IdVailu

    let checkUser = await collectionUser.findOne({userId:userIdCheck})
    if(checkUser.Permissions == true){
        try{
            await collectionHall.updateOne({IdVailu:IdVailuCheck},{$set:{...ret}})
            res.json(true)
        }
        catch{
            res.json(false)
        }
    }
    else{
        res.json('אין לך הרשאות משתמש')
    }

})




const addComment = async () => {
    try{
        ret = {
            IdOpinion: generateUUID(),
            userId: '7d6480a8-c9e1-43ac-bb31-7d49b8458bf0',
            rating: 6,
            text:'היה אירוע מעולה מאוד  נהננו ממליצים בחום',
            pricePortion:  '100',
            eventDay: 'שני',
            eventYear: "2024",
            unusualtime:'',
            upgrade: false,
            timeAdd: new Date(),
            modified_last: new Date(),
            IdVailu: '819bbb1c-946d-410d-87be-16f869f76f56'
        }
    
        let check = await collectionOpinion.insertMany(ret)
        console.log(check);
    }
    catch{
        console.log('not');
    }
}

// addComment()






















const addUser = async () => {
    ret = {
        userId: generateUUID(),
        Permissions: false, // user / manager
        username: 'raanan',
        password:  '25240RA',
        maile:  'ranan97531@gmail.com',

    }
    
    let checkUser = await collectionUser.findOne({maile:ret.maile})

    console.log(checkUser);

}



const addHall = async () => {
    let ret = {
        IdVailu: generateUUID(),
        nameHall: 'la-bel',
        addersHall: 'ירושלים תלפיות',
        cityHall: 'ירושלים',
        typeHall: 'חתונות',
        descriptionHall: 'אולם חתונות עח 600 איש לכל שיעשה את החתונה שלכם הכי שמיחה ומהנה',
        minNumberGuest: '300',
        maxNumberGuest: '600',
        kosher: true,
        maile: 'fabilion@g,ail.com',
        linkVidioFromYouTube: 'https://www.youtube.com/watch?v=izn23aKk_r0',
        linkToWaze: 'https://engaged.co.il/images/stories/deals/504/images/.jpg',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBx4dy9eOl1zBdWx87dR0zEPBYjQHYkkyZA&s'
    };

    try {
        await collectionHall.insertMany(ret);
        console.log('Hall added successfully');
    } catch (err) {
        console.log('Failed to add hall:', err.message);
    }
};

// addHall(); // הפעלת הפונקציה להוספת אולם חדש

app.listen(80, () => {
    console.log('Server is running on port 80');
});
