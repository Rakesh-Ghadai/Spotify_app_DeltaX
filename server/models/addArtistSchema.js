const mongoose = require("mongoose");

const addArtistSchema = new mongoose.Schema({
    artistName:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    bio:{
        type:String,
        required:true
    },
    songNames:{
        type:Array,
        required:true
    }
})

const addArtistModal = mongoose.model("addArtist", addArtistSchema)

module.exports = addArtistModal;