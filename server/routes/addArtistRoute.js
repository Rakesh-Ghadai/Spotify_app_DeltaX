const express = require("express");
const addArtistModal = require("../models/addArtistSchema");
const router = express.Router();
const jwt = require('jsonwebtoken');
const signupModal = require("../models/signupSchema")
// const Authenticate = require("../middleware/Authenticate")


router.post("/addartist", async(req,res)=>{
    try{
        const artists = new addArtistModal(req.body);
        const createArtist = await artists.save();
        res.status(201).send(createArtist);
    }
    catch(e){
        res.status(400).send("Error in catch");
        console.log(e)
    }
});

router.get("/artists", async (req,res)=>{
    try{
        const token = req.headers.authorization;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
        console.log(verifyToken)
        if(verifyToken){
            // console.log(verifyToken)
            const userDetail = await signupModal.find({email : verifyToken }) 
            // console.log(userDetail)

            if(userDetail.length){
                const artistData = await addArtistModal.find();
                res.status(200).send({artist:artistData, userData : userDetail});
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