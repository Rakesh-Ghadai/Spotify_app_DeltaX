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
                const artistData = await addArtistModal.find();
                res.status(200).send({artist:artistData});
        
    }catch(err){
        console.log(err)
        res.status(400).send(err)
        // console.log(err)
    }

})
router.post("/updateArtist",async(req,res)=>{
    try{
        console.log(req.body)
        req.body.artistsNames.forEach(element => {
            addArtistModal.find({artistName:element}).then((artists)=>{
                if(artists.length)
                {
                    console.log("inside if")
                    console.log(artists)
                    let song=req.body.songName;
                    console.log(song);
                    console.log((artists[0].artistName))
                   addArtistModal.findOneAndUpdate({artistName:artists[0].artistName},{$push:{songNames:song}}).then((data)=>{
                        console.log(data);
                   }).catch((e)=>{
                    console.log(e);
                   })
                    
                }
            })
        });
    res.status(200).send("successful");
    }
    catch(err){
        res.status(400).send(err);
    }
})


module.exports = router;