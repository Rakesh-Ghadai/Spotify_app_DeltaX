const mongoose = require("mongoose");

const addSongSchema = new mongoose.Schema({
    songName:{
        type:String,
        required:true
    },
    dateReleased:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    artistNames:{
        type:Array,
        required:true
    },
    ratings:{
        type:Number,
        required:true
    }
})

const addSongModal = mongoose.model("addSong", addSongSchema)

module.exports = addSongModal;