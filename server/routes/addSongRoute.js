const express = require("express");
const addSongModal = require("../models/addSongSchema");
const router = express.Router();
const jwt = require('jsonwebtoken');
const signupModal = require("../models/signupSchema")
// const Authenticate = require("../middleware/Authenticate")


router.post("/addsong", async(req,res)=>{
    try{
        const songs = new addSongModal(req.body);
        const createSong = await songs.save();
        res.status(201).send(createSong);
    }
    catch(e){
        res.status(400).send("Error in catch");
        console.log(e)
    }
});

router.get("/songs", async (req,res)=>{
    // res.status(200).send("property GET route")
    // console.log(`This is cookie from backend ${req.headers.authorization}`)

    // console.log("get route of property")
    try{
        const token = req.headers.authorization;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
        console.log(verifyToken)
        if(verifyToken){
            // console.log(verifyToken)
            const userDetail = await signupModal.find({email : verifyToken }) 
            // console.log(userDetail)

            if(userDetail.length){
                const songData = await addSongModal.find();
                res.status(200).send({song:songData, userData : userDetail});
                console.log(userDetail)
                
            }else{
                res.status(409).send("Unauthorized user")
            }
            // console.log(userDetail)

        }else{
            res.status(409).send("Unauthorized user")
        }
        
    }catch(err){
        console.log(err)
        res.status(400).send(err)
        // console.log(err)
    }

})


module.exports = router;