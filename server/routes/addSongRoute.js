const express = require("express");
const addSongModal = require("../models/addSongSchema");
const router = express.Router();
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

router.post("/updateRating", async(req,res)=>{
    try{
        addSongModal.find({songName:req.body.songName}).then((songsData)=>{
            let resRating=req.body.ratings;
        addSongModal.findOneAndUpdate({songName:req.body.songName},{$set:{ratings:resRating}}).then((data)=>{
            console.log(data);
        }).catch((e)=>{
            console.log(e)
        }) 

        })
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

            
                const songData = await addSongModal.find().sort({ratings:1});
                res.status(200).send({song:songData});
                console.log(songData);
            
    }catch(err){
        console.log(err)
        res.status(400).send(err)
        // console.log(err)
    }

})


module.exports = router;