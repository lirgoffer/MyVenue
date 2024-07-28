import React, { createContext, useState, useEffect } from "react";


const AllData = createContext()

const addresIp = process.env.API_URL || 'http://localhost:3001';

const KEYUSER = 'userLogOlam'


export const Data = ({ children }) => {

    const [user, setUser] = useState(null)
    const [allHall, setAllHall] = useState([])
    const [arrShowHall, setArrShowHall] = useState([])
    const [hallEditing, setHallEditing] = useState({})
    const [hallConent, sethallConent] = useState()
    const [commentEditing, setCommentEditing] = useState()




    // עידכון בתחילת הרצת האצר 
    const updateStart = () => {
        let user = localStorage.getItem(KEYUSER)
        setUser(user)

        fetch(`${addresIp}/allHall`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllHall(data)
                setArrShowHall(data)
            })
            .catch(err => {
                console.log(err);
            })
    }


    // פונקציות בתחברות והרשמה 
    const signUp = async (username, password, maile,) => {
        return await fetch(`${addresIp}/newUser`, {
            headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                username,
                password,
                maile,
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data != false) {
                    localStorage.setItem(KEYUSER, JSON.stringify(data))
                    updateStart()
                    console.log(data);
                }
                return (data)
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const logIn = async (password, maile) => {
        return await fetch(`${addresIp}/logIn`, {
            headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                password,
                maile,
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data == false) {
                    return false
                }
                else {
                    localStorage.setItem(KEYUSER, JSON.stringify(data))
                    updateStart()
                    return data
                }
            })
            .catch(err => {
                console.log(err);
            })




    }



    // פונקציות עדכון סיסמה 
    const sendCodeToUpdatePassword = async (maile) => {
        return await fetch(`${addresIp}/getCodeToSebd`, {
            headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                maile
            })
        })
            .then(res => res.json())
            .then(data => {
                return data
            })
            .catch(err => {
                console.log(err);
            })
    }

    const checkCode = async (codePssword, maile) => {
        return await fetch(`${addresIp}/checkCodePasswrd`, {
            headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                codePssword,
                maile
            })
        })
            .then(res => res.json())
            .then(data => {
                return data
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const updatePsswordServer = async (password, maile, codePssword) => {
        return await fetch(`${addresIp}/updatePssword`, {
            headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                password,
                maile,
                codePssword
            })
        })
            .then(res => res.json())
            .then((data) => {
                return data
            })
            .catch(err => {
                console.log(err);
            })
    }


    // קבלת כל התגובות של האולם 
    const getComment = async (IdVailu) => {
        return await fetch(`${addresIp}/getCommentHall`, {
            headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                IdVailu
            })
        })
            .then(res => res.json())
            .then(data => data)
            .catch(err => {
                console.log(err);
            })
    }

    const getNameComment = async (userId) => {
        return await fetch(`${addresIp}/getNameUserComment`, {
            headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                userId
            })
        })
            .then(res => res.json())
            .then(data => {
                return data.nameUser
            })
            .catch(err => {
                console.log(err);
            })
    }

    const conectNew = async (mail, nameConect, lastName, phone) => {
        return await fetch(`${addresIp}/conectToAdmin`, {
            headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                mail,
                nameConect,
                lastName,
                phone
            })
        })
            .then(res => res.json())
            .then(data => {
                return data
            })
            .catch((e) => {
                console.log(e);
            })
    }

    const addNewHall = async (nameHall, addersHall, cityHall, typeHall, descriptionHall, minNumberGuest, maxNumberGuest, kosher, maile, linkVidioFromYouTube, linkToWaze, imgUrl, linkToSite, userId) => {
        return await fetch(`${addresIp}/addNewHall`, {
            headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                nameHall,
                addersHall,
                cityHall,
                typeHall,
                descriptionHall,
                minNumberGuest,
                maxNumberGuest,
                kosher,
                maile,
                linkVidioFromYouTube,
                linkToWaze,
                imgUrl,
                linkToSite,
                userId
            })
        })
            .then(res => res.json())
            .then((data) => {
                return data
            })
            .catch((e) => {
                console.log(e);
            })


    }

    const deleteHall = async (IdVailu, userId) => {
        return await fetch(`${addresIp}/deleteHall`, {
            headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                IdVailu,
                userId
            })
        })
            .then(res => res.json())
            .then((data) => {
                return data
            })
            .catch((e) => {
                console.log(e);
            })
    }

    const aditingHall = async (nameHall, addersHall, cityHall, typeHall, descriptionHall, minNumberGuest, maxNumberGuest, kosher, maile, linkVidioFromYouTube, linkToWaze, imgUrl, linkToSite, userId, IdVailu) => {
        return await fetch(`${addresIp}/editingHall`, {
            headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                nameHall,
                addersHall,
                cityHall,
                typeHall,
                descriptionHall,
                minNumberGuest,
                maxNumberGuest,
                kosher,
                maile,
                linkVidioFromYouTube,
                linkToWaze,
                imgUrl,
                linkToSite,
                userId,
                IdVailu
            })
        })
            .then(res => res.json())
            .then((data) => {
                return data
            })
            .catch((e) => {
                console.log(e);
            })
    }

    const conectNewHall = async (mail, nameConect, lastName, phone, mailHall) => {
        return await fetch(`${addresIp}/coonectToHall`, {
            headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                mail,
                nameConect,
                lastName,
                phone,
                mailHall
            })
        })
            .then(res => res.json())
            .then(data => {
                return data
            })
            .catch((e) => {
                console.log(e);
            })
    }

    const deleteComment = async (commentId, userId) => {
        try {
            const response = await fetch(`${addresIp}/delete-comment/${commentId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId })
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message);
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while deleting the comment');
        }
    };

    const editingComment = async (rating, text, eventDay, eventYear, unusualtime, upgrade, timeAdd, userId, IdOpinion) => {
        return await fetch(`${addresIp}/editingComment`, {
            headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                rating,
                text,
                eventDay,
                eventYear,
                unusualtime,
                upgrade,
                timeAdd,
                userId,
                IdOpinion
            })
        })
            .then(res => res.json())
            .then((data) => {
                return data
            })
            .catch((e) => {
                console.log(e);
            })
    }





    // הןספת תגובה 

    const AddCommentServer = async (userId, rating, text, eventDay, eventYear, unusualtime, upgrade, timeAdd, IdVailu) => {
        return await fetch(`${addresIp}/addNewComment`, {
            headers: { "Accept": 'application/json', 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                userId,
                rating,
                text,
                eventDay,
                eventYear,
                unusualtime,
                upgrade,
                timeAdd,
                IdVailu
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                return data
            })
            .catch((e) => {
                console.log(e);
            })
    }


    useEffect(() => {
        updateStart()
    }, [])







    return (
        <AllData.Provider value={{ editingComment, deleteComment, conectNewHall, hallConent, sethallConent, setUser, aditingHall, hallEditing, setHallEditing, deleteHall, addNewHall, conectNew, arrShowHall, setArrShowHall, allHall, signUp, user, logIn, sendCodeToUpdatePassword, checkCode, updatePsswordServer, getComment, getNameComment, AddCommentServer }}>{children}</AllData.Provider>
    )
}


export default AllData